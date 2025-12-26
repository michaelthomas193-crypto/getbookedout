import { Bell, FileText, CreditCard, PhoneOff, MessageSquare } from "lucide-react";

const automations = [
  { icon: Bell, label: "Automated appointment reminders" },
  { icon: FileText, label: "Digital intake forms" },
  { icon: CreditCard, label: "Payment links via SMS" },
  { icon: PhoneOff, label: "Missed call text-back" },
];

const Automation = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-6">
              Automate admin.{" "}
              <span className="text-primary">Spend time on what matters.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Stop wasting hours on repetitive tasks. Our automation tools handle 
              reminders, forms, and follow-ups so you can focus on your craft.
            </p>
            
            <ul className="space-y-4">
              {automations.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-72 bg-foreground rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-card rounded-[2.5rem] overflow-hidden">
                {/* Phone Status Bar */}
                <div className="bg-secondary h-8 flex items-center justify-center">
                  <div className="w-20 h-5 bg-foreground/20 rounded-full" />
                </div>
                
                {/* SMS Content */}
                <div className="p-4 space-y-3 min-h-[400px]">
                  <div className="flex items-center gap-2 pb-3 border-b border-border">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold text-sm">SMS Payment</span>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-3 text-sm">
                    <p className="font-semibold mb-2">Invoice #1234</p>
                    <p className="text-muted-foreground mb-3">
                      Thanks for choosing us! Your total is $250.00
                    </p>
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center font-semibold">
                      Pay Now - $250.00
                    </div>
                  </div>
                  
                  <div className="bg-accent rounded-lg p-3 text-sm text-center">
                    <p className="text-primary font-medium">✓ Payment Received</p>
                    <p className="text-muted-foreground text-xs mt-1">Thank you!</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -z-10 bottom-1/4 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;
