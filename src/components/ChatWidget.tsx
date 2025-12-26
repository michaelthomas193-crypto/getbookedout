import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  return (
    <a
      href="tel:1300000000"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform group"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-card text-foreground text-sm font-medium px-4 py-3 rounded-xl shadow-xl border border-border whitespace-nowrap max-w-[240px]">
          <p className="font-semibold mb-1">Hey! 👋</p>
          <p className="text-muted-foreground text-xs">Interested in automating your leads and bookings?</p>
        </div>
      </div>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
    </a>
  );
};

export default ChatWidget;
