"use client";

import React from "react";
import Link from "next/link";
import { servicesList } from "@/lib/services-data";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesPreview() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-studio-parchment/60 border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 border-b border-studio-border pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block">
              {t.servicesPreview.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-charcoal font-normal">
              {t.servicesPreview.title}
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
            <p className="text-xs sm:text-sm text-studio-stone max-w-md hidden lg:block">
              {t.servicesPreview.subtitle}
            </p>
            <Link
              href="/services"
              className="text-xs font-semibold tracking-wider uppercase text-studio-maroon hover:text-studio-crimson flex items-center group shrink-0"
            >
              <span>{t.servicesPreview.viewAll}</span>
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Asymmetrical Editorial Services List (Not a generic 3-card template!) */}
        <div className="divide-y divide-studio-border">
          {servicesList.map((service, index) => {
            const title =
              language === "gu" ? service.nameGu : service.nameEn;
            const desc =
              language === "gu" ? service.shortDescGu : service.shortDescEn;
            const price =
              language === "gu"
                ? service.startingPriceGu
                : service.startingPrice;
            const duration =
              language === "gu" ? service.durationGu : service.duration;

            return (
              <article
                key={service.slug}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
              >
                {/* Index & Category tag */}
                <div className="md:col-span-2 flex items-center space-x-3">
                  <span className="font-serif text-xl sm:text-2xl text-studio-brass font-light">
                    0{index + 1}
                  </span>
                  <span className="h-px w-6 bg-studio-border" />
                </div>

                {/* Service Name & Duration */}
                <div className="md:col-span-5 space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-studio-charcoal group-hover:text-studio-maroon transition-colors duration-150 font-normal">
                    <Link href={`/services/${service.slug}`}>{title}</Link>
                  </h3>
                  <p className="text-xs text-studio-stone tracking-wide">
                    {duration}
                  </p>
                </div>

                {/* Description & Action */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-studio-stone leading-relaxed">
                    {desc}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs uppercase tracking-wider font-medium text-studio-maroon">
                      {price}
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-semibold uppercase tracking-wider text-studio-charcoal hover:text-studio-maroon flex items-center"
                    >
                      <span>{t.servicesPreview.viewDetails}</span>
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
