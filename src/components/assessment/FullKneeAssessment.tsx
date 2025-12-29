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
  User,
  Activity,
  Stethoscope,
  Pill,
  Heart,
  Target,
  ClipboardCheck,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface FormData {
  // Step 1: Patient Details
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  mobile: string;
  postcode: string;
  
  // Step 2: Symptoms (sliders 0-10 or 0-5)
  pain: number;
  sleep: number;
  swelling: number;
  instability: number;
  stiffness: number;
  stairs: number;
  function: number;
  
  // Step 3: Prior Knee + Treatment
  prior_problem: string;
  prior_description: string;
  treatments: string[];
  injection_type: string;
  surgery_type: string;
  treat_helped: string;
  treat_duration: string;
  treat_stopped: string;
  
  // Step 4: PMH
  pmh: string[];
  pmh_other_text: string;
  trauma_yesno: string;
  trauma_details: string;
  past_surgery_any: string;
  fh_bone_joint: string;
  fh_childhood_knee: string;
  fh_details: string;
  
  // Step 5: Meds/Allergies
  allergies: string;
  meds_list: string;
  meds_flags: string[];
  
  // Step 6: Lifestyle
  smoker: string;
  alcohol_yesno: string;
  alcohol_units: string;
  other_info: string;
  
  // Step 7: Expectations
  expectations: string;
  ref_source: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  
  // Step 9: Consent
  consent_clinical: boolean;
  consent_marketing: boolean;
}

const initialFormData: FormData = {
  first_name: "",
  last_name: "",
  dob: "",
  email: "",
  mobile: "",
  postcode: "",
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
  consent_clinical: false,
  consent_marketing: false,
};

const STEPS = [
  { id: 1, label: "Details", icon: User },
  { id: 2, label: "Symptoms", icon: Activity },
  { id: 3, label: "History", icon: FileText },
  { id: 4, label: "Medical", icon: Stethoscope },
  { id: 5, label: "Meds", icon: Pill },
  { id: 6, label: "Lifestyle", icon: Heart },
  { id: 7, label: "Goals", icon: Target },
  { id: 8, label: "Review", icon: ClipboardCheck },
  { id: 9, label: "Submit", icon: Send },
];

const TREATMENTS = ["Physiotherapy", "Medication", "Injections", "Surgery", "Supplements", "None"];
const INJECTION_TYPES = ["Steroid", "Hyaluronic acid", "PRP", "Stem cell", "Other"];
const SURGERY_TYPES = ["Arthroscopy", "ACL reconstruction", "Meniscectomy", "Partial replacement", "Total replacement", "Other"];
const PMH_CONDITIONS = ["Diabetes", "Heart disease", "High blood pressure", "Rheumatoid arthritis", "Gout", "Osteoporosis", "Other", "None"];
const MEDS_FLAGS = ["Blood thinners", "Steroids", "Immunosuppressants", "None"];
const REF_SOURCES = ["Google", "Social media", "Friend/family", "Healthcare provider", "Advertisement", "Other"];

// Jotform Configuration
// Replace JOTFORM_FORM_ID with your actual Jotform form ID
const JOTFORM_FORM_ID = "PLACEHOLDER_FORM_ID";

// Jotform prefill map - maps our field keys to Jotform question parameter names
// You'll need to update these with your actual Jotform field IDs
// Example: "first_name" -> "q3_firstName" means our first_name maps to Jotform's q3_firstName
const JOTFORM_PREFILL_MAP: Record<string, string> = {
  // Patient Details
  first_name: "q3_firstName",
  last_name: "q4_lastName", 
  dob: "q5_dob",
  email: "q6_email",
  mobile: "q7_mobile",
  postcode: "q8_postcode",
  // Symptoms
  pain: "q10_pain",
  sleep: "q11_sleep",
  swelling: "q12_swelling",
  instability: "q13_instability",
  stiffness: "q14_stiffness",
  stairs: "q15_stairs",
  function: "q16_function",
  // Prior Knee + Treatment
  prior_problem: "q20_priorProblem",
  prior_description: "q21_priorDescription",
  treatments: "q22_treatments",
  injection_type: "q23_injectionType",
  surgery_type: "q24_surgeryType",
  treat_helped: "q25_treatHelped",
  treat_duration: "q26_treatDuration",
  treat_stopped: "q27_treatStopped",
  // PMH
  pmh: "q30_pmh",
  pmh_other_text: "q31_pmhOther",
  trauma_yesno: "q32_trauma",
  trauma_details: "q33_traumaDetails",
  past_surgery_any: "q34_pastSurgery",
  fh_bone_joint: "q35_fhBoneJoint",
  fh_childhood_knee: "q36_fhChildhood",
  fh_details: "q37_fhDetails",
  // Meds/Allergies
  allergies: "q40_allergies",
  meds_list: "q41_medsList",
  meds_flags: "q42_medsFlags",
  // Lifestyle
  smoker: "q50_smoker",
  alcohol_yesno: "q51_alcohol",
  alcohol_units: "q52_alcoholUnits",
  other_info: "q53_otherInfo",
  // Expectations
  expectations: "q60_expectations",
  ref_source: "q61_refSource",
  utm_source: "q62_utmSource",
  utm_medium: "q63_utmMedium",
  utm_campaign: "q64_utmCampaign",
  // Consent
  consent_clinical: "q70_consentClinical",
  consent_marketing: "q71_consentMarketing",
};

