import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, Clock, Calendar, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations";

const Location = () => {
  const { city } = useParams();
  const data = locations.find((l) => l.slug === city);
  if (!data) return <Navigate to="/" replace />;

  const title = `AI Receptionist ${data.city} | 24/7 Call Answering | Get Booked Out`;
  const description = `Never miss a customer call in ${data.city}. Get Booked Out is a 24/7 AI receptionist that answers, qualifies and books ${data.city} enquiries straight into your calendar. From $99/week.`;
  const path = `/${data.slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getbookedout.com.au/" },
      { "@type": "ListItem", position: 2, name: `${data.city} AI Receptionist`, item: `https://www.getbookedout.com.au${path}` },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `AI Receptionist in ${data.city}`,
    serviceType: "24/7 AI call answering and appointment booking",
    provider: { "@type": "Organization", "@id": "https://www.getbookedout.com.au/#organization", name: "Get Booked Out" },
    areaServed: { "@type": "City", name: data.city, address: { "@type": "PostalAddress", addressRegion: data.state, addressCountry: "AU" } },
    description,
    offers: { "@type": "Offer", price: "99", priceCurrency: "AUD", priceSpecification: { "@type": "UnitPriceSpecification", unitText: "WEEK" } },
  };

  const benefits = [
    { icon: Clock, title: "24/7 in your timezone", body: `Calls from ${data.city} are answered instantly — early mornings, evenings, weekends, public holidays.` },
    { icon: Calendar, title: "Books into your calendar", body: "Every qualified enquiry is booked straight into Google Calendar, Calendly or your CRM." },
    { icon: ShieldCheck, title: "Filters spam & sales calls", body: "Only real customers reach you. Robocalls and cold sales reps never make it through." },
    { icon: Sparkles, title: "Sounds like a local", body: `Natural Aussie voice that understands ${data.city} suburbs, accents and businesses.` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SeoHead title={title} description={description} path={path} jsonLd={[breadcrumb, service]} />
      <Header />

      <section className="pt-10 pb-12 md:pt-16 md:pb-20 bg-secondary/30">
        <div className="container-padding max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" /> Servicing all of {data.city}, {data.state}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            AI Receptionist for <span className="text-primary">{data.city}</span> Businesses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{data.blurb}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/get-started"><Button size="xl">Get Started Today</Button></Link>
            <a href="tel:0485008132"><Button variant="outline" size="xl"><Phone className="w-4 h-4 mr-2" />0485 008 132</Button></a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">From $99/week · No lock-in · First-month money-back guarantee</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-padding max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why {data.city} businesses pick Get Booked Out</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-xl border border-border bg-card">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-padding max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Built for {data.city} service businesses</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Whether you run a one-van trade in {data.suburbs[0]} or a multi-location clinic across {data.city},
            Get Booked Out scales with you. We service every industry that takes bookings by phone, text or web chat.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {data.industries.map((i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-card border border-border text-sm">{i}</span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-3">Suburbs we cover</h3>
          <p className="text-muted-foreground mb-3">
            Get Booked Out works for any business across greater {data.city}, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {data.suburbs.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-primary/5 text-foreground text-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Stop missing {data.city} jobs.</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Setup takes 48 hours. No contracts. If it doesn't pay for itself in the first month, you don't pay.
          </p>
          <Link to="/get-started"><Button variant="white" size="xl">Get Started Today</Button></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;
