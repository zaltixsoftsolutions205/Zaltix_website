import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop"; // ⬅️ Import ScrollToTop

import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import KnowledgePage from "./pages/KnowledgePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import BlogDetailPage from "./pages/BlogDetailPage"; // ⬅️ Import BlogDetailPage
import PrivacyPolicy from "./pages/PrivacyPolicy"; // ⬅️ Import PrivacyPolicy
import TermsAndConditions from "./pages/TermsAndConditions"; // ⬅️ Import Terms & Conditions

// ✅ Service Detail Pages
import CloudServicesPage from "./pages/services/CloudServicesPage";
import AppDevelopmentPage from "./pages/services/AppDevelopmentPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import AiMlSolutionsPage from "./pages/services/AiMlSolutionsPage";
import CustomSoftwarePage from "./pages/services/CustomSoftwarePage";
import WebApplicationPage from "./pages/services/WebApplicationPage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* ⬅️ Added here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* ✅ Blog Details */}
          <Route path="/blog/:id" element={<BlogDetailPage />} />

          {/* ✅ Privacy & Terms */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* ✅ Service Details */}
          <Route path="/services/cloud-services" element={<CloudServicesPage />} />
          <Route path="/services/app-development" element={<AppDevelopmentPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/web-application" element={<WebApplicationPage />} />
          <Route path="/services/ai-ml-solutions" element={<AiMlSolutionsPage />} />
          <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />

          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
