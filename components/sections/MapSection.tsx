"use client";

import React from "react";
import { businessConfig } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";

/**
 * MapSection Component
 *
 * NOTE: The Google Maps pin is not finalised yet.
 * TODO: Once the exact studio coordinates / embed pin URL is finalized,
 * replace the map placeholder frame below with the actual Google Maps <iframe>.
 */
export function MapSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-studio-ivory border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block">
                {t.locationHours.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-studio-charcoal font-normal">
                {t.locationHours.title}
              </h2>
            </div>

            {/* Address Card */}
            <div className="border border-studio-border bg-studio-parchment/60 p-5 sm:p-6 space-y-4">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-studio-stone block mb-1">
                  {t.locationHours.addressLabel}
                </span>
                <p className="text-sm text-studio-charcoal font-medium leading-relaxed">
                  {businessConfig.address.full}
                </p>
                <p className="text-xs text-studio-stone mt-1">
                  <span className="font-medium text-studio-charcoal">
                    {t.locationHours.landmarkLabel}:
                  </span>{" "}
                  {businessConfig.address.landmark}
                </p>
              </div>

              <div className="pt-3 border-t border-studio-border">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-studio-stone block mb-1">
                  {t.locationHours.hoursLabel}
                </span>
                <p className="text-xs text-studio-charcoal font-medium">
                  {language === "gu"
                    ? businessConfig.hours.displayGu
                    : businessConfig.hours.display}
                </p>
                <p className="text-[11px] text-studio-stone mt-1">
                  {t.locationHours.appointmentNote}
                </p>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={businessConfig.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="map-directions-btn"
                  className="inline-flex items-center justify-center w-full text-xs font-semibold tracking-wider uppercase bg-studio-maroon text-studio-ivory hover:bg-studio-crimson py-3 px-4 transition-colors duration-150"
                >
                  <svg
                    className="w-4 h-4 mr-2 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{t.locationHours.getDirections}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Preview / Location Card */}
          <div className="lg:col-span-7">
            <div className="relative border border-studio-border bg-studio-parchment overflow-hidden aspect-4/3 sm:aspect-16/10 flex flex-col justify-between p-6 sm:p-8">
              {/* Decorative Compass / Location Header */}
              <div className="flex items-center justify-between border-b border-studio-border/60 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-studio-brass" />
                  <span className="font-serif text-lg text-studio-charcoal">
                    Unjha Studio Location
                  </span>
                </div>
                <span className="text-[11px] font-mono text-studio-stone uppercase">
                  Visnagar Chokdi
                </span>
              </div>

              {/* Central Studio Compass Presentation */}
              <div className="text-center py-6 sm:py-10 space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full border border-studio-brass/60 flex items-center justify-center bg-studio-ivory shadow-xs">
                  <svg
                    className="w-7 h-7 text-studio-maroon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-studio-charcoal font-normal">
                  The Bridel Studio
                </h3>
                <p className="text-xs sm:text-sm text-studio-stone max-w-sm mx-auto">
                  Shilp Complex, Visnagar Chokdi, Unjha, Gujarat 384170
                </p>
                {/* 
                  TODO: Once the studio owner supplies the final Google Maps embed iframe or coordinates,
                  render the interactive map <iframe> here.
                */}
              </div>

              {/* Bottom Quick-Launch Link */}
              <div className="pt-4 border-t border-studio-border/60 flex items-center justify-between text-xs text-studio-stone">
                <span>Near Visnagar Chokdi Intersection</span>
                <a
                  href={businessConfig.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-maroon font-semibold hover:underline flex items-center"
                >
                  <span>Open in Google Maps</span>
                  <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
