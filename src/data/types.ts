export interface Service {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  content: string;
  iconName: string;
  heroImage?: string;
  activities: string[];
  applications: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  seo_title: string;
  seo_description: string;
  featured?: boolean;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  content: string;
  iconName: string;
  heroImage?: string;
  scopeOfWork: string[];
  diagnosticApproach: string[];
  typicalApplications: string[];
  keyFeatures: string[];
  seo_title: string;
  seo_description: string;
}

export type ProjectSector =
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'HVAC & Chilled Water'
  | 'Water Supply & Pressure Boosting'
  | 'Water Management';

export type ProjectCategory =
  | 'All'
  | 'Booster Systems'
  | 'Pump Assembly'
  | 'Maintenance'
  | 'Commissioning'
  | 'Chiller Systems'
  | 'Submersible Systems';

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  governorate: 'Cairo' | 'Giza' | 'Alexandria' | 'Port Said' | 'Aswan';
  sector: ProjectSector;
  system_type: string;
  category: ProjectCategory;
  scope_of_work: string;
  challenge: string;
  solution: string;
  technical_notes: string;
  image: string;
  featured: boolean;
  project_date: string;
  summary: string;
}

export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  excerpt: string;
  takeaways: string[];
  content: string;
  seo_title: string;
  seo_description: string;
}

export interface SiteSetting {
  companyName: string;
  legalEntity: string;
  establishedYear: number;
  projectsCompleted: string;
  supportAvailability: string;
  headline: string;
  secondaryBrandLine: string;
  headquarters: {
    unit: string;
    complex: string;
    city: string;
    country: string;
    fullAddress: string;
  };
  phone: string;
  email: string;
  officeHours: string;
}

export interface LocationPoint {
  city: string;
  governorate: string;
  coordinates: { x: number; y: number };
  description: string;
  capabilities: string[];
}
