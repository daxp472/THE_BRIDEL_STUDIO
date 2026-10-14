"use client";

import React from "react";
import Link from "next/link";
import { businessConfig, getTelUrl, getWhatsAppUrl } from "@/lib/business";
import { servicesList } from "@/lib/services-data";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language, t } = useLanguage();
  const telUrl = getTelUrl();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-studio-parchment border-t border-studio-border pt-14 pb-16 text-studio-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Studio Identity & NAP */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-wider text-studio-maroon uppercase block font-normal">
                {businessConfig.name}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-studio-stone">
                {language === "gu"
                  ? "બ્રાઈડલ મેકઅપ અને બ્યુટી સ્ટુડિયો • ઊંઝા"
                  : "Bridal Makeup & Beauty Studio • Unjha"}
              </span>
            </div>

            <p className="text-sm text-studio-stone leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* NAP Block */}
            <div className="pt-2 space-y-2 text-xs text-studio-charcoal">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-studio-maroon mt-0.5 shrink-0"
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
                <span className="leading-snug">{businessConfig.address.full}</span>
              </div>

              {businessConfig.contact.phone && (
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-studio-maroon shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={telUrl}
                    data-track="footer-phone"
                    className="hover:text-studio-maroon transition-colors font-medium"
                  >
                    +91 {businessConfig.contact.phone}
                  </a>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-studio-maroon shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {language === "gu"
                    ? businessConfig.hours.displayGu
                    : businessConfig.hours.display}
                </span>
              </div>
            </div>

            {/* Social / Instagram */}
            <div className="pt-2">
              <a
                href={businessConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-studio-maroon hover:text-studio-crimson tracking-wider uppercase"
              >
                <svg
                  className="w-4 h-4 mr-1.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>{businessConfig.contact.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-base tracking-wide text-studio-maroon uppercase">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2 text-xs">
              {servicesList.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-studio-charcoal hover:text-studio-maroon transition-colors"
                  >
                    {language === "gu" ? service.nameGu : service.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Areas & Travel Guide */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-base tracking-wide text-studio-maroon uppercase">
              {t.footer.visitingTowns}
            </h3>
            <p className="text-xs text-studio-stone">
              {language === "gu"
                ? "નજીકના શહેરોમાંથી ઊંઝા પધારતી કન્યાઓ માટે માર્ગદર્શન:"
                : "Travel & route guides for regional brides visiting our Unjha studio:"}
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              {businessConfig.townsServed.map((town) => (
                <Link
                  key={town.slug}
                  href={`/areas/${town.slug}`}
                  className="p-2 border border-studio-border/80 bg-studio-ivory/60 hover:bg-studio-ivory hover:border-studio-maroon transition-colors"
                >
                  <span className="font-medium text-studio-charcoal block">
                    {language === "gu" ? town.nameGu : town.nameEn}
                  </span>
                  <span className="text-[10px] text-studio-stone">
                    {town.travelTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between text-xs text-studio-stone gap-3">
          <p>
            © 2026 {businessConfig.name}. {t.footer.rights}
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hover:text-studio-maroon">
              {t.nav.contact}
            </Link>
            <span>•</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-studio-maroon"
            >
              WhatsApp
            </a>
            <span>•</span>
            <a
              href={businessConfig.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-studio-maroon"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
