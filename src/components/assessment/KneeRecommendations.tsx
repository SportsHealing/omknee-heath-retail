import { useState, forwardRef, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp, 
  ShoppingCart, 
  ImageIcon, 
  User, 
  AlertCircle,
  Heart,
  Activity,
  Pill,
  Stethoscope,
  BookOpen,
  Printer,
  Download
} from "lucide-react";

// ========== RECOMMENDATION ENGINE ==========

const TESTS = {
  imaging: {
    MRI: "MRI knee (high-resolution, non-contrast)",
    MRI_CONTRAST: "MRI knee with contrast (only if specifically indicated)",
    XR_WB: "Weight-bearing knee X-rays (AP, lateral, Rosenberg, skyline)",
    USS: "Ultrasound knee (effusion/synovitis/Baker's cyst/tendons)",
    DEXA: "DEXA scan (bone density)"
  },
  bloods: {
    CRP: "CRP",
    ESR: "ESR",
    RF: "Rheumatoid factor",
    ANTI_CCP: "Anti-CCP",
    VITD: "25-OH Vitamin D",
    CA_PHOS: "Calcium + Phosphate",
    FERRITIN: "Ferritin",
    TSH_FT4: "TSH ± Free T4",
    HBA1C: "HbA1c",
    LIPIDS: "Lipid profile",
    U_E: "Urea & electrolytes (renal function)"
  },
  procedures: {
    ASPIRATION: "Ultrasound-guided aspiration (if large effusion)"
  }
};

type BandKey = "red" | "amber" | "lgreen" | "green" | "na";

interface Band {
  key: BandKey;
  label: string;
}

interface Package {
  imaging: string[];
  bloods: string[];
  procedures: string[];
  notes: string[];
  rationale: string[];
}

interface RecommendationContext {
  kneeScore: number;
  age: number;
  sex: "female" | "male" | "other" | "";
  hasCardiac: boolean;
  hasThyroid: boolean;
  hasDiabetes: boolean;
  isPeriOrPostMenopausal: boolean;
}

interface RecommendationResult {
  band: string;
  bandKey: BandKey;
  title: string;
  imaging: string[];
  bloods: string[];
  procedures: string[];
  notes: string[];
  rationale: string[];
}

function kneeBand(score: number | null | undefined): Band {
  if (score === null || score === undefined) return { key: "na", label: "—" };
  if (score <= 24) return { key: "red", label: "0–24" };
  if (score <= 49) return { key: "amber", label: "25–49" };
  if (score <= 74) return { key: "lgreen", label: "50–74" };
  return { key: "green", label: "75–100" };
}

function basePackageByBand(bandKey: BandKey): Package {
  switch (bandKey) {
    case "red":
      return {
        imaging: [TESTS.imaging.MRI, TESTS.imaging.XR_WB],
        bloods: [TESTS.bloods.CRP, TESTS.bloods.ESR, TESTS.bloods.VITD],
        procedures: [],
        notes: ["Escalate if red flags or rapid deterioration."],
        rationale: [
          "Low score suggests high symptom burden or instability where diagnosis is important.",
          "MRI characterises menisci/ligaments/cartilage/bone marrow; X-ray assesses alignment and OA."
        ]
      };
    case "amber":
      return {
        imaging: [TESTS.imaging.MRI, TESTS.imaging.USS],
        bloods: [TESTS.bloods.VITD, TESTS.bloods.CRP],
        procedures: [],
        notes: ["Consider weight-bearing X-ray if age >40 or alignment symptoms."],
        rationale: [
          "Moderate limitation often reflects treatable structural pathology and/or inflammation.",
          "Ultrasound is useful for effusion/synovitis/cysts and tendon pain."
        ]
      };
    case "lgreen":
      return {
        imaging: [TESTS.imaging.USS],
        bloods: [TESTS.bloods.VITD],
        procedures: [],
        notes: ["MRI is usually reserved for mechanical symptoms or failed rehab."],
        rationale: [
          "This range often benefits most from optimisation and targeted rehab rather than extensive imaging."
        ]
      };
    case "green":
      return {
        imaging: [],
        bloods: [],
        procedures: [],
        notes: ["Consider baseline ultrasound only for elite sport / prior surgery / reassurance."],
        rationale: [
          "High score suggests good function; focus on prevention and resilience."
        ]
      };
    default:
      return { imaging: [], bloods: [], procedures: [], notes: [], rationale: [] };
  }
}

