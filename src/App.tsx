import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Science from "./pages/Science";
import Assessment from "./pages/Assessment";
import Learn from "./pages/Learn";
import About from "./pages/About";
import HealthAndWellness from "./pages/pillars/HealthAndWellness";
import NutritionAndDiet from "./pages/pillars/NutritionAndDiet";
import Biomechanics from "./pages/pillars/Biomechanics";
import ManagingLoad from "./pages/pillars/ManagingLoad";
import InjuryPrevention from "./pages/pillars/InjuryPrevention";
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

// New SEO pages
import Ingredients from "./pages/Ingredients";
import HowItWorks from "./pages/HowItWorks";
import WhoItsFor from "./pages/WhoItsFor";
import FAQ from "./pages/FAQ";
import Legal from "./pages/Legal";

// Ingredient pages
import Collagen from "./pages/ingredients/Collagen";
import Curcumin from "./pages/ingredients/Curcumin";
import Boswellia from "./pages/ingredients/Boswellia";
import Glucosamine from "./pages/ingredients/Glucosamine";
import Chondroitin from "./pages/ingredients/Chondroitin";
import VitaminD from "./pages/ingredients/VitaminD";
import TraceMinerals from "./pages/ingredients/TraceMinerals";

// Blog pages
import BlogIndex from "./pages/blog/Index";
import BestSupplementKneeCartilage from "./pages/blog/BestSupplementKneeCartilage";
import CollagenSupplementsKneeJoints from "./pages/blog/CollagenSupplementsKneeJoints";
import SupplementsOsteoarthritisEvidence from "./pages/blog/SupplementsOsteoarthritisEvidence";
import KneePainSupplementsVsPainkillers from "./pages/blog/KneePainSupplementsVsPainkillers";
import SupportKneeJointsAsYouAge from "./pages/blog/SupportKneeJointsAsYouAge";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PerformanceOptimizer />
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
          <Route path="/knee-health-wellness" element={<HealthAndWellness />} />
          <Route path="/knee-nutrition-diet" element={<NutritionAndDiet />} />
          <Route path="/knee-biomechanics" element={<Biomechanics />} />
          <Route path="/knee-managing-load" element={<ManagingLoad />} />
          <Route path="/knee-injury-prevention" element={<InjuryPrevention />} />
          <Route path="/curated" element={<Curated />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compliance-playbook" element={<CompliancePlaybook />} />
          <Route path="/team-resources" element={<TeamResources />} />
          
          {/* New SEO pages */}
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/who-its-for" element={<WhoItsFor />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal" element={<Legal />} />
          
          {/* Ingredient pages - SEO optimised */}
          <Route path="/ingredients/collagen" element={<Collagen />} />
          <Route path="/ingredients/curcumin" element={<Curcumin />} />
          <Route path="/ingredients/boswellia" element={<Boswellia />} />
          <Route path="/ingredients/glucosamine" element={<Glucosamine />} />
          <Route path="/ingredients/chondroitin" element={<Chondroitin />} />
          <Route path="/ingredients/vitamin-d" element={<VitaminD />} />
          <Route path="/ingredients/trace-minerals" element={<TraceMinerals />} />
          
          {/* Blog content cluster - SEO optimised */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/best-supplement-for-knee-cartilage" element={<BestSupplementKneeCartilage />} />
          <Route path="/blog/do-collagen-supplements-help-knee-joints" element={<CollagenSupplementsKneeJoints />} />
          <Route path="/blog/supplements-for-knee-osteoarthritis-evidence" element={<SupplementsOsteoarthritisEvidence />} />
          <Route path="/blog/knee-pain-supplements-vs-painkillers" element={<KneePainSupplementsVsPainkillers />} />
          <Route path="/blog/support-knee-joints-as-you-age" element={<SupportKneeJointsAsYouAge />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
