"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { businessConfig, getWhatsAppUrl } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const whatsappUrl = getWhatsAppUrl(
    "Hi, I'd like to inquire about bridal makeup at The Bridel Studio"
  );

  return (
    <header className="sticky top-0 z-40 bg-studio-ivory/95 backdrop-blur-md border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="group flex items-center space-x-3"
            aria-label="The Bridel Studio Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-studio-brass/80 shrink-0 shadow-xs">
              <Image
                src="/images/logo.jpg"
                alt="The Bridel Studio Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl sm:text-2xl tracking-wider text-studio-maroon uppercase font-normal leading-tight">
                {businessConfig.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-studio-stone uppercase font-sans">
                Hair • Skin • Makeup • Unjha
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-studio-maroon font-semibold"
                      : "text-studio-charcoal/80 hover:text-studio-maroon font-normal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-studio-brass" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Language Toggle + WhatsApp CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="header-whatsapp-btn"
              className="inline-flex items-center text-xs tracking-wider uppercase font-semibold text-studio-ivory bg-studio-maroon hover:bg-studio-crimson px-4 py-2.5 transition-colors duration-150"
            >
              <span>{t.nav.bookNow}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Toggle + Hamburger Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-studio-charcoal hover:text-studio-maroon focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-studio-border bg-studio-ivory px-5 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2 border-b border-studio-border/50 ${
                    isActive
                      ? "text-studio-maroon font-semibold"
                      : "text-studio-charcoal hover:text-studio-maroon"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track="mobile-menu-whatsapp"
              className="block w-full text-center text-xs tracking-wider uppercase font-semibold text-studio-ivory bg-studio-maroon py-3"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
