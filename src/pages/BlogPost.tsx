import { Link, useParams, Navigate } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://www.getbookedout.com.au/blog/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Get Booked Out", url: "https://www.getbookedout.com.au" },
    publisher: { "@type": "Organization", "@id": "https://www.getbookedout.com.au/#organization", name: "Get Booked Out", logo: { "@type": "ImageObject", url: "https://www.getbookedout.com.au/favicon.png" } },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getbookedout.com.au/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.getbookedout.com.au/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title={`${post.title} | Get Booked Out`}
        description={post.description}
        path={`/blog/${post.slug}`}
        jsonLd={[articleLd, breadcrumb]}
      />
      <Header />
      <article className="py-10 md:py-16">
        <div className="container-padding max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground mb-3">
            <Link to="/blog" className="hover:text-primary">Blog</Link> ·{" "}
            {new Date(post.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} min read
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-10">{post.excerpt}</p>

          <div className="prose prose-lg max-w-none">
            {post.sections.map((s) => (
              <section key={s.heading} className="mb-8">
                <h2 className="text-2xl font-bold mb-3">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-4">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-secondary/40 border border-border text-center">
            <h3 className="text-xl font-bold mb-2">Stop losing jobs to missed calls.</h3>
            <p className="text-muted-foreground mb-4">From $99/week. First-month money-back guarantee.</p>
            <Link to="/get-started"><Button size="lg">Get Started Today</Button></Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
