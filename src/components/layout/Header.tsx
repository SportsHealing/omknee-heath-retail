import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag, User, ChevronDown, CalendarCheck } from "lucide-react";
import { useState, useEffect, type FocusEvent } from "react";
import { Link } from "react-router-dom";
import SiteSearch from "./SiteSearch";
import BookMenu from "./BookMenu";
import MobileBottomBar from "./MobileBottomBar";
import { OMKNEE_FIVE, WELLNESS_HUB } from "@/lib/omkneeFive";
import { NAV } from "@/lib/navigation";
import { trackPillarSelect } from "@/lib/analytics";
import logoDarkGreen from "@/assets/logo-dark-green.png";

/** Header order (section 5.1): Shop · Scans & Tests · Consultations · Learn · Wellness · Club. */
const beforeLearn = [NAV.shop, NAV.scansTests, NAV.consultations];
const afterLearn = [NAV.wellness, NAV.club];

const desktopLinkClass =
  "font-sans text-xs xl:text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap min-h-[44px] inline-flex items-center";
const mobileLinkClass =
  "font-sans text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLearnOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** Close the Learn dropdown when keyboard focus leaves it. */
  const handleLearnBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setLearnOpen(false);
  };

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-background/95 backdrop-blur-sm border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container px-6">
          <div className="flex items-center justify-between gap-4 h-20 lg:h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logoDarkGreen}
                alt="OmKneeHealth"
                width={280}
                height={144}
                className="h-12 md:h-16 lg:h-12 xl:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-7" aria-label="Main navigation">
              {beforeLearn.map((item) => (
                <Link key={item.to} to={item.to} className={desktopLinkClass}>
                  {item.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setLearnOpen(true)}
                onMouseLeave={() => setLearnOpen(false)}
                onBlur={handleLearnBlur}
              >
                <Link
                  to={NAV.learn.to}
                  onClick={() => setLearnOpen(false)}
                  onFocus={() => setLearnOpen(true)}
                  aria-expanded={learnOpen}
                  aria-haspopup="true"
                  className={`${desktopLinkClass} gap-1.5`}
                >
                  {NAV.learn.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${learnOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </Link>

                {learnOpen && (
                  <div className="absolute left-1/2 -ml-72 top-full pt-4 w-[36rem] animate-fade-up">
                    <div className="rounded-2xl border border-border bg-background shadow-xl p-8">
                      <Link
                        to={NAV.learn.to}
                        onClick={() => setLearnOpen(false)}
                        className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-primary/70 hover:text-primary mb-5 inline-block"
                      >
                        The OmKnee Five
                      </Link>
                      <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
                        {OMKNEE_FIVE.map((pillar) => (
                          <li key={pillar.id}>
                            <Link
                              to={pillar.to}
                              onClick={() => {
                                trackPillarSelect(pillar.id);
                                setLearnOpen(false);
                              }}
                              className="group flex gap-3 rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-secondary/60"
                            >
                              <span className="font-serif text-sm text-primary/60 tabular-nums pt-0.5">
                                {pillar.number}
                              </span>
                              <span>
                                <span className="block font-sans text-sm text-foreground">{pillar.name}</span>
                                <span className="block font-sans text-xs text-muted-foreground">
                                  {pillar.strapline}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={WELLNESS_HUB.to}
                        onClick={() => setLearnOpen(false)}
                        className="mt-5 flex items-center justify-between rounded-full border border-dashed border-primary/40 px-5 py-3 transition-colors hover:bg-secondary/60"
                      >
                        <span className="font-sans text-sm text-foreground">{WELLNESS_HUB.name}</span>
                        <span className="font-sans text-xs text-muted-foreground">{WELLNESS_HUB.strapline}</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {afterLearn.map((item) => (
                <Link key={item.to} to={item.to} className={desktopLinkClass}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11"
                onClick={() => setSearchOpen(true)}
                aria-label="Search the site"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex h-11 w-11"
                aria-label="Account"
                asChild
              >
                <Link to="/account">
                  <User className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-11 w-11" aria-label="Basket, empty" asChild>
                <Link to={NAV.shop.to}>
                  <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                </Link>
              </Button>
              <div className="hidden lg:block xl:ml-2">
                <BookMenu
                  trigger={
                    <Button className="h-11 px-4 xl:px-6 gap-2 bg-gold text-gold-foreground hover:bg-gold/90 font-sans text-sm">
                      <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                      Book
                    </Button>
                  }
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-11 w-11"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/50 animate-fade-up bg-background absolute left-0 right-0 top-full shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
              <nav className="flex flex-col container px-6" aria-label="Mobile navigation">
                {beforeLearn.map((item) => (
                  <Link key={item.to} to={item.to} className={mobileLinkClass} onClick={closeMobile}>
                    {item.label}
                  </Link>
                ))}
                <Link to={NAV.learn.to} className={mobileLinkClass} onClick={closeMobile}>
                  {NAV.learn.label}: the OmKnee Five
                </Link>
                <ul className="border-l border-border ml-1 pl-4 mb-2">
                  {OMKNEE_FIVE.map((pillar) => (
                    <li key={pillar.id}>
                      <Link
                        to={pillar.to}
                        onClick={() => {
                          trackPillarSelect(pillar.id);
                          closeMobile();
                        }}
                        className="flex items-center gap-3 min-h-[44px] font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span className="font-serif text-xs text-primary/60 tabular-nums">{pillar.number}</span>
                        {pillar.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {afterLearn.map((item) => (
                  <Link key={item.to} to={item.to} className={mobileLinkClass} onClick={closeMobile}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
      </header>
      <MobileBottomBar />
    </>
  );
};

export default Header;
