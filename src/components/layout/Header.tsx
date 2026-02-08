import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoDarkGreen from "@/assets/logo-dark-green.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/product" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Joint Health Supplement
            </Link>
            <Link to="/ingredients" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ingredients
            </Link>
            <Link to="/science" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Evidence & Science
            </Link>
            <Link to="/curated" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Curated Knee Essentials
            </Link>
            <Link to="/faq" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden lg:inline-flex text-sm font-medium border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              asChild
            >
              <Link to="/assessment">Free Knee Assessment</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden h-10 w-10"
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
            <nav className="flex flex-col container px-6" role="navigation" aria-label="Mobile navigation">
              <Link 
                to="/product" 
                className="font-sans text-sm text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Joint Health Supplement
              </Link>
              <Link 
                to="/ingredients" 
                className="font-sans text-sm text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ingredients
              </Link>
              <Link 
                to="/science" 
                className="font-sans text-sm text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Evidence & Science
              </Link>
              <Link 
                to="/curated" 
                className="font-sans text-sm text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Curated Knee Essentials
              </Link>
              <Link 
                to="/faq" 
                className="font-sans text-sm text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/about" 
                className="font-sans text-sm text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                About OmKneeHealth
              </Link>
              <Button 
                className="w-full mt-4 min-h-[44px]" 
                size="default"
                asChild
              >
                <Link to="/assessment">Free Knee Assessment</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
