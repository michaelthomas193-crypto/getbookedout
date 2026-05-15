import { Button } from "@/components/ui/button";
import SeoHead from "@/components/SeoHead";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const WhyUs = () => {
  return (
    <>
      <SeoHead title="Why Get Booked Out vs Call Centres & Voicemail" description="See how Get Booked Out's AI receptionist compares to call centres, voicemail and missed calls — answering 24/7 from $99/week." path="/why-us" />
      <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section 1 - Hero */}
      <section className="pt-8 pb-4 md:pt-10 md:pb-6 bg-secondary/30">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Good Businesses Lose Jobs Every Day.{" "}
            <span className="text-primary">Not Because They're Bad—Because They're Busy.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            You're busy doing the work. You can't answer every call. But your customers don't wait—they call the next business on the list. Here's why that changes with us.
          </p>
        </div>
      </section>

      {/* Section 2 - The Cost of Missed Calls */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container-padding max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
            That Missed Call at 7pm?{" "}
            <span className="text-primary">It Was Worth $500.</span>
          </h2>
          
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Let's do the maths. Say you miss just 4 calls a day. That's 28 missed calls a week. 
              85% of those people won't call back—they've already called your competitor. 
              That leaves you with 24 lost opportunities every single week.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Now, depending on how good you are at closing, here's what that could be costing you:
            </p>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-4 py-4 text-left font-semibold">Close Rate</th>
                  <th className="px-4 py-4 text-left font-semibold">Lost Jobs/Week</th>
                  <th className="px-4 py-4 text-left font-semibold">Lost/Week</th>
                  <th className="px-4 py-4 text-left font-semibold">Lost/Month</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-4 font-medium">30%</td>
                  <td className="px-4 py-4 text-muted-foreground">~7 jobs</td>
                  <td className="px-4 py-4 text-destructive font-semibold">$3,500</td>
                  <td className="px-4 py-4 text-destructive font-bold">$14,000</td>
                </tr>
                <tr className="border-b border-border bg-secondary/30">
                  <td className="px-4 py-4 font-medium">50%</td>
                  <td className="px-4 py-4 text-muted-foreground">~12 jobs</td>
                  <td className="px-4 py-4 text-destructive font-semibold">$6,000</td>
                  <td className="px-4 py-4 text-destructive font-bold">$24,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">70%</td>
                  <td className="px-4 py-4 text-muted-foreground">~17 jobs</td>
                  <td className="px-4 py-4 text-destructive font-semibold">$8,500</td>
                  <td className="px-4 py-4 text-destructive font-bold">$34,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile-friendly stacked cards for table data */}
          <div className="md:hidden space-y-4 mb-8">
            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">30% Close Rate</span>
                <span className="text-destructive font-bold">$14,000/mo</span>
              </div>
              <p className="text-sm text-muted-foreground">~7 lost jobs/week = $3,500/week</p>
            </div>
            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">50% Close Rate</span>
                <span className="text-destructive font-bold">$24,000/mo</span>
              </div>
              <p className="text-sm text-muted-foreground">~12 lost jobs/week = $6,000/week</p>
            </div>
            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">70% Close Rate</span>
                <span className="text-destructive font-bold">$34,000/mo</span>
              </div>
              <p className="text-sm text-muted-foreground">~17 lost jobs/week = $8,500/week</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center italic mb-10">
            Based on $500 average job value. Your numbers may vary.
          </p>

          <p className="text-lg md:text-xl text-center font-medium">
            We answer every missed call instantly.{" "}
            <span className="text-primary font-semibold">6am or 10pm. Saturday night or public holiday.</span>
          </p>
        </div>
      </section>

      {/* Section 3 - Receptionist Comparison */}
      <section className="py-8 md:py-10 bg-secondary/30">
        <div className="container-padding max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
            A Receptionist Costs $80k.{" "}
            <span className="text-primary">We Cost $999/month.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Full-Time Receptionist */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center">Full-Time Receptionist</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Salary</span>
                  <span className="font-medium">$55,000 – $60,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Superannuation</span>
                  <span className="font-medium">~$6,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Leave & Training</span>
                  <span className="font-medium">$8,000 – $10,000</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="font-bold">Total Per Year</span>
                  <span className="font-bold text-destructive">$70,000 – $90,000</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>❌ Doesn't work weekends or after hours</p>
                <p>❌ Takes sick days and holidays</p>
                <p>❌ Might quit when you need them most</p>
                <p>❌ Needs training and management</p>
              </div>
            </div>

            {/* Get Booked Out */}
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-background text-primary text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
              <h3 className="text-xl font-bold mb-6 text-center">Get Booked Out Complete</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">Monthly Cost</span>
                  <span className="font-medium">$999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">Annual Cost</span>
                  <span className="font-medium">$11,988</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">Super/Leave/HR</span>
                  <span className="font-medium">$0</span>
                </div>
                <div className="border-t border-primary-foreground/20 pt-4 flex justify-between">
                  <span className="font-bold">Total Per Year</span>
                  <span className="font-bold text-2xl">$11,988</span>
                </div>
              </div>
              <div className="text-sm text-primary-foreground/90 space-y-2">
                <p>✓ Works 24/7/365 — no breaks, no holidays</p>
                <p>✓ Never sick, never quits</p>
                <p>✓ Answers calls, books jobs, chases reviews</p>
                <p>✓ No super, no leave, no HR headaches</p>
              </div>
            </div>
          </div>

          {/* Savings Callout */}
          <div className="bg-accent text-accent-foreground p-6 md:p-8 rounded-2xl text-center">
            <p className="text-2xl md:text-3xl font-bold">
              $60,000+ back in your pocket every year
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - The Stress */}
      <section className="py-8 md:py-10 bg-muted/50">
        <div className="container-padding max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10">
            You Became a Business Owner to Do the Work.{" "}
            <span className="text-primary">Not to Be a Secretary.</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              You didn't spend years learning your craft so you could spend your nights chasing voicemails. 
              You didn't start your business so you could stress about follow-ups while you're trying to have dinner with the family.
            </p>
            <p>
              But here you are. Listening to messages at 9pm. Sending quotes at midnight. 
              Trying to remember who you were supposed to call back. Wondering if that lead from last Tuesday ever got a response.
            </p>
            <p>
              And Sunday night rolls around and you're already dreading Monday—not because of the work, 
              but because of all the admin you know is waiting for you.
            </p>
            <p className="font-medium text-foreground">
              We take that off your plate. Not some of it—all of it.
            </p>
            <p className="text-xl font-semibold text-foreground">
              You do the work. We handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - CTA */}
      <section className="py-8 md:py-10 bg-primary text-primary-foreground">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Stop Losing Jobs. Stop Paying Receptionist Wages.{" "}
            <span className="block mt-2">Stop Doing It All Yourself.</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            Get Booked Out from $499/month.
          </p>
          <Link to="/get-started">
            <Button variant="white" size="xl">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <MobileStickyCTA />
    </div>
  </>
  );
};

export default WhyUs;
