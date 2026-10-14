"use client";

import React from "react";
import Link from "next/link";
import { businessConfig } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSnippet() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-studio-parchment/40 border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Asymmetric Decorative Framing */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border border-studio-border bg-studio-ivory p-6 sm:p-8 space-y-6">
              <span className="w-10 h-px bg-studio-brass block" />
              <blockquote className="font-serif text-xl sm:text-2xl text-studio-charcoal italic leading-relaxed font-light">
                {language === "gu"
                  ? "“બ્રાઈડલ મેકઅપ એટલે કન્યાની વાસ્તવિક સુંદરતાને માન આપવું, તેને બદલી નાખવી નહીં.”"
                  : "“Bridal makeup should never mask a woman's true grace; it should honor who she already is on her most sacred day.”"}
              </blockquote>
              <div className="pt-2 border-t border-studio-border/60 flex items-center justify-between text-xs text-studio-stone">
                <span className="font-medium text-studio-maroon uppercase tracking-wider">
                  The Bridel Studio
                </span>
                <span>Unjha, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block">
                {t.aboutSnippet.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-studio-charcoal font-normal leading-tight">
                {t.aboutSnippet.title}
              </h2>
            </div>

            <p className="text-base text-studio-stone leading-relaxed">
              {t.aboutSnippet.body1}
            </p>

            <p className="text-base text-studio-stone leading-relaxed">
              {t.aboutSnippet.body2}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="text-xs font-semibold tracking-wider uppercase text-studio-maroon hover:text-studio-crimson flex items-center group"
              >
                <span>{t.aboutSnippet.readStory}</span>
                <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <span className="text-studio-border">|</span>
              <span className="text-xs text-studio-stone">
                {businessConfig.address.landmark}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
