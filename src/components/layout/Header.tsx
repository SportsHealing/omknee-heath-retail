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
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoDarkGreen} 
              alt="OmKneeHealth" 
              className="h-28 md:h-36 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#philosophy" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Our Philosophy
            </Link>
            <Link to="/science" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              The Science
            </Link>
            <Link to="/assessment" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Full Knee Assessment
            </Link>
            <Link to="/product" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Our Formula
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden md:inline-flex text-sm font-medium border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              asChild
            >
              <Link to="/assessment">Take Full Assessment</Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-10 w-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-up">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/#philosophy" 
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Philosophy
              </Link>
              <Link 
                to="/science" 
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Science
              </Link>
              <Link 
                to="/assessment" 
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Full Knee Assessment
              </Link>
              <Link 
                to="/product" 
                className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Formula
              </Link>
              <Button 
                className="w-full mt-4" 
                size="sm"
                asChild
              >
                <Link to="/assessment">Take Full Assessment</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
