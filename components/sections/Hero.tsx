"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { businessConfig, getTelUrl, getWhatsAppUrl } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { language, t } = useLanguage();
  const telUrl = getTelUrl();
  const whatsappUrl = getWhatsAppUrl(
    "Hi, I'd like to book bridal makeup at The Bridel Studio"
  );

  return (
    <section className="relative overflow-hidden bg-studio-ivory pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Studio Badge */}
            <div className="inline-flex items-center space-x-2 text-xs font-medium tracking-widest uppercase text-studio-maroon">
              <span className="w-6 h-px bg-studio-brass" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Asymmetric Editorial Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-studio-charcoal leading-[1.12] font-normal tracking-tight">
              <span className="block text-studio-maroon">
                {t.hero.titleLine1}
              </span>
              <span className="block italic text-studio-charcoal font-light">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-studio-stone leading-relaxed max-w-xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Call to Actions (WhatsApp + Call) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track="hero-whatsapp"
                className="inline-flex items-center justify-center text-sm font-semibold tracking-wider uppercase bg-studio-maroon text-studio-ivory hover:bg-studio-crimson px-7 py-4 transition-colors duration-150 text-center"
              >
                <svg
                  className="w-4 h-4 mr-2.5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.16-.175.348-.219.464-.219.116 0 .232.001.333.006.107.005.252-.041.391.294.145.348.493 1.202.536 1.29.044.087.073.19.015.305-.058.116-.088.19-.175.29-.087.102-.184.227-.262.305-.088.087-.18.182-.077.359.102.174.453.747.971 1.208.669.595 1.233.779 1.408.866.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.392-.087s1.016.479 1.19.566.29.13.333.203c.044.073.044.421-.1 1.026z" />
                </svg>
                <span>{t.hero.bookViaWhatsApp}</span>
              </a>

              {telUrl ? (
                <a
                  href={telUrl}
                  data-track="hero-call"
                  className="inline-flex items-center justify-center text-sm font-semibold tracking-wider uppercase border border-studio-maroon text-studio-maroon hover:bg-studio-parchment px-7 py-4 transition-colors duration-150 text-center"
                >
                  <svg
                    className="w-4 h-4 mr-2.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{t.hero.callStudio}</span>
                </a>
              ) : (
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center text-sm font-semibold tracking-wider uppercase border border-studio-maroon text-studio-maroon hover:bg-studio-parchment px-7 py-4 transition-colors duration-150 text-center"
                >
                  <span>{t.hero.viewGallery}</span>
                </Link>
              )}
            </div>

            {/* Verified Studio Location Cue */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-studio-stone">
              <svg
                className="w-4 h-4 text-studio-brass shrink-0"
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
              <span>{businessConfig.address.street}, Unjha</span>
            </div>
          </div>

          {/* Photo Column - Editorial Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetric offset brass border */}
              <div className="absolute -inset-2 sm:-inset-3 border border-studio-brass/40 -rotate-1 pointer-events-none" />

              <div className="relative aspect-[368/536] w-full bg-white overflow-hidden border border-studio-brass/60 shadow-xl rounded-sm">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative cursor-pointer group"
                  aria-label="Book Special Offer via WhatsApp"
                >
                  <Image
                    src="/images/hero.jpg"
                    alt="The Bridel Studio Official Menu and Special Offers in Unjha"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-studio-maroon/90 text-studio-ivory text-center py-2 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Tap to Book on WhatsApp (9723165947)
                  </div>
                </a>
              </div>

              {/* Editorial Caption Tag */}
              <div className="mt-3 text-right">
                <span className="text-[11px] uppercase tracking-wider text-studio-stone">
                  {language === "gu"
                    ? "વિસનગર ચોકડી, ઊંઝા"
                    : "Visnagar Chokdi, Unjha"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
