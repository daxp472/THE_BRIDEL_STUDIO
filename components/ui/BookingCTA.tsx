"use client";

import React from "react";
import { getWhatsAppUrl } from "@/lib/business";
import { useLanguage } from "@/context/LanguageContext";

interface BookingCTAProps {
  label?: string;
  customMessage?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  serviceName?: string;
}

/**
 * Decoupled Booking CTA Component
 * Phase 1: Direct link to WhatsApp booking flow with pre-filled enquiry.
 * Phase 2: Will be swapped to slot-based Supabase booking workflow without altering pages.
 */
export function BookingCTA({
  label,
  customMessage,
  variant = "primary",
  className = "",
  serviceName,
}: BookingCTAProps) {
  const { language } = useLanguage();

  const defaultMessage = serviceName
    ? `Hi, I'd like to book ${serviceName} at The Bridel Studio`
    : "Hi, I'd like to book bridal makeup at The Bridel Studio";

  const message = customMessage || defaultMessage;
  const whatsappUrl = getWhatsAppUrl(message);

  const defaultText =
    label ||
    (language === "gu"
      ? "વોટ્સએપ પર પૂછપરછ કરો"
      : "Inquire via WhatsApp");

  const baseStyles =
    "inline-flex items-center justify-center font-medium text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-studio-maroon text-studio-ivory hover:bg-studio-crimson shadow-sm border border-transparent px-6 py-3.5",
    secondary:
      "bg-studio-brass text-studio-charcoal hover:bg-studio-brass-light border border-transparent px-6 py-3.5 font-semibold",
    outline:
      "bg-transparent text-studio-maroon border border-studio-maroon hover:bg-studio-parchment px-6 py-3.5",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp-booking-cta"
      data-service={serviceName || "general"}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <svg
        className="w-4 h-4 mr-2 shrink-0 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.16-.175.348-.219.464-.219.116 0 .232.001.333.006.107.005.252-.041.391.294.145.348.493 1.202.536 1.29.044.087.073.19.015.305-.058.116-.088.19-.175.29-.087.102-.184.227-.262.305-.088.087-.18.182-.077.359.102.174.453.747.971 1.208.669.595 1.233.779 1.408.866.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.392-.087s1.016.479 1.19.566.29.13.333.203c.044.073.044.421-.1 1.026z" />
      </svg>
      <span>{defaultText}</span>
    </a>
  );
}
