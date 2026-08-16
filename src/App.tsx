import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import Index from "./pages/Index";

// Primary destinations
import KneeHealth from "./pages/KneeHealth";
import KneeScore from "./pages/KneeScore";
import Shop from "./pages/Shop";
import About from "./pages/About";

// Knee Health cornerstones
import YourKnee from "./pages/pillars/YourKnee";
import Movement from "./pages/pillars/Movement";
import CartilageCollagen from "./pages/pillars/CartilageCollagen";
import ThroughLife from "./pages/pillars/ThroughLife";
import HealthAndWellness from "./pages/pillars/HealthAndWellness";
import NutritionAndDiet from "./pages/pillars/NutritionAndDiet";
import Biomechanics from "./pages/pillars/Biomechanics";
import ManagingLoad from "./pages/pillars/ManagingLoad";
import InjuryPrevention from "./pages/pillars/InjuryPrevention";

// Shop depth
import Product from "./pages/Product";
import Ingredients from "./pages/Ingredients";
import Collagen from "./pages/ingredients/Collagen";
import Curcumin from "./pages/ingredients/Curcumin";
import Boswellia from "./pages/ingredients/Boswellia";
import Glucosamine from "./pages/ingredients/Glucosamine";
import Chondroitin from "./pages/ingredients/Chondroitin";
import VitaminD from "./pages/ingredients/VitaminD";
import TraceMinerals from "./pages/ingredients/TraceMinerals";
import HowItWorks from "./pages/HowItWorks";
import WhoItsFor from "./pages/WhoItsFor";
import FAQ from "./pages/FAQ";

// Journal
import BlogIndex from "./pages/blog/Index";
import BestSupplementKneeCartilage from "./pages/blog/BestSupplementKneeCartilage";
import CollagenSupplementsKneeJoints from "./pages/blog/CollagenSupplementsKneeJoints";
import SupplementsOsteoarthritisEvidence from "./pages/blog/SupplementsOsteoarthritisEvidence";
import KneePainSupplementsVsPainkillers from "./pages/blog/KneePainSupplementsVsPainkillers";
import SupportKneeJointsAsYouAge from "./pages/blog/SupportKneeJointsAsYouAge";

// Company & legal
import Partners from "./pages/Partners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ReturnsPolicy from "./pages/ReturnsPolicy";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import CompliancePlaybook from "./pages/CompliancePlaybook";
import TeamResources from "./pages/TeamResources";
import NotFound from "./pages/NotFound";

import ScrollToHash from "./components/ScrollToHash";
import CookieConsent from "./components/CookieConsent";
import Redirect from "./components/Redirect";

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

          {/* Primary destinations */}
          <Route path="/knee-health" element={<KneeHealth />} />
          <Route path="/knee-score" element={<KneeScore />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/journal" element={<BlogIndex />} />
          <Route path="/about" element={<About />} />

          {/* Knee Health cornerstones */}
          <Route path="/your-knee" element={<YourKnee />} />
          <Route path="/knee-movement" element={<Movement />} />
          <Route path="/cartilage-collagen-synovial-fluid" element={<CartilageCollagen />} />
          <Route path="/healthy-knees-through-life" element={<ThroughLife />} />
          <Route path="/knee-health-wellness" element={<HealthAndWellness />} />
          <Route path="/knee-nutrition-diet" element={<NutritionAndDiet />} />
          <Route path="/knee-biomechanics" element={<Biomechanics />} />
          <Route path="/knee-managing-load" element={<ManagingLoad />} />
          <Route path="/knee-injury-prevention" element={<InjuryPrevention />} />

          {/* Shop depth */}
          <Route path="/product" element={<Product />} />
          <Route path="/shop/nutrition" element={<Redirect to="/product" />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/ingredients/collagen" element={<Collagen />} />
          <Route path="/ingredients/curcumin" element={<Curcumin />} />
          <Route path="/ingredients/boswellia" element={<Boswellia />} />
          <Route path="/ingredients/glucosamine" element={<Glucosamine />} />
          <Route path="/ingredients/chondroitin" element={<Chondroitin />} />
          <Route path="/ingredients/vitamin-d" element={<VitaminD />} />
          <Route path="/ingredients/trace-minerals" element={<TraceMinerals />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/who-its-for" element={<WhoItsFor />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Journal articles */}
          <Route path="/blog/best-supplement-for-knee-cartilage" element={<BestSupplementKneeCartilage />} />
          <Route path="/blog/do-collagen-supplements-help-knee-joints" element={<CollagenSupplementsKneeJoints />} />
          <Route path="/blog/supplements-for-knee-osteoarthritis-evidence" element={<SupplementsOsteoarthritisEvidence />} />
          <Route path="/blog/knee-pain-supplements-vs-painkillers" element={<KneePainSupplementsVsPainkillers />} />
          <Route path="/blog/support-knee-joints-as-you-age" element={<SupportKneeJointsAsYouAge />} />

          {/* Company & legal */}
          <Route path="/partners" element={<Partners />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/compliance-playbook" element={<CompliancePlaybook />} />
          <Route path="/team-resources" element={<TeamResources />} />

          {/* Moved routes */}
          <Route path="/blog" element={<Redirect to="/journal" />} />
          <Route path="/curated" element={<Redirect to="/shop" />} />
          <Route path="/assessment" element={<Redirect to="/knee-score" />} />
          <Route path="/learn" element={<Redirect to="/your-knee" />} />
          <Route path="/science" element={<Redirect to="/knee-health" />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
