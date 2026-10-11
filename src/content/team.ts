/**
 * The clinical team. Credentials are from the Knee Passport cover; titles
 * confirmed by the client. Never show these next to the supplement (D1.7).
 */
import type { ContentLink } from "./contentBlocks";
import chinmayPhoto from "@/assets/team/chinmay-gupte.webp";
import cynthiaPhoto from "@/assets/team/cynthia-gupte.webp";

export interface TeamMember {
  name: string;
  details: string;
  /** Square portrait. */
  photo?: string;
  profile?: ContentLink;
}

export const TEAM: TeamMember[] = [
  {
    name: "Chinmay Gupté",
    details: "Consultant knee surgeon and President of the British Knee Society. PhD, FRCS (Tr&Orth), MA, BM BCh (Oxon).",
    photo: chinmayPhoto,
    profile: { label: "Profile at ChinmayGupte.com", href: "https://www.chinmaygupte.com/" },
  },
  {
    name: "Cynthia Gupté",
    details: "Consultant radiologist and mother of two boys. FRCR, MRCS, BSc, BMBCh (Oxon).",
    photo: cynthiaPhoto,
  },
  {
    name: "[clinical team]",
    details: "[names, roles, specialisms, credentials, photos]",
    profile: { label: "Profiles at SportsHealing", href: "https://www.sportshealing.com/" },
  },
];
