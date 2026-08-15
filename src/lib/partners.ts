/**
 * Clinical partner network links.
 *
 * OmKneeHealth is the health-and-wellness front door for the knee. Anything
 * clinical — diagnosis, imaging, surgical opinion — is signposted to a named
 * partner site. Deep links use descriptive anchor text so both readers and
 * search engines understand where each link goes and why.
 */

export interface PartnerLink {
  /** Descriptive anchor text — never "click here". */
  label: string;
  /** Absolute partner URL. */
  href: string;
  /** One line explaining what the visitor will find. */
  blurb: string;
  /** Which partner site the link belongs to. */
  partner: PartnerKey;
}

export type PartnerKey = "sportshealing" | "chinmaygupte" | "mykneescore";

export interface Partner {
  key: PartnerKey;
  name: string;
  domain: string;
  url: string;
  role: string;
  description: string;
}

export const PARTNERS: Record<PartnerKey, Partner> = {
  sportshealing: {
    key: "sportshealing",
    name: "SportsHealing",
    domain: "sportshealing.com",
    url: "https://www.sportshealing.com/",
    role: "Musculoskeletal care and knee education",
    description:
      "Expert-led musculoskeletal care for joint pain, tendon injuries, bone health and movement problems, with the Knee Passport library explaining every structure in the knee.",
  },
  chinmaygupte: {
    key: "chinmaygupte",
    name: "Mr Chinmay Gupte",
    domain: "chinmaygupte.com",
    url: "https://www.chinmaygupte.com/",
    role: "Consultant knee surgeon, London",
    description:
      "Complex knee specialist with a PhD in knee ligament research, covering ACL and meniscus injury, patellofemoral instability, osteoarthritis and knee replacement, plus rehabilitation protocols.",
  },
  mykneescore: {
    key: "mykneescore",
    name: "MyKneeScore",
    domain: "mykneescore.com",
    url: "https://mykneescore.com/",
    role: "Knee health assessment",
    description:
      "Evidence-based knee assessment and triage tools that help you understand your symptoms and urgency, with onward pathways to clinical care and imaging when needed.",
  },
};

