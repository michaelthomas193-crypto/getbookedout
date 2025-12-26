const integrations = [
  { 
    name: "Google", 
    colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    type: "google"
  },
  { 
    name: "Facebook", 
    color: "#1877F2",
    type: "facebook"
  },
  { 
    name: "Instagram", 
    gradient: "linear-gradient(45deg, #833AB4, #FD1D1D, #FCAF45)",
    type: "instagram"
  },
  { 
    name: "Calendly", 
    color: "#006BFF",
    type: "calendly"
  },
  { 
    name: "Stripe", 
    color: "#635BFF",
    type: "stripe"
  },
  { 
    name: "Square", 
    color: "#3E4348",
    type: "square"
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <circle fill="#1877F2" cx="12" cy="12" r="11"/>
    <path fill="white" d="M16.5 8H14c-.5 0-1 .5-1 1v2h3.5l-.5 3H13v7h-3v-7H7v-3h3V9c0-2 1.5-4 4-4h2.5v3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FCAF45"/>
        <stop offset="25%" stopColor="#FD1D1D"/>
        <stop offset="50%" stopColor="#E1306C"/>
        <stop offset="100%" stopColor="#833AB4"/>
      </linearGradient>
    </defs>
    <rect fill="url(#instagram-gradient)" width="24" height="24" rx="6"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
  </svg>
);

const CalendlyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <circle fill="#006BFF" cx="12" cy="12" r="11"/>
    <path fill="white" d="M8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <rect fill="#635BFF" width="24" height="24" rx="4"/>
    <path fill="white" d="M13.98 11.77c0-1.12-.55-2-1.79-2-.39 0-.82.1-1.2.31v4.75c.36.19.75.29 1.13.29 1.01 0 1.86-.72 1.86-2.35v-1zm-3 4.93V7.45l.01-.06 2.77-.55.01.01v1.38c.55-.35 1.19-.53 1.89-.53 1.9 0 3.1 1.47 3.1 3.7 0 2.63-1.54 4.17-3.44 4.17-.56 0-1.12-.15-1.56-.42v2.99l-2.78.56z"/>
  </svg>
);

const SquareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <rect fill="#3E4348" width="24" height="24" rx="4"/>
    <rect x="6" y="6" width="12" height="12" rx="2" fill="white"/>
  </svg>
);

const IconComponents: { [key: string]: React.FC } = {
  google: GoogleIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  calendly: CalendlyIcon,
  stripe: StripeIcon,
  square: SquareIcon,
};

const Integrations = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container-padding max-w-6xl mx-auto">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-10">
          Works with the tools you already use
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {integrations.map((integration) => {
            const IconComponent = IconComponents[integration.type];
            return (
              <div
                key={integration.name}
                className="group flex flex-col items-center justify-center w-24 h-20 transition-all duration-300 cursor-pointer hover:scale-110"
              >
                <div className="mb-2">
                  <IconComponent />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                  {integration.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Integrations;