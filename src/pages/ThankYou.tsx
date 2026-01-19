import { CheckCircle, Mail, Calendar, Presentation } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ThankYou = () => {
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
            Welcome to Get Booked Out
          </h1>
          <p className="text-lg text-muted-foreground">
            Your spot is secured and we're ready to help you get booked out.
          </p>
        </div>

        {/* Body Text */}
        <p className="text-foreground/80">
          Within the next few minutes, you'll receive your welcome email with everything you need for our demo call.
        </p>

        {/* Alert Box */}
        <Alert className="bg-amber-50 border-amber-200 text-left">
          <AlertDescription className="text-amber-800 font-medium">
            ⚠️ Check your spam folder NOW if you don't see our email. Drag it to your inbox and add us to your contacts so nothing gets lost.
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
              <span className="text-foreground/80">Check your inbox for our email</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80">Add the demo call to your calendar</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Presentation className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground/80">We'll show you exactly how this works for your trade</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
