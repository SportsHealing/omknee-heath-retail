import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-medium text-foreground">
              OmKnee<span className="text-primary">Health</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Our Approach
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              Science
            </a>
            <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="hidden md:inline-flex">
              Shop Now
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </a>
              <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Our Approach
              </a>
              <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Science
              </a>
              <a href="#" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <Button className="w-full mt-2">
                Shop Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
