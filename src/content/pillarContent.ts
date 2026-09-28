/**
 * Pillar copy for the OmKnee Five.
 * Source: OmKnee_Seven_Pillars_Rewrite (approved rewrite of the master deck).
 * Compliance rules from the master deck still apply: no supplement claims,
 * no symptom to product routing, no promise of injury prevention.
 */

import type { PillarId } from "@/lib/omkneeFive";
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
  nourish: {
    id: "nourish",
    eyebrow: "The OmKnee Five \u00b7 02 Nourish",
    h1: "Nourish the whole person.",
    intro: [
      "The knee is where a problem may show up, but knee health belongs to the whole person.",
      "Movement, strength, recovery, sleep, gut health and nutrition all shape the body that carries your knees.",
      "We sell supplements. So let us be clear about the order of things.",
      "Food first. Then enough of it, and enough protein, if you are training. Then bone health, which most people ignore until it matters. Then, and only then, whether a supplement earns its place.",
      "If you skip to the end of that list, you are doing what the supplement industry hopes you will do.",
    ],
    sections: [
      {
        title: "Look after the whole person",
        paragraphs: [
          "Keep moving in ways you can sustain. Build strength around the knee. Make room for recovery and sleep, and consider general health alongside the joint itself.",
          "What you want from your knees changes through life. The aim is to maintain enough strength, mobility and confidence for what matters to you.",
        ],
        cta: { label: "Explore Healthy Knees Through Life", to: "/healthy-knees-through-life" },
      },
      {
        title: "Start with the whole diet",
        paragraphs: [
          "There is no magic ingredient. Variety, enough energy, enough protein and not too much of anything does more than any single nutrient.",
          "Fashionable ingredients come and go. That advice has not changed in decades.",
        ],
      },
      {
        title: "Protein and muscle",
        paragraphs: [
          "Muscle is what moves the knee and protects it. Muscle needs protein to build and maintain, plus enough overall food and something to work against.",
          "If you strength train, think of the two together. Training without adequate protein and food is a slow way to get results.",
        ],
      },
      {
        title: "Bone",
        paragraphs: [
          "Bones are the frame the knee hangs on.",
          "Bone health is built through life, mostly through load, adequate nutrition and general health, and it declines quietly if it is neglected. Worth thinking about well before it becomes a problem.",
        ],
      },
      {
        title: "Collagen",
        paragraphs: [
          "Collagen is everywhere in the body and everywhere in the joint supplement aisle. Those two facts are not the same thing.",
          "Different products use different forms, made in different ways, and the research behind them varies enormously. Before buying any collagen product, it is worth understanding what was actually studied and what was not. We have written that up.",
        ],
        cta: { label: "Understand Collagen", to: "/ingredients/collagen" },
      },
      {
        title: "Where supplements fit",
        paragraphs: [
          "A food supplement supplements the diet. That is the legal definition and it is also, honestly, the right way to think about it. It is not a substitute for a varied diet and it is not a treatment for a knee condition.",
          "What we can do is tell you exactly what is in ours, at what dose, and what the evidence does and does not say. Then it is your call.",
        ],
      },
      {
        title: "What supplements cannot do",
        paragraphs: [
          "They will not replace strength work. They will not replace food.",
          "And if your knee is painful, swollen or not working properly, a supplement is not the answer to that question. Getting it looked at is.",
        ],
      },
    ],
    principle: "Look after the person. Food first. Understand supplements. Make informed choices.",
    secondary: { label: "Explore Knee Nutrition", to: "/shop#knee-nutrition" },
    next: { label: "Next: Load", to: "/load" },
    seoTitle: "Nourish | Whole-Person Health & Nutrition",
    seoDescription:
      "Whole-person knee health: movement, recovery, sleep, gut health, balanced nutrition, protein, bone health and informed supplement choices.",
  },

  understand: {
    id: "understand",
    eyebrow: "The OmKnee Five \u00b7 01 Understand",
    h1: "Know your knee.",
    intro: [
      "From outside it looks like a hinge. It is not.",
      "The knee bends and straightens, yes, but it also rotates, glides and shifts slightly as it moves. It has to be stable enough to land on and mobile enough to squat with.",
      "That is a hard brief, and understanding how it is met makes everything else on this site make more sense.",
    ],
    sections: [
      {
        title: "The structures of the knee",
        paragraphs: [],
        items: [
          {
            title: "Bones",
            copy: "Femur above, tibia below, patella at the front. Their shapes are not accidental. The curves of the femur and the shallow surface of the tibia are why the knee can roll and glide rather than just fold.",
          },
          {
            title: "Cartilage",
            copy: "Articular cartilage covers the ends of the bones. It is smoother than ice on ice, and it lets the joint move thousands of times a day with almost no friction. It has poor blood supply, which is part of why cartilage problems are taken seriously.",
          },
          {
            title: "Menisci",
            copy: "Two C shaped pads of fibrocartilage between femur and tibia. They spread load across the joint and contribute to stability.",
          },
          {
            title: "Ligaments",
            copy: "The ACL and PCL cross in the middle of the joint and control front to back movement and rotation. The MCL and LCL sit at the sides and resist side to side stress. Different ligaments, different jobs, different injuries.",
          },
          {
            title: "Muscles and tendons",
            copy: "Muscles create the movement. Tendons transmit it to bone. The quadriceps and patellar tendons at the front, the hamstrings behind, the calves below. Strong, well controlled muscles are the knee's best protection.",
          },
          {
            title: "Synovial fluid",
            copy: "The knee is a synovial joint, sealed in a capsule containing fluid that lubricates the surfaces and helps nourish the cartilage. When a knee swells, it is usually this environment reacting to something.",
          },
        ],
      },
      {
        title: "More than one direction",
        paragraphs: [
          "Because the knee rotates and glides as well as bends, walking, running, squatting and changing direction all need coordination between the knee, the hip and the ankle.",
          "That is why so much of knee rehabilitation is actually about the rest of the leg.",
        ],
      },
      {
        title: "Want to go deeper?",
        paragraphs: [
          "This page covers the essentials.",
          "For proper anatomy and biomechanics, structure by structure, the Knee Passport lives at SportsHealing.",
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
    next: { label: "Next: Nourish", to: "/nourish" },
    seoTitle: "Understand | Know Your Knee",
    seoDescription:
      "An accessible introduction to knee anatomy: bones, cartilage, menisci, ligaments, muscles, tendons and synovial fluid, and how the knee actually moves.",
  },

  load: {
    id: "load",
    eyebrow: "The OmKnee Five \u00b7 03 Load",
    h1: "Understand what you ask your knee to do.",
    intro: [
      "Every step loads your knee. So does every stair, squat and run. The joint is built for it.",
      "One of the most common beliefs worth undoing is that load is bad for knees and that the safest thing is to do less. It is not. Joints that are not loaded lose strength around them, and weak knees hurt more, not less.",
      "The question is never how do I avoid load. It is how does what I am asking match what I have prepared for.",
    ],
    sections: [
      {
        title: "Load and capacity",
        paragraphs: [
          "Load is the demand. Capacity is what you can handle. Both move.",
          "A regular runner has capacity for running. Take three months off and the capacity drops, even though the memory of running 10k is still there. Go straight back to 10k and the knee finds out first.",
        ],
      },
      {
        title: "It is the change that gets you",
        paragraphs: [
          "Very often the problem is not the activity. It is how fast it changed.",
          "Distance, pace, hills, frequency, resistance, a new sport, a new pair of shoes. Any of them can shift the demand faster than the body adapts. Progress gradually and the body keeps up. Jump and it cannot.",
        ],
      },
      {
        title: "Load is not the enemy",
        paragraphs: [
          "For a healthy knee, and for most knees with a problem, staying active is part of the answer. Therapeutic exercise is a core part of established osteoarthritis management, not an alternative to it.",
          "Rest has its place in the short term. As a long term strategy it usually makes things worse.",
        ],
      },
      {
        title: "Think in weeks",
        paragraphs: [
          "A hard session is not a problem. Three hard sessions in a row might be.",
          "Look at your pattern across a week rather than judging each day on its own.",
        ],
      },
      {
        title: "Coming back after a break",
        paragraphs: [
          "Illness, injury, holiday, work, life. Whatever paused you, your last level is not your current level.",
          "Build back rather than resuming. It feels slower but you will get there sooner.",
        ],
      },
      {
        title: "Prepare for the activity",
        paragraphs: [
          "A long walk, a heavy squat, a ski turn and a sharp change of direction are different questions for your knee. Preparation should answer the one you are actually asking.",
          "Strength, control, balance and gradual progression all help build the capacity an activity demands. What you do in the weeks before matters more than a last-minute warm-up.",
        ],
      },
      {
        title: "Listen to change",
        paragraphs: [
          "Ordinary tiredness after effort is normal.",
          "Persistent swelling, giving way, locking, significant pain or a knee that is clearly not doing what it used to are not. Those deserve attention.",
        ],
      },
    ],
    principle: "Build capacity rather than fearing load.",
    next: { label: "Next: Diagnose", to: "/diagnose" },
    seoTitle: "Load | Understand What You Ask Your Knee To Do",
    seoDescription:
      "Load and capacity explained without fear. How activity, progression, recovery and returning after a break shape what your knees are prepared to do.",
  },

  diagnose: {
    id: "diagnose",
    eyebrow: "The OmKnee Five \u00b7 04 Diagnose",
    h1: "Understand what is happening.",
    intro: [
      "Sometimes a knee changes. Pain, swelling, stiffness, giving way, an injury, or just a quiet loss of trust in what it will do.",
      "Diagnosis means working out what is actually going on, which is different from finding something on a scan and giving it a name.",
    ],
    sections: [
      {
        title: "Check",
        paragraphs: [
          "Start with how the knee is behaving. Pain, function, confidence, what it stops you doing and how that has changed. Your account matters more than most people expect.",
          "The Knee Score gives that a structure and a number you can track.",
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
          "A good clinical assessment starts with the story: what happened, where it hurts, what has changed, what you cannot do.",
          "Then the examination: movement, swelling, stability, strength, how the knee behaves under a hand.",
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
          "Imaging adds information when it is needed. Different scans answer different questions.",
          "X ray shows bone, alignment and joint space. MRI shows the soft tissues in detail. Ultrasound can look at some structures while they move, and can guide procedures.",
          "Not every knee problem needs a scan, and a scan without a good assessment can create more questions than it answers.",
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
        title: "Put it together",
        paragraphs: [
          "Plenty of pain free knees look untidy on MRI.",
          "Findings only mean something alongside symptoms, history and examination. That is the difference between an image and a diagnosis.",
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
        title: "When to seek help",
        paragraphs: [
          "After a significant injury. When symptoms persist, worsen or start affecting what you can do. Some acute or severe symptoms need urgent assessment.",
          "If in doubt, get it looked at. A knee that is checked and fine costs an appointment. A knee that is not checked and is not fine costs more.",
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
    eyebrow: "The OmKnee Five \u00b7 05 Treat",
    h1: "Find the right care at the right time.",
    intro: [
      "There is no single treatment for a knee problem, because there is no single knee problem.",
      "The right approach depends on what is happening, how much it matters to you and what you want to get back to.",
      "And, said plainly: treatment does not usually mean surgery.",
    ],
    sections: [
      {
        title: "Manage",
        paragraphs: [
          "A lot of knee problems settle with understanding what is going on, adjusting activity, managing load and giving it time.",
          "That means doing the right things while it settles rather than doing less forever.",
        ],
        cta: { label: "Understand Knee Load", to: "/load", treatPathway: "manage" },
      },
      {
        title: "Rehabilitate",
        paragraphs: [
          "Rehab is where most knee recovery actually happens. Mobility, strength, balance, control, and a progressive return to what you want to do.",
          "A good programme is built around the problem and the person, not downloaded from a template.",
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
          "Sometimes a brace, cooling or a practical aid helps as part of a wider plan.",
          "It should sit alongside an assessment and rehab, never replace them.",
        ],
        cta: { label: "Explore Knee Support", to: "/shop#braces-supports", treatPathway: "support" },
      },
      {
        title: "Intervene",
        paragraphs: [
          "Injections and other procedures have specific uses, specific limits and real risks.",
          "They are a decision made after assessment and a proper conversation, not a first stop.",
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
          "Surgery is one tool among several. For some problems it is the right one, when it fits the diagnosis, the symptoms, the person and what they want back.",
          "Different operations do different jobs.",
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
          "The point of treatment is getting back to movement, activity and life.",
          "Rebuilding strength and confidence takes time, and it brings the whole journey back to where it started.",
        ],
        cta: { label: "Nourish the Whole Person", to: "/nourish", treatPathway: "recover" },
      },
    ],
    principle:
      "The right treatment is the treatment that fits the problem and the person.",
    seoTitle: "Treat | Find The Right Care At The Right Time",
    seoDescription:
      "Treatment does not necessarily mean surgery. Manage, rehabilitate, support, intervene, surgery and recover, explained as an educational pathway.",
  },
};
