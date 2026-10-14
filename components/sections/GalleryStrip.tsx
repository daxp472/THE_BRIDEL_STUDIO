"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/lib/gallery-data";
import { useLanguage } from "@/context/LanguageContext";
import { Lightbox } from "@/components/ui/Lightbox";

export function GalleryStrip() {
  const { language, t } = useLanguage();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );
  // Display top 4 photos for the home strip
  const displayItems = galleryItems.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-studio-ivory border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-14">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block">
              {t.galleryStrip.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-charcoal font-normal">
              {t.galleryStrip.title}
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6">
            <p className="text-xs sm:text-sm text-studio-stone max-w-sm hidden sm:block">
              {t.galleryStrip.subtitle}
            </p>
            <Link
              href="/gallery"
              className="text-xs font-semibold tracking-wider uppercase text-studio-maroon hover:text-studio-crimson flex items-center group shrink-0"
            >
              <span>{t.galleryStrip.viewFullGallery}</span>
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Asymmetrical 4-Photo Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {displayItems.map((item, index) => {
            const title = language === "gu" ? item.titleGu : item.titleEn;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative cursor-pointer overflow-hidden border border-studio-border bg-studio-parchment aspect-3/4"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle dark gradient overlay on hover with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-studio-ivory">
                  <p className="text-xs font-serif font-medium line-clamp-1">
                    {title}
                  </p>
                  <span className="text-[10px] uppercase tracking-wider text-studio-brass-light mt-0.5">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        items={displayItems}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(idx) => setSelectedPhotoIndex(idx)}
      />
    </section>
  );
}
