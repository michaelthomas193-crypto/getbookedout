 import { CheckCircle } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 
 const Thanks = () => {
   return (
     <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
       <div className="max-w-lg w-full text-center space-y-6">
         {/* Success Icon */}
         <div className="flex justify-center">
           <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
             <CheckCircle className="w-14 h-14 text-primary" />
           </div>
         </div>
 
         {/* Main Heading */}
         <div className="space-y-4">
           <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
             Thanks for Getting in Touch!
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
             We've received your details and one of our team will be in touch within 24 hours.
           </p>
         </div>
 
         {/* Spam Notice */}
         <div className="bg-muted/50 rounded-lg p-4">
           <p className="text-sm text-muted-foreground">
             📧 Keep an eye on your inbox (and spam folder) for a confirmation email.
           </p>
         </div>
         
         {/* Back to Home Button */}
         <Button asChild size="lg" className="mt-4">
           <Link to="/">Back to Home</Link>
         </Button>
       </div>
     </div>
   );
 };
 
 export default Thanks;