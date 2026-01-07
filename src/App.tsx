import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import Pricing from "./pages/Pricing";
import Plumbing from "./pages/Plumbing";
import Electrical from "./pages/Electrical";
import Painters from "./pages/Painters";
import Landscapers from "./pages/Landscapers";
import Handyman from "./pages/Handyman";
import Carpenters from "./pages/Carpenters";
import Concreters from "./pages/Concreters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/painters" element={<Painters />} />
          <Route path="/landscapers" element={<Landscapers />} />
          <Route path="/handyman" element={<Handyman />} />
          <Route path="/carpenters" element={<Carpenters />} />
          <Route path="/concreters" element={<Concreters />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