function applyModifiers(pkg: Package, ctx: RecommendationContext): Package {
  const { age, sex, hasCardiac, hasThyroid, hasDiabetes, isPeriOrPostMenopausal } = ctx;

  const addUnique = (arr: string[], item: string) => {
    if (item && !arr.includes(item)) arr.push(item);
  };

  // Age rules
  if (age < 30) {
    pkg.notes.push("Age <30: X-ray usually only if trauma or concern for bony injury/alignment.");
  }
  if (age >= 45 && age <= 60) {
    addUnique(pkg.bloods, TESTS.bloods.HBA1C);
    addUnique(pkg.bloods, TESTS.bloods.LIPIDS);
    addUnique(pkg.bloods, TESTS.bloods.TSH_FT4);
    pkg.notes.push("Age 45–60: add metabolic and thyroid screening to support recovery and pain modulation.");
  }
  if (age > 60) {
    addUnique(pkg.bloods, TESTS.bloods.CA_PHOS);
    addUnique(pkg.bloods, TESTS.bloods.U_E);
    addUnique(pkg.imaging, TESTS.imaging.XR_WB);
    pkg.notes.push("Age >60: X-ray + bone/metabolic screening are higher yield; MRI reserved for unclear cases/mechanical symptoms.");
  }

  // Sex rules
  if (sex === "female") {
    if (age >= 30) {
      addUnique(pkg.bloods, TESTS.bloods.FERRITIN);
      addUnique(pkg.bloods, TESTS.bloods.TSH_FT4);
      addUnique(pkg.bloods, TESTS.bloods.VITD);
      pkg.notes.push("Female ≥30: check ferritin/thyroid/vitamin D (common contributors to fatigue, pain sensitivity, recovery).");
    }
    if (isPeriOrPostMenopausal) {
      addUnique(pkg.imaging, TESTS.imaging.DEXA);
      addUnique(pkg.bloods, TESTS.bloods.LIPIDS);
      addUnique(pkg.bloods, TESTS.bloods.HBA1C);
      pkg.notes.push("Peri/post-menopause: include bone density and metabolic screening.");
    }
  }
  if (sex === "male") {
    if (age >= 40) {
      addUnique(pkg.bloods, TESTS.bloods.HBA1C);
      addUnique(pkg.bloods, TESTS.bloods.LIPIDS);
      addUnique(pkg.bloods, TESTS.bloods.VITD);
      pkg.notes.push("Male ≥40: add metabolic screening and vitamin D (metabolic OA risk and tendon health).");
    }
  }

  // Cardiac history
  if (hasCardiac) {
    addUnique(pkg.bloods, TESTS.bloods.U_E);
    addUnique(pkg.bloods, TESTS.bloods.LIPIDS);
    addUnique(pkg.bloods, TESTS.bloods.HBA1C);
    pkg.notes.push("Cardiac history: prioritise safe exercise prescription; renal function is important before NSAIDs/injections.");
  }

  // Thyroid history
  if (hasThyroid) {
    addUnique(pkg.bloods, TESTS.bloods.TSH_FT4);
    pkg.notes.push("Thyroid history: ensure thyroid function is optimised (can affect stiffness, tendons and recovery).");
  }

  // Diabetes/metabolic
  if (hasDiabetes) {
    addUnique(pkg.bloods, TESTS.bloods.HBA1C);
    addUnique(pkg.bloods, TESTS.bloods.U_E);
    addUnique(pkg.bloods, TESTS.bloods.CRP);
    pkg.notes.push("Diabetes/metabolic risk: tendon degeneration and slower healing are more common—optimise glucose and consider earlier imaging if mechanical symptoms.");
  }

  return pkg;
}