/** Every deep link we use, grouped by topic, so anchors stay consistent site-wide. */
export const PARTNER_LINKS = {
  anatomy: [
    {
      partner: "sportshealing",
      label: "Knee Passport: know your knee",
      href: "https://www.sportshealing.com/know-your-knee/",
      blurb: "A structure-by-structure tour of the knee, written for patients.",
    },
    {
      partner: "sportshealing",
      label: "Collagen and joint health explained",
      href: "https://www.sportshealing.com/collagen-joint-health/",
      blurb: "Why collagen sits at the centre of cartilage, meniscus, ligament and tendon.",
    },
    {
      partner: "sportshealing",
      label: "The meniscus: what it does and how it fails",
      href: "https://www.sportshealing.com/the-meniscus/",
      blurb: "The knee's shock absorbers, and what happens when they tear.",
    },
    {
      partner: "sportshealing",
      label: "Chondral surfaces and osteochondral health",
      href: "https://www.sportshealing.com/chondral-surfaces-osteochondral-health/",
      blurb: "The cartilage lining of the joint and the bone beneath it.",
    },
  ],
  wellness: [
    {
      partner: "sportshealing",
      label: "Knee osteoarthritis: a patient guide",
      href: "https://www.sportshealing.com/knee-osteoarthritis/",
      blurb: "What osteoarthritis is, how it is assessed and what the options are.",
    },
    {
      partner: "sportshealing",
      label: "SportsHealing philosophy of care",
      href: "https://www.sportshealing.com/our-philosophy/",
      blurb: "Personalised, evidence-based care that protects long-term joint health.",
    },
    {
      partner: "mykneescore",
      label: "60-second knee triage test",
      href: "https://mykneescore.com/",
      blurb: "Ten questions, an instant red–amber–green urgency score. Not a diagnosis.",
    },
  ],
  nutrition: [
    {
      partner: "sportshealing",
      label: "Collagen and joint health",
      href: "https://www.sportshealing.com/collagen-joint-health/",
      blurb: "How dietary building blocks relate to the tissues in your knee.",
    },
    {
      partner: "sportshealing",
      label: "Bone health and musculoskeletal care",
      href: "https://www.sportshealing.com/knee-treatments/",
      blurb: "Where nutrition sits alongside the wider treatment picture.",
    },
  ],
  biomechanics: [
    {
      partner: "sportshealing",
      label: "Movement control and integration",
      href: "https://www.sportshealing.com/movement-control-integration/",
      blurb: "How the knee co-ordinates with hip, ankle and trunk during movement.",
    },
    {
      partner: "sportshealing",
      label: "The patellofemoral joint",
      href: "https://www.sportshealing.com/the-patellofemoral-joint/",
      blurb: "Kneecap tracking, and why quadriceps control matters so much.",
    },
    {
      partner: "chinmaygupte",
      label: "Patellofemoral instability and kneecap dislocation",
      href: "https://www.chinmaygupte.com/patellofemoral-instability-dislocating-kneecap/",
      blurb: "When the kneecap slips out of its groove, and what can be done.",
    },
    {
      partner: "chinmaygupte",
      label: "Knock knees (genu valgum)",
      href: "https://www.chinmaygupte.com/genu-valgum-or-knock-knees/",
      blurb: "How leg alignment changes where load lands in the knee.",
    },
  ],
  load: [
    {
      partner: "sportshealing",
      label: "Quadriceps and patellar tendons",
      href: "https://www.sportshealing.com/quadriceps-patellar-tendons/",
      blurb: "The tendons that take the brunt of jumping, running and stairs.",
    },
    {
      partner: "chinmaygupte",
      label: "Rehabilitation protocol downloads",
      href: "https://www.chinmaygupte.com/rehabilitation-protocol-downloads/",
      blurb: "Stage-by-stage rehabilitation programmes used in clinical practice.",
    },
    {
      partner: "chinmaygupte",
      label: "Rehab exercise videos",
      href: "https://www.chinmaygupte.com/rehab-videos/",
      blurb: "Filmed demonstrations of the exercises the protocols prescribe.",
    },
  ],
  prevention: [
    {
      partner: "chinmaygupte",
      label: "Knee injury prevention guidance",
      href: "https://www.chinmaygupte.com/injury-prevention/",
      blurb: "A surgeon's view of what actually reduces knee injury risk.",
    },
    {
      partner: "chinmaygupte",
      label: "ACL injuries and reconstruction",
      href: "https://www.chinmaygupte.com/acl-injuries-best-knee-surgeon/",
      blurb: "Mechanisms, treatment choices and return-to-sport expectations.",
    },
    {
      partner: "chinmaygupte",
      label: "Children's ACL injuries",
      href: "https://www.chinmaygupte.com/childrens-acl-injuries/",
      blurb: "Why growing knees are managed differently.",
    },
    {
      partner: "chinmaygupte",
      label: "Choosing a knee brace",
      href: "https://www.chinmaygupte.com/knee-braces/",
      blurb: "When bracing helps, and when it does not.",
    },
  ],
  imaging: [
    {
      partner: "mykneescore",
      label: "Book a same-day knee MRI in London",
      href: "https://mykneescore.com/booking",
      blurb: "Harley Street scanning with an expert orthopaedic report.",
    },
    {
      partner: "mykneescore",
      label: "Expert MRI report review",
      href: "https://mykneescore.com/expert-review",
      blurb: "A specialist reads your scan and explains what it shows.",
    },
    {
      partner: "sportshealing",
      label: "MRI and your knee",
      href: "https://www.sportshealing.com/mri-your-knee/",
      blurb: "What an MRI can and cannot tell you about knee symptoms.",
    },
    {
      partner: "sportshealing",
      label: "How a radiologist reads your knee MRI",
      href: "https://www.sportshealing.com/how-a-radiologist-reads-your-knee-mri/",
      blurb: "A walk through the images, in plain English.",
    },
  ],
  clinical: [
    {
      partner: "chinmaygupte",
      label: "Knee surgeon in London: conditions treated",
      href: "https://www.chinmaygupte.com/knee-treatments/knee-surgeon-london/",
      blurb: "Consultant-led assessment for complex knee problems.",
    },
    {
      partner: "chinmaygupte",
      label: "Meniscus injuries and repair",
      href: "https://www.chinmaygupte.com/meniscus-injuries/",
      blurb: "Repair versus removal, and what recovery involves.",
    },
    {
      partner: "chinmaygupte",
      label: "Knee osteoarthritis treatment options",
      href: "https://www.chinmaygupte.com/knee-osteoarthritis/",
      blurb: "From conservative care to MAKO resurfacing and replacement.",
    },
    {
      partner: "sportshealing",
      label: "Knee injections",
      href: "https://www.sportshealing.com/knee-injections/",
      blurb: "What injection therapies do, and where they fit.",
    },
    {
      partner: "sportshealing",
      label: "Book a clinic visit",
      href: "https://www.sportshealing.com/appointment/",
      blurb: "Arrange an appointment at the Wellington Knee Unit, London.",
    },
  ],
} satisfies Record<string, PartnerLink[]>;

export type PartnerTopic = keyof typeof PARTNER_LINKS;
