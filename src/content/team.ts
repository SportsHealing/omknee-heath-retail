/**
 * The clinical team. Names, titles, credentials and photos are placeholders
 * until confirmed (Q5). Never show these next to the supplement (Appendix D1.7).
 */
import type { ContentLink } from "./contentBlocks";

export interface TeamMember {
  name: string;
  details: string;
  profile?: ContentLink;
}

export const TEAM: TeamMember[] = [
  {
    name: "Chinmay Gupte",
    details: "[title, specialisms, credentials, photo]",
    profile: { label: "Profile at ChinmayGupte.com", href: "https://www.chinmaygupte.com/" },
  },
  {
    name: "Cynthia Gupte",
    details: "[title, specialisms, credentials, photo, profile link]",
  },
  {
    name: "[clinical team]",
    details: "[names, roles, specialisms, credentials, photos]",
    profile: { label: "Profiles at SportsHealing", href: "https://www.sportshealing.com/" },
  },
];
