import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SiteSearch from "./SiteSearch";
import logoDarkGreen from "@/assets/logo-dark-green.png";

const navItems = [
  { to: "/knee-health", label: "Knee Health" },
  { to: "/knee-score", label: "Knee Score" },
  { to: "/shop", label: "Shop" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="flex items-center justify-between h-24 lg:h-56">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoDarkGreen}
              alt="OmKneeHealth"
              width={208}
              height={208}
              className="h-20 md:h-52 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-sans text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
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
