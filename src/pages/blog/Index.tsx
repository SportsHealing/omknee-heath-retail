/**
 * Blog Index - Knee Health Content Hub
 * SEO-optimized content cluster for long-tail UK searches
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import WebPageSchema from "@/components/WebPageSchema";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    slug: "best-supplement-for-knee-cartilage",
    title: "What Is the Best Supplement for Knee Cartilage?",
    excerpt: "A UK clinician's evidence-based guide to choosing a knee cartilage supplement. We examine collagen, glucosamine, chondroitin, and which ingredients have authorised health claims.",
    category: "Ingredient Science",
    readTime: "8 min read",
    date: "2024-01-15"
  },
  {
    slug: "do-collagen-supplements-help-knee-joints",
    title: "Do Collagen Supplements Help Knee Joints?",
    excerpt: "Understanding what collagen supplements can and cannot do for knee joints. We look at absorption, dosing, and why vitamin C matters for cartilage function.",
    category: "Evidence Review",
    readTime: "7 min read",
    date: "2024-01-10"
  },
  {
    slug: "supplements-for-knee-osteoarthritis-evidence",
    title: "Supplements for Knee Osteoarthritis: What the Evidence Says",
    excerpt: "An honest examination of joint supplement research for osteoarthritis. What works, what doesn't, and why supplements are not a replacement for medical care.",
    category: "Evidence Review",
    readTime: "10 min read",
    date: "2024-01-05"
  },
  {
    slug: "knee-pain-supplements-vs-painkillers",
    title: "Knee Pain Supplements vs Painkillers: Understanding Your Options",
    excerpt: "Comparing nutritional supplements and pain medications for knee discomfort. Why they serve different purposes and when to speak with your GP.",
    category: "Guidance",
    readTime: "6 min read",
    date: "2024-01-01"
  },
  {
    slug: "support-knee-joints-as-you-age",
    title: "How to Support Knee Joints as You Age",
    excerpt: "A comprehensive guide to maintaining knee health through your 40s, 50s, 60s and beyond. Movement, nutrition, and the role of targeted supplementation.",
    category: "Lifestyle",
    readTime: "9 min read",
    date: "2023-12-20"
  }
];

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Knee Health Blog UK | Evidence-Based Joint Health Articles | OmKneeHealth"
        description="UK clinician-written articles on knee health, joint supplements, and cartilage support. Evidence-based guidance on collagen, glucosamine, and maintaining healthy knees."
        canonicalPath="/blog"
        keywords="knee health blog UK, joint supplement articles, knee cartilage advice, collagen for knees UK, glucosamine evidence"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://omkneehealth.com" },
          { name: "Blog", url: "https://omkneehealth.com/blog" },
        ]}
      />
      <WebPageSchema
        name="Knee Health Blog - OmKneeHealth"
        description="Evidence-based articles on knee health, joint supplements, and cartilage support from UK clinicians."
        url="https://omkneehealth.com/blog"
        type="CollectionPage"
      />
      <Header />
      
      <main className="pt-28 lg:pt-48 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/80 mb-4">
              UK Clinician Perspectives
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              Knee Health Insights
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Evidence-based articles on joint health, supplements, and maintaining healthy knees—written by UK healthcare professionals with honest, balanced perspectives.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {articles.map((article) => (
                <Link 
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="block group"
                >
                  <article className="bg-secondary/30 hover:bg-secondary/50 rounded-lg p-6 md:p-8 border border-border transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mt-20">
          <div className="max-w-2xl mx-auto text-center bg-secondary/30 rounded-lg p-8 md:p-12 border border-border">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Explore Our Knee Joint Supplement
            </h2>
            <p className="font-sans text-muted-foreground mb-6">
              UK-manufactured, clinician-formulated nutritional support for knee health.
            </p>
            <Link 
              to="/product" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              View supplement
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogIndex;
