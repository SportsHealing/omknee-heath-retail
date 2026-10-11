import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BOOK_OPTIONS } from "@/lib/navigation";
import { trackBookClick, trackBookMenuOpened } from "@/lib/analytics";

interface BookMenuProps {
  /** The trigger button. Must accept a ref (e.g. a <button> or <Button>). */
  trigger: ReactNode;
  side?: "top" | "bottom";
  align?: "start" | "center" | "end";
}

/** The Book menu: knee scan, blood test or consultation. */
const BookMenu = ({ trigger, side = "bottom", align = "end" }: BookMenuProps) => (
  <DropdownMenu onOpenChange={(open) => open && trackBookMenuOpened()}>
    <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
    <DropdownMenuContent side={side} align={align} sideOffset={8} className="w-72 p-2 z-[60]">
      {BOOK_OPTIONS.map((option) => {
        const content = (
          <span className="flex w-full items-start justify-between gap-3">
            <span>
              <span className="block font-sans text-sm text-foreground">{option.label}</span>
              <span className="block font-sans text-xs text-muted-foreground">{option.provider}</span>
            </span>
            {option.external ? (
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            ) : null}
          </span>
        );
        return (
          <DropdownMenuItem key={option.id} asChild className="min-h-[44px] cursor-pointer rounded-md px-3 py-2">
            {option.external ? (
              <a href={option.href} target="_blank" rel="noopener" onClick={() => trackBookClick(option.id)}>
                {content}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <Link to={option.href} onClick={() => trackBookClick(option.id)}>
                {content}
              </Link>
            )}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default BookMenu;
