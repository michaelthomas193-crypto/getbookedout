import { CalendarCheck } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";

const ScheduleDemo = () => {
  return (
    <>
      <SeoHead title="Schedule a Demo | Get Booked Out" description="Book a live demo of Get Booked Out's AI receptionist and see how it answers calls and books appointments for your business." path="/schedule-demo" />
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarCheck className="w-14 h-14 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Would you like to schedule a live demo now?
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="xl">
            <a href="https://api.leadconnectorhq.com/widget/bookings/get-booked-out-calendar">
              Yes
            </a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href="https://www.getbookedout.com.au/thanks">
              No
            </a>
          </Button>
        </div>
      </div>
    </div>
  </>
  );
};

export default ScheduleDemo;
