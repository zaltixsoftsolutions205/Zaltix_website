import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// Core Pages
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import KnowledgePage from "./pages/KnowledgePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import BlogDetailPage from "./pages/BlogDetailPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

// ✅ ZALTIX SERVICE DETAIL PAGES (NEW)
import WebMobileSystems from "./pages/services/web-mobile-systems";
import AutomationSystems from "./pages/services/automation-systems";
import AnalyticsVisibility from "./pages/services/analytics-visibility";
import DecisionIntelligence from "./pages/services/decision-intelligence";
import AIAssistants from "./pages/services/ai-assistants";
import CloudFoundations from "./pages/services/cloud-foundations";
import DigitalMarketing from "./pages/services/digital-marketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Blog */}
          <Route path="/blog/:id" element={<BlogDetailPage />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          {/* ✅ ZALTIX SERVICE ROUTES */}
          <Route
            path="/services/web-mobile-systems"
            element={<WebMobileSystems />}
          />
          <Route
            path="/services/automation-systems"
            element={<AutomationSystems />}
          />
          <Route
            path="/services/analytics-visibility"
            element={<AnalyticsVisibility />}
          />
          <Route
            path="/services/decision-intelligence"
            element={<DecisionIntelligence />}
          />
          <Route
            path="/services/ai-assistants"
            element={<AIAssistants />}
          />
          <Route
            path="/services/cloud-foundations"
            element={<CloudFoundations />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />

          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
