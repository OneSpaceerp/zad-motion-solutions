import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { knowledgeData } from '@/data/knowledgeData';

export const KnowledgePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Commissioning & Engineering',
    'Diagnostics & Precision Tools',
    'Maintenance & Reliability',
    'Pump Systems & Solutions',
    'Spare Parts & Hardware',
    'Local Assembly & Localization'
  ];

  const filteredArticles = knowledgeData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="Engineering Knowledge Center | ZAD Electromechanical Services"
        description="Educational technical articles and engineering guides on pump commissioning, laser alignment, preventive maintenance, and system diagnostics in Egypt."
        canonicalUrl="https://zad-eg.net/knowledge"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              TECHNICAL INSIGHTS & METHODOLOGY
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              ENGINEERING KNOWLEDGE FOR BETTER DECISIONS
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Explore practical electromechanical guides, diagnostic benchmarks, and maintenance
              best practices authored by ZAD's engineering team.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-12">
        {/* Search & Category Filter */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search engineering articles by topic, tool, or keyword..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-input bg-card text-foreground text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-card border border-border/70 rounded-2xl p-7 hover-lift shadow-sm flex flex-col justify-between group hover:border-accent"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="text-accent font-bold uppercase tracking-wider text-[11px]">
                      {article.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 mt-auto flex items-center justify-between">
                  <Link
                    to={`/knowledge/${article.slug}`}
                    className="text-xs font-bold text-primary group-hover:text-accent inline-flex items-center space-x-1 uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-16 text-muted-foreground">
              <p className="text-sm">No articles matched your search query.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-3 text-xs text-primary font-bold uppercase underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgePage;
