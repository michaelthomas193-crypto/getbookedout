import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SeoHead
        title="Page not found (404) | Get Booked Out"
        description="That page doesn't exist. Head back to the homepage or jump to pricing, industries or book a demo."
        path={location.pathname}
        noindex
      />
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary mb-4">404</p>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold">Page not found</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Looks like that page took a long lunch. Here's where to go next.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/"><Button size="lg">Home</Button></Link>
            <Link to="/pricing"><Button size="lg" variant="outline">Pricing</Button></Link>
            <Link to="/plumbing"><Button size="lg" variant="outline">Industries</Button></Link>
            <Link to="/schedule-demo"><Button size="lg" variant="outline">Book a demo</Button></Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
