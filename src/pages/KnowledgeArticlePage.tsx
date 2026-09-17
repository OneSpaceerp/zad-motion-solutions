import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, CheckCircle2, Share2 } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { knowledgeData } from '@/data/knowledgeData';

export const KnowledgeArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = knowledgeData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/knowledge" replace />;
  }

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={article.seo_title}
        description={article.seo_description}
        canonicalUrl={`https://zad-eg.net/knowledge/${article.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          author: {
            '@type': 'Organization',
            name: article.author
          },
          datePublished: article.publishDate
        }}
      />

      {/* Header / Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link
            to="/knowledge"
            className="inline-flex items-center space-x-1.5 text-xs text-white/70 hover:text-accent mb-6 font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Knowledge Center</span>
          </Link>

          <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
            {article.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/80 font-medium">
            <span className="flex items-center space-x-1.5">
              <User className="h-3.5 w-3.5 text-accent" />
              <span>{article.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <Calendar className="h-3.5 w-3.5 text-accent" />
              <span>{article.publishDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Article Content Container */}
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        {/* Key Takeaways Box */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-2xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
              Key Engineering Takeaways:
            </h3>
            <ul className="space-y-2">
              {article.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-foreground/85 text-sm sm:text-base leading-relaxed space-y-4">
          {article.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-bold text-primary mt-8 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
              return (
                <div key={idx} className="pl-4 space-y-1 text-sm bg-muted/30 p-4 rounded-xl border border-border/50">
                  {paragraph.split('\n').map((line, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Related Action Box */}
        <div className="bg-muted/50 border border-border/60 rounded-2xl p-8 text-center mt-12">
          <h3 className="text-xl font-bold text-primary mb-2">
            Have Questions About This Technical Topic?
          </h3>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto mb-6">
            Our engineers can review your equipment conditions, verify alignment tolerances, or
            assist with commissioning.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/request-service"
              className="btn-hero text-xs py-3 px-6 uppercase font-bold tracking-wider inline-flex items-center space-x-2"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeArticlePage;
