import { useEffect } from "react";
import { CheckCircle, Mail, Settings, Rocket } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PaymentConfirmed = () => {
  useEffect(() => {
    // Hide the chat widget on this page
    const style = document.createElement("style");
    style.id = "hide-chat-widget";
    style.textContent = `
      chat-widget {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const el = document.getElementById("hide-chat-widget");
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Welcome Aboard, Legend.
          </h1>
          <p className="text-lg text-muted-foreground">
            Payment confirmed. You've just made the smartest move for your business.
          </p>
        </div>

        {/* Body Text */}
        <p className="text-foreground/80">
          We're getting everything set up for you now. Keep an eye on your inbox — your welcome email with next steps is on its way.
        </p>

        {/* Alert Box */}
        <Alert className="bg-amber-50 border-amber-200 text-left">
          <AlertDescription className="text-amber-800 font-medium">
            ⚠️ Check your spam folder if you don't see our email within a few minutes. Drag it to your inbox so nothing gets lost.
          </AlertDescription>
        </Alert>

        {/* What Happens Next */}
        <div className="bg-muted/50 rounded-xl p-6 text-left space-y-4">
          <h2 className="text-xl font-semibold text-foreground">What Happens Next:</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80">Check your inbox for your welcome email & login details</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Settings className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80">We'll start setting up your system — no heavy lifting from you</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Rocket className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80">Sit back and get ready to stop chasing leads and start choosing your jobs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmed;
