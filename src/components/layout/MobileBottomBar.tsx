import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, ShoppingBag, Users } from "lucide-react";
import BookMenu from "./BookMenu";
import { NAV } from "@/lib/navigation";

const itemClass =
  "flex flex-1 flex-col items-center justify-center gap-1 min-h-[56px] font-sans text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const BookTrigger = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<"button">>((props, ref) => (
  <button ref={ref} type="button" className={`${itemClass} bg-gold text-gold-foreground`} {...props}>
    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
    Book
  </button>
));
BookTrigger.displayName = "BookTrigger";

/** Fixed bottom bar on mobile and tablet: Shop, Book, Club. */
const MobileBottomBar = () => (
  <nav
    aria-label="Quick links"
    className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]"
  >
    <Link to={NAV.shop.to} className={itemClass}>
      <ShoppingBag className="h-5 w-5" aria-hidden="true" />
      {NAV.shop.label}
    </Link>
    <BookMenu trigger={<BookTrigger />} side="top" align="center" />
    <Link to={NAV.club.to} className={itemClass}>
      <Users className="h-5 w-5" aria-hidden="true" />
      {NAV.club.label}
    </Link>
  </nav>
);

export default MobileBottomBar;
