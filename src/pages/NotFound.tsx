import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to OmKneeHealth to explore our knee health resources and assessment tools."
        noIndex={true}
      />
      <div className="text-center px-6 max-w-md">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
          Page Not Found
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">404</h1>
        <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
        <p className="font-sans text-muted-foreground leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
