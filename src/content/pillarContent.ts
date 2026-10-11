/**
 * Pillar copy for the OmKnee Five.
 * Source: handover Appendix A (A4 to A8), final wording. Where Appendix A says
 * "keep existing copy", the earlier approved text is carried over unchanged.
 * Compliance (Appendix D): no supplement claims, no symptom to product routing,
 * no promise of injury prevention, no product content on Diagnose.
 */

import type { PillarId } from "@/lib/omkneeFive";
import type { ContentClosing, ContentSection } from "./contentBlocks";
import type { DiagramId } from "./diagrams";
import type { FigureId } from "./figures";
import { SUPPLEMENT_PATH } from "./supplement";
import { CLINICS, ONLINE_CONSULTATION } from "./clinics";
import { TEAM } from "./team";
import { BLOOD_TEST_LINKS } from "@/lib/bookingLinks";

export interface PillarContent {
  id: PillarId;
  eyebrow: string;
  h1: string;
  intro: string[];
  /** Diagram shown under the intro instead of the pillar image. */
  heroDiagram?: DiagramId;
  /** Final artwork shown under the intro instead of the pillar image. */
  heroFigure?: FigureId;
  sections: ContentSection[];
  closing: ContentClosing;
  seoTitle: string;
  seoDescription: string;
}

const KNEE_SCORE_SMALL_PRINT = "The Knee Score is a self assessment tool. It does not provide a medical diagnosis.";

