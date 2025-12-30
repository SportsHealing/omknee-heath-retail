import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  ArrowLeft, 
  ArrowRight, 
  Shield, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  FileText,
  Trash2,
  Activity,
  Stethoscope,
  Pill,
  Heart,
  Target,
  ClipboardCheck,
  Download,
  Mail,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { generateFullAssessmentPdf } from "@/lib/generateAssessmentPdf";

// Types
interface FormData {
  // Symptoms (sliders 0-10 or 0-5)
  pain: number;
  sleep: number;
  swelling: number;
  instability: number;
  stiffness: number;
  stairs: number;
  function: number;
  
  // Prior Knee + Treatment
  prior_problem: string;
  prior_description: string;
  treatments: string[];
  injection_type: string;
  surgery_type: string;
  treat_helped: string;
  treat_duration: string;
  treat_stopped: string;
  
  // PMH
  pmh: string[];
  pmh_other_text: string;
  trauma_yesno: string;
  trauma_details: string;
  past_surgery_any: string;
  fh_bone_joint: string;
  fh_childhood_knee: string;
  fh_details: string;
  
  // Meds/Allergies
  allergies: string;
  meds_list: string;
  meds_flags: string[];
  
  // Lifestyle
  smoker: string;
  alcohol_yesno: string;
  alcohol_units: string;
  other_info: string;
  
  // Expectations
  expectations: string;
  ref_source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  
  // User Details (optional - only if they want email)
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  mobile: string;
  postcode: string;
  
  // Consent
  consent_clinical: boolean;
  consent_marketing: boolean;
}

const initialFormData: FormData = {
  pain: 0,
  sleep: 0,
  swelling: 0,
  instability: 0,
  stiffness: 0,
  stairs: 0,
  function: 0,
  prior_problem: "",
  prior_description: "",
  treatments: [],
  injection_type: "",
  surgery_type: "",
  treat_helped: "",
  treat_duration: "",
  treat_stopped: "",
  pmh: [],
  pmh_other_text: "",
  trauma_yesno: "",
  trauma_details: "",
  past_surgery_any: "",
  fh_bone_joint: "",
  fh_childhood_knee: "",
  fh_details: "",
  allergies: "",
  meds_list: "",
  meds_flags: [],
  smoker: "",
  alcohol_yesno: "",
  alcohol_units: "",
  other_info: "",
  expectations: "",
  ref_source: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  first_name: "",
  last_name: "",
  dob: "",
  email: "",
  mobile: "",
  postcode: "",
  consent_clinical: false,
  consent_marketing: false,
};

// Steps - now starting with symptoms, details at end
const STEPS = [
  { id: 1, label: "Symptoms", icon: Activity },
  { id: 2, label: "History", icon: FileText },
  { id: 3, label: "Medical", icon: Stethoscope },
  { id: 4, label: "Meds", icon: Pill },
  { id: 5, label: "Lifestyle", icon: Heart },
  { id: 6, label: "Goals", icon: Target },
  { id: 7, label: "Review", icon: ClipboardCheck },
];

const TREATMENTS = ["Physiotherapy", "Medication", "Injections", "Surgery", "Supplements", "None"];
const INJECTION_TYPES = ["Steroid", "Hyaluronic acid", "PRP", "Stem cell", "Other"];
const SURGERY_TYPES = ["Arthroscopy", "ACL reconstruction", "Meniscectomy", "Partial replacement", "Total replacement", "Other"];
const PMH_CONDITIONS = ["Diabetes", "Heart disease", "High blood pressure", "Rheumatoid arthritis", "Gout", "Osteoporosis", "Other", "None"];
const MEDS_FLAGS = ["Blood thinners", "Steroids", "Immunosuppressants", "None"];
const REF_SOURCES = ["Google", "Social media", "Friend/family", "Healthcare provider", "Advertisement", "Other"];

interface FullKneeAssessmentProps {
  onBack?: () => void;
}

