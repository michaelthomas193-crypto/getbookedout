import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

// Lazy-load all secondary routes — keeps homepage JS small.
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Plumbing = lazy(() => import("./pages/Plumbing"));
const Electrical = lazy(() => import("./pages/Electrical"));
const Painters = lazy(() => import("./pages/Painters"));
const Landscapers = lazy(() => import("./pages/Landscapers"));
const Handyman = lazy(() => import("./pages/Handyman"));
const Carpenters = lazy(() => import("./pages/Carpenters"));
const Concreters = lazy(() => import("./pages/Concreters"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Thanks = lazy(() => import("./pages/Thanks"));
const ScheduleDemo = lazy(() => import("./pages/ScheduleDemo"));
const FormThankYou = lazy(() => import("./pages/FormThankYou"));
const PaymentConfirmed = lazy(() => import("./pages/PaymentConfirmed"));
const RateUs = lazy(() => import("./pages/RateUs"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));
const NeverMissEnquiry = lazy(() => import("./pages/NeverMissEnquiry"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const TrainingHub = lazy(() => import("./pages/TrainingHub"));
const Location = lazy(() => import("./pages/Location"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
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
            <Route path="/never-miss-an-enquiry-again" element={<NeverMissEnquiry />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/training" element={<TrainingHub />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/sydney" element={<Location />} />
            <Route path="/melbourne" element={<Location />} />
            <Route path="/brisbane" element={<Location />} />
            <Route path="/perth" element={<Location />} />
            <Route path="/adelaide" element={<Location />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
