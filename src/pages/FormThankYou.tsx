import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const FormThankYou = () => {
  useEffect(() => {
    // Hide (not remove) the chat widget so it can be restored on other pages
    const style = document.createElement("style");
    style.id = "hide-chat-widget";
    style.textContent = `
      chat-widget {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Restore the widget when navigating away
      const el = document.getElementById("hide-chat-widget");
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-14 h-14 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-lg text-muted-foreground leading-relaxed">
          Thanks for filling in the form. We've received your details and will be in touch shortly.
        </p>
      </div>
    </div>
  );
};

export default FormThankYou;
