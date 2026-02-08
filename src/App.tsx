import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Science from "./pages/Science";
import Assessment from "./pages/Assessment";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Curated from "./pages/Curated";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import Contact from "./pages/Contact";
import CompliancePlaybook from "./pages/CompliancePlaybook";
import TeamResources from "./pages/TeamResources";
import NotFound from "./pages/NotFound";
import ScrollToHash from "./components/ScrollToHash";
import CookieConsent from "./components/CookieConsent";

// Ingredient pages
import Collagen from "./pages/ingredients/Collagen";
import Curcumin from "./pages/ingredients/Curcumin";
import Boswellia from "./pages/ingredients/Boswellia";
import Glucosamine from "./pages/ingredients/Glucosamine";
import Chondroitin from "./pages/ingredients/Chondroitin";
import VitaminD from "./pages/ingredients/VitaminD";
import TraceMinerals from "./pages/ingredients/TraceMinerals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/science" element={<Science />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/curated" element={<Curated />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compliance-playbook" element={<CompliancePlaybook />} />
          <Route path="/team-resources" element={<TeamResources />} />
          
          {/* Ingredient pages - SEO optimised */}
          <Route path="/ingredients/collagen" element={<Collagen />} />
          <Route path="/ingredients/curcumin" element={<Curcumin />} />
          <Route path="/ingredients/boswellia" element={<Boswellia />} />
          <Route path="/ingredients/glucosamine" element={<Glucosamine />} />
          <Route path="/ingredients/chondroitin" element={<Chondroitin />} />
          <Route path="/ingredients/vitamin-d" element={<VitaminD />} />
          <Route path="/ingredients/trace-minerals" element={<TraceMinerals />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
