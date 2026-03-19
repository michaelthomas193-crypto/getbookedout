import { MailX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Unsubscribe = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <MailX className="w-14 h-14 text-muted-foreground" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            You've Been Unsubscribed
          </h1>
        </div>

        <p className="text-muted-foreground text-lg">
          You will no longer receive emails from us.
        </p>

        <div className="bg-muted/50 rounded-lg p-5 space-y-2">
          <p className="text-foreground/80 font-medium">Thanks for letting us know.</p>
          <p className="text-muted-foreground text-sm">
            We respect your inbox and your time.
          </p>
        </div>

        <Button asChild size="lg" className="mt-4">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Unsubscribe;
