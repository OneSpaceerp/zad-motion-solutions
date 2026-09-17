import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

// Page Imports
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import LocalAssemblyPage from "./pages/LocalAssemblyPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import TechnologyPage from "./pages/TechnologyPage";
import SparePartsPage from "./pages/SparePartsPage";
import SupportPage from "./pages/SupportPage";
import RequestServicePage from "./pages/RequestServicePage";
import ContactPage from "./pages/ContactPage";
import KnowledgePage from "./pages/KnowledgePage";
import KnowledgeArticlePage from "./pages/KnowledgeArticlePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" richColors />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-primary">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Services Routes */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />

              {/* Solutions Routes */}
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

              {/* Local Assembly */}
              <Route path="/local-assembly" element={<LocalAssemblyPage />} />

              {/* Projects Routes */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />

              {/* Technology & Diagnostics */}
              <Route path="/technology" element={<TechnologyPage />} />

              {/* Spare Parts */}
              <Route path="/spare-parts" element={<SparePartsPage />} />

              {/* Support */}
              <Route path="/support" element={<SupportPage />} />

              {/* Service Request & Contact */}
              <Route path="/request-service" element={<RequestServicePage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Knowledge Center */}
              <Route path="/knowledge" element={<KnowledgePage />} />
              <Route path="/knowledge/:slug" element={<KnowledgeArticlePage />} />

              {/* Legal */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
