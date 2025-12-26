import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const handleChatClick = () => {
    // Placeholder for chat functionality
    window.open("tel:1300000000", "_self");
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center hover:brightness-110 transition-all hover:scale-105"
      aria-label="Chat with us"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </button>
  );
};

export default ChatWidget;