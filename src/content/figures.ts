/**
 * Final infographic artwork. Each alt text carries the figure's key text so
 * the content is available to screen readers and search engines.
 */
import fuelYourKnees from "@/assets/figures/fuel-your-knees.webp";
import kneeHealthPlate from "@/assets/figures/knee-health-plate.webp";
import nourishYourKnees from "@/assets/figures/nourish-your-knees.webp";
import kneeHealthPyramid from "@/assets/figures/knee-health-pyramid.webp";
import sleepBodyClock from "@/assets/figures/sleep-body-clock.webp";
import bonesOfTheKnee from "@/assets/figures/bones-of-the-knee.webp";
import kneeTendons from "@/assets/figures/quadriceps-patellar-tendons.webp";
import kneeBendRange from "@/assets/figures/knee-bend-range.webp";
import kneeMovementAxes from "@/assets/figures/knee-movement-axes.webp";
import collagenStructure from "@/assets/figures/collagen-structure.webp";
import healthyKneePhilosophy from "@/assets/figures/healthy-knee-philosophy.webp";

export interface Figure {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const FIGURES = {
  kneeHealthPyramid: {
    src: kneeHealthPyramid,
    width: 1122,
    height: 1402,
    alt: "The Knee Health Pyramid: protect your joints, build strength, support recovery. 1. Foundations: sleep (recovery and hormones), nutrition (protein, vitamins and minerals), movement (regular activity through life), healthy weight (less load on your knees), no smoking (better tissue health) and load management (right amount, right type). 2. Strengthen and maintain: strength (muscles around the knee), balance (control and stability), aerobic fitness (joint and overall health) and movement control (better biomechanics). 3. Optimise and restore: individualised rehabilitation, specialist assessment and targeted treatment. Everyday habits form the foundation of lifelong knee health.",
  },
  sleepBodyClock: {
    src: sleepBodyClock,
    width: 1122,
    height: 1402,
    alt: "Sleep, body clock and knee health: a 24-hour clock. 06:30 wake, gentle mobility may ease morning knee stiffness. 08:00 protein, vitamin C and hydration support collagen health. 12:00 regular walking and movement nourish cartilage. 15:00 a good time for focused rehab and coordination work. 17:00 strength and neuromuscular performance are often better. 19:00 a recovery meal supports muscle and connective tissue. 21:00 wind down, dim light and reduce screens. 22:00 sleep onset, recovery processes begin. 00:00 early night deep sleep supports tissue repair. 02:00 growth hormone pulses help recovery and collagen turnover. 04:30 overnight healing continues. Good sleep habits: regular sleep and wake times, a cool dark room, limit late caffeine and screens.",
  },
  kneeHealthPlate: {
    src: kneeHealthPlate,
    width: 1122,
    height: 1402,
    alt: "The Knee Health Plate: eat for strong muscles, healthy bones and connective tissue support. A plate in four parts: fruit, vegetables, protein (fish, chicken, eggs, yoghurt, pulses, tofu) and wholegrains and starchy foods. Around the plate: hydration, healthy fats (olive oil, nuts and seeds), movement, shared meals and mindful eating. Nutrition supports muscle maintenance and recovery, bone and connective tissue health, and a healthy body weight and joint loading.",
  },
  nourishYourKnees: {
    src: nourishYourKnees,
    width: 1254,
    height: 1254,
    alt: "Nourish your knees: eat well, move well, support long-term joint health. Nine habits: 1. Protein for muscle maintenance and tissue repair. 2. Vitamins and minerals for bone, cartilage and connective tissue health. 3. Hydration. 4. Balanced meals with a variety of whole foods. 5. Eat slowly and mindfully. 6. Minimise distractions. 7. A healthy weight to reduce excess load on your knees. 8. Enjoy your food, including favourites in a balanced way. 9. A relaxed environment to cook and eat in.",
  },
  fuelYourKnees: {
    src: fuelYourKnees,
    width: 1055,
    height: 1491,
    alt: "Fuel your knees: nutrition for activity, performance and recovery. 1. Protein supports muscle maintenance and tissue repair. 2. Carbohydrates provide energy for exercise, rehabilitation and recovery. 3. Healthy fats: olive oil, nuts, seeds and omega-3 rich foods. 4. Fruit and vegetables provide fibre, vitamins and minerals. 5. Hydration: drink regularly before, during and after activity. 6. Meal timing: fuel before activity and include protein plus carbohydrate after exercise. Mindful eating cues: eat slowly, minimise distractions, choose regular meals, aim for a healthy body weight.",
  },
  // From the SportsHealing Knee Passport.
  bonesOfTheKnee: {
    src: bonesOfTheKnee,
    width: 1266,
    height: 1524,
    alt: "The bones of the left knee, side view and front view: patella, femur, tibia and fibula. Beside each sketch, the femoral condyles are drawn as wheels with rubber tyres rolling on the tibia, with the patella at the front.",
  },
  kneeTendons: {
    src: kneeTendons,
    width: 1216,
    height: 1074,
    alt: "Left knee front view and side view showing the iliotibial band (ITB), quadriceps tendon, patella, patella tendon, fibula and tibia.",
  },
  kneeBendRange: {
    src: kneeBendRange,
    width: 944,
    height: 488,
    alt: "How far the knee bends for everyday activities: 0 degrees full extension, 45 degrees driving, 85 to 90 degrees safely up and down stairs, 110 to 115 degrees riding a bike and squatting, 135 degrees full flexion, 160 degrees kneeling or hyperflexion.",
  },
  kneeMovementAxes: {
    src: kneeMovementAxes,
    width: 874,
    height: 698,
    alt: "The knee moves in three dimensions. Translations: proximal/distal, anterior/posterior and medial/lateral. Rotations: flexion/extension, varus/valgus and internal/external.",
  },
  collagenStructure: {
    src: collagenStructure,
    width: 1074,
    height: 472,
    alt: "Collagen in the knee, magnified in steps: the knee joint, collagen fibres, a single fibre bundle, and the polypeptide amino acid triple helix.",
  },
  healthyKneePhilosophy: {
    src: healthyKneePhilosophy,
    width: 1244,
    height: 1208,
    alt: "The OmKneeHealth philosophy: a healthy knee at the centre of four areas. Manage load: practise good control squatting, build up activities slowly, maintain a healthy weight, keep a full range of movement. Healthy lifestyle: manage stress, minimise alcohol, don't smoke, less sugar, optimise sleep, sunlight, hormone support. Good nutrition: collagen support, minerals, protein, fat and carbohydrate balance, vitamins (especially D and C). Muscle and bone density: optimise balance and coordination, keep muscles strong, stretch tendons and fascia.",
  },
} satisfies Record<string, Figure>;

export type FigureId = keyof typeof FIGURES;
