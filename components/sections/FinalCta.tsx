"use client";

import React from "react";
import { businessConfig, getTelUrl, getWhatsAppUrl } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";

export function FinalCta() {
  const { t } = useLanguage();
  const telUrl = getTelUrl();
  const whatsappUrl = getWhatsAppUrl(
    "Hi, I'd like to reserve bridal makeup consultation at The Bridel Studio"
  );

  return (
    <section className="py-16 sm:py-24 bg-studio-maroon text-studio-ivory relative overflow-hidden">
      {/* Decorative brass hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-studio-brass/40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-studio-brass/40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-studio-brass-light">
          <span className="w-6 h-px bg-studio-brass-light" />
          <span>{t.finalCta.eyebrow}</span>
          <span className="w-6 h-px bg-studio-brass-light" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory font-normal tracking-tight">
          {t.finalCta.title}
        </h2>

        <p className="text-sm sm:text-base text-studio-ivory/80 max-w-xl mx-auto leading-relaxed">
          {t.finalCta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track="final-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center text-xs sm:text-sm font-semibold tracking-wider uppercase bg-studio-ivory text-studio-maroon hover:bg-studio-parchment px-8 py-4 transition-colors duration-150"
          >
            <svg
              className="w-4 h-4 mr-2.5 fill-current shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.16-.175.348-.219.464-.219.116 0 .232.001.333.006.107.005.252-.041.391.294.145.348.493 1.202.536 1.29.044.087.073.19.015.305-.058.116-.088.19-.175.29-.087.102-.184.227-.262.305-.088.087-.18.182-.077.359.102.174.453.747.971 1.208.669.595 1.233.779 1.408.866.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.392-.087s1.016.479 1.19.566.29.13.333.203c.044.073.044.421-.1 1.026z" />
            </svg>
            <span>{t.finalCta.buttonWhatsApp}</span>
          </a>

          {telUrl && (
            <a
              href={telUrl}
              data-track="final-cta-call"
              className="w-full sm:w-auto inline-flex items-center justify-center text-xs sm:text-sm font-semibold tracking-wider uppercase border border-studio-brass-light text-studio-ivory hover:bg-studio-crimson px-8 py-4 transition-colors duration-150"
            >
              <svg
                className="w-4 h-4 mr-2.5 shrink-0"
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
              <span>{t.finalCta.buttonCall}</span>
            </a>
          )}
        </div>

        <p className="text-[11px] text-studio-ivory/60 pt-2">
          {businessConfig.name} • {businessConfig.address.street},{" "}
          {businessConfig.address.locality}
        </p>
      </div>
    </section>
  );
}
