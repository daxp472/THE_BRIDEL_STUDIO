"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded border border-studio-border bg-studio-parchment/60 p-0.5 text-xs font-medium tracking-wide ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 transition-colors duration-150 ${
          language === "en"
            ? "bg-studio-maroon text-studio-ivory font-semibold shadow-xs"
            : "text-studio-charcoal hover:text-studio-maroon"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("gu")}
        aria-pressed={language === "gu"}
        className={`px-2.5 py-1 font-gujarati transition-colors duration-150 ${
          language === "gu"
            ? "bg-studio-maroon text-studio-ivory font-semibold shadow-xs"
            : "text-studio-charcoal hover:text-studio-maroon"
        }`}
      >
        ગુજરાતી
      </button>
    </div>
  );
}