function applyBandSpecificExtras(pkg: Package, ctx: RecommendationContext, bandKey: BandKey): Package {
  const { age } = ctx;
  const addUnique = (arr: string[], item: string) => {
    if (item && !arr.includes(item)) arr.push(item);
  };

  if (bandKey === "red") {
    addUnique(pkg.bloods, TESTS.bloods.RF);
    addUnique(pkg.bloods, TESTS.bloods.ANTI_CCP);
    pkg.notes.push("If significant effusion/synovitis: consider autoimmune screen (RF/anti-CCP) and aspiration if large effusion.");
    addUnique(pkg.procedures, TESTS.procedures.ASPIRATION);
  }

  if (bandKey === "amber" && age > 40) {
    addUnique(pkg.imaging, TESTS.imaging.XR_WB);
  }

  return pkg;
}

function recommendKneeWorkup(ctx: RecommendationContext): RecommendationResult {
  const band = kneeBand(ctx.kneeScore);
  let pkg = basePackageByBand(band.key);
  pkg = applyBandSpecificExtras(pkg, ctx, band.key);
  pkg = applyModifiers(pkg, ctx);

  const titleByBand: Record<BandKey, string> = {
    red: "Acute / High-Concern Knee Package",
    amber: "Structural + Inflammatory Assessment Package",
    lgreen: "Optimisation & Early Degeneration Package",
    green: "Performance & Prevention Package",
    na: "Complete the scores to see recommendations"
  };

  return {
    band: band.label,
    bandKey: band.key,
    title: titleByBand[band.key] || "Recommended next steps",
    imaging: pkg.imaging,
    bloods: pkg.bloods,
    procedures: pkg.procedures,
    notes: pkg.notes,
    rationale: pkg.rationale
  };
}

// ========== UI COMPONENTS ==========

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  defaultOpen?: boolean;
}

