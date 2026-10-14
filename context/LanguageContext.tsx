"use client";

import React, {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
} from "react";
import { Language, translations, Translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem("bridel_studio_lang") as Language;
    if (stored === "en" || stored === "gu") return stored;
  } catch {
    // Ignore
  }
  return "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const syncedLang = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  const [overrideLang, setOverrideLang] = useState<Language | null>(null);

  const language: Language = overrideLang ?? syncedLang;

  const setLanguage = (lang: Language) => {
    setOverrideLang(lang);
    try {
      localStorage.setItem("bridel_studio_lang", lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "gu" : "en");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
