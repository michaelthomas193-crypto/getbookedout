import { MessageSquare } from "lucide-react";

const tags = [
  "Google Integration",
  "Facebook Messenger",
  "Website Widget",
  "SMS Follow-up",
];

const LeadConversion = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-6">
              Leads are expensive.{" "}
              <span className="text-primary">Stop letting them slip away.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Our AI chat captures leads from your website, Google, and Facebook — 
              responding instantly to every inquiry, 24/7. No more missed opportunities, 
              no more leads going cold.
            </p>
            
            <p className="text-muted-foreground">
              Every conversation is handled professionally and seamlessly handed off 
              to your team when human touch is needed.
            </p>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-72 bg-foreground rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-card rounded-[2.5rem] overflow-hidden">
                {/* Phone Status Bar */}
                <div className="bg-secondary h-8 flex items-center justify-center">
                  <div className="w-20 h-5 bg-foreground/20 rounded-full" />
                </div>
                
                {/* Chat Content */}
                <div className="p-4 space-y-3 min-h-[400px]">
                  <div className="flex items-center gap-2 pb-3 border-b border-border">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-sm">Get Booked Out</span>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-3 text-sm max-w-[85%]">
                    Hi! How can I help you today?
                  </div>
                  
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 text-sm max-w-[85%] ml-auto">
                    I need a quote for cleaning
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-3 text-sm max-w-[85%]">
                    Great! I can help. What type of cleaning do you need?
                  </div>
                  
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 text-sm max-w-[85%] ml-auto">
                    End of lease cleaning
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-3 text-sm max-w-[85%]">
                    Perfect! I have slots available this week. Want me to book you in?
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -z-10 top-1/4 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-16">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-accent rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadConversion;
