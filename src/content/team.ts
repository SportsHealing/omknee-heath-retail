/**
 * The clinical team. Credentials are from the Knee Passport cover. Titles
 * and specialisms are placeholders until confirmed (Q5). Never show
 * these next to the supplement (Appendix D1.7).
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
    details: "PhD, FRCS (Tr&Orth), MA, BM BCh (Oxon). [title, specialisms]",
    photo: chinmayPhoto,
    profile: { label: "Profile at ChinmayGupte.com", href: "https://www.chinmaygupte.com/" },
  },
  {
    name: "Cynthia Gupté",
    details: "FRCR, MRCS, BSc, BMBCh (Oxon). [title, specialisms, profile link]",
    photo: cynthiaPhoto,
  },
  {
    name: "[clinical team]",
    details: "[names, roles, specialisms, credentials, photos]",
    profile: { label: "Profiles at SportsHealing", href: "https://www.sportshealing.com/" },
  },
];
