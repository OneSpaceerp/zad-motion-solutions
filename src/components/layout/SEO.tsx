import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schema?: Record<string, any>;
}

export const SEO = ({ title, description, canonicalUrl, schema }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Canonical link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Structured data (Schema.org JSON-LD)
    if (schema) {
      let script = document.querySelector('#dynamic-seo-schema') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-seo-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema);
    }
  }, [title, description, canonicalUrl, schema]);

  return null;
};

export default SEO;
