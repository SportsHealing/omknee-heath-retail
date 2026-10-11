/**
 * Wellness hub copy. Source: handover A3, final wording.
 * Compliance (A3, D1.5): no product cards or supplement links in the Sleep,
 * Recovery or Make it stick sections. Products appear only in The Wellness Edit.
 */
import type { ContentClosing, ContentSection } from "./contentBlocks";

export const WELLNESS_SUBNAV = [
  { id: "body-clock", label: "Body clock" },
  { id: "sleep", label: "Sleep" },
  { id: "recovery", label: "Recovery" },
  { id: "make-it-stick", label: "Make it stick" },
  { id: "wellness-edit", label: "The Wellness Edit" },
] as const;

export const WELLNESS_INTRO =
  "Your knee does not live in isolation. Sleep, stress, daily rhythm and lifestyle shape how every tissue in the joint repairs and adapts. Wellness is the foundation the OmKnee Five stand on.";

export const WELLNESS_SECTIONS: ContentSection[] = [
  // Body clock
  {
    id: "body-clock",
    eyebrow: "Your body clock",
    title: "Your knee keeps time too.",
    blocks: [
      {
        type: "p",
        text: "Your body runs on a roughly 24-hour clock. Light in the morning tells it to wake. Darkness in the evening triggers melatonin and prepares you for sleep. Tissues such as tendon, cartilage and bone have their own clocks, linked to this master rhythm. When the clock is disrupted by night shifts, jet lag or late screens, recovery suffers.",
      },
      { type: "diagram", id: "D3" },
    ],
  },
  {
    eyebrow: "Day to load, night to repair",
    title: "Daylight to move. Darkness to rebuild.",
    blocks: [
      {
        type: "p",
        text: "Daytime is when you load your knees: walking, climbing, training. Night is when the body clears, repairs and lays down new tissue. Both halves matter.",
      },
      { type: "diagram", id: "D4" },
    ],
  },

  // Sleep and your knee
  {
    id: "sleep",
    tone: "sage",
    eyebrow: "Sleep and your knee",
    title: "Your knees rebuild while you sleep.",
    blocks: [
      {
        type: "p",
        text: "Training and nutrition set up repair. Sleep is when much of it happens. Poor sleep does not just leave you tired. It is linked to weaker muscle building, poorer bone renewal and a higher risk of injury. Most adults need 7 to 9 hours.",
      },
    ],
  },
  {
    title: "Two systems run your sleep.",
    blocks: [
      {
        type: "list",
        items: [
          "Your body clock. Light and darkness set a 24-hour rhythm. Darkness triggers melatonin, which prepares you for sleep.",
          "Sleep pressure. From the moment you wake, sleep-promoting signals build up, like sand in an hourglass. Sleep resets it. Long daytime naps empty the hourglass early, making night sleep harder.",
        ],
      },
      { type: "diagram", id: "D10" },
    ],
  },
  {
    title: "What happens to your tissues overnight.",
    blocks: [
      { type: "diagram", id: "D11" },
      {
        type: "table",
        columns: ["Tissue", "What sleep does", "What short sleep is linked to"],
        rows: [
          [
            "Muscle",
            "Growth hormone release peaks in deep sleep, supporting repair",
            "In one study, a single night without sleep cut muscle protein building by about 18%",
          ],
          [
            "Bone",
            "Bone renewal follows the body clock",
            "Sleep restriction lowered bone formation markers in lab studies. Very short sleep is linked to lower bone density in older women",
          ],
          [
            "Collagen (tendon and ligament)",
            "Lab research shows collagen production follows a daily rhythm",
            "Disrupted rhythm may affect how connective tissue is maintained",
          ],
          [
            "Whole body",
            "Pain sensitivity is lower after good sleep",
            "Young athletes sleeping under 8 hours had about 1.7 times the injury risk in one study",
          ],
        ],
        note: "Much of this research is early, small or observational. We present it as a reason to protect sleep, not as a guarantee.",
      },
    ],
  },
  {
    title: "What keeps you awake.",
    blocks: [
      {
        type: "list",
        items: [
          "Light, especially screens. Delays melatonin.",
          "Caffeine. Blocks adenosine, a key sleep-pressure signal.",
          "Stress. Cortisol and adrenaline keep you alert.",
        ],
      },
    ],
  },
  {
    title: "The OmKnee sleep habits.",
    blocks: [
      { type: "diagram", id: "D12" },
      {
        type: "doDont",
        ordered: true,
        doTitle: "Do more of",
        doItems: [
          "Wake at the same time every day, weekends included.",
          "Get daylight in the morning.",
          "Walk or move every day.",
          "Follow a short wind-down routine.",
          "Keep the bedroom cool, dark and quiet, with a supportive mattress and pillow.",
          "If you nap, keep it under 30 minutes and before mid-afternoon.",
        ],
        dontTitle: "Do less of",
        dontItems: [
          "Screens in the hour before bed.",
          "Caffeine after early afternoon.",
          "Heavy meals and alcohol late in the evening.",
          "Intense training close to bedtime.",
          "Lying awake watching the clock. If you cannot sleep after about 20 minutes, get up and do something calm until sleepy.",
        ],
      },
    ],
  },
  {
    title: "When your knee keeps you awake.",
    blocks: [
      {
        type: "list",
        items: [
          "A pillow between the knees for side sleepers, or under the knees for back sleepers, may feel more comfortable.",
          {
            text: "Night pain, especially with swelling or that is getting worse, is worth getting assessed.",
            link: { label: "Scans & Tests", to: "/diagnose" },
          },
        ],
      },
    ],
  },
  {
    title: "When to get help with sleep.",
    blocks: [
      {
        type: "p",
        text: "Ongoing insomnia is common and treatable. The recommended first-line treatment is cognitive behavioural therapy for insomnia (CBT-I). Speak to your GP if poor sleep lasts more than a few weeks.",
      },
    ],
  },

  // Recovery
  {
    id: "recovery",
    eyebrow: "Stress and recovery",
    title: "A calm body recovers better.",
    blocks: [
      {
        type: "p",
        text: "Stress hormones such as cortisol and adrenaline keep you alert. In short bursts that is useful. Kept high, they disturb sleep and work against tissue repair.",
      },
      {
        type: "list",
        items: [
          "Plan easier days between hard ones",
          "Use breathing, walking or light stretching to wind down",
          "Treat recovery as part of the plan, not a break from it",
        ],
      },
    ],
  },
  {
    eyebrow: "Lifestyle factors",
    title: "What wears on your knees.",
    blocks: [
      {
        type: "list",
        items: [
          "Too little sleep",
          "Ongoing stress",
          "Long periods of sitting",
          "Smoking (linked to poorer bone and tissue healing)",
          "Heavy alcohol use",
          "Poor nutrition",
          "Carrying more body weight than is healthy for you",
        ],
      },
    ],
  },

  // Make it stick
  {
    id: "make-it-stick",
    tone: "sand",
    eyebrow: "Make it stick",
    title: "Small changes. Lasting knees.",
    blocks: [
      {
        type: "p",
        text: "Most of us know what helps. The challenge is doing it week after week. Healthy knees come from habits, not heroic efforts.",
      },
    ],
  },
  {
    title: "Aim small. Repeat often.",
    blocks: [
      {
        type: "p",
        text: "Big goals such as running a marathon or losing weight can feel distant. Break them into small steps. A 1% improvement, repeated, adds up to real change.",
      },
      { type: "diagram", id: "D13" },
    ],
  },
  {
    title: "The OmKnee habit loop.",
    blocks: [
      {
        type: "list",
        ordered: true,
        items: [
          "Anchor it. Attach the new habit to something you already do. Calf raises while the kettle boils.",
          "Schedule it. Put exercise in your calendar like any other commitment.",
          "Track it. Steps, sessions, bedtime. What gets measured gets noticed.",
          "Share it. Train with a friend or join a class. Commitment is easier together.",
          "Celebrate it. Mark each milestone. Recognition keeps motivation going.",
        ],
      },
      { type: "diagram", id: "D14" },
    ],
  },
  {
    title: "Apply it to the OmKnee Five.",
    blocks: [
      {
        type: "table",
        columns: ["Area", "Start with", "Build to"],
        rows: [
          ["Sleep", "Fixed wake-up time", "Full wind-down routine, screens off an hour before bed"],
          ["Nutrition", "One bone-friendly food a day", "Protein at every meal, colourful veg daily"],
          ["Exercise", "10-minute brisk walk", "150 minutes a week plus 2 strength sessions"],
          ["Strength", "One exercise twice a week", "Full lower-body routine twice a week"],
          ["Recovery", "One planned easy day", "A balanced hard and easy weekly pattern"],
        ],
      },
    ],
  },
  {
    title: "Never miss twice.",
    blocks: [
      {
        type: "p",
        text: "Missing one session or one early night does not undo progress. Get back on track the next day.",
      },
    ],
  },
  {
    title: "Track your progress.",
    blocks: [
      {
        type: "p",
        text: "MyKneeScore lets you monitor how your knee feels over time. Watching change is one of the strongest motivators. Members get a new challenge each season.",
      },
      { type: "cta", cta: { label: "Take the Knee Score", to: "/knee-score", style: "button" } },
    ],
  },
];

export const WELLNESS_EDIT = {
  title: "The Wellness Edit.",
  body: "A small selection of products chosen by our team to sit alongside good sleep, movement and recovery. Every product comes with clear information about what it does and does not do.",
  memberLine: "Members save 15%. Join free.",
} as const;

export const WELLNESS_CLOSING: ContentClosing = {
  principle: "Look after the body that carries your knees. Consistency beats intensity.",
  makeItStick: "Pick one anchor: a fixed wake-up time, seven days a week. It sets your clock for everything else.",
  cta: { label: "Start the OmKnee Five", to: "/understand" },
};
