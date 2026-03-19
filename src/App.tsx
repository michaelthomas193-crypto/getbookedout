import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import WhyUs from "./pages/WhyUs";
import Pricing from "./pages/Pricing";
import Plumbing from "./pages/Plumbing";
import Electrical from "./pages/Electrical";
import Painters from "./pages/Painters";
import Landscapers from "./pages/Landscapers";
import Handyman from "./pages/Handyman";
import Carpenters from "./pages/Carpenters";
import Concreters from "./pages/Concreters";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/Privacy";
import ThankYou from "./pages/ThankYou";
import Thanks from "./pages/Thanks";
import ScheduleDemo from "./pages/ScheduleDemo";
import FormThankYou from "./pages/FormThankYou";
import PaymentConfirmed from "./pages/PaymentConfirmed";
import RateUs from "./pages/RateUs";
import Unsubscribe from "./pages/Unsubscribe";
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
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/painting" element={<Painters />} />
          <Route path="/landscaping" element={<Landscapers />} />
          <Route path="/handyman" element={<Handyman />} />
          <Route path="/carpentry" element={<Carpenters />} />
          <Route path="/concreting" element={<Concreters />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/thank-you" element={<ThankYou />} />
           <Route path="/thanks" element={<Thanks />} />
           <Route path="/schedule-demo" element={<ScheduleDemo />} />
           <Route path="/form-thank-you" element={<FormThankYou />} />
           <Route path="/payment-confirmed" element={<PaymentConfirmed />} />
           <Route path="/rate-us" element={<RateUs />} />
           <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
