import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-8">
            <p>
              This Cookie Policy explains what cookies are and how we use them on our website and services (collectively, "Website" or "Services"). This policy should be read in conjunction with our Privacy Policy, which complies with the Privacy Act 1988 (Cth).
            </p>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small pieces of data stored in text files that are saved on your computer or other devices when websites are loaded in a browser. They are widely used to remember you and your preferences, either for a single visit (through a "session cookie") or for multiple repeat visits (using a "persistent cookie").
              </p>
              <p className="mt-4">
                <strong>Session cookies</strong> are temporary cookies used during your visit to the Website and expire when you close the web browser.
              </p>
              <p className="mt-4">
                <strong>Persistent cookies</strong> remain on your desktop or mobile device even after you close your browser or restart your computer. They ensure a consistent and efficient experience for you while visiting our Website.
              </p>
              <p className="mt-4">
                Cookies may be set by the Website ("first-party cookies") or by third parties such as those who serve content or provide advertising or analytics services ("third-party cookies").
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Necessary Cookies</h3>
              <p>
                These cookies are essential for you to browse the website and use its features. For example, these cookies allow us to recognize that you have created an account and have logged into that account.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Functionality Cookies</h3>
              <p>
                These cookies allow us to remember choices you make when you use our Website, such as remembering your login details or language preference.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Analytical Cookies</h3>
              <p>
                These cookies enable us and third-party services to collect aggregated data for statistical purposes on how visitors use the Website. These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Social Media Cookies</h3>
              <p>
                Third-party cookies from social media sites (such as Facebook, Twitter, etc.) may be used when you share content from our Website or interact with our social media features.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Your Cookie Choices</h2>
              <p>
                You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and some functionality may no longer be available.
              </p>
              <p className="mt-4">
                Most browsers are set to accept cookies by default. You can change your browser settings to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Delete cookies that have already been set</li>
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Accept cookies from specific sites</li>
              </ul>
              <p className="mt-4">
                To learn more about how to manage cookies, visit{" "}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.aboutcookies.org
                </a>{" "}
                or{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.allaboutcookies.org
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Changes to This Policy</h2>
              <p>
                We reserve the right to modify this Cookie Policy at any time. When we make changes, we will update the "Last Updated" date at the top of this policy. Your continued use of the Website after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Cookie Policy or our use of cookies, please contact us at:
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

export default Cookies;
