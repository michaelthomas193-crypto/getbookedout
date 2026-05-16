import { CalendarCheck } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";

const scheduleDemoSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Book a Demo of Get Booked Out",
  url: "https://www.getbookedout.com.au/schedule-demo",
  description: "Book a 20-minute live demo of the Get Booked Out AI receptionist.",
  potentialAction: {
    "@type": "ReserveAction",
    target: "https://www.getbookedout.com.au/schedule-demo",
    result: { "@type": "Reservation", name: "Get Booked Out demo booking" },
  },
};

const ScheduleDemo = () => {
  return (
    <>
      <SeoHead
        title="Book a Demo — See Get Booked Out Live | Get Booked Out"
        description="Book a 20-minute demo and we'll show you exactly how Get Booked Out's AI receptionist would handle your business's calls, enquiries and reviews. From $99/week. No lock-in."
        path="/schedule-demo"
        jsonLd={scheduleDemoSchema}
      />
      <div className="min-h-screen bg-background px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <CalendarCheck className="w-14 h-14 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Book a 20-Minute Demo of Get Booked Out
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a 20-minute call. We'll show you exactly how the AI receptionist would answer your specific business's calls — your services, your prices, your tone — and run a live test call so you can hear it for yourself. From $99 a week. No lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button asChild size="xl">
                <a href="https://api.leadconnectorhq.com/widget/bookings/get-booked-out-calendar">Yes — book me in</a>
              </Button>
              <Button asChild size="xl" variant="outline">
                <a href="https://www.getbookedout.com.au/thanks">No thanks</a>
              </Button>
            </div>
          </div>

          <section className="bg-secondary/30 rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What you'll see on the call</h2>
            <ul className="space-y-2 list-disc pl-6 text-base md:text-lg text-foreground">
              <li>A live demo of the AI answering a call in your trade's voice</li>
              <li>The booking flow into your calendar</li>
              <li>The 5-star review automation</li>
              <li>The Get Booked Out app on iPhone and Android</li>
              <li>Pricing options and setup timeline</li>
            </ul>
          </section>

          <section className="rounded-2xl p-6 md:p-10 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What we'll ask</h2>
            <ul className="space-y-2 list-disc pl-6 text-base md:text-lg text-foreground">
              <li>What trade you're in and your job-mix</li>
              <li>Your average call volume per week</li>
              <li>Your current call-handling setup</li>
              <li>Whether you want the AI to identify as AI or as your business</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default ScheduleDemo;
