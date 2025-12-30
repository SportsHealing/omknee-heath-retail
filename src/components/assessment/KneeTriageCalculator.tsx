import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Shield, 
  Calculator,
  Activity,
  Heart,
  AlertCircle,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  type SmokingStatus,
  type DiabetesStatus,
  type PriorKneeSurgery,
  type TriageInputs,
  type TriageResults,
  calculateTriageResults,
  testCases,
  runTests,
} from "@/lib/triageScoring";
import TriageGauge from "./TriageGauge";
import TriageRecommendations from "./TriageRecommendations";

// ============================================
// CONFIGURATION - Set your webhook URL here
// ============================================
const WEBHOOK_URL = ""; // Set your Zapier/Power Automate webhook URL

type Step = "knee" | "health" | "results";

interface FormData {
  kneeScore: number;
  painNRS: number;
  swelling: number;
  smokingStatus: SmokingStatus | "";
  cigarettesPerDay: number;
  heightCm: number;
  weightKg: number;
  bmi: number;
  diabetesStatus: DiabetesStatus | "";
  priorKneeSurgery: PriorKneeSurgery | "";
  consentGDPR: boolean;
}

const initialFormData: FormData = {
  kneeScore: 50,
  painNRS: 5,
  swelling: 2,
  smokingStatus: "",
  cigarettesPerDay: 0,
  heightCm: 170,
  weightKg: 70,
  bmi: 24.2,
  diabetesStatus: "",
  priorKneeSurgery: "",
  consentGDPR: false,
};

