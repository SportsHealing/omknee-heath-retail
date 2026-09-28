/**
 * SiteSearch - lightweight site-wide search over the OmKneeHealth destinations.
 */

import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const SEARCH_INDEX: { group: string; label: string; to: string; keywords?: string }[] = [
  { group: "Knee Health", label: "Knee Health hub", to: "/knee-health", keywords: "guides cornerstone" },
  { group: "Knee Health", label: "Your Knee", to: "/your-knee", keywords: "anatomy joint basics" },
  { group: "Knee Health", label: "Movement", to: "/knee-movement", keywords: "mobility walking exercise" },
  { group: "Knee Health", label: "Cartilage, Collagen & Synovial Fluid", to: "/cartilage-collagen-synovial-fluid", keywords: "cartilage collagen lubrication" },
  { group: "Knee Health", label: "Strength & Mobility", to: "/movement-biomechanics", keywords: "strengthening exercises quads biomechanics" },
  { group: "OmKnee Five", label: "01 Understand", to: "/understand", keywords: "anatomy joint knee basics" },
  { group: "OmKnee Five", label: "02 Nourish", to: "/nourish", keywords: "wellness sleep recovery diet protein gut sugar" },
  { group: "Knee Health", label: "Healthy Knees Through Life", to: "/healthy-knees-through-life", keywords: "ageing decades over 50" },
  { group: "OmKnee Five", label: "03 Load", to: "/load", keywords: "running training load strength preparation injury prevention" },
  { group: "OmKnee Five", label: "04 Diagnose", to: "/diagnose", keywords: "assessment scan mri x-ray when to seek help" },
  { group: "OmKnee Five", label: "05 Treat", to: "/treat", keywords: "treatment rehabilitation injections surgery recovery" },
  { group: "Knee Score", label: "Knee Score", to: "/knee-score", keywords: "assessment measure track mykneescore" },
  { group: "Shop", label: "Shop", to: "/shop", keywords: "buy products braces recovery" },
  { group: "Shop", label: "Nutrition & Supplements", to: "/product", keywords: "supplement collagen powder" },
  { group: "Shop", label: "Ingredients", to: "/ingredients", keywords: "collagen curcumin glucosamine" },
  { group: "Journal", label: "Journal", to: "/journal", keywords: "articles blog reading" },
  { group: "About", label: "About OmKneeHealth", to: "/about", keywords: "story founders" },
  { group: "About", label: "Our Ecosystem Partners", to: "/partners", keywords: "sportshealing mykneescore mykneescan chinmay gupte" },
  { group: "About", label: "Contact", to: "/contact", keywords: "email support" },
];

interface SiteSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SiteSearch = ({ open, onOpenChange }: SiteSearchProps) => {
  const navigate = useNavigate();
  const groups = Array.from(new Set(SEARCH_INDEX.map((i) => i.group)));

  const go = (to: string) => {
    onOpenChange(false);
    navigate(to);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search knee health, the shop, the journal…" />
      <CommandList>
        <CommandEmpty>Nothing found. Try "collagen", "brace" or "score".</CommandEmpty>
        {groups.map((group) => (
          <CommandGroup key={group} heading={group}>
            {SEARCH_INDEX.filter((i) => i.group === group).map((item) => (
              <CommandItem
                key={item.to}
                value={`${item.label} ${item.keywords ?? ""}`}
                onSelect={() => go(item.to)}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

export default SiteSearch;
