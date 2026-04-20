import { useEffect } from "react";

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface LeadFormEmbedProps {
  title?: string;
  subtitle?: string;
  className?: string;
  height?: number;
  showHeader?: boolean;
}

const LeadFormEmbed = ({ 
  title = "Stop Losing Jobs", 
  subtitle = "10min chat. No sales pitch.",
  className = "",
  height = 480,
  showHeader = true
}: LeadFormEmbedProps) => {
  useEffect(() => {
    // Load the form embed script
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Listen for form submission messages from LeadConnector iframe
    const handleMessage = (event: MessageEvent) => {
      // LeadConnector sends messages on form events
      if (
        event.data?.type === 'form-submitted' ||
        event.data?.event === 'form_submit' ||
        event.data?.formSubmitted ||
        (typeof event.data === 'string' && event.data.includes('submit'))
      ) {
        // Fire Meta Pixel CompleteRegistration event
        if (window.fbq) {
          window.fbq('track', 'CompleteRegistration');
          console.log('Meta Pixel: CompleteRegistration event fired');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className={`bg-card overflow-hidden ${className}`}>
      {/* Form Header */}
      {showHeader && (
        <div className="text-center p-4 pb-0">
          <h2 className="text-lg md:text-xl font-bold">{title}</h2>
          <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
        </div>
      )}

      {/* Embedded Form */}
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/l0s50SAT3j1HjcABaNr8"
        style={{ width: "100%", height: `${height}px`, border: "none" }}
        id="inline-l0s50SAT3j1HjcABaNr8"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Get Booked out contact form"
        data-height="856"
        data-layout-iframe-id="inline-l0s50SAT3j1HjcABaNr8"
        data-form-id="l0s50SAT3j1HjcABaNr8"
        title="Get Booked out contact form"
      />
    </div>
  );
};

export default LeadFormEmbed;
