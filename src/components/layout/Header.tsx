import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag, User, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SiteSearch from "./SiteSearch";
import { OMKNEE_SEVEN } from "@/lib/omkneeSeven";
import { trackPillarSelect } from "@/lib/analytics";
import logoDarkGreen from "@/assets/logo-dark-green.png";

const navItems = [
  { to: "/knee-score", label: "Knee Score" },
  { to: "/shop", label: "Shop" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
];

const foundations = OMKNEE_SEVEN.filter((p) => p.group === "foundation");
const pathway = OMKNEE_SEVEN.filter((p) => p.group === "pathway");

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoDarkGreen}
              alt="OmKneeHealth"
              width={280}
              height={144}
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div
              ref={megaRef}
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                to="/knee-health"
                onClick={() => setMegaOpen(false)}
                onFocus={() => setMegaOpen(true)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 font-sans text-xs xl:text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap min-h-[44px]"
              >
                Look After Your Knees
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </Link>

              {megaOpen && (
                <div className="absolute left-0 top-full pt-4 w-[36rem] animate-fade-up">
                  <div className="rounded-2xl border border-border bg-background shadow-xl p-8">
                    <p className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-primary/70 mb-5">
                      The OmKnee Seven
                    </p>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
                      {foundations.map((pillar) => (
                        <li key={pillar.id}>
                          <Link
                            to={pillar.to}
                            onClick={() => {
                              trackPillarSelect(pillar.id);
                              setMegaOpen(false);
                            }}
                            className="group flex gap-3 rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-secondary/60"
                          >
                            <span className="font-serif text-sm text-primary/60 tabular-nums pt-0.5">
                              {pillar.number}
                            </span>
                            <span>
                              <span className="block font-sans text-sm text-foreground">
                                {pillar.name}
                              </span>
                              <span className="block font-sans text-xs text-muted-foreground">
                                {pillar.strapline}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="my-5 h-px bg-border" aria-hidden="true" />

                    <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
                      {pathway.map((pillar) => (
                        <li key={pillar.id}>
                          <Link
                            to={pillar.to}
                            onClick={() => {
                              trackPillarSelect(pillar.id);
                              setMegaOpen(false);
                            }}
                            className="group flex gap-3 rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-secondary/60"
                          >
                            <span className="font-serif text-sm text-primary/60 tabular-nums pt-0.5">
                              {pillar.number}
                            </span>
                            <span>
                              <span className="block font-sans text-sm text-foreground">
                                {pillar.name}
                              </span>
                              <span className="block font-sans text-xs text-muted-foreground">
                                {pillar.strapline}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-sans text-xs xl:text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
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
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11"
              aria-label="Basket, empty"
              asChild
            >
              <Link to="/shop">
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
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
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-up bg-background absolute left-0 right-0 top-full shadow-lg">
            <nav className="flex flex-col container px-6" aria-label="Mobile navigation">
              <Link
                to="/knee-health"
                className="font-sans text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Look After Your Knees
              </Link>
              <ul className="border-l border-border ml-1 pl-4 mb-2">
                {OMKNEE_SEVEN.map((pillar) => (
                  <li key={pillar.id} className={pillar.id === "diagnose" ? "mt-2 pt-2 border-t border-border" : ""}>
                    <Link
                      to={pillar.to}
                      onClick={() => {
                        trackPillarSelect(pillar.id);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 min-h-[44px] font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="font-serif text-xs text-primary/60 tabular-nums">{pillar.number}</span>
                      {pillar.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-sans text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-4 min-h-[44px]" size="default" asChild>
                <Link to="/knee-score" onClick={() => setMobileMenuOpen(false)}>
                  Get your Knee Score
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>

      <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
};

export default Header;
