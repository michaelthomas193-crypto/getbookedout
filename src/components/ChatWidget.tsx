import { MessageSquare } from "lucide-react";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block group">
      <div className="absolute bottom-full right-0 mb-2 w-64 p-4 bg-card rounded-lg shadow-xl border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <p className="text-sm">
          Hey! 👋 Interested in automating your leads and bookings? I can answer any questions or help you book a demo.
        </p>
      </div>
      <button
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6 text-primary-foreground" />
      </button>
      <p className="text-xs text-muted-foreground text-center mt-2">
        Powered by<br />Get Booked Out
      </p>
    </div>
  );
};

export default ChatWidget;