export default function KneeTriageCalculator() {
  const [step, setStep] = useState<Step>("knee");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<TriageResults | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTests, setShowTests] = useState(false);
  const [testResults, setTestResults] = useState<{ passed: boolean; results: string[] } | null>(null);

  // Calculate BMI from height and weight
  const calculateBMI = (heightCm: number, weightKg: number): number => {
    if (heightCm <= 0 || weightKg <= 0) return 0;
    const heightM = heightCm / 100;
    return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
  };

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-calculate BMI when height or weight changes
      if (field === "heightCm" || field === "weightKg") {
        updated.bmi = calculateBMI(
          field === "heightCm" ? (value as number) : prev.heightCm,
          field === "weightKg" ? (value as number) : prev.weightKg
        );
      }
      
      return updated;
    });
  };

  const validateStep = (currentStep: Step): boolean => {
    if (currentStep === "knee") {
      return true; // Sliders have defaults
    }
    if (currentStep === "health") {
      if (!formData.smokingStatus) {
        toast.error("Please select your smoking status");
        return false;
      }
      if (!formData.diabetesStatus) {
        toast.error("Please select your diabetes status");
        return false;
      }
      if (!formData.priorKneeSurgery) {
        toast.error("Please select your prior knee surgery status");
        return false;
      }
      if (!formData.consentGDPR) {
        toast.error("Please provide consent to continue");
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;

    if (step === "knee") {
      setStep("health");
    } else if (step === "health") {
      // Calculate results
      const inputs: TriageInputs = {
        kneeScore: formData.kneeScore,
        painNRS: formData.painNRS,
        swelling: formData.swelling,
        smokingStatus: formData.smokingStatus as SmokingStatus,
        cigarettesPerDay: formData.smokingStatus === "current" ? formData.cigarettesPerDay : undefined,
        bmi: formData.bmi,
        diabetesStatus: formData.diabetesStatus as DiabetesStatus,
        priorKneeSurgery: formData.priorKneeSurgery as PriorKneeSurgery,
      };
      
      const calculatedResults = calculateTriageResults(inputs);
      setResults(calculatedResults);
      setStep("results");
      
      // Submit to webhook
      submitToWebhook(inputs, calculatedResults);
    }
  };

  const handleBack = () => {
    if (step === "health") {
      setStep("knee");
    } else if (step === "results") {
      setStep("health");
    }
  };

  const submitToWebhook = async (inputs: TriageInputs, triageResults: TriageResults) => {
    if (!WEBHOOK_URL) {
      console.log("No webhook URL configured. Payload:", {
        timestamp: new Date().toISOString(),
        session_id: crypto.randomUUID(),
        ...inputs,
        ...triageResults,
        Consent_GDPR: formData.consentGDPR,
      });
      return;
    }

    setIsSubmitting(true);
    
    const payload = {
      timestamp: new Date().toISOString(),
      session_id: crypto.randomUUID(),
      KneeScore_0to100: inputs.kneeScore,
      Severity_0to100: triageResults.severity,
      PainNRS_0to10: inputs.painNRS,
      Swelling_0to5: inputs.swelling,
      SmokingStatus: inputs.smokingStatus,
      CigarettesPerDay: inputs.cigarettesPerDay ?? null,
      BMI: inputs.bmi,
      DiabetesStatus: inputs.diabetesStatus,
      PriorKneeSurgery: inputs.priorKneeSurgery,
      SmokingPoints: triageResults.smokingPoints,
      BMIPoints: triageResults.bmiPoints,
      DiabetesPoints: triageResults.diabetesPoints,
      PriorSurgeryPoints: triageResults.priorSurgeryPoints,
      PainBoost: triageResults.painBoost,
      SwellingBoost: triageResults.swellingBoost,
      RiskPoints_0to40: triageResults.riskPoints,
      TriageScore_0to100: triageResults.triageScore,
      Band: triageResults.band,
      Consent_GDPR: formData.consentGDPR,
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      toast.success("Your assessment has been submitted");
    } catch (error) {
      console.error("Webhook error:", error);
      toast.error("Failed to submit assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setResults(null);
    setStep("knee");
  };

  const handleRunTests = () => {
    const results = runTests();
    setTestResults(results);
    setShowTests(true);
  };

  // Render step indicator
  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[
        { key: "knee", label: "Your Knee Today" },
        { key: "health", label: "Health Factors" },
        { key: "results", label: "Your Results" },
      ].map((s, index) => (
        <div key={s.key} className="flex items-center">
          <div className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors",
            step === s.key 
              ? "bg-primary text-primary-foreground" 
              : ["knee", "health"].indexOf(step) > index || step === "results"
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground"
          )}>
            {index + 1}
          </div>
          <span className={cn(
            "ml-2 text-sm hidden sm:inline",
            step === s.key ? "text-foreground font-medium" : "text-muted-foreground"
          )}>
            {s.label}
          </span>
          {index < 2 && (
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );

  // Slider field component
  const SliderField = ({
    label,
    value,
    max,
    onChange,
    leftLabel,
    rightLabel,
    tooltip,
  }: {
    label: string;
    value: number;
    max: number;
    onChange: (value: number) => void;
    leftLabel: string;
    rightLabel: string;
    tooltip?: string;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label className="text-sm font-medium">{label}</Label>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <span className="text-2xl font-bold text-primary">{value}</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        max={max}
        step={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );

  // Radio field component
  const RadioField = ({
    label,
    value,
    options,
    onChange,
    tooltip,
  }: {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    tooltip?: string;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Label className="text-sm font-medium">{label}</Label>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <RadioGroup value={value} onValueChange={onChange} className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-3">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value} className="text-sm font-normal cursor-pointer">
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator />

      {/* Step 1: Knee Today */}
      {step === "knee" && (
        <Card className="p-6 md:p-8 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Your Knee Today</h2>
              <p className="text-sm text-muted-foreground">Rate your current symptoms</p>
            </div>
          </div>

          <div className="space-y-8">
            <SliderField
              label="Knee Function Score"
              value={formData.kneeScore}
              max={100}
              onChange={(v) => updateField("kneeScore", v)}
              leftLabel="0 = Worst"
              rightLabel="100 = Best"
              tooltip="Rate your overall knee function from 0 (completely unable to use) to 100 (perfectly normal)."
            />

            <SliderField
              label="Pain Level (NRS)"
              value={formData.painNRS}
              max={10}
              onChange={(v) => updateField("painNRS", v)}
              leftLabel="0 = No pain"
              rightLabel="10 = Worst pain"
              tooltip="Rate your current pain on a 0-10 scale, where 0 is no pain and 10 is the worst pain imaginable."
            />

            <SliderField
              label="Swelling"
              value={formData.swelling}
              max={5}
              onChange={(v) => updateField("swelling", v)}
              leftLabel="0 = None"
              rightLabel="5 = Severe"
              tooltip="Rate the amount of swelling in your knee from 0 (none) to 5 (severe, very noticeable)."
            />
          </div>

          <div className="mt-8 flex justify-end">
            <Button onClick={handleNext} size="lg">
              Continue
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      )}

      {/* Step 2: Health Factors */}
      {step === "health" && (
        <Card className="p-6 md:p-8 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Health Factors</h2>
              <p className="text-sm text-muted-foreground">Help us understand your risk profile</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Smoking Status */}
            <RadioField
              label="Smoking Status"
              value={formData.smokingStatus}
              onChange={(v) => updateField("smokingStatus", v as SmokingStatus)}
              options={[
                { value: "never", label: "Never smoked" },
                { value: "ex_12m_plus", label: "Ex-smoker (stopped ≥12 months ago)" },
                { value: "ex_under_12m", label: "Ex-smoker (stopped <12 months ago)" },
                { value: "current", label: "Current smoker" },
              ]}
              tooltip="Smoking can affect healing and joint health."
            />

            {/* Cigarettes per day - only show if current smoker */}
            {formData.smokingStatus === "current" && (
              <div className="space-y-2 pl-6 border-l-2 border-primary/20 animate-fade-up">
                <Label className="text-sm font-medium">Cigarettes per day</Label>
                <Input
                  type="number"
                  min={0}
                  max={100}
                  value={formData.cigarettesPerDay}
                  onChange={(e) => updateField("cigarettesPerDay", parseInt(e.target.value) || 0)}
                  className="w-32"
                />
              </div>
            )}

            {/* BMI Calculator */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Label className="text-sm font-medium">Body Mass Index (BMI)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Enter your height and weight to calculate BMI, or enter BMI directly.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label className="text-xs text-muted-foreground">Height (cm)</Label>
                  <Input
                    type="number"
                    min={100}
                    max={250}
                    value={formData.heightCm}
                    onChange={(e) => updateField("heightCm", parseInt(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Weight (kg)</Label>
                  <Input
                    type="number"
                    min={30}
                    max={300}
                    value={formData.weightKg}
                    onChange={(e) => updateField("weightKg", parseInt(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">BMI</Label>
                  <Input
                    type="number"
                    min={10}
                    max={60}
                    step={0.1}
                    value={formData.bmi}
                    onChange={(e) => updateField("bmi", parseFloat(e.target.value) || 0)}
                    className="bg-muted/50"
                  />
                </div>
              </div>
            </div>

            {/* Diabetes Status */}
            <RadioField
              label="Diabetes Status"
              value={formData.diabetesStatus}
              onChange={(v) => updateField("diabetesStatus", v as DiabetesStatus)}
              options={[
                { value: "none", label: "No diabetes" },
                { value: "prediabetes", label: "Prediabetes / borderline" },
                { value: "type2_non_insulin", label: "Type 2 diabetes (non-insulin)" },
                { value: "insulin_poor_control", label: "Insulin-treated or poor control" },
              ]}
              tooltip="Diabetes can affect healing and joint health outcomes."
            />

            {/* Prior Knee Surgery */}
            <RadioField
              label="Prior Knee Surgery"
              value={formData.priorKneeSurgery}
              onChange={(v) => updateField("priorKneeSurgery", v as PriorKneeSurgery)}
              options={[
                { value: "none", label: "None" },
                { value: "arthroscopy", label: "Arthroscopy / meniscectomy / debridement" },
                { value: "ligament_reconstruction", label: "Ligament reconstruction / osteotomy / cartilage procedure / meniscal transplant" },
                { value: "prior_replacement", label: "Prior partial/total knee replacement or multiple operations" },
              ]}
              tooltip="Previous knee surgeries may affect treatment recommendations."
            />

            {/* GDPR Consent */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={formData.consentGDPR}
                  onCheckedChange={(checked) => updateField("consentGDPR", checked as boolean)}
                />
                <div className="space-y-1">
                  <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                    I consent to SportsHealing/OmKneeHealth storing my answers to provide personalised guidance.
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    See our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>. 
                    Your data is processed in accordance with UK GDPR. You can request deletion at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleNext} size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Score
                </>
              )}
            </Button>
          </div>
        </Card>
      )}

      {/* Step 3: Results */}
      {step === "results" && results && (
        <div className="space-y-6 animate-fade-up">
          {/* Gauge Card */}
          <Card className="p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <TriageGauge score={results.triageScore} band={results.band} />
            </div>

            {/* Score Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{formData.kneeScore}</div>
                <div className="text-xs text-muted-foreground">Knee Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{results.severity}</div>
                <div className="text-xs text-muted-foreground">Severity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{results.riskPoints}</div>
                <div className="text-xs text-muted-foreground">Risk Points (0-40)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{results.triageScore}</div>
                <div className="text-xs text-muted-foreground">Triage Score</div>
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <TriageRecommendations band={results.band} />

          {/* Disclaimer */}
          <Card className="p-4 bg-muted/50">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>Important:</strong> This tool provides guidance only and is not a substitute for 
                professional medical advice, diagnosis, or treatment. Always consult with a qualified 
                healthcare provider for any health concerns.
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Edit Responses
            </Button>
            <Button onClick={handleReset}>
              Start New Assessment
            </Button>
          </div>

          {/* Test Section - Hidden by default */}
          <div className="pt-8 border-t border-border">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleRunTests}
              className="text-xs text-muted-foreground"
            >
              Run Scoring Tests
            </Button>
            
            {showTests && testResults && (
              <div className="mt-4 p-4 bg-muted rounded-lg text-sm font-mono">
                <div className={cn(
                  "flex items-center gap-2 mb-3 font-semibold",
                  testResults.passed ? "text-emerald-600" : "text-red-600"
                )}>
                  {testResults.passed ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {testResults.passed ? "All tests passed" : "Some tests failed"}
                </div>
                <ul className="space-y-1">
                  {testResults.results.map((result, i) => (
                    <li key={i} className="text-xs">{result}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>UK GDPR-aligned • Data minimisation • Your data is secure</span>
      </div>
    </div>
  );
}
