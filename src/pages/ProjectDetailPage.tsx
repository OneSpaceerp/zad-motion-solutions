import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Building2, Settings, ArrowRight, ShieldCheck, FileText, ChevronRight } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { projectsData } from '@/data/projectsData';

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pt-24 pb-16">
      <SEO
        title={`${project.title} | ZAD Project Case Study`}
        description={`Case study: ${project.title} in ${project.location}. Scope: ${project.scope_of_work}`}
        canonicalUrl={`https://zad-eg.net/projects/${project.slug}`}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-2 text-xs text-white/70 mb-4 font-semibold">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-accent">
              Projects
            </Link>
            <span>/</span>
            <span className="text-accent">{project.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              {project.category} CASE STUDY
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80">
              <span className="flex items-center space-x-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{project.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Building2 className="h-4 w-4 text-accent" />
                <span>{project.sector}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* Top Grid: Image + Quick Specs */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border/70">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-card border border-border/70 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-primary border-b border-border/60 pb-3">
              Project Specification
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-muted-foreground block font-medium">System Type:</span>
                <span className="font-bold text-foreground text-sm">{project.system_type}</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">Location:</span>
                <span className="font-bold text-foreground text-sm">{project.location}</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">Sector:</span>
                <span className="font-bold text-foreground text-sm">{project.sector}</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">Delivery Date:</span>
                <span className="font-bold text-foreground text-sm">{project.project_date}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60">
              <Link
                to={`/request-service?service=${encodeURIComponent(project.category)}`}
                className="btn-hero w-full text-xs py-3 uppercase font-bold tracking-wider flex items-center justify-center space-x-2"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Detailed Sections: Scope, Challenge, Solution, Technical Notes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center space-x-2 text-primary font-bold text-lg">
              <Settings className="h-5 w-5 text-accent" />
              <span>Scope of Work</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.scope_of_work}</p>
          </div>

          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center space-x-2 text-destructive font-bold text-lg">
              <FileText className="h-5 w-5 text-destructive" />
              <span>Operational Challenge</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.challenge}</p>
          </div>

          <div className="bg-card border border-border/70 p-8 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-center space-x-2 text-primary font-bold text-lg">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span>ZAD Engineering Solution</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
          </div>

          <div className="bg-muted/40 border border-border/60 p-8 rounded-2xl space-y-3">
            <div className="flex items-center space-x-2 text-primary font-bold text-lg">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Technical Notes & Measurements</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed font-mono text-xs">
              {project.technical_notes}
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center py-6">
          <Link
            to="/projects"
            className="text-xs font-bold text-primary hover:text-accent uppercase tracking-wider inline-flex items-center space-x-1"
          >
            <span>← Back to All Projects</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
