import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LeadFormEmbed from "@/components/LeadFormEmbed";

interface QuoteFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteFormModal = ({ open, onOpenChange }: QuoteFormModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold">Let's get you booked out</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Pop your details in. We'll be in touch within one business hour.
          </DialogDescription>
        </DialogHeader>
        <div className="px-2 pb-2">
          <LeadFormEmbed showHeader={false} height={560} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
