"use client";

import React from "react";
import Image from "next/image";
import { specialOffersList } from "@/lib/services-data";
import { getWhatsAppUrl, getTelUrl } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";

export function SpecialOffers() {
  const { language } = useLanguage();
  const telUrl = getTelUrl();

  return (
    <section className="py-16 sm:py-24 bg-studio-ivory border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-studio-maroon">
            <span className="w-5 h-px bg-studio-brass" />
            <span>
              {language === "gu" ? "વિશેષ ઓફર્સ • ઊંઝા" : "Official Special Offers • Unjha"}
            </span>
            <span className="w-5 h-px bg-studio-brass" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-studio-charcoal font-normal">
            {language === "gu"
              ? "અમારી સ્પેશિયલ બ્યુટી સેવાઓ અને ઓફર્સ"
              : "Studio Services & Special Offers"}
          </h2>

          <p className="text-xs sm:text-sm text-studio-stone italic">
            “Self Care Is Always A Good Idea ♡”
          </p>
        </div>

        {/* Main Grid: Official Flyer on Left, Interactive Price Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: The Flyer Poster Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[368/536] w-full max-w-sm bg-white overflow-hidden border-2 border-studio-brass/60 shadow-xl rounded-md group">
              <a
                href={getWhatsAppUrl("Hi, I want to book a special offer service at The Bridel Studio")}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                aria-label="Book on WhatsApp 9723165947"
              >
                <Image
                  src="/images/special-offer.png"
                  alt="The Bridel Studio Special Offers Flyer Unjha"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-contain bg-white transition-transform duration-300 group-hover:scale-102"
                />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Interactive Service Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {specialOffersList.map((item) => {
                const name = language === "gu" ? item.nameGu : item.nameEn;
                const whatsappMsg = `Hi, I'd like to book the ${item.nameEn} (${item.priceDisplay}) offer at The Bridel Studio Unjha`;
                const itemWhatsappUrl = getWhatsAppUrl(whatsappMsg);

                return (
                  <div
                    key={item.id}
                    className="p-4 border border-studio-border bg-studio-parchment/60 hover:bg-studio-ivory hover:border-studio-maroon transition-all duration-200 flex flex-col justify-between space-y-3 group shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-studio-stone">
                          {item.category}
                        </span>
                        <span className="font-serif text-lg font-bold text-studio-maroon">
                          {item.priceDisplay}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg text-studio-charcoal font-medium mt-1 group-hover:text-studio-maroon transition-colors">
                        {name}
                      </h3>
                      <p className="text-xs text-studio-stone mt-0.5 line-clamp-1">
                        {item.tagline}
                      </p>
                    </div>

                    <a
                      href={itemWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-track={`offer-book-${item.id}`}
                      className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider bg-studio-maroon text-studio-ivory hover:bg-studio-crimson py-2 px-3 transition-colors duration-150"
                    >
                      <svg
                        className="w-3.5 h-3.5 mr-1.5 fill-current shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.16-.175.348-.219.464-.219.116 0 .232.001.333.006.107.005.252-.041.391.294.145.348.493 1.202.536 1.29.044.087.073.19.015.305-.058.116-.088.19-.175.29-.087.102-.184.227-.262.305-.088.087-.18.182-.077.359.102.174.453.747.971 1.208.669.595 1.233.779 1.408.866.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.392-.087s1.016.479 1.19.566.29.13.333.203c.044.073.044.421-.1 1.026z" />
                      </svg>
                      <span>
                        {language === "gu" ? "વોટ્સએપ પર બુક કરો" : "Book Offer"}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Bar with 9723165947 */}
            <div className="pt-3 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between text-xs text-studio-stone gap-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>
                  First Floor, Shilp Complex, Visnagar Chokdi, Unjha
                </span>
              </div>
              <a
                href={telUrl}
                data-track="offers-call-direct"
                className="font-semibold text-studio-maroon hover:underline flex items-center"
              >
                <span>Call Directly: 9723165947</span>
                <span className="ml-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
