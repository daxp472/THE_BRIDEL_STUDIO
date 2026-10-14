import { MetadataRoute } from "next";
import { servicesList } from "@/lib/services-data";
import { businessConfig } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebridelstudio.vercel.app";
  const now = new Date();

  // Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}?lang=en`,
          gu: `${baseUrl}?lang=gu`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = servicesList.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Regional Town Pages
  const areaRoutes: MetadataRoute.Sitemap = businessConfig.townsServed.map(
    (town) => ({
      url: `${baseUrl}/areas/${town.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
