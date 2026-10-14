"use client";

import React from "react";
import { businessConfig, getTelUrl, getWhatsAppUrl } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";

export function MobileStickyBar() {
  const { t } = useLanguage();
  const telUrl = getTelUrl();
  const whatsappUrl = getWhatsAppUrl(
    "Hi, I'd like to book bridal makeup at The Bridel Studio"
  );
  const directionsUrl = businessConfig.map.directionsUrl;

  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-studio-ivory/95 backdrop-blur-md border-t border-studio-border shadow-lg pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-3 divide-x divide-studio-border text-center">
        {/* Call Button */}
        {telUrl ? (
          <a
            href={telUrl}
            data-track="sticky-call"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-studio-charcoal hover:bg-studio-parchment active:bg-studio-border/30 transition-colors"
          >
            <svg
              className="w-5 h-5 text-studio-maroon mb-1 shrink-0"
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
            <span className="text-[11px] font-medium tracking-wide">
              {t.stickyBar.call}
            </span>
          </a>
        ) : (
          <a
            href="/contact"
            data-track="sticky-call-info"
            className="flex flex-col items-center justify-center py-2.5 px-1 text-studio-charcoal hover:bg-studio-parchment transition-colors"
          >
            <svg
              className="w-5 h-5 text-studio-maroon mb-1 shrink-0"
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
            <span className="text-[11px] font-medium tracking-wide">
              {t.stickyBar.call}
            </span>
          </a>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-track="sticky-whatsapp"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-studio-maroon text-studio-ivory active:bg-studio-crimson transition-colors"
        >
          <svg
            className="w-5 h-5 text-studio-brass-light mb-1 shrink-0 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.16-.175.348-.219.464-.219.116 0 .232.001.333.006.107.005.252-.041.391.294.145.348.493 1.202.536 1.29.044.087.073.19.015.305-.058.116-.088.19-.175.29-.087.102-.184.227-.262.305-.088.087-.18.182-.077.359.102.174.453.747.971 1.208.669.595 1.233.779 1.408.866.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.392-.087s1.016.479 1.19.566.29.13.333.203c.044.073.044.421-.1 1.026z" />
          </svg>
          <span className="text-[11px] font-semibold tracking-wide">
            {t.stickyBar.whatsapp}
          </span>
        </a>

        {/* Directions Button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-track="sticky-directions"
          className="flex flex-col items-center justify-center py-2.5 px-1 text-studio-charcoal hover:bg-studio-parchment active:bg-studio-border/30 transition-colors"
        >
          <svg
            className="w-5 h-5 text-studio-maroon mb-1 shrink-0"
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
          <span className="text-[11px] font-medium tracking-wide">
            {t.stickyBar.directions}
          </span>
        </a>
      </div>
    </aside>
  );
}
