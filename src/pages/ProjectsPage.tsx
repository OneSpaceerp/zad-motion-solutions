import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Layers, Settings, ChevronRight, Building2 } from 'lucide-react';
import SEO from '@/components/layout/SEO';
import { projectsData } from '@/data/projectsData';
import { ProjectCategory } from '@/data/types';

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Booster Systems',
    'Pump Assembly',
    'Maintenance',
    'Commissioning',
    'Chiller Systems',
    'Submersible Systems'
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <SEO
        title="170+ Projects Across Egypt | ZAD Electromechanical Services"
        description="Explore ZAD's verified project portfolio across Egypt: booster systems, chiller pumps, local assembly, commissioning, and preventive maintenance."
        canonicalUrl="https://zad-eg.net/projects"
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block text-accent font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md mb-4">
              NATIONWIDE TRACK RECORD
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              MORE THAN 170 PROJECTS. ONE COMMITMENT TO SERVICE.
            </h1>
            <p className="text-lg text-white/85 leading-relaxed">
              Our growing project portfolio reflects ZAD's involvement in pump systems, localized
              assembly, and electromechanical service activities across Egypt.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-accent/20 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border/70 rounded-2xl overflow-hidden hover-lift shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-1.5 text-xs text-muted-foreground mb-2">
                    <MapPin className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="bg-muted/50 p-3 rounded-lg border border-border/50 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-medium">Sector:</span>
                      <span className="font-bold text-foreground/80">{project.sector}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-medium">System:</span>
                      <span className="font-bold text-primary truncate max-w-[170px]">
                        {project.system_type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-border/40 mt-auto">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-bold text-primary hover:text-accent inline-flex items-center space-x-1 uppercase tracking-wider pt-3"
                >
                  <span>View Case Study</span>
                  <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Summary Notice */}
        <div className="bg-muted/30 p-6 rounded-xl border border-border/50 text-center max-w-3xl mx-auto text-xs text-muted-foreground">
          <p>
            * Project case studies shown above represent a verified cross-section of ZAD's 170+
            completed electromechanical projects in Egypt across Alexandria, Port Said, Cairo, Giza,
            and Aswan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