const FullKneeAssessment = ({ onBack }: FullKneeAssessmentProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Capture UTM params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    }));
  }, []);

  const progress = (currentStep / STEPS.length) * 100;

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const toggleArrayField = (field: "treatments" | "pmh" | "meds_flags", value: string) => {
    setFormData(prev => {
      const arr = prev[field];
      if (arr.includes(value)) {
        return { ...prev, [field]: arr.filter(v => v !== value) };
      }
      if (value === "None") {
        return { ...prev, [field]: ["None"] };
      }
      return { ...prev, [field]: [...arr.filter(v => v !== "None"), value] };
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 2:
        if (!formData.prior_problem) newErrors.prior_problem = "Please select an option";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmailForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.consent_clinical) newErrors.consent_clinical = "Consent is required to email results";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentStep === STEPS.length) {
      // Last step - show results
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const calculateScore = () => {
    const total = formData.pain + formData.sleep + formData.swelling + 
                  formData.instability + formData.stiffness + formData.stairs + formData.function;
    return total;
  };

  // Max score: pain(10) + sleep(10) + swelling(5) + instability(5) + stiffness(10) + stairs(5) + function(10) = 55
  const getScoreBand = (score: number) => {
    if (score < 14) return { label: "Optimal", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
    if (score < 28) return { label: "Green", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
    if (score < 42) return { label: "Amber", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" };
    return { label: "Red", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
  };

  const handleDownloadPdf = () => {
    const score = calculateScore();
    const band = getScoreBand(score);
    
    generateFullAssessmentPdf({
      type: "full",
      firstName: formData.first_name || "Anonymous",
      lastName: formData.last_name || "User",
      email: formData.email || "Not provided",
      dob: formData.dob || "Not provided",
      symptomScore: score,
      scoreBand: band.label,
      symptoms: {
        pain: formData.pain,
        sleep: formData.sleep,
        swelling: formData.swelling,
        instability: formData.instability,
        stiffness: formData.stiffness,
        stairs: formData.stairs,
        function: formData.function,
      },
      priorProblem: formData.prior_problem,
      treatments: formData.treatments,
      pmh: formData.pmh,
      allergies: formData.allergies,
      medications: formData.meds_list,
      smoker: formData.smoker,
      alcohol: formData.alcohol_yesno === "Yes" ? `Yes (${formData.alcohol_units} units/week)` : formData.alcohol_yesno,
      expectations: formData.expectations,
      date: new Date().toLocaleDateString("en-GB"),
    });
  };

  const handleSendEmail = async () => {
    if (!validateEmailForm()) return;
    
    // TODO: Implement email sending via edge function
    // For now, simulate success
    console.log("Would send email to:", formData.email);
    setEmailSent(true);
    setShowEmailForm(false);
  };

  const resetAssessment = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setShowResults(false);
    setShowEmailForm(false);
    setEmailSent(false);
    setErrors({});
  };

  // Results Screen
  if (showResults) {
    const score = calculateScore();
    const band = getScoreBand(score);

    return (
      <div className="max-w-3xl mx-auto">
        {/* Score Display */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            Assessment Complete
          </div>
          <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
            Your Knee Assessment Results
          </h1>
        </div>

        {/* Score Card */}
        <div className={cn("p-8 rounded-2xl border-2 text-center mb-8", band.bg, band.border)}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your Symptom Score</p>
          <p className={cn("text-6xl font-bold mb-4", band.color)}>{score}</p>
          <span className={cn(
            "inline-block px-6 py-2 rounded-full text-sm font-semibold text-white",
            band.label === "Red" ? "bg-red-600" :
            band.label === "Amber" ? "bg-amber-500" :
            band.label === "Green" ? "bg-green-600" : "bg-blue-600"
          )}>
            {band.label} Band
          </span>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            Based on your responses across 7 symptom domains: pain, sleep, swelling, instability, stiffness, stairs, and function.
          </p>
        </div>

        {/* Response Summary */}
        <div className="bg-background rounded-2xl border border-border p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-4">Assessment Summary</h3>
          <div className="grid gap-3 text-sm">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Previous knee problem</span>
              <span className="font-medium">{formData.prior_problem || "Not specified"}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Treatments tried</span>
              <span className="font-medium">{formData.treatments.length > 0 ? formData.treatments.join(", ") : "None"}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Medical conditions</span>
              <span className="font-medium">{formData.pmh.length > 0 ? formData.pmh.join(", ") : "None"}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Goals</span>
              <span className="font-medium text-right max-w-[200px] truncate">{formData.expectations || "Not specified"}</span>
            </div>
          </div>
        </div>

        {/* Email Form Modal */}
        {showEmailForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-2xl border border-border p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Email Your Results</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowEmailForm(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                Enter your details to receive a copy of your assessment results by email.
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">First Name <span className="text-red-500">*</span></Label>
                    <Input
                      value={formData.first_name}
                      onChange={(e) => updateField("first_name", e.target.value)}
                      placeholder="First name"
                      maxLength={50}
                      className={errors.first_name ? "border-red-500" : ""}
                    />
                    {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Last Name <span className="text-red-500">*</span></Label>
                    <Input
                      value={formData.last_name}
                      onChange={(e) => updateField("last_name", e.target.value)}
                      placeholder="Last name"
                      maxLength={50}
                      className={errors.last_name ? "border-red-500" : ""}
                    />
                    {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Email Address <span className="text-red-500">*</span></Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    maxLength={100}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Date of Birth</Label>
                  <Input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => updateField("dob", e.target.value)}
                  />
                </div>
                
                <div className={cn(
                  "p-4 rounded-xl border-2 transition-colors",
                  formData.consent_clinical ? "bg-green-50 border-green-300" : "bg-background border-border"
                )}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      checked={formData.consent_clinical}
                      onCheckedChange={(checked) => updateField("consent_clinical", !!checked)}
                      className="mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      I consent to OmKneeHealth processing my data to send my assessment results. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.consent_clinical && <p className="text-red-500 text-xs mt-2">{errors.consent_clinical}</p>}
                </div>
                
                <div className="p-4 rounded-xl border-2 border-border">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      checked={formData.consent_marketing}
                      onCheckedChange={(checked) => updateField("consent_marketing", !!checked)}
                      className="mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      I would like to receive updates about knee health tips and offers. (Optional)
                    </span>
                  </label>
                </div>
                
                <Button onClick={handleSendEmail} className="w-full gap-2">
                  <Mail className="w-4 h-4" />
                  Send Results to My Email
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Email Sent Confirmation */}
        {emailSent && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800">
              Your assessment results have been sent to <strong>{formData.email}</strong>
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="bg-background rounded-2xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4 text-center">What would you like to do?</h3>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Button onClick={handleDownloadPdf} variant="outline" className="h-auto py-4 flex-col gap-2">
              <Download className="w-5 h-5" />
              <span>Download PDF Report</span>
              <span className="text-xs text-muted-foreground font-normal">Save to your device</span>
            </Button>
            
            <Button 
              onClick={() => setShowEmailForm(true)} 
              variant="outline" 
              className="h-auto py-4 flex-col gap-2"
              disabled={emailSent}
            >
              <Mail className="w-5 h-5" />
              <span>{emailSent ? "Email Sent" : "Email My Results"}</span>
              <span className="text-xs text-muted-foreground font-normal">
                {emailSent ? "Check your inbox" : "Get a copy in your inbox"}
              </span>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="ghost" onClick={resetAssessment}>
              Start Over
            </Button>
            {onBack && (
              <Button variant="ghost" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Assessments
              </Button>
            )}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Shield className="w-4 h-4 text-primary" />
          <p className="text-sm text-muted-foreground">
            Your responses are private. We only collect your details if you choose to email results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Sportshealing × OmKneeHealth
        </div>
        <h1 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
          Full Knee Assessment
        </h1>
        <p className="text-muted-foreground">
          Clinician-designed questionnaire to guide your knee health journey.
        </p>
      </div>

      {/* Trust Bar */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 p-4 bg-background rounded-xl border border-border">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4 text-primary" />
          UK GDPR-aligned
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4 text-primary" />
          No signup required
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          4–6 minutes
        </span>
      </div>

      {/* Urgent Warning */}
      <div className="mb-8 p-4 rounded-xl bg-red-50 border-2 border-red-200 flex gap-4">
        <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-red-800 mb-1">Urgent Symptoms Disclaimer</h4>
          <p className="text-sm text-red-700">
            If your knee is acutely swollen, hot, red, or you cannot bear weight, seek urgent medical attention rather than completing this questionnaire.
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8 p-6 bg-background rounded-xl border border-border">
        <Progress value={progress} className="h-2 mb-4" />
        <div className="flex flex-wrap justify-center gap-2">
          {STEPS.map((step) => (
            <span
              key={step.id}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                currentStep === step.id
                  ? "bg-primary text-primary-foreground"
                  : currentStep > step.id
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {step.label}
            </span>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          {Math.round(progress)}% complete
        </p>
      </div>

      {/* Form Steps */}
      <div className="bg-background rounded-2xl border border-border p-6 md:p-8 mb-6">
        {/* Step 1: Symptoms */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Your Knee Symptoms</h2>
              <p className="text-muted-foreground text-sm">Rate each symptom based on the past 7 days.</p>
            </div>
            
            <SliderField label="Pain Level" value={formData.pain} onChange={(v) => updateField("pain", v)} min={0} max={10} leftLabel="0 - No pain" rightLabel="10 - Severe" />
            <SliderField label="Sleep Disturbance" value={formData.sleep} onChange={(v) => updateField("sleep", v)} min={0} max={10} leftLabel="0 - None" rightLabel="10 - Severe" />
            <SliderField label="Swelling" value={formData.swelling} onChange={(v) => updateField("swelling", v)} min={0} max={5} leftLabel="0 - None" rightLabel="5 - Severe" />
            <SliderField label="Instability" value={formData.instability} onChange={(v) => updateField("instability", v)} min={0} max={5} leftLabel="0 - Stable" rightLabel="5 - Very unstable" />
            <SliderField label="Stiffness" value={formData.stiffness} onChange={(v) => updateField("stiffness", v)} min={0} max={10} leftLabel="0 - None" rightLabel="10 - Severe" />
            <SliderField label="Difficulty with Stairs" value={formData.stairs} onChange={(v) => updateField("stairs", v)} min={0} max={5} leftLabel="0 - Easy" rightLabel="5 - Cannot use" />
            <SliderField label="Overall Function" value={formData.function} onChange={(v) => updateField("function", v)} min={0} max={10} leftLabel="0 - Normal" rightLabel="10 - Severely limited" />
          </div>
        )}

        {/* Step 2: Prior Knee + Treatment */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Previous Knee Problems</h2>
              <p className="text-muted-foreground text-sm">Tell us about any previous issues and treatments.</p>
            </div>
            
            <RadioGroup label="Have you had a previous knee problem?" value={formData.prior_problem} onChange={(v) => updateField("prior_problem", v)} options={["Yes", "No"]} error={errors.prior_problem} required />
            
            {formData.prior_problem === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Please describe</Label>
                <Textarea value={formData.prior_description} onChange={(e) => updateField("prior_description", e.target.value)} placeholder="e.g., ACL tear in 2018..." maxLength={500} />
              </div>
            )}
            
            <div>
              <Label className="text-sm font-medium mb-3 block">What treatments have you tried?</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {TREATMENTS.map((t) => (
                  <CheckboxItem key={t} label={t} checked={formData.treatments.includes(t)} onChange={() => toggleArrayField("treatments", t)} />
                ))}
              </div>
            </div>
            
            {formData.treatments.includes("Injections") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Injection type?</Label>
                <select value={formData.injection_type} onChange={(e) => updateField("injection_type", e.target.value)} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background">
                  <option value="">Select...</option>
                  {INJECTION_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                </select>
              </div>
            )}
            
            {formData.treatments.includes("Surgery") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Surgery type?</Label>
                <select value={formData.surgery_type} onChange={(e) => updateField("surgery_type", e.target.value)} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background">
                  <option value="">Select...</option>
                  {SURGERY_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
                </select>
              </div>
            )}
            
            <RadioGroup label="Did any treatment help?" value={formData.treat_helped} onChange={(v) => updateField("treat_helped", v)} options={["Yes", "No", "Partially"]} />
            
            {formData.treat_helped === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">How long did benefit last?</Label>
                <select value={formData.treat_duration} onChange={(e) => updateField("treat_duration", e.target.value)} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background">
                  <option value="">Select...</option>
                  <option value="Days">A few days</option>
                  <option value="Weeks">A few weeks</option>
                  <option value="Months">A few months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Still helping">Still helping</option>
                </select>
              </div>
            )}
            
            <div>
              <Label className="text-sm font-medium">Why did you stop treatment?</Label>
              <Input value={formData.treat_stopped} onChange={(e) => updateField("treat_stopped", e.target.value)} placeholder="e.g., Cost, side effects..." maxLength={200} />
            </div>
          </div>
        )}

        {/* Step 3: PMH */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Medical History</h2>
              <p className="text-muted-foreground text-sm">Help us understand your overall health.</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Do you have any of these conditions?</Label>
              <div className="grid grid-cols-2 gap-3">
                {PMH_CONDITIONS.map((c) => (
                  <CheckboxItem key={c} label={c} checked={formData.pmh.includes(c)} onChange={() => toggleArrayField("pmh", c)} />
                ))}
              </div>
            </div>
            
            {formData.pmh.includes("Other") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Please specify</Label>
                <Input value={formData.pmh_other_text} onChange={(e) => updateField("pmh_other_text", e.target.value)} maxLength={200} />
              </div>
            )}
            
            <RadioGroup label="Any significant knee trauma/injury?" value={formData.trauma_yesno} onChange={(v) => updateField("trauma_yesno", v)} options={["Yes", "No"]} />
            
            {formData.trauma_yesno === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Describe the injury</Label>
                <Textarea value={formData.trauma_details} onChange={(e) => updateField("trauma_details", e.target.value)} placeholder="e.g., Sports injury in 2020..." maxLength={300} />
              </div>
            )}
            
            <RadioGroup label="Any previous surgery (not just knee)?" value={formData.past_surgery_any} onChange={(v) => updateField("past_surgery_any", v)} options={["Yes", "No"]} />
            
            <RadioGroup label="Family history of bone/joint problems?" value={formData.fh_bone_joint} onChange={(v) => updateField("fh_bone_joint", v)} options={["Yes", "No", "Unknown"]} />
            
            <RadioGroup label="Childhood knee issues in family?" value={formData.fh_childhood_knee} onChange={(v) => updateField("fh_childhood_knee", v)} options={["Yes", "No", "Unknown"]} />
            
            {(formData.fh_bone_joint === "Yes" || formData.fh_childhood_knee === "Yes") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Family history details</Label>
                <Textarea value={formData.fh_details} onChange={(e) => updateField("fh_details", e.target.value)} placeholder="e.g., Mother has osteoarthritis..." maxLength={300} />
              </div>
            )}
          </div>
        )}

        {/* Step 4: Meds/Allergies */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Medications & Allergies</h2>
              <p className="text-muted-foreground text-sm">Current medications and any allergies.</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium">Any allergies?</Label>
              <Input value={formData.allergies} onChange={(e) => updateField("allergies", e.target.value)} placeholder="e.g., Penicillin, ibuprofen..." maxLength={200} />
            </div>
            
            <div>
              <Label className="text-sm font-medium">Current medications</Label>
              <Textarea value={formData.meds_list} onChange={(e) => updateField("meds_list", e.target.value)} placeholder="List any medications..." maxLength={500} />
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Taking any of these?</Label>
              <div className="grid grid-cols-2 gap-3">
                {MEDS_FLAGS.map((m) => (
                  <CheckboxItem key={m} label={m} checked={formData.meds_flags.includes(m)} onChange={() => toggleArrayField("meds_flags", m)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Lifestyle */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Lifestyle</h2>
              <p className="text-muted-foreground text-sm">A few questions about your lifestyle.</p>
            </div>
            
            <RadioGroup label="Do you smoke?" value={formData.smoker} onChange={(v) => updateField("smoker", v)} options={["Never", "Former", "Current"]} />
            
            <RadioGroup label="Do you drink alcohol?" value={formData.alcohol_yesno} onChange={(v) => updateField("alcohol_yesno", v)} options={["Yes", "No"]} />
            
            {formData.alcohol_yesno === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Units per week?</Label>
                <select value={formData.alcohol_units} onChange={(e) => updateField("alcohol_units", e.target.value)} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background">
                  <option value="">Select...</option>
                  <option value="1-7">1-7</option>
                  <option value="8-14">8-14</option>
                  <option value="15-21">15-21</option>
                  <option value="22+">22+</option>
                </select>
                <p className="text-xs text-muted-foreground mt-1">1 unit = 1 small glass of wine or half a pint</p>
              </div>
            )}
            
            <div>
              <Label className="text-sm font-medium">Anything else we should know?</Label>
              <Textarea value={formData.other_info} onChange={(e) => updateField("other_info", e.target.value)} placeholder="Any other relevant information..." maxLength={500} />
            </div>
          </div>
        )}

        {/* Step 6: Expectations */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Your Goals</h2>
              <p className="text-muted-foreground text-sm">What are you hoping to achieve?</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium">Your knee health goals</Label>
              <Textarea value={formData.expectations} onChange={(e) => updateField("expectations", e.target.value)} placeholder="e.g., Return to running, reduce daily pain..." maxLength={500} />
            </div>
            
            <div>
              <Label className="text-sm font-medium">How did you hear about us?</Label>
              <select value={formData.ref_source} onChange={(e) => updateField("ref_source", e.target.value)} className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background">
                <option value="">Select...</option>
                {REF_SOURCES.map((s) => (<option key={s} value={s}>{s}</option>))}
              </select>
            </div>
          </div>
        )}

        {/* Step 7: Review */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Review Your Answers</h2>
              <p className="text-muted-foreground text-sm">Check your responses before viewing results.</p>
            </div>
            
            {/* Score Preview */}
            {(() => {
              const score = calculateScore();
              const band = getScoreBand(score);
              return (
                <div className={cn("p-6 rounded-xl border-2 text-center", band.bg, band.border)}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Preview Score</p>
                  <p className={cn("text-5xl font-bold mb-3", band.color)}>{score}</p>
                  <span className={cn("inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white",
                    band.label === "Red" ? "bg-red-600" :
                    band.label === "Amber" ? "bg-amber-500" :
                    band.label === "Green" ? "bg-green-600" : "bg-blue-600"
                  )}>
                    {band.label}
                  </span>
                  <p className="text-xs text-muted-foreground mt-3">Based on your symptom responses.</p>
                </div>
              );
            })()}
            
            {/* Summary */}
            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Summary</h3>
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Prior Problem</span>
                  <span className="font-medium">{formData.prior_problem || "—"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Treatments Tried</span>
                  <span className="font-medium">{formData.treatments.length > 0 ? formData.treatments.join(", ") : "—"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Medical Conditions</span>
                  <span className="font-medium">{formData.pmh.length > 0 ? formData.pmh.join(", ") : "—"}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Goals</span>
                  <span className="font-medium text-right max-w-[200px] truncate">{formData.expectations || "—"}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>No signup required!</strong> You can view and download your results without providing any personal details. 
                If you'd like a copy emailed to you, we'll ask for your details on the next screen.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        {currentStep > 1 && (
          <Button variant="outline" onClick={handlePrev} className="flex-1 md:flex-none">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
        {currentStep === 1 && onBack && (
          <Button variant="outline" onClick={onBack} className="flex-1 md:flex-none">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
        
        <Button onClick={handleNext} className="flex-1 md:ml-auto">
          {currentStep === STEPS.length ? "View Results" : "Continue"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

// Helper Components
interface SliderFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  leftLabel: string;
  rightLabel: string;
}

const SliderField = ({ label, value, onChange, min, max, leftLabel, rightLabel }: SliderFieldProps) => (
  <div className="p-5 bg-muted/30 rounded-xl border border-border">
    <div className="flex justify-between items-center mb-4">
      <Label className="text-sm font-medium">{label}</Label>
      <span className="text-2xl font-bold text-primary">{value}</span>
    </div>
    <Slider value={[value]} onValueChange={([v]) => onChange(v)} min={min} max={max} step={1} className="mb-2" />
    <div className="flex justify-between text-xs text-muted-foreground">
      <span>{leftLabel}</span>
      <span>{rightLabel}</span>
    </div>
  </div>
);

interface RadioGroupProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
}

const RadioGroup = ({ label, value, onChange, options, error, required }: RadioGroupProps) => (
  <div>
    <Label className="text-sm font-medium mb-3 block">
      {label} {required && <span className="text-red-500">*</span>}
    </Label>
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "px-4 py-2.5 rounded-lg border-2 text-sm font-medium transition-all",
            value === opt
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background border-border hover:border-primary/50"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
  </div>
);

interface CheckboxItemProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckboxItem = ({ label, checked, onChange }: CheckboxItemProps) => (
  <label
    className={cn(
      "flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all",
      checked
        ? "bg-primary/10 border-primary"
        : "bg-background border-border hover:border-primary/50"
    )}
  >
    <Checkbox checked={checked} onCheckedChange={onChange} />
    <span className="text-sm font-medium">{label}</span>
  </label>
);

export default FullKneeAssessment;
