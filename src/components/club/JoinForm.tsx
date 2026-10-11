/**
 * OmKnee Club join form (handover A2, E1). Reusable on the Club page, the
 * Knee Score page, the cart drawer (Phase 5) and the footer.
 *
 * - Both boxes start unticked; only the club box is required (D3).
 * - Sends only email, first name and club properties to Klaviyo: never any
 *   Knee Score or health data (D3).
 * - The typed email is kept if the request fails (E1).
 */
import { useId, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Award, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PlaceholderText from "@/components/PlaceholderText";
import { CONFIRMATION, JOIN_FORM, isFoundingMember } from "@/content/club";
import { isKlaviyoConfigured, joinClub, type JoinSource } from "@/lib/klaviyo";
import { getReferral } from "@/lib/referral";
import { trackClubJoinCompleted, trackClubJoinStarted } from "@/lib/analytics";

type Status = "idle" | "submitting" | "error" | "done";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface JoinFormProps {
  source: JoinSource;
  /** Heading level for the confirmation screen: h1 on the Club page, h2 elsewhere. */
  confirmationHeading?: "h1" | "h2" | "h3";
  /** Dark variant for green backgrounds (footer). */
  tone?: "light" | "dark";
  /** Hide the optional first name and news fields (compact placements). */
  compact?: boolean;
  /** When set, the parent shows the confirmation screen instead of this form. */
  onJoined?: (founding: boolean) => void;
}

export const JoinConfirmation = ({
  heading: Heading = "h2",
  founding,
  tone = "light",
}: {
  heading?: "h1" | "h2" | "h3";
  founding: boolean;
  tone?: "light" | "dark";
}) => {
  const muted = tone === "dark" ? "text-primary-foreground/80" : "text-muted-foreground";
  return (
    <div role="status" className="text-center">
      {founding ? (
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 font-sans text-xs tracking-[0.15em] uppercase text-gold-foreground">
          <Award className="h-4 w-4" aria-hidden="true" />
          {CONFIRMATION.badge}
        </p>
      ) : null}
      <Heading className="font-serif text-2xl md:text-3xl leading-snug mb-4">{CONFIRMATION.heading}</Heading>
      <p className={`font-sans leading-relaxed mb-6 ${muted}`}>{CONFIRMATION.body}</p>
      <Button size="lg" asChild>
        <Link to="/knee-score">{CONFIRMATION.cta}</Link>
      </Button>
      <p className={`mt-6 font-sans text-sm ${muted}`}>
        {CONFIRMATION.share}{" "}
        <Button size="sm" variant="outline" disabled className="ml-1">
          <PlaceholderText text={CONFIRMATION.copyInvite} />
        </Button>
      </p>
      <p className={`mt-2 font-sans text-xs ${muted}`}>
        <PlaceholderText text="[Invite links: issued by the referral app, to choose]" />
      </p>
    </div>
  );
};

const JoinForm = ({ source, confirmationHeading = "h2", tone = "light", compact = false, onJoined }: JoinFormProps) => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [clubConsent, setClubConsent] = useState(false);
  const [newsConsent, setNewsConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [founding, setFounding] = useState(false);
  const started = useRef(false);

  const dark = tone === "dark";
  const muted = dark ? "text-primary-foreground/75" : "text-muted-foreground";
  const linkClass = dark ? "underline underline-offset-4 hover:text-primary-foreground" : "underline underline-offset-4 hover:text-foreground";

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    trackClubJoinStarted(source);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    markStarted();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setFieldError("Enter a valid email address.");
      return;
    }
    if (!clubConsent) {
      setFieldError("Tick the box to create your free membership.");
      return;
    }
    setFieldError(null);
    setStatus("submitting");
    const isFounding = isFoundingMember();
    try {
      await joinClub({
        email: email.trim(),
        firstName: firstName.trim() || undefined,
        news: newsConsent,
        source,
        foundingMember: isFounding,
        referredBy: getReferral(),
      });
      setFounding(isFounding);
      setStatus("done");
      trackClubJoinCompleted(source);
      onJoined?.(isFounding);
    } catch {
      // Keep everything the person typed so they can try again.
      setStatus("error");
    }
  };

  if (status === "done" && !onJoined) {
    return <JoinConfirmation heading={confirmationHeading} founding={founding} tone={tone} />;
  }

  const inputClass = dark
    ? "bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
    : "bg-background";

  return (
    <form onSubmit={handleSubmit} noValidate onFocus={markStarted} className="space-y-4 text-left" aria-describedby={`${id}-print`}>
      <div className="space-y-2">
        <Label htmlFor={`${id}-email`} className={dark ? "text-primary-foreground" : undefined}>
          {JOIN_FORM.emailLabel}
        </Label>
        <Input
          id={`${id}-email`}
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={fieldError?.startsWith("Enter") || undefined}
          className={`min-h-[44px] ${inputClass}`}
        />
      </div>

      {compact ? null : (
        <div className="space-y-2">
          <Label htmlFor={`${id}-name`} className={dark ? "text-primary-foreground" : undefined}>
            {JOIN_FORM.firstNameLabel}
          </Label>
          <Input
            id={`${id}-name`}
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`min-h-[44px] ${inputClass}`}
          />
        </div>
      )}

      <div className="flex items-start gap-3">
        <Checkbox
          id={`${id}-club`}
          checked={clubConsent}
          onCheckedChange={(checked) => setClubConsent(checked === true)}
          aria-required="true"
          className={`mt-1 ${dark ? "border-primary-foreground data-[state=checked]:bg-gold data-[state=checked]:text-gold-foreground" : ""}`}
        />
        <Label htmlFor={`${id}-club`} className={`font-sans text-sm leading-relaxed font-normal ${dark ? "text-primary-foreground" : "text-foreground"}`}>
          {JOIN_FORM.clubConsent}
        </Label>
      </div>

      {compact ? null : (
        <div className="flex items-start gap-3">
          <Checkbox
            id={`${id}-news`}
            checked={newsConsent}
            onCheckedChange={(checked) => setNewsConsent(checked === true)}
            className="mt-1"
          />
          <Label htmlFor={`${id}-news`} className="font-sans text-sm leading-relaxed font-normal text-foreground">
            {JOIN_FORM.newsConsent}
          </Label>
        </div>
      )}

      {fieldError ? (
        <p role="alert" className={`font-sans text-sm ${dark ? "text-gold" : "text-foreground"}`}>
          {fieldError}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className={`font-sans text-sm ${dark ? "text-gold" : "text-foreground"}`}>
          <PlaceholderText text={JOIN_FORM.error} />
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className={`w-full min-h-[44px] ${dark ? "bg-gold text-gold-foreground hover:bg-gold/90" : ""}`}
      >
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {JOIN_FORM.button}
      </Button>

      <p id={`${id}-print`} className={`font-sans text-xs ${muted}`}>
        {JOIN_FORM.smallPrint}{" "}
        <Link to="/privacy-policy" className={linkClass}>Privacy Policy</Link>
        {" · "}
        <Link to="/club-terms" className={linkClass}>Club terms</Link>
      </p>

      {isKlaviyoConfigured() ? null : (
        <p className={`font-sans text-xs ${muted}`}>
          <PlaceholderText text="[Klaviyo not connected yet: set VITE_KLAVIYO_PUBLIC_KEY and VITE_KLAVIYO_CLUB_LIST_ID]" />
        </p>
      )}
    </form>
  );
};

export default JoinForm;
