"use client";

import Resume from './components/resume/Resume';
import { resumeData } from '@/data/resume';

export default function PortfolioPage() {
  // Create JSON-LD data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": resumeData.header.name,
    "alternateName": ["Zahid Hasan", "HasanZahid"],
    "url": "https://hasanzahid.eu",
    "image": "https://hasanzahid.eu/Profile-Photo.jpg",
    "jobTitle": "Software Engineering Student",
    "affiliation": {
      "@type": "Organization",
      "name": "Chalmers University of Technology"
    },
    "sameAs": resumeData.header.socials.map(social => social.url)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Resume />
    </>
  );
}