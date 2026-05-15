import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { posts } from "@/data/posts";

const Blog = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Get Booked Out Blog",
    url: "https://www.getbookedout.com.au/blog",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `https://www.getbookedout.com.au/blog/${p.slug}`,
      author: { "@type": "Organization", name: "Get Booked Out" },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Blog | Get Booked Out — AI Receptionist for Australian Businesses"
        description="Practical guides for Australian service businesses on missed calls, AI receptionists, Google reviews, lead conversion and more."
        path="/blog"
        jsonLd={ld}
      />
      <Header />
      <section className="pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="container-padding max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">The Get Booked Out Blog</h1>
          <p className="text-lg text-muted-foreground">
            Plain-English guides on missed calls, AI receptionists and growing an Aussie service business.
          </p>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-padding max-w-4xl mx-auto space-y-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="block p-6 rounded-xl border border-border bg-card hover:border-primary transition-colors"
            >
              <p className="text-xs text-muted-foreground mb-2">
                {new Date(p.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })} · {p.readMinutes} min read
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{p.title}</h2>
              <p className="text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
