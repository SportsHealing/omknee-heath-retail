/**
 * Password-Protected Team Resources Page
 * Internal access only - simple password gate
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Lock, 
  FileText, 
  Shield, 
  BookOpen, 
  Palette, 
  MessageSquare,
  Download,
  ExternalLink
} from "lucide-react";
import { generateCompliancePlaybook } from "@/lib/generateCompliancePlaybook";
import { generateBrandGuidelines } from "@/lib/generateBrandGuidelines";
import { generateProductKnowledgeBase } from "@/lib/generateProductKnowledgeBase";
import { generateContentTemplates } from "@/lib/generateContentTemplates";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Simple password for internal access - change this to your team's password
const TEAM_PASSWORD = "omknee2024";

interface ResourceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  action: "download" | "link";
  onClick?: () => void;
  href?: string;
  available: boolean;
}

const TeamResources = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already authenticated in this session
  useEffect(() => {
    const authenticated = sessionStorage.getItem("team_authenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === TEAM_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("team_authenticated", "true");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("team_authenticated");
  };

  const resources: ResourceItem[] = [
    {
      title: "Compliance Language Playbook",
      description: "UK & EU food supplement regulatory compliance guide. Approved and prohibited language for marketing.",
      icon: Shield,
      action: "download",
      onClick: generateCompliancePlaybook,
      available: true,
    },
    {
      title: "Brand Guidelines",
      description: "Logo usage, color palette, typography, and visual identity standards.",
      icon: Palette,
      action: "download",
      onClick: generateBrandGuidelines,
      available: true,
    },
    {
      title: "Content Templates",
      description: "Pre-approved templates for social media, email campaigns, and product descriptions.",
      icon: FileText,
      action: "download",
      onClick: generateContentTemplates,
      available: true,
    },
    {
      title: "Product Knowledge Base",
      description: "Detailed ingredient information, sourcing, and formulation documentation.",
      icon: BookOpen,
      action: "download",
      onClick: generateProductKnowledgeBase,
      available: true,
    },
    {
      title: "Customer Response Scripts",
      description: "Approved responses for common customer inquiries and complaints.",
      icon: MessageSquare,
      action: "link",
      href: "#",
      available: false,
    },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Team Resources</CardTitle>
                  <CardDescription>
                    Enter the team password to access internal resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Input
                        type="password"
                        placeholder="Enter team password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-center"
                        autoFocus
                      />
                      {error && (
                        <p className="text-sm text-destructive mt-2 text-center">{error}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full">
                      Access Resources
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                  Team Resources
                </h1>
                <p className="text-muted-foreground font-sans">
                  Internal documents and guidelines for the OmKneeHealth team
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <Lock className="w-4 h-4 mr-2" />
                Log Out
              </Button>
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <Card 
                  key={resource.title} 
                  className={`transition-shadow ${resource.available ? 'hover:shadow-md' : 'opacity-60'}`}
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className={`p-3 rounded-lg ${resource.available ? 'bg-primary/10' : 'bg-muted'}`}>
                      <resource.icon className={`w-6 h-6 ${resource.available ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg mb-1">
                        {resource.title}
                        {!resource.available && (
                          <span className="ml-2 text-xs font-sans font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded">
                            Coming Soon
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {resource.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {resource.available ? (
                      resource.action === "download" ? (
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          onClick={resource.onClick}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      ) : (
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          asChild
                        >
                          <a href={resource.href} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open
                          </a>
                        </Button>
                      )
                    ) : (
                      <Button variant="secondary" size="sm" disabled>
                        Not Available Yet
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Info Note */}
            <div className="mt-10 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> These resources are for internal team use only. 
                Do not share login credentials or download documents externally.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamResources;
