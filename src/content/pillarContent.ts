/**
 * Approved pillar copy from the OmKneeHealth Master Website Copy Deck.
 * Structured so that the Seven are defined once and rendered by PillarPage.
 * Wording is reproduced from the approved deck and should not be rewritten
 * without an approved copy update.
 */

import type { PillarId } from "@/lib/omkneeSeven";
import type { DiagnosePathway, TreatPathway, EcosystemDestination } from "@/lib/analytics";

export interface PillarSection {
  title: string;
  paragraphs: string[];
  items?: { title: string; copy: string }[];
  cta?: {
    label: string;
    /** Internal route. */
    to?: string;
    /** External ecosystem destination. */
    href?: string;
    ecosystem?: EcosystemDestination;
    destinationLabel?: string;
    diagnosePathway?: DiagnosePathway;
    treatPathway?: TreatPathway;
  };
}

export interface PillarContent {
  id: PillarId;
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: PillarSection[];
  principle: string;
  next?: { label: string; to: string };
  secondary?: { label: string; to: string };
  seoTitle: string;
  seoDescription: string;
}

export const PILLAR_CONTENT: Record<PillarId, PillarContent> = {
  wellness: {
    id: "wellness",
    eyebrow: "The OmKnee Seven \u00b7 01 Wellness",
    h1: "Look after the whole person.",
    intro: [
      "Your knee does not exist in isolation.",
      "The way you move is influenced by your strength, general health, sleep, recovery, confidence, activity levels and the physical demands of everyday life.",
      "Looking after your knees therefore begins with looking after yourself.",
    ],
    sections: [
      {
        title: "Keep moving",
        paragraphs: [
          "Regular physical activity matters throughout life.",
          "Walking, cycling, swimming, strength training, sport and other forms of movement place different demands on the body, but all can contribute to maintaining physical capacity.",
          "The best activity is often one that is appropriate for you and sustainable enough to become part of life.",
        ],
      },
      {
        title: "Build strength",
        paragraphs: [
          "Muscles generate and control movement around the knee.",
          "Strengthening the legs and the wider movement chain can improve physical capacity and help prepare the body for everyday and sporting demands.",
          "Strength is relevant at every age.",
        ],
      },
      {
        title: "Make recovery part of activity",
        paragraphs: [
          "Activity and recovery belong together.",
          "Training, work and everyday life all create physical demands. Recovery gives the body time to adapt before those demands are repeated.",
          "Good recovery does not necessarily mean doing nothing. It may mean varying activity, adjusting intensity or allowing sufficient time between harder sessions.",
        ],
      },
      {
        title: "Sleep well",
        paragraphs: [
          "Sleep is an important part of general health and recovery.",
          "Rather than treating sleep as a separate knee treatment, we consider it one part of the wider health picture.",
        ],
      },
      {
        title: "Maintain a healthy body composition",
        paragraphs: [
          "Body composition can influence general health, physical capacity and the demands associated with movement.",
          "The aim should not be to pursue an arbitrary number, but to support health, strength, mobility and sustainable habits.",
        ],
      },
      {
        title: "Keep moving through life",
        paragraphs: [
          "The activities we value change with age, work, family, sport and health.",
          "Maintaining movement and physical capacity can help preserve the freedom to continue doing the things that matter.",
        ],
        cta: { label: "Explore Healthy Knees Through Life", to: "/healthy-knees-through-life" },
      },
    ],
    principle: "Look after the body that carries your knees.",
    next: { label: "Next: Nourish", to: "/nourish" },
    seoTitle: "Wellness | Look After the Whole Person",
    seoDescription:
      "Movement, strength, recovery, sleep, body composition and healthy ageing. The first pillar of the OmKnee Seven approach to lifelong knee health.",
  },

  nourish: {
    id: "nourish",
    eyebrow: "The OmKnee Seven \u00b7 02 Nourish",
    h1: "Nourish the body that moves you.",
    intro: [
      "Nutrition is part of overall health.",
      "Food provides energy, protein, fats, carbohydrates, vitamins, minerals and other nutrients used throughout the body.",
      "Our approach starts with food and considers supplementation within that wider context.",
    ],
    sections: [
      {
        title: "Start with the whole diet",
        paragraphs: [
          "No single nutrient defines a healthy diet.",
          "Variety, balance and sufficient overall nutrition matter more than focusing on one fashionable ingredient.",
        ],
      },
      {
        title: "Protein and muscle",
        paragraphs: [
          "Muscle is central to movement.",
          "Dietary protein provides amino acids used by the body to build and maintain proteins, alongside adequate energy intake and physical activity.",
          "For people who exercise, strength training and nutrition should be considered together.",
        ],
      },
      {
        title: "Bone health",
        paragraphs: [
          "Healthy bones form the structural foundations of the knee.",
          "Nutrition, physical activity and other lifestyle factors contribute to maintaining normal bone health throughout life.",
        ],
      },
      {
        title: "Collagen and connective tissue",
        paragraphs: [
          "Collagen is an important structural protein found throughout the body, including connective tissues.",
          "It is also one of the most discussed ingredients in joint supplements.",
          "Understanding the different forms of collagen, how supplements are produced and what research has actually investigated is more useful than assuming all collagen products are equivalent.",
        ],
        cta: { label: "Understand Collagen", to: "/ingredients/collagen" },
      },
      {
        title: "Where do supplements fit?",
        paragraphs: [
          "A food supplement is intended to supplement the normal diet. It should not be regarded as a substitute for a varied diet or as a treatment for a knee condition.",
          "Our aim is to provide clear information about ingredients, formulation and use so that you can make an informed choice.",
        ],
      },
      {
        title: "What supplements cannot do",
        paragraphs: [
          "A supplement should not be presented as a shortcut around movement, strength, appropriate healthcare or a balanced diet.",
          "If you have a persistent knee problem, injury or significant change in function, buying a supplement is not a substitute for appropriate assessment.",
        ],
      },
    ],
    principle: "Food first. Understand supplements. Make informed choices.",
    secondary: { label: "Explore Knee Nutrition", to: "/shop#knee-nutrition" },
    next: { label: "Next: Understand", to: "/understand" },
    seoTitle: "Nourish | Nutrition for Knee Health",
    seoDescription:
      "Food first. Whole diet, protein, bone health, collagen and connective tissue, and where food supplements do and do not fit within knee health.",
  },

  understand: {
    id: "understand",
    eyebrow: "The OmKnee Seven \u00b7 03 Understand",
    h1: "Know your knee.",
    intro: [
      "The knee looks simple from the outside.",
      "Inside, it is a sophisticated interaction between bones, cartilage, menisci, ligaments, tendons, muscles and the tissues that surround the joint.",
      "Understanding these structures makes it easier to understand movement, loading, injury and recovery.",
    ],
    sections: [
      {
        title: "The structures of the knee",
        paragraphs: [],
        items: [
          {
            title: "Bones",
            copy: "The knee brings together the femur and tibia, with the patella at the front of the joint. Their shape contributes to how the knee moves.",
          },
          {
            title: "Cartilage",
            copy: "Articular cartilage covers the joint surfaces and provides a smooth, low friction interface for movement.",
          },
          {
            title: "Menisci",
            copy: "The medial and lateral menisci sit between the femur and tibia. They contribute to load distribution and the mechanics of the knee.",
          },
          {
            title: "Ligaments",
            copy: "Ligaments help guide and stabilise movement. The cruciate and collateral ligaments have different roles in controlling movement between the bones.",
          },
          {
            title: "Muscles and tendons",
            copy: "Muscles create movement. Tendons connect muscle to bone and transmit the forces that allow the knee to bend, straighten and respond to activity.",
          },
          {
            title: "Synovial fluid",
            copy: "The knee is a synovial joint. Synovial fluid forms part of the internal joint environment and contributes to lubrication of the articulating surfaces.",
          },
        ],
      },
      {
        title: "Your knee moves in more than one direction",
        paragraphs: [
          "The knee bends and straightens, but movement also includes rotation and smaller translations between the joint surfaces.",
          "Walking, running, squatting and changing direction therefore require coordination across the knee and the rest of the lower limb.",
        ],
      },
      {
        title: "Want to understand more?",
        paragraphs: [
          "OmKneeHealth provides the essentials.",
          "For a deeper exploration of knee anatomy, biomechanics and individual structures, continue to the Knee Passport.",
        ],
        cta: {
          label: "Explore the Knee Passport",
          href: "https://www.sportshealing.com/",
          ecosystem: "sportshealing",
          destinationLabel: "SportsHealing",
        },
      },
    ],
    principle:
      "The better you understand your knee, the easier it is to understand what you ask it to do.",
    next: { label: "Next: Load", to: "/load" },
    seoTitle: "Understand | Know Your Knee",
    seoDescription:
      "An accessible introduction to knee anatomy: bones, cartilage, menisci, ligaments, muscles, tendons and synovial fluid, and how the knee actually moves.",
  },

  load: {
    id: "load",
    eyebrow: "The OmKnee Seven \u00b7 04 Load",
    h1: "Understand what you ask your knee to do.",
    intro: [
      "Load is part of life.",
      "Walking loads the knee. Stairs load the knee. Strength training loads the knee. Running and sport increase and change those demands.",
      "The aim is not to remove load from healthy movement.",
      "It is to understand the relationship between what you ask your body to do and what it is currently prepared to do.",
    ],
    sections: [
      {
        title: "Load and capacity",
        paragraphs: [
          "Think of load as the demand placed on the body.",
          "Capacity is the ability to respond to that demand.",
          "Both can change.",
          "A regular runner may tolerate demands that feel difficult after several months away from running. Someone accustomed to strength training may respond differently to the same exercise as someone beginning for the first time.",
        ],
      },
      {
        title: "Change matters",
        paragraphs: [
          "Sometimes it is not the activity itself that is important, but how quickly it changes.",
          "Distance, speed, frequency, resistance, terrain and duration can all alter the demands of an activity.",
          "Progression gives the body an opportunity to adapt.",
        ],
      },
      {
        title: "Load is not the enemy",
        paragraphs: [
          "Avoiding movement altogether is not the goal of knee health.",
          "Appropriate activity and exercise are central to maintaining physical function, and therapeutic exercise is also a core part of established osteoarthritis management when clinically relevant.",
        ],
      },
      {
        title: "Recovery matters",
        paragraphs: [
          "Harder activity creates different demands from easier activity.",
          "Consider the pattern across a week rather than viewing every session in isolation.",
        ],
      },
      {
        title: "Returning after a break",
        paragraphs: [
          "Your previous ability does not always represent your current capacity.",
          "After illness, injury, travel, work pressures or simply time away from activity, build back progressively rather than immediately returning to previous volumes.",
        ],
      },
      {
        title: "Listen to change",
        paragraphs: [
          "Persistent swelling, instability, locking, significant pain or a meaningful loss of function deserves more attention than ordinary exertion or short lived muscular fatigue.",
        ],
      },
    ],
    principle: "Build capacity rather than fearing load.",
    next: { label: "Next: Prepare", to: "/prepare" },
    seoTitle: "Load | Understand What You Ask Your Knee To Do",
    seoDescription:
      "Load and capacity explained without fear. How activity, progression, recovery and returning after a break shape what your knees are prepared to do.",
  },

  prepare: {
    id: "prepare",
    eyebrow: "The OmKnee Seven \u00b7 05 Prepare",
    h1: "Prepare for what you want to do.",
    intro: [
      "Different activities ask different things of your knees.",
      "A long walk, a heavy squat, a ski turn and a change of direction on a football pitch are not the same movement challenge.",
      "Preparation should reflect what you want your body to do.",
    ],
    sections: [
      {
        title: "Strength",
        paragraphs: [
          "Strength provides physical capacity.",
          "For the knee, this includes more than the quadriceps.",
          "The hips, hamstrings, calves and wider lower limb all contribute to movement.",
        ],
      },
      {
        title: "Movement control",
        paragraphs: [
          "Strength must be expressed through movement.",
          "Control, coordination and technique influence how we perform tasks such as landing, changing direction, squatting and stepping.",
        ],
      },
      {
        title: "Balance and proprioception",
        paragraphs: [
          "Movement depends partly on our ability to sense and respond to body position.",
          "Balance and proprioceptive training can therefore form part of preparation for many activities.",
        ],
      },
      {
        title: "Warm up with purpose",
        paragraphs: [
          "A useful warm up prepares you for the activity that follows.",
          "That may involve increasing body temperature, moving through relevant ranges of motion and progressively introducing movements similar to those required during the session.",
        ],
      },
      {
        title: "Progress gradually",
        paragraphs: [
          "Preparation is not only what happens in the ten minutes before activity.",
          "It is also the work done over the preceding days, weeks and months.",
        ],
      },
      {
        title: "Prepare for your activity",
        paragraphs: [],
        items: [
          { title: "Running", copy: "Build distance and intensity progressively." },
          {
            title: "Skiing",
            copy: "Consider strength, endurance, balance and repeated turning demands before the trip.",
          },
          {
            title: "Football",
            copy: "Running alone does not fully prepare the body for acceleration, deceleration and changes of direction.",
          },
          {
            title: "Tennis and padel",
            copy: "Prepare for repeated lateral movement, acceleration and rotation.",
          },
          {
            title: "Gym",
            copy: "Technique, appropriate resistance and progression matter more than chasing load for its own sake.",
          },
        ],
      },
      {
        title: "Can every injury be prevented?",
        paragraphs: [
          "No.",
          "Sport and physical activity always involve some risk.",
          "The objective is to prepare well and reduce modifiable risks where possible, not to promise that injury will never happen.",
        ],
      },
    ],
    principle: "Prepare for the activity you want to enjoy.",
    next: { label: "Next: Diagnose", to: "/diagnose" },
    seoTitle: "Prepare | Prepare For What You Want To Do",
    seoDescription:
      "Strength, movement control, balance, warm up and gradual progression. How to prepare your knees for running, skiing, football, racket sport and the gym.",
  },

  diagnose: {
    id: "diagnose",
    eyebrow: "The OmKnee Seven \u00b7 06 Diagnose",
    h1: "Understand what is happening.",
    intro: [
      "Sometimes something changes.",
      "Your knee may become painful, swollen, stiff or unstable. There may have been an injury. Movement may feel different, or activities that were previously straightforward may become difficult.",
      "Diagnosis is about understanding the problem, not simply naming an abnormality.",
    ],
    sections: [
      {
        title: "Check",
        paragraphs: [
          "Start with how your knee is functioning.",
          "Your experience matters.",
          "Pain, function, confidence, activity and changes over time all provide useful information.",
          "The Knee Score provides a structured way to reflect on some of these factors.",
        ],
        cta: {
          label: "Take the Knee Score",
          to: "/knee-score",
          destinationLabel: "MyKneeScore",
          diagnosePathway: "check",
        },
      },
      {
        title: "Assess",
        paragraphs: [
          "The story and examination matter.",
          "A clinical assessment usually starts by understanding what happened, where symptoms are felt, how they have changed and what the knee is preventing you from doing.",
          "Examination can then provide further information about movement, swelling, stability, strength and function.",
        ],
        cta: {
          label: "Explore Specialist Knee Assessment",
          href: "https://www.sportshealing.com/",
          ecosystem: "sportshealing",
          destinationLabel: "SportsHealing",
          diagnosePathway: "assess",
        },
      },
      {
        title: "Scan",
        paragraphs: [
          "Imaging can add information when it is needed.",
          "Different investigations show different things.",
          "An X ray provides information about bones, alignment and joint spaces.",
          "MRI provides detailed information about many of the soft tissues and structures within the knee.",
          "Ultrasound can assess selected superficial structures dynamically and can also be used to guide some procedures.",
          "Not every knee problem requires imaging.",
          "The appropriate investigation depends on the clinical situation.",
        ],
        cta: {
          label: "Understand Knee Imaging",
          href: "https://mykneescan.com/",
          ecosystem: "mykneescan",
          destinationLabel: "MyKneeScan",
          diagnosePathway: "scan",
        },
      },
      {
        title: "Understand",
        paragraphs: [
          "A scan is not the whole diagnosis.",
          "Imaging findings need context.",
          "Symptoms, history, examination, activity and investigation findings are considered together to understand what may be relevant to the individual.",
        ],
        cta: {
          label: "Explore Specialist Knee Care",
          href: "https://www.sportshealing.com/",
          ecosystem: "sportshealing",
          destinationLabel: "SportsHealing",
          diagnosePathway: "understand",
        },
      },
      {
        title: "When should you seek help?",
        paragraphs: [
          "Consider appropriate professional assessment when there has been a significant injury or when symptoms are persistent, worsening or meaningfully affecting movement and everyday function.",
          "Urgent assessment may be required for some acute or severe symptoms.",
        ],
      },
    ],
    principle:
      "Understand the person, the knee and the problem before deciding what comes next.",
    next: { label: "Next: Treat", to: "/treat" },
    seoTitle: "Diagnose | Understand What Is Happening",
    seoDescription:
      "Check, assess, scan and understand. An educational guide to how a knee problem is investigated, and where each step of the pathway takes place.",
  },

  treat: {
    id: "treat",
    eyebrow: "The OmKnee Seven \u00b7 07 Treat",
    h1: "Find the right care at the right time.",
    intro: [
      "There is no single treatment for a knee problem.",
      "The appropriate approach depends on what is happening, how much it matters to the individual and what they want to return to doing.",
      "Treatment does not necessarily mean surgery.",
    ],
    sections: [
      {
        title: "Manage",
        paragraphs: [
          "Start with the problem and the person.",
          "Some knee problems can be managed through education, appropriate activity, load management and time.",
          "The aim is not simply to make the knee do less. It is to find an approach appropriate to the individual situation.",
        ],
        cta: { label: "Understand Knee Load", to: "/load", treatPathway: "manage" },
      },
      {
        title: "Rehabilitate",
        paragraphs: [
          "Build movement and capacity.",
          "Rehabilitation may involve mobility, strength, balance, movement control and progressive return to activity.",
          "The programme should reflect both the problem and the activities the individual wants to regain.",
        ],
        cta: {
          label: "Explore Knee Rehabilitation",
          href: "https://www.sportshealing.com/",
          ecosystem: "sportshealing",
          destinationLabel: "SportsHealing",
          treatPathway: "rehabilitate",
        },
      },
      {
        title: "Support",
        paragraphs: [
          "Sometimes practical support is useful.",
          "Depending on the circumstances, braces, cooling products or other practical aids may form part of a wider management or recovery plan.",
          "They should be considered in context rather than as replacements for appropriate assessment or rehabilitation.",
        ],
        cta: { label: "Explore Knee Support", to: "/shop#braces-supports", treatPathway: "support" },
      },
      {
        title: "Intervene",
        paragraphs: [
          "Some problems may be considered for additional procedures.",
          "Injections and other interventions have specific indications, limitations and potential risks.",
          "The decision to proceed should follow appropriate assessment and discussion.",
        ],
        cta: {
          label: "Understand Knee Procedures",
          href: "https://www.sportshealing.com/",
          ecosystem: "sportshealing",
          destinationLabel: "SportsHealing",
          treatPathway: "intervene",
        },
      },
      {
        title: "Surgery",
        paragraphs: [
          "Surgery is one part of knee care.",
          "For some conditions, surgery may be considered when appropriate to the diagnosis, symptoms, function, individual circumstances and treatment goals.",
          "Different procedures address different problems.",
        ],
        cta: {
          label: "Explore Knee Surgery",
          href: "https://www.chinmaygupte.com/",
          ecosystem: "chinmaygupte",
          destinationLabel: "SportsHealing / ChinmayGupte.com",
          treatPathway: "surgery",
        },
      },
      {
        title: "Recover",
        paragraphs: [
          "Treatment is not the destination.",
          "The objective is to return to movement, activity and life.",
          "Recovery may involve rebuilding strength, confidence, movement and capacity over time.",
          "And that brings the journey back to where it began.",
        ],
        cta: { label: "Keep Moving", to: "/wellness", treatPathway: "recover" },
      },
    ],
    principle:
      "The right treatment is the treatment that is appropriate for the problem and the person.",
    seoTitle: "Treat | Find The Right Care At The Right Time",
    seoDescription:
      "Treatment does not necessarily mean surgery. Manage, rehabilitate, support, intervene, surgery and recover, explained as an educational pathway.",
  },
};