// Redirect URL after Jotform submission (configure in Jotform settings too)
const REDIRECT_URL = "/pages/next-steps-knee";

interface FullKneeAssessmentProps {
  onBack?: () => void;
  jotformFormId?: string;
  jotformPrefillMap?: Record<string, string>;
  redirectUrl?: string;
}

const FullKneeAssessment = ({ 
  onBack,
  jotformFormId = JOTFORM_FORM_ID,
  jotformPrefillMap = JOTFORM_PREFILL_MAP,
  redirectUrl = REDIRECT_URL
}: FullKneeAssessmentProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      // If selecting "None", clear others
      if (value === "None") {
        return { ...prev, [field]: ["None"] };
      }
      // If selecting something else, remove "None"
      return { ...prev, [field]: [...arr.filter(v => v !== "None"), value] };
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
        if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
        if (!formData.dob) newErrors.dob = "Date of birth is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
        break;
      case 3:
        if (!formData.prior_problem) newErrors.prior_problem = "Please select an option";
        break;
      case 9:
        if (!formData.consent_clinical) newErrors.consent_clinical = "Clinical consent is required to submit";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
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

  const getScoreBand = (score: number) => {
    if (score < 18) return { label: "Optimal", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
    if (score < 35) return { label: "Green", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" };
    if (score < 50) return { label: "Amber", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" };
    return { label: "Red", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
  };

  // Build Jotform prefill URL
  const buildJotformUrl = (): string => {
    const baseUrl = `https://form.jotform.com/${jotformFormId}`;
    const params = new URLSearchParams();

    // Map all form fields to Jotform parameters
    Object.entries(formData).forEach(([key, value]) => {
      const jotformKey = jotformPrefillMap[key];
      if (!jotformKey) return;

      if (Array.isArray(value)) {
        // Join array values with comma for multi-select fields
        if (value.length > 0) {
          params.set(jotformKey, value.join(","));
        }
      } else if (typeof value === "boolean") {
        params.set(jotformKey, value ? "Yes" : "No");
      } else if (value !== "" && value !== 0) {
        params.set(jotformKey, String(value));
      } else if (typeof value === "number") {
        params.set(jotformKey, String(value));
      }
    });

    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const handleSubmit = async () => {
    if (!validateStep(9)) return;
    
    setIsSubmitting(true);
    
    // Build the Jotform prefill URL
    const jotformUrl = buildJotformUrl();
    
    // Log for debugging (remove in production)
    console.log("Redirecting to Jotform:", jotformUrl);
    
    // Small delay for UX feedback
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Redirect to Jotform with prefilled data
    if (jotformFormId && jotformFormId !== "PLACEHOLDER_FORM_ID") {
      window.location.href = jotformUrl;
    } else {
      // If no form ID configured, show success state (for development)
      console.warn("Jotform Form ID not configured. Set JOTFORM_FORM_ID to enable redirect.");
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-serif text-foreground mb-3">Assessment Submitted</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Thank you for completing the Full Knee Assessment. We'll review your responses and be in touch with personalised recommendations.
        </p>
        <Button onClick={onBack} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Assessments
        </Button>
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
          Secure
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          4–6 minutes
        </span>
      </div>

      {/* Compliance Notice */}
      <div className="mb-8 p-6 rounded-xl bg-green-50 border-2 border-green-200">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-primary">Before You Begin</h3>
        </div>
        <ul className="space-y-3 text-sm text-foreground/80">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span><span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-medium">Required</span> Clinical data processing consent is required to proceed.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-medium">Opt-in only</span> Marketing communications are completely optional.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Your answers guide your knee health recommendations.</span>
          </li>
        </ul>
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-green-200">
          <a href="/policies/privacy-policy" target="_blank" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            <FileText className="w-4 h-4" />
            Privacy Policy
          </a>
          <a href="/pages/data-deletion-request" target="_blank" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            <Trash2 className="w-4 h-4" />
            Request Data Deletion
          </a>
        </div>
      </div>

      {/* Urgent Warning */}
      <div className="mb-8 p-4 rounded-xl bg-red-50 border-2 border-red-200 flex gap-4">
        <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-red-800 mb-1">Urgent Symptoms Disclaimer</h4>
          <p className="text-sm text-red-700">
            If your knee is acutely swollen, hot, red, or you cannot bear weight, seek urgent medical attention (A&E or GP) rather than completing this questionnaire.
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
        {/* Step 1: Patient Details */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Your Details</h2>
              <p className="text-muted-foreground text-sm">Basic information to personalise your assessment.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">First Name <span className="text-red-500">*</span></Label>
                <Input
                  value={formData.first_name}
                  onChange={(e) => updateField("first_name", e.target.value)}
                  placeholder="Enter first name"
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
                  placeholder="Enter last name"
                  maxLength={50}
                  className={errors.last_name ? "border-red-500" : ""}
                />
                {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium">Date of Birth <span className="text-red-500">*</span></Label>
              <Input
                type="date"
                value={formData.dob}
                onChange={(e) => updateField("dob", e.target.value)}
                className={errors.dob ? "border-red-500" : ""}
              />
              {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
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
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">Mobile Number</Label>
                <Input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => updateField("mobile", e.target.value)}
                  placeholder="+44..."
                  maxLength={20}
                />
              </div>
              <div>
                <Label className="text-sm font-medium">Postcode</Label>
                <Input
                  value={formData.postcode}
                  onChange={(e) => updateField("postcode", e.target.value)}
                  placeholder="SW1A 1AA"
                  maxLength={10}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Symptoms */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Your Knee Symptoms</h2>
              <p className="text-muted-foreground text-sm">Rate each symptom based on the past 7 days.</p>
            </div>
            
            <SliderField
              label="Pain Level"
              value={formData.pain}
              onChange={(v) => updateField("pain", v)}
              min={0}
              max={10}
              leftLabel="0 - No pain"
              rightLabel="10 - Severe"
            />
            <SliderField
              label="Sleep Disturbance"
              value={formData.sleep}
              onChange={(v) => updateField("sleep", v)}
              min={0}
              max={10}
              leftLabel="0 - None"
              rightLabel="10 - Severe"
            />
            <SliderField
              label="Swelling"
              value={formData.swelling}
              onChange={(v) => updateField("swelling", v)}
              min={0}
              max={5}
              leftLabel="0 - None"
              rightLabel="5 - Severe"
            />
            <SliderField
              label="Instability"
              value={formData.instability}
              onChange={(v) => updateField("instability", v)}
              min={0}
              max={5}
              leftLabel="0 - Stable"
              rightLabel="5 - Very unstable"
            />
            <SliderField
              label="Stiffness"
              value={formData.stiffness}
              onChange={(v) => updateField("stiffness", v)}
              min={0}
              max={10}
              leftLabel="0 - None"
              rightLabel="10 - Severe"
            />
            <SliderField
              label="Difficulty with Stairs"
              value={formData.stairs}
              onChange={(v) => updateField("stairs", v)}
              min={0}
              max={5}
              leftLabel="0 - Easy"
              rightLabel="5 - Cannot use"
            />
            <SliderField
              label="Overall Function"
              value={formData.function}
              onChange={(v) => updateField("function", v)}
              min={0}
              max={5}
              leftLabel="0 - Normal"
              rightLabel="5 - Severely limited"
            />
          </div>
        )}

        {/* Step 3: Prior Knee + Treatment */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Previous Knee Problems</h2>
              <p className="text-muted-foreground text-sm">Tell us about any previous issues and treatments.</p>
            </div>
            
            <RadioGroup
              label="Have you had a previous knee problem?"
              value={formData.prior_problem}
              onChange={(v) => updateField("prior_problem", v)}
              options={["Yes", "No"]}
              error={errors.prior_problem}
              required
            />
            
            {formData.prior_problem === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Please describe</Label>
                <Textarea
                  value={formData.prior_description}
                  onChange={(e) => updateField("prior_description", e.target.value)}
                  placeholder="e.g., ACL tear in 2018..."
                  maxLength={500}
                />
              </div>
            )}
            
            <div>
              <Label className="text-sm font-medium mb-3 block">What treatments have you tried?</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {TREATMENTS.map((t) => (
                  <CheckboxItem
                    key={t}
                    label={t}
                    checked={formData.treatments.includes(t)}
                    onChange={() => toggleArrayField("treatments", t)}
                  />
                ))}
              </div>
            </div>
            
            {formData.treatments.includes("Injections") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Injection type?</Label>
                <select
                  value={formData.injection_type}
                  onChange={(e) => updateField("injection_type", e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background"
                >
                  <option value="">Select...</option>
                  {INJECTION_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            )}
            
            {formData.treatments.includes("Surgery") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Surgery type?</Label>
                <select
                  value={formData.surgery_type}
                  onChange={(e) => updateField("surgery_type", e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background"
                >
                  <option value="">Select...</option>
                  {SURGERY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            )}
            
            <RadioGroup
              label="Did any treatment help?"
              value={formData.treat_helped}
              onChange={(v) => updateField("treat_helped", v)}
              options={["Yes", "No", "Partially"]}
            />
            
            {formData.treat_helped === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">How long did benefit last?</Label>
                <select
                  value={formData.treat_duration}
                  onChange={(e) => updateField("treat_duration", e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background"
                >
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
              <Input
                value={formData.treat_stopped}
                onChange={(e) => updateField("treat_stopped", e.target.value)}
                placeholder="e.g., Cost, side effects..."
                maxLength={200}
              />
            </div>
          </div>
        )}

        {/* Step 4: PMH */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Medical History</h2>
              <p className="text-muted-foreground text-sm">Help us understand your overall health.</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Do you have any of these conditions?</Label>
              <div className="grid grid-cols-2 gap-3">
                {PMH_CONDITIONS.map((c) => (
                  <CheckboxItem
                    key={c}
                    label={c}
                    checked={formData.pmh.includes(c)}
                    onChange={() => toggleArrayField("pmh", c)}
                  />
                ))}
              </div>
            </div>
            
            {formData.pmh.includes("Other") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Please specify</Label>
                <Input
                  value={formData.pmh_other_text}
                  onChange={(e) => updateField("pmh_other_text", e.target.value)}
                  maxLength={200}
                />
              </div>
            )}
            
            <RadioGroup
              label="Any significant knee trauma/injury?"
              value={formData.trauma_yesno}
              onChange={(v) => updateField("trauma_yesno", v)}
              options={["Yes", "No"]}
            />
            
            {formData.trauma_yesno === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Describe the injury</Label>
                <Textarea
                  value={formData.trauma_details}
                  onChange={(e) => updateField("trauma_details", e.target.value)}
                  placeholder="e.g., Sports injury in 2020..."
                  maxLength={300}
                />
              </div>
            )}
            
            <RadioGroup
              label="Any previous surgery (not just knee)?"
              value={formData.past_surgery_any}
              onChange={(v) => updateField("past_surgery_any", v)}
              options={["Yes", "No"]}
            />
            
            <RadioGroup
              label="Family history of bone/joint problems?"
              value={formData.fh_bone_joint}
              onChange={(v) => updateField("fh_bone_joint", v)}
              options={["Yes", "No", "Unknown"]}
            />
            
            <RadioGroup
              label="Childhood knee issues in family?"
              value={formData.fh_childhood_knee}
              onChange={(v) => updateField("fh_childhood_knee", v)}
              options={["Yes", "No", "Unknown"]}
            />
            
            {(formData.fh_bone_joint === "Yes" || formData.fh_childhood_knee === "Yes") && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Family history details</Label>
                <Textarea
                  value={formData.fh_details}
                  onChange={(e) => updateField("fh_details", e.target.value)}
                  placeholder="e.g., Mother has osteoarthritis..."
                  maxLength={300}
                />
              </div>
            )}
          </div>
        )}

        {/* Step 5: Meds/Allergies */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Medications & Allergies</h2>
              <p className="text-muted-foreground text-sm">Current medications and any allergies.</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium">Any allergies?</Label>
              <Input
                value={formData.allergies}
                onChange={(e) => updateField("allergies", e.target.value)}
                placeholder="e.g., Penicillin, ibuprofen..."
                maxLength={200}
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium">Current medications</Label>
              <Textarea
                value={formData.meds_list}
                onChange={(e) => updateField("meds_list", e.target.value)}
                placeholder="List any medications..."
                maxLength={500}
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-3 block">Taking any of these?</Label>
              <div className="grid grid-cols-2 gap-3">
                {MEDS_FLAGS.map((m) => (
                  <CheckboxItem
                    key={m}
                    label={m}
                    checked={formData.meds_flags.includes(m)}
                    onChange={() => toggleArrayField("meds_flags", m)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Lifestyle */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Lifestyle</h2>
              <p className="text-muted-foreground text-sm">A few questions about your lifestyle.</p>
            </div>
            
            <RadioGroup
              label="Do you smoke?"
              value={formData.smoker}
              onChange={(v) => updateField("smoker", v)}
              options={["Never", "Former", "Current"]}
            />
            
            <RadioGroup
              label="Do you drink alcohol?"
              value={formData.alcohol_yesno}
              onChange={(v) => updateField("alcohol_yesno", v)}
              options={["Yes", "No"]}
            />
            
            {formData.alcohol_yesno === "Yes" && (
              <div className="animate-fade-up">
                <Label className="text-sm font-medium">Units per week?</Label>
                <select
                  value={formData.alcohol_units}
                  onChange={(e) => updateField("alcohol_units", e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background"
                >
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
              <Textarea
                value={formData.other_info}
                onChange={(e) => updateField("other_info", e.target.value)}
                placeholder="Any other relevant information..."
                maxLength={500}
              />
            </div>
          </div>
        )}

        {/* Step 7: Expectations */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Your Goals</h2>
              <p className="text-muted-foreground text-sm">What are you hoping to achieve?</p>
            </div>
            
            <div>
              <Label className="text-sm font-medium">Your knee health goals</Label>
              <Textarea
                value={formData.expectations}
                onChange={(e) => updateField("expectations", e.target.value)}
                placeholder="e.g., Return to running, reduce daily pain..."
                maxLength={500}
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium">How did you hear about us?</Label>
              <select
                value={formData.ref_source}
                onChange={(e) => updateField("ref_source", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-border rounded-lg bg-background"
              >
                <option value="">Select...</option>
                {REF_SOURCES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 8: Review */}
        {currentStep === 8 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Review Your Answers</h2>
              <p className="text-muted-foreground text-sm">Please check your responses before submitting.</p>
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
                  <p className="text-xs text-muted-foreground mt-3">This preview score is based on your symptom responses only.</p>
                </div>
              );
            })()}
            
            {/* Summary */}
            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Summary</h3>
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-medium">{formData.first_name} {formData.last_name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Prior Problem</span>
                  <span className="font-medium">{formData.prior_problem || "—"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Treatments Tried</span>
                  <span className="font-medium">{formData.treatments.length > 0 ? formData.treatments.join(", ") : "—"}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Goals</span>
                  <span className="font-medium text-right max-w-[200px] truncate">{formData.expectations || "—"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 9: Submit */}
        {currentStep === 9 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="text-xl font-serif text-foreground mb-2">Submit Your Assessment</h2>
              <p className="text-muted-foreground text-sm">Please confirm your consent to proceed.</p>
            </div>
            
            <div className={cn(
              "p-6 rounded-xl border-2 transition-colors",
              formData.consent_clinical ? "bg-green-50 border-green-300" : "bg-background border-border"
            )}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-foreground">Clinical Data Processing</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">Required</span>
              </div>
              <label className="flex items-start gap-4 cursor-pointer">
                <Checkbox
                  checked={formData.consent_clinical}
                  onCheckedChange={(checked) => updateField("consent_clinical", !!checked)}
                  className="mt-1"
                />
                <span className="text-sm text-muted-foreground">
                  I consent to OmKneeHealth processing my clinical data to provide personalised knee health guidance. I understand my data will be handled in accordance with UK GDPR.
                </span>
              </label>
              {errors.consent_clinical && <p className="text-red-500 text-xs mt-2">{errors.consent_clinical}</p>}
            </div>
            
            <div className={cn(
              "p-6 rounded-xl border-2 transition-colors",
              formData.consent_marketing ? "bg-blue-50 border-blue-300" : "bg-background border-border"
            )}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-foreground">Marketing Communications</span>
                <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full border">Optional</span>
              </div>
              <label className="flex items-start gap-4 cursor-pointer">
                <Checkbox
                  checked={formData.consent_marketing}
                  onCheckedChange={(checked) => updateField("consent_marketing", !!checked)}
                  className="mt-1"
                />
                <span className="text-sm text-muted-foreground">
                  I'd like to receive updates about knee health tips, product news, and exclusive offers from OmKneeHealth.
                </span>
              </label>
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
        
        {currentStep < STEPS.length ? (
          <Button onClick={handleNext} className="flex-1 md:ml-auto">
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit} 
            disabled={isSubmitting || !formData.consent_clinical}
            className="flex-1 md:ml-auto bg-gradient-to-r from-primary to-primary/80"
          >
            {isSubmitting ? "Submitting..." : "Submit Assessment"}
            <Send className="w-4 h-4 ml-2" />
          </Button>
        )}
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
    <Slider
      value={[value]}
      onValueChange={([v]) => onChange(v)}
      min={min}
      max={max}
      step={1}
      className="mb-2"
    />
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