export const PILLAR_CONTENT: Record<PillarId, PillarContent> = {
  understand: {
    id: "understand",
    eyebrow: "The OmKnee Five · 01 Understand",
    h1: "Know your knee.",
    intro: [
      "Every part of your knee is alive. Each tissue responds to how you load it, feed it and rest it. Knowing how they adapt makes the rest of the OmKnee Five make sense.",
    ],
    heroFigure: "kneeSketches",
    sections: [
      {
        title: "The structures of the knee",
        blocks: [
          { type: "figure", id: "bonesOfTheKnee" },
          {
            type: "cards",
            items: [
              {
                title: "Bone",
                copy: "Adapts to load. Regular impact and strength work signal bone to stay dense. Needs protein, calcium and vitamin D. Renewal is linked to sleep and daily rhythm.",
              },
              {
                title: "Cartilage",
                copy: "Covers the joint surfaces. Has no blood supply, so it relies on movement to circulate joint fluid. Gentle regular loading keeps it healthy.",
              },
              {
                title: "Menisci",
                copy: "Two C shaped pads of fibrocartilage between femur and tibia. They spread load across the joint and contribute to stability.",
              },
              {
                title: "Ligaments and tendons",
                copy: "Made mostly of collagen. They adapt slowly, over weeks and months. Gradual loading and good recovery matter more than intensity.",
              },
              {
                title: "Muscle",
                copy: "The knee's active protection. Responds fastest of all tissues to training. Needs protein and sleep to grow and repair.",
              },
              {
                title: "Synovial fluid",
                copy: "The knee is a synovial joint, sealed in a capsule containing fluid that lubricates the surfaces and helps nourish the cartilage. When a knee swells, it is usually this environment reacting to something.",
              },
            ],
          },
          { type: "figure", id: "kneeTendons" },
        ],
      },
      {
        id: "adaptation",
        eyebrow: "The adaptation rule",
        title: "Load, feed, rest, repeat.",
        blocks: [
          { type: "p", text: "Tissue gets stronger when three things happen together:" },
          {
            type: "cycle",
            steps: [
              { label: "Load sends the signal to adapt.", link: { label: "Load", to: "/load" } },
              { label: "Nutrition supplies the building blocks.", link: { label: "Nourish", to: "/nourish" } },
              { label: "Sleep and recovery give the time to rebuild.", link: { label: "Sleep", to: "/wellness#sleep" } },
            ],
          },
          { type: "p", text: "Remove any one and adaptation slows." },
          { type: "diagram", id: "D7" },
        ],
      },
      {
        title: "More than one direction",
        blocks: [
          {
            type: "p",
            text: "Because the knee rotates and glides as well as bends, walking, running, squatting and changing direction all need coordination between the knee, the hip and the ankle.",
          },
          { type: "p", text: "That is why so much of knee rehabilitation is actually about the rest of the leg." },
          { type: "figure", id: "kneeBendRange" },
          { type: "figure", id: "kneeMovementAxes" },
        ],
      },
      {
        title: "Want to go deeper?",
        blocks: [
          { type: "p", text: "This page covers the essentials." },
          {
            type: "p",
            text: "For proper anatomy and biomechanics, structure by structure, the Knee Passport lives at SportsHealing.",
          },
          {
            type: "cta",
            cta: {
              label: "Explore the Knee Passport",
              href: "https://www.sportshealing.com/",
              ecosystem: "sportshealing",
              destinationLabel: "SportsHealing",
            },
          },
        ],
      },
    ],
    closing: {
      principle: "The better you understand your knee, the easier it is to look after it.",
      cta: { label: "Next: Nourish", to: "/nourish" },
    },
    seoTitle: "Understand | Know Your Knee",
    seoDescription:
      "Every part of your knee is alive. Learn how bone, cartilage, ligaments, tendons and muscle adapt to load, food and rest.",
  },

  nourish: {
    id: "nourish",
    eyebrow: "The OmKnee Five · 02 Nourish",
    h1: "Nourish the body that moves you.",
    intro: [
      "Your knee sits on two of the longest bones in your body. Bone is living tissue, broken down and rebuilt throughout life. What you eat gives it the raw materials. Our approach is simple: food first, bone first.",
    ],
    heroFigure: "nourishYourKnees",
    sections: [
      {
        id: "bone",
        eyebrow: "Bone is always renewing",
        title: "Your skeleton is never finished.",
        blocks: [
          {
            type: "p",
            text: "Specialised cells remove old bone and lay down new bone every day. Bone mass builds through childhood and the teens, peaks in early adulthood, then slowly declines. Good nutrition and loading help you build more early and keep more later.",
          },
          { type: "diagram", id: "D5" },
        ],
      },
      {
        id: "building-blocks",
        eyebrow: "The bone building blocks",
        title: "What your bones are made from.",
        blocks: [
          { type: "diagram", id: "D6" },
          {
            type: "table",
            columns: ["Nutrient", "Role in bone", "Everyday sources"],
            rows: [
              ["Protein", "Forms the collagen framework of bone", "Fish, eggs, dairy, pulses, meat, tofu"],
              ["Calcium", "The main mineral that gives bone strength", "Dairy, fortified plant drinks, tinned fish with bones, tofu, green leafy veg"],
              ["Vitamin D", "Helps the body absorb and use calcium", "Sunlight on skin in summer, oily fish, eggs, fortified foods"],
              ["Vitamin C", "Needed for normal collagen formation in bone and cartilage", "Citrus, berries, peppers, kiwi, broccoli"],
              ["Vitamin K", "Involved in bone protein function", "Green leafy veg, fermented foods"],
              ["Magnesium", "Part of bone mineral", "Nuts, seeds, whole grains, pulses"],
            ],
          },
        ],
      },
      {
        id: "vitamin-d",
        eyebrow: "Vitamin D in the UK",
        title: "A note for autumn and winter.",
        blocks: [
          {
            type: "p",
            text: "From October to March, UK sunlight is too weak to make enough vitamin D. UK government advice is that everyone should consider a daily 10 microgram supplement in these months.",
          },
          {
            type: "cta",
            cta: { label: "NHS vitamin D guidance", href: "https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/" },
          },
        ],
      },
      {
        id: "collagen",
        eyebrow: "Collagen",
        title: "Collagen: the fibre that binds.",
        blocks: [
          {
            type: "p",
            text: "Collagen is the main protein in bone, cartilage, tendon and ligament. Your body makes it from amino acids in dietary protein, and needs vitamin C to do so. Collagen supplements are widely discussed. The evidence is still developing, and we explain it honestly.",
          },
          { type: "figure", id: "collagenStructure" },
          { type: "cta", cta: { label: "Understand collagen", to: "/ingredients/collagen" } },
        ],
      },
      {
        id: "protein",
        eyebrow: "Protein and muscle",
        title: "Strong muscles protect the knee.",
        blocks: [
          {
            type: "p",
            text: "Protein supports muscle as well as bone. Spreading it across meals, and pairing it with strength training, is more useful than one large serving.",
          },
          { type: "figure", id: "fuelYourKnees" },
        ],
      },
      {
        title: "What works against bone",
        blocks: [
          {
            type: "list",
            items: [
              "Very low calorie or restrictive diets",
              "Heavy alcohol use",
              "Smoking",
              "Long-term inactivity",
              { text: "Poor sleep", link: { label: "Sleep and your knee", to: "/wellness#sleep" } },
            ],
          },
        ],
      },
      {
        title: "Eating for sleep",
        blocks: [
          {
            type: "list",
            items: [
              "Keep evening meals moderate in size",
              "Limit alcohol, which disrupts sleep quality",
              "Keep caffeine to earlier in the day",
            ],
          },
        ],
      },
      {
        id: "supplements",
        eyebrow: "Where do supplements fit?",
        title: "Food first.",
        blocks: [
          {
            type: "p",
            text: "A food supplement is intended to supplement the normal diet. It should not be regarded as a substitute for a varied diet or as a treatment for a knee condition. Our aim is to provide clear information about ingredients, formulation and use so that you can make an informed choice.",
          },
          { type: "h3", text: "What supplements cannot do" },
          {
            type: "p",
            text: "A supplement should not be presented as a shortcut around movement, strength, appropriate healthcare or a balanced diet. If you have a persistent knee problem, injury or significant change in function, buying a supplement is not a substitute for appropriate assessment.",
          },
        ],
      },
    ],
    closing: {
      principle: "Food first. Bone first. Make informed choices.",
      makeItStick: "Add one bone-friendly food to a meal you already eat. Yoghurt with breakfast. Greens with dinner.",
      // Compliance (A4): the only supplement link on this page, at the very end.
      links: [{ label: "Explore the OmKneeHealth Supplement", to: SUPPLEMENT_PATH }],
      cta: { label: "Next: Load", to: "/load" },
    },
    seoTitle: "Nourish | Bone-First Nutrition",
    seoDescription:
      "Bone-first nutrition for your knees: protein, calcium, vitamin D, vitamin C and collagen, food first.",
  },

  load: {
    id: "load",
    eyebrow: "The OmKnee Five · 03 Load",
    h1: "Move it to keep it.",
    intro: [
      "Your knees are built to be used. The right load at the right pace makes bone denser, muscle stronger and cartilage healthier. Too little load is a risk too.",
    ],
    sections: [
      {
        title: "Load and capacity",
        blocks: [
          { type: "p", text: "Load is the demand. Capacity is what you can handle. Both move." },
          {
            type: "p",
            text: "A regular runner has capacity for running. Take three months off and the capacity drops, even though the memory of running 10k is still there. Go straight back to 10k and the knee finds out first.",
          },
          { type: "diagram", id: "D8" },
        ],
      },
      {
        id: "how-much",
        eyebrow: "How much activity?",
        title: "Your weekly movement guide.",
        blocks: [
          { type: "p", text: "Based on World Health Organization guidance, with a knee focus added." },
          { type: "diagram", id: "D2" },
          { type: "figure", id: "runningPath" },
          {
            type: "table",
            columns: ["Age", "Aerobic activity", "Strength", "Knee focus"],
            rows: [
              ["5 to 17", "60 minutes a day on average, moderate to vigorous", "Muscle and bone strengthening 3 days a week", "Jumping, running and varied play build bone for life"],
              ["18 to 64", "150 to 300 minutes moderate, or 75 to 150 minutes vigorous, a week", "Major muscle groups, 2 or more days a week", "Leg strength: squats, lunges, step-ups, calf raises"],
              ["65 and over", "As for adults", "As for adults", "Add balance and strength work 3 or more days a week to reduce fall risk"],
            ],
          },
          { type: "callout", text: "Every minute counts. Short bouts add up." },
        ],
      },
      {
        title: "The four types of knee load",
        blocks: [
          {
            type: "cards",
            items: [
              { title: "Walking and everyday movement", copy: "The base. Aim to walk briskly, as if you might miss a train." },
              { title: "Strength", copy: "The most direct way to protect the knee. Thighs, hips and calves." },
              { title: "Impact", copy: "Hopping, skipping, jogging. A strong signal for bone, introduced gradually." },
              { title: "Balance", copy: "Single-leg work trains the control that protects ligaments." },
            ],
          },
          { type: "figure", id: "controlledSquat" },
        ],
      },
      {
        id: "sit-less",
        eyebrow: "Sit less, move more",
        title: "As little as possible. As much as possible.",
        blocks: [
          {
            type: "doDont",
            doTitle: "Do more",
            doItems: ["Stairs instead of lifts.", "Walk or cycle short journeys.", "Park further away.", "Stand and move every 30 to 60 minutes."],
            dontTitle: "Do less",
            dontItems: ["Long periods sitting.", "Screen time without breaks."],
          },
        ],
      },
      {
        title: "It is the change that gets you",
        blocks: [
          { type: "p", text: "Very often the problem is not the activity. It is how fast it changed." },
          {
            type: "p",
            text: "Distance, pace, hills, frequency, resistance, a new sport, a new pair of shoes. Any of them can shift the demand faster than the body adapts. Progress gradually and the body keeps up. Jump and it cannot.",
          },
        ],
      },
      {
        title: "Load is not the enemy",
        blocks: [
          {
            type: "p",
            text: "For a healthy knee, and for most knees with a problem, staying active is part of the answer. Therapeutic exercise is a core part of established osteoarthritis management, not an alternative to it.",
          },
          { type: "p", text: "Rest has its place in the short term. As a long term strategy it usually makes things worse." },
        ],
      },
      {
        title: "Think in weeks",
        blocks: [
          { type: "p", text: "A hard session is not a problem. Three hard sessions in a row might be." },
          { type: "p", text: "Look at your pattern across a week rather than judging each day on its own." },
        ],
      },
      {
        title: "Coming back after a break",
        blocks: [
          {
            type: "p",
            text: "Illness, injury, holiday, work, life. Whatever paused you, your last level is not your current level.",
          },
          { type: "p", text: "Build back rather than resuming. It feels slower but you will get there sooner." },
        ],
      },
      {
        title: "Timing your training",
        blocks: [
          {
            type: "p",
            text: "Strength and reaction time tend to peak in the late afternoon for many people. If hard evening training disturbs your sleep, finish intense sessions an hour or more before bed.",
          },
        ],
      },
      {
        id: "prepare",
        title: "Plan for what you love doing.",
        blocks: [
          {
            type: "p",
            text: "A ski trip, a first 10k, a walking holiday. Preparation starts weeks before, not minutes before.",
          },
          {
            type: "cards",
            items: [
              {
                title: "Strength",
                copy: "For the knee, this includes more than the quadriceps. The hips, hamstrings, calves and wider lower limb all contribute to movement.",
              },
              {
                title: "Movement control",
                copy: "Control, coordination and technique influence how we land, change direction, squat and step.",
              },
              {
                title: "Balance",
                copy: "Sensing and responding to body position. Balance training can form part of preparation for many activities.",
              },
              {
                title: "Warm up with purpose",
                copy: "Raise body temperature, move through relevant ranges and gradually introduce movements similar to the session ahead.",
              },
            ],
          },
          { type: "h3", text: "A knee-friendly week" },
          { type: "figure", id: "hamstringStretch" },
          { type: "diagram", id: "D9" },
          {
            type: "list",
            items: [
              "2 strength sessions",
              "1 to 2 balance or mobility sessions",
              "Regular walking or cycling most days",
              "Easy days after hard days",
              "7 to 9 hours sleep, same wake time",
            ],
          },
          { type: "h3", text: "Counting down to the big day" },
          {
            type: "timeline",
            items: [
              { label: "8 to 12 weeks", copy: "Build leg strength and base fitness" },
              { label: "4 to 8 weeks", copy: "Add activity-specific movement: turning, landing, hills" },
              { label: "1 to 2 weeks", copy: "Reduce volume, keep intensity, protect sleep" },
              { label: "Travel days", copy: "Keep moving, stay hydrated, adjust to the new time zone with morning light" },
            ],
          },
          { type: "h3", text: "Prepare for your activity" },
          {
            type: "list",
            items: [
              "Running: Build distance and intensity progressively.",
              "Skiing: Consider strength, endurance, balance and repeated turning demands before the trip.",
              "Football: Running alone does not fully prepare the body for acceleration, deceleration and changes of direction.",
              "Tennis and padel: Prepare for repeated lateral movement, acceleration and rotation.",
              "Gym: Technique, appropriate resistance and progression matter more than chasing load for its own sake.",
            ],
          },
          { type: "h3", text: "Can every injury be prevented?" },
          {
            type: "p",
            text: "No. Sport and physical activity always involve some risk. The objective is to prepare well and reduce modifiable risks where possible, not to promise that injury will never happen.",
          },
        ],
      },
      {
        title: "Listen to change",
        blocks: [
          { type: "p", text: "Ordinary tiredness after effort is normal." },
          {
            type: "p",
            text: "Persistent swelling, giving way, locking, significant pain or a knee that is clearly not doing what it used to are not. Those deserve attention.",
          },
          { type: "cta", cta: { label: "Scans & Tests", to: "/diagnose" } },
          { type: "cta", cta: { label: "Consultations", to: "/treat" } },
        ],
      },
    ],
    closing: {
      principle: "Build capacity rather than fearing load.",
      makeItStick: "Book it like a meeting. Two fixed strength sessions in your calendar each week.",
      links: [{ label: "Movement and rehab equipment", to: "/shop#movement-rehabilitation" }],
      cta: { label: "Next: Diagnose", to: "/diagnose" },
    },
    seoTitle: "Load | Move It to Keep It",
    seoDescription:
      "Build strength and capacity at the right pace: weekly movement guidance by age, the four types of knee load, and how to prepare for the activities you love.",
  },

  diagnose: {
    id: "diagnose",
    eyebrow: "The OmKnee Five · 04 Diagnose",
    h1: "Understand what is happening.",
    intro: [
      "When your knee changes, the right information helps you decide what to do next. Start with how your knee feels, then add scans or tests when they are useful.",
    ],
    sections: [
      {
        id: "check",
        eyebrow: "Step 1. Check",
        title: "Start with the Knee Score.",
        blocks: [
          {
            type: "p",
            text: "A few minutes, free, and the best starting point. Your answers show how your knee feels and functions today.",
          },
          {
            type: "cta",
            cta: { label: "Take the Knee Score", to: "/knee-score", style: "button", diagnosePathway: "check" },
          },
          { type: "smallPrint", text: KNEE_SCORE_SMALL_PRINT },
        ],
      },
      {
        id: "assess",
        eyebrow: "Step 2. Assess",
        blocks: [
          {
            type: "p",
            text: "A good clinical assessment starts with the story: what happened, where it hurts, what has changed, what you cannot do.",
          },
          {
            type: "p",
            text: "Then the examination: movement, swelling, stability, strength, how the knee behaves under a hand.",
          },
          { type: "figure", id: "bentKnee" },
          {
            type: "cta",
            cta: {
              label: "Explore Specialist Knee Assessment",
              href: "https://www.sportshealing.com/",
              ecosystem: "sportshealing",
              destinationLabel: "SportsHealing",
              diagnosePathway: "assess",
            },
          },
        ],
      },
      {
        id: "scan",
        eyebrow: "Step 3. Scan",
        title: "Same-day knee MRI.",
        blocks: [
          {
            type: "p",
            text: "Through MyKneeScan, book a knee MRI at our Harley Street partner clinic, often on the same day. Every scan comes with an expert report, with optional specialist review.",
          },
          {
            type: "list",
            items: [
              { text: "MRI from £550.", link: { label: "Current prices at mykneescan.com", href: "https://www.mykneescan.com/" } },
              "Expert review and express report options",
              "Members: £100 off with your club credit",
            ],
          },
          {
            type: "cta",
            cta: {
              label: "Book a scan at MyKneeScan",
              href: "https://www.mykneescan.com/booking",
              style: "button",
              ecosystem: "mykneescan",
              diagnosePathway: "scan",
            },
          },
          {
            type: "cta",
            cta: {
              label: "Take MyKneeScan's 60-second knee test",
              href: "https://www.mykneescan.com/assessment",
              ecosystem: "mykneescan",
            },
          },
          { type: "p", text: "Imaging adds information when it is needed. Different scans answer different questions." },
          {
            type: "p",
            text: "X ray shows bone, alignment and joint space. MRI shows the soft tissues in detail. Ultrasound can look at some structures while they move, and can guide procedures.",
          },
          {
            type: "p",
            text: "Not every knee problem needs a scan, and a scan without a good assessment can create more questions than it answers.",
          },
        ],
      },
      {
        id: "blood-tests",
        eyebrow: "Step 4. Test",
        title: "Blood tests for bone and musculoskeletal health.",
        blocks: [
          {
            type: "p",
            text: "Some aspects of bone and muscle health show up in your blood, such as vitamin D levels. Our blood tests are provided by Randox Health, processed by an accredited laboratory, and every result is reviewed by a clinician.",
          },
          {
            type: "table",
            // E3: each panel's Order button uses its Square payment link (src/lib/bookingLinks.ts).
            columns: ["Panel", "Includes", "Price", "Order"],
            rows: [
              ["Vitamin D check", "25-OH vitamin D", "[£]", { label: "Order", href: BLOOD_TEST_LINKS.vitaminD }],
              [
                "Bone health panel",
                "Vitamin D, calcium, phosphate, alkaline phosphatase, [others]",
                "[£]",
                { label: "Order", href: BLOOD_TEST_LINKS.bone },
              ],
              ["Active body panel", "[tests to confirm]", "[£]", { label: "Order", href: BLOOD_TEST_LINKS.active }],
            ],
          },
          {
            type: "list",
            ordered: true,
            title: "How it works",
            items: [
              "Order online.",
              "Visit a clinic for a quick blood draw at [clinic location, to confirm].",
              "Results with clinician comments.",
            ],
          },
          {
            type: "smallPrint",
            text: "Blood tests are provided by Randox Health. [Regulator wording to be supplied by Randox.] A blood test cannot diagnose a knee condition on its own.",
          },
        ],
      },
      {
        id: "put-it-together",
        eyebrow: "Step 5. Put it together",
        blocks: [
          { type: "p", text: "Plenty of pain free knees look untidy on MRI." },
          {
            type: "p",
            text: "Findings only mean something alongside symptoms, history and examination. That is the difference between an image and a diagnosis.",
          },
          {
            type: "cta",
            cta: { label: "Book a specialist to review your results", to: "/treat", diagnosePathway: "understand" },
          },
        ],
      },
      {
        id: "when-to-seek-help",
        title: "When to seek help",
        blocks: [
          {
            type: "p",
            text: "After a significant injury. When symptoms persist, worsen or start affecting what you can do. Some acute or severe symptoms need urgent assessment.",
          },
          {
            type: "p",
            text: "If in doubt, get it looked at. A knee that is checked and fine costs an appointment. A knee that is not checked and is not fine costs more.",
          },
          {
            type: "p",
            text: "If your knee is locked, you cannot put weight on it, or you have a fever with a hot swollen knee, seek urgent medical care.",
          },
        ],
      },
    ],
    closing: {
      principle: "Understand the person, the knee and the problem before deciding what comes next.",
      cta: { label: "Next: Treat", to: "/treat" },
    },
    seoTitle: "Scans & Tests | Understand What Is Happening",
    seoDescription:
      "Start with the Knee Score, then add a same-day knee MRI through MyKneeScan or blood tests from Randox Health when they are useful.",
  },

  treat: {
    id: "treat",
    eyebrow: "The OmKnee Five · 05 Treat",
    h1: "Find the right care at the right time.",
    intro: [
      "See a knee specialist online or in clinic. Treatment does not necessarily mean surgery. It starts with understanding you and your knee.",
    ],
    sections: [
      {
        id: "ways-to-be-seen",
        title: "Ways to be seen",
        blocks: [
          {
            type: "table",
            columns: ["Option", "Where", "Best for", "Book"],
            rows: [ONLINE_CONSULTATION, ...CLINICS].map((clinic) => [
              clinic.id === "pmc" ? "HCA Platinum Medical Centre" : clinic.name,
              clinic.where,
              clinic.bestFor,
              { label: clinic.bookLabel, href: clinic.bookingUrl },
            ]),
          },
          { type: "p", text: "Club members get priority booking." },
        ],
      },
      {
        id: "specialists",
        eyebrow: "Your specialists",
        title: "The team you will see.",
        blocks: [
          { type: "figure", id: "clinicTeam" },
          {
            type: "cards",
            items: TEAM.map((member) => ({
              title: member.name,
              copy: member.details,
              // The name sits beside the portrait, so the image needs no alt text.
              image: member.photo ? { src: member.photo, alt: "" } : undefined,
            })),
          },
          {
            type: "list",
            items: TEAM.filter((member) => member.profile?.href || member.profile?.to).map((member) => ({
              text: `${member.name}:`,
              link: member.profile,
            })),
          },
        ],
      },
      {
        title: "Manage",
        blocks: [
          {
            type: "p",
            text: "A lot of knee problems settle with understanding what is going on, adjusting activity, managing load and giving it time.",
          },
          { type: "p", text: "That means doing the right things while it settles rather than doing less forever." },
          { type: "cta", cta: { label: "Understand Knee Load", to: "/load", treatPathway: "manage" } },
        ],
      },
      {
        title: "Rehabilitate",
        blocks: [
          {
            type: "p",
            text: "Rehab is where most knee recovery actually happens. Mobility, strength, balance, control, and a progressive return to what you want to do.",
          },
          {
            type: "p",
            text: "A good programme is built around the problem and the person, not downloaded from a template.",
          },
          {
            type: "cta",
            cta: {
              label: "Explore Knee Rehabilitation",
              href: "https://www.sportshealing.com/",
              ecosystem: "sportshealing",
              destinationLabel: "SportsHealing",
              treatPathway: "rehabilitate",
            },
          },
        ],
      },
      {
        id: "support",
        title: "Support",
        blocks: [
          { type: "p", text: "Sometimes a brace, cooling or a practical aid helps as part of a wider plan." },
          { type: "p", text: "It should sit alongside an assessment and rehab, never replace them." },
          {
            type: "p",
            text: "After surgery, our shop stocks practical recovery products such as wound dressings and cooling aids. Always follow your surgical team's advice.",
            // Compliance (D1.4): after-surgery products are linked only from Support.
            link: { label: "After Surgery products", to: "/shop#after-surgery" },
          },
          { type: "cta", cta: { label: "Explore Knee Support", to: "/shop#braces-supports", treatPathway: "support" } },
        ],
      },
      {
        title: "Intervene",
        blocks: [
          { type: "p", text: "Injections and other procedures have specific uses, specific limits and real risks." },
          {
            type: "p",
            text: "They are a decision made after assessment and a proper conversation, not a first stop.",
          },
          {
            type: "cta",
            cta: {
              label: "Understand Knee Procedures",
              href: "https://www.sportshealing.com/",
              ecosystem: "sportshealing",
              destinationLabel: "SportsHealing",
              treatPathway: "intervene",
            },
          },
        ],
      },
      {
        title: "Surgery",
        blocks: [
          {
            type: "p",
            text: "Surgery is one tool among several. For some problems it is the right one, when it fits the diagnosis, the symptoms, the person and what they want back.",
          },
          { type: "p", text: "Different operations do different jobs." },
          {
            type: "cta",
            cta: {
              label: "Explore Knee Surgery",
              href: "https://www.chinmaygupte.com/",
              ecosystem: "chinmaygupte",
              destinationLabel: "SportsHealing / ChinmayGupte.com",
              treatPathway: "surgery",
            },
          },
        ],
      },
      {
        title: "Recover",
        blocks: [
          { type: "p", text: "The point of treatment is getting back to movement, activity and life." },
          {
            type: "p",
            text: "Rebuilding strength and confidence takes time, and it brings the whole journey back to where it started.",
          },
          { type: "cta", cta: { label: "Back to Wellness", to: "/wellness", treatPathway: "recover" } },
        ],
      },
    ],
    closing: {
      principle: "The right treatment is the treatment that fits the problem and the person.",
    },
    seoTitle: "Consultations | Find the Right Care at the Right Time",
    seoDescription:
      "See a knee specialist online or at our clinics on Harley Street, in Chiswick or at the Platinum Medical Centre. Treatment does not necessarily mean surgery.",
  },
};
