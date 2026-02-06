import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const FormThankYou = () => {
  useEffect(() => {
    // Completely remove the chat widget from the DOM on this page
    const hideWidget = () => {
      const chatWidget = document.querySelector("chat-widget");
      if (chatWidget) {
        chatWidget.remove();
      }
      // Also remove the loader script's injected elements
      const widgetElements = document.querySelectorAll(
        '[data-widget-id], #lc_chat_layout, .lc_text-widget'
      );
      widgetElements.forEach((el) => el.remove());
    };

    // Run immediately
    hideWidget();

    // Also run with a delay since the widget loads asynchronously
    const timer1 = setTimeout(hideWidget, 500);
    const timer2 = setTimeout(hideWidget, 1500);
    const timer3 = setTimeout(hideWidget, 3000);

    // Observe for dynamically added chat widget
    const observer = new MutationObserver(() => {
      const chatWidget = document.querySelector("chat-widget");
      if (chatWidget) {
        chatWidget.remove();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      observer.disconnect();
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
