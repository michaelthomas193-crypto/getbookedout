import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-8">
            <p>
              This Privacy Policy explains how Get Booked Out ("we", "us", or "our") collects, uses, and protects your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
              <p>
                We may collect personal information including your name, email address, phone number, and business details when you:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Fill out a contact form on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our services</li>
                <li>Communicate with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our products and services</li>
                <li>Respond to your enquiries</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
              <p>
                We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access, modification, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
              <p>
                You have the right to access and correct your personal information. To make a request, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>Get Booked Out</strong></p>
                <p>Sydney, Australia</p>
                <p>bookings@getbookedout.com.au</p>
                <p>0485 008 132</p>
                <p>ABN: 64 918 986 563</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
