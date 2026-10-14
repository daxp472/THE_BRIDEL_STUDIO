"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/lib/gallery-data";
import { useLanguage } from "@/context/LanguageContext";
import { Lightbox } from "@/components/ui/Lightbox";
import { SchemaOrg } from "@/components/ui/SchemaOrg";

export default function GalleryPage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", labelEn: "All Looks", labelGu: "બધા લુક્સ" },
    { id: "bridal", labelEn: "Bridal", labelGu: "બ્રાઈડલ" },
    { id: "engagement", labelEn: "Engagement", labelGu: "સગાઈ" },
    { id: "reception", labelEn: "Reception", labelGu: "રિસેપ્શન" },
    { id: "details", labelEn: "Details & Jewelry", labelGu: "દાગીના અને ડિટેલ્સ" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      />

      <div className="bg-studio-ivory py-12 sm:py-20 border-b border-studio-border min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block mb-2">
              Portfolio & Craft
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-studio-charcoal font-normal">
              The Studio Gallery
            </h1>
            <p className="text-sm sm:text-base text-studio-stone mt-3 leading-relaxed">
              Real brides, timeless aesthetics, and nuanced styling created at The Bridel Studio in Unjha. Unfiltered craftsmanship tailored for Gujarat’s wedding celebrations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-studio-border">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const label = language === "gu" ? cat.labelGu : cat.labelEn;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 border transition-all duration-150 ${
                    isActive
                      ? "bg-studio-maroon text-studio-ivory border-studio-maroon font-semibold"
                      : "bg-studio-parchment/60 text-studio-charcoal border-studio-border hover:border-studio-maroon"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Masonry-Style Responsive Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => {
              const title = language === "gu" ? item.titleGu : item.titleEn;
              const caption =
                language === "gu" ? item.captionGu : item.captionEn;

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="break-inside-avoid group cursor-pointer border border-studio-border bg-studio-parchment overflow-hidden transition-all duration-200 hover:border-studio-maroon"
                >
                  <div className="relative aspect-4/5 w-full bg-studio-parchment/80 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-wider text-studio-ivory font-semibold bg-black/60 px-3 py-1.5 backdrop-blur-xs">
                        View Look
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-studio-ivory">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-studio-stone mb-1">
                      <span>{item.category}</span>
                      <span>The Bridel Studio</span>
                    </div>
                    <h3 className="font-serif text-lg text-studio-charcoal font-medium">
                      {title}
                    </h3>
                    <p className="text-xs text-studio-stone mt-1 leading-snug line-clamp-2">
                      {caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center border-t border-studio-border pt-8 text-xs text-studio-stone">
            <p>
              Looking for a custom consultation or outfit trial?{" "}
              <Link
                href="/contact"
                className="text-studio-maroon font-semibold underline hover:text-studio-crimson ml-1"
              >
                Inquire at our Unjha Studio
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Accessible Lightbox Modal with Keyboard Navigation */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
}