const CollapsibleSection = forwardRef<HTMLDivElement, CollapsibleSectionProps>(
  ({ title, icon, items, defaultOpen = true }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (items.length === 0) return null;

  return (
    <div className="border border-border rounded-xl overflow-hidden print:border-gray-300 print:break-inside-avoid">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors print:bg-gray-100"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium text-foreground print:text-gray-900">{title}</span>
          <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full print:bg-gray-700 print:text-white">
            {items.length}
          </span>
        </div>
        <span className="print:hidden">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </span>
      </button>
      {/* Always show content when printing, otherwise respect isOpen state */}
      <div className={`p-4 space-y-2 ${isOpen ? 'block' : 'hidden'} print:block`}>
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-0.5 print:text-gray-700">✓</span>
            <span className="text-foreground print:text-gray-800">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

CollapsibleSection.displayName = "CollapsibleSection";

const bandStyles: Record<BandKey, { bg: string; border: string; text: string }> = {
  red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700" },
  lgreen: { bg: "bg-lime-50", border: "border-lime-200", text: "text-lime-700" },
  green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700" },
  na: { bg: "bg-muted", border: "border-border", text: "text-muted-foreground" }
};

// ========== MAIN COMPONENTS ==========

interface HealthProfileFormProps {
  onSubmit: (profile: HealthProfile) => void;
}

interface HealthProfile {
  age: number;
  sex: "female" | "male" | "other";
  isPeriOrPostMenopausal: boolean;
  hasCardiac: boolean;
  hasThyroid: boolean;
  hasDiabetes: boolean;
}

export const HealthProfileForm = ({ onSubmit }: HealthProfileFormProps) => {
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<"female" | "male" | "other" | "">("");
  const [isPeriOrPostMenopausal, setIsPeriOrPostMenopausal] = useState(false);
  const [hasCardiac, setHasCardiac] = useState(false);
  const [hasThyroid, setHasThyroid] = useState(false);
  const [hasDiabetes, setHasDiabetes] = useState(false);

  const isValid = age !== "" && parseInt(age) >= 18 && sex !== "";

  const handleSubmit = () => {
    if (!isValid) return;
    onSubmit({
      age: parseInt(age),
      sex: sex as "female" | "male" | "other",
      isPeriOrPostMenopausal: sex === "female" ? isPeriOrPostMenopausal : false,
      hasCardiac,
      hasThyroid,
      hasDiabetes
    });
  };

  return (
    <div className="bg-muted/30 rounded-xl border border-border p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-5 h-5 text-primary" />
        <h4 className="font-serif text-lg text-foreground">Your Health Profile</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Help us personalise your test recommendations by providing some additional information.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Age</label>
          <input
            type="number"
            min="18"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Sex</label>
          <select
            value={sex}
            onChange={(e) => {
              setSex(e.target.value as typeof sex);
              if (e.target.value !== "female") {
                setIsPeriOrPostMenopausal(false);
              }
            }}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">Select...</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other / Prefer not to say</option>
          </select>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <p className="text-sm font-medium text-foreground">Health Conditions</p>
        <div className="grid md:grid-cols-2 gap-3">
          {sex === "female" && (
            <label className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background cursor-pointer hover:border-primary/50 transition-colors">
              <input
                type="checkbox"
                checked={isPeriOrPostMenopausal}
                onChange={(e) => setIsPeriOrPostMenopausal(e.target.checked)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-foreground">Peri/post-menopausal</span>
            </label>
          )}
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background cursor-pointer hover:border-primary/50 transition-colors">
            <input
              type="checkbox"
              checked={hasCardiac}
              onChange={(e) => setHasCardiac(e.target.checked)}
              className="w-4 h-4 accent-primary"
            />
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Cardiac history</span>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background cursor-pointer hover:border-primary/50 transition-colors">
            <input
              type="checkbox"
              checked={hasThyroid}
              onChange={(e) => setHasThyroid(e.target.checked)}
              className="w-4 h-4 accent-primary"
            />
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Thyroid disease</span>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background cursor-pointer hover:border-primary/50 transition-colors">
            <input
              type="checkbox"
              checked={hasDiabetes}
              onChange={(e) => setHasDiabetes(e.target.checked)}
              className="w-4 h-4 accent-primary"
            />
            <div className="flex items-center gap-2">
              <Pill className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Diabetes / metabolic risk</span>
            </div>
          </label>
        </div>
      </div>

      <Button 
        onClick={handleSubmit} 
        disabled={!isValid}
        className="w-full"
      >
        <Stethoscope className="w-4 h-4 mr-2" />
        Generate Test Recommendations
      </Button>
    </div>
  );
};

interface KneeRecommendationsProps {
  kneeScore: number;
  sleepScore?: number;
  useIndexScore?: boolean;
}

export const KneeRecommendations = ({ kneeScore, sleepScore, useIndexScore = true }: KneeRecommendationsProps) => {
  const [healthProfile, setHealthProfile] = useState<HealthProfile | null>(null);
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);

  const handleProfileSubmit = (profile: HealthProfile) => {
    setHealthProfile(profile);

    // Calculate the score to use
    let primaryScore = kneeScore;
    if (useIndexScore && sleepScore !== undefined) {
      primaryScore = Math.round((kneeScore + sleepScore) / 2);
    }

    const ctx: RecommendationContext = {
      kneeScore: primaryScore,
      age: profile.age,
      sex: profile.sex,
      hasCardiac: profile.hasCardiac,
      hasThyroid: profile.hasThyroid,
      hasDiabetes: profile.hasDiabetes,
      isPeriOrPostMenopausal: profile.isPeriOrPostMenopausal
    };

    const result = recommendKneeWorkup(ctx);
    setRecommendation(result);
  };

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  if (!healthProfile || !recommendation) {
    return <HealthProfileForm onSubmit={handleProfileSubmit} />;
  }

  const style = bandStyles[recommendation.bandKey];

  return (
    <div className="space-y-6">
      {/* Print/Export Actions */}
      <div className="flex justify-end gap-2 print:hidden">
        <Button variant="outline" size="sm" onClick={handlePrint}>
          <Printer className="w-4 h-4 mr-2" />
          Print / Save PDF
        </Button>
      </div>

      {/* Printable Content */}
      <div ref={printRef} className="print:p-4">
        {/* Print Header - Only visible when printing */}
        <div className="hidden print:block print:mb-6 print:border-b print:border-gray-300 print:pb-4">
          <h1 className="text-2xl font-serif text-gray-900">OmKneeHealth</h1>
          <p className="text-sm text-gray-600">Personalised Knee & Recovery Recommendations</p>
          <p className="text-xs text-gray-500 mt-1">Generated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Header */}
        <div className={`rounded-xl border p-6 ${style.bg} ${style.border} print:bg-gray-50 print:border-gray-300`}>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${style.bg} ${style.text} border ${style.border} print:bg-gray-200 print:text-gray-800`}>
              Band: {recommendation.band}
            </span>
            <span className="text-sm text-muted-foreground print:text-gray-600">
              Personalised for age {healthProfile.age}, {healthProfile.sex}
            </span>
          </div>
          <h3 className="text-xl font-serif text-foreground print:text-gray-900">
            {recommendation.title}
          </h3>
        </div>

      {/* Test Sections */}
      <div className="space-y-3">
        <CollapsibleSection
          title="Imaging"
          icon={<ImageIcon className="w-5 h-5 text-primary" />}
          items={recommendation.imaging}
          defaultOpen={true}
        />
        <CollapsibleSection
          title="Blood Tests"
          icon={<Activity className="w-5 h-5 text-primary" />}
          items={recommendation.bloods}
          defaultOpen={true}
        />
        <CollapsibleSection
          title="Optional Procedures"
          icon={<Stethoscope className="w-5 h-5 text-primary" />}
          items={recommendation.procedures}
          defaultOpen={false}
        />
      </div>

      {/* Clinical Notes */}
      {recommendation.notes.length > 0 && (
        <div className="bg-muted/30 rounded-xl border border-border p-4">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
            Clinical Notes
          </h4>
          <ul className="space-y-2">
            {recommendation.notes.map((note, index) => (
              <li key={index} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Rationale */}
      {recommendation.rationale.length > 0 && (
        <details className="bg-primary/5 rounded-xl border border-primary/20 p-4">
          <summary className="text-sm font-medium text-primary cursor-pointer flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Why these tests?
          </summary>
          <div className="mt-3 space-y-2">
            {recommendation.rationale.map((r, index) => (
              <p key={index} className="text-sm text-foreground">{r}</p>
            ))}
          </div>
        </details>
      )}

      {/* CTAs */}
      <div className="grid md:grid-cols-3 gap-3">
        <Button asChild className="w-full">
          <a href="/product">
            <ShoppingCart className="w-4 h-4 mr-2" />
            View Formula
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href="https://mykneescore.com" target="_blank" rel="noopener noreferrer" id="book-imaging-cta">
            <ImageIcon className="w-4 h-4 mr-2" />
            Explore Imaging
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href="https://sportshealing.com" target="_blank" rel="noopener noreferrer">
            <User className="w-4 h-4 mr-2" />
            Find a Clinician
          </a>
        </Button>
      </div>

      {/* Additional Navigation */}
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <a href="/science#evidence-science" className="text-primary hover:underline flex items-center gap-1">
          <BookOpen className="w-4 h-4" />
          View Evidence & Science
        </a>
        <span className="text-muted-foreground">•</span>
        <a href="/product#product-faq" className="text-primary hover:underline">
          Read FAQs
        </a>
        </div>

        {/* Disclaimer - inside printable area */}
        <div className="text-center p-4 bg-muted/30 rounded-lg border border-border print:bg-gray-100 print:border-gray-300 print:mt-6">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 print:text-gray-600">
            <AlertCircle className="w-3 h-3" />
            Educational decision-support, not diagnosis. Always consult a healthcare professional.
          </p>
        </div>
      </div>
      {/* End Printable Content */}

      {/* Reset - hidden when printing */}
      <div className="text-center print:hidden">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => {
            setHealthProfile(null);
            setRecommendation(null);
          }}
        >
          Update Health Profile
        </Button>
      </div>
    </div>
  );
};

export default KneeRecommendations;
