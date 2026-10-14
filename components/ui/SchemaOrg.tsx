import React from "react";
import { businessConfig } from "@/lib/business";

interface SchemaOrgProps {
  breadcrumbs?: Array<{ name: string; url: string }>;
  service?: {
    name: string;
    description: string;
    url: string;
    providerName?: string;
  };
  faqs?: Array<{ question: string; answer: string }>;
}

export function SchemaOrg({ breadcrumbs, service, faqs }: SchemaOrgProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebridelstudio.vercel.app";

  // Base BeautySalon Schema
  const salonSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HairSalon", "HealthAndBeautyBusiness"],
    name: businessConfig.name,
    legalName: businessConfig.legalName,
    url: baseUrl,
    image: `${baseUrl}/images/hero.jpg`,
    logo: `${baseUrl}/images/logo.jpg`,
    sameAs: [businessConfig.contact.instagram],
    founder: {
      "@type": "Person",
      name: "Rigal Patel",
      jobTitle: "Lead Bridal Makeup Artist & Founder",
    },
    areaServed: [
      { "@type": "City", name: "Unjha" },
      { "@type": "City", name: "Visnagar" },
      { "@type": "City", name: "Mehsana" },
      { "@type": "City", name: "Sidhpur" },
      { "@type": "City", name: "Patan" },
      { "@type": "AdministrativeArea", name: "Gujarat" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.locality,
      addressRegion: businessConfig.address.region,
      postalCode: businessConfig.address.postalCode,
      addressCountry: businessConfig.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
  };

  if (businessConfig.contact.phone) {
    salonSchema.telephone = `+91${businessConfig.contact.phone}`;
  }

  // Breadcrumb Schema
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url.startsWith("http") ? crumb.url : `${baseUrl}${crumb.url}`,
      })),
    };
  }

  // Service Schema
  let serviceSchema = null;
  if (service) {
    serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      url: service.url.startsWith("http") ? service.url : `${baseUrl}${service.url}`,
      provider: {
        "@type": "BeautySalon",
        name: businessConfig.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessConfig.address.street,
          addressLocality: businessConfig.address.locality,
          addressRegion: businessConfig.address.region,
          postalCode: businessConfig.address.postalCode,
          addressCountry: businessConfig.address.country,
        },
      },
    };
  }

  // FAQ Schema
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
