"use client";

import React, { useState } from "react";
import { businessConfig, getTelUrl, getWhatsAppUrl } from "@/lib/business";
import { servicesList } from "@/lib/services-data";
import { useLanguage } from "@/context/LanguageContext";
import { SchemaOrg } from "@/components/ui/SchemaOrg";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const telUrl = getTelUrl();
  const generalWhatsAppUrl = getWhatsAppUrl();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: servicesList[0]?.nameEn || "Signature Bridal Makeup",
    eventDate: "",
    town: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `*New Bridal Inquiry - The Bridel Studio*\n` +
      `• *Name:* ${formData.name || "Not specified"}\n` +
      `• *Phone:* ${formData.phone || "Not specified"}\n` +
      `• *Service:* ${formData.service}\n` +
      `• *Event Date:* ${formData.eventDate || "To be discussed"}\n` +
      `• *Town/City:* ${formData.town || "Unjha / Nearby"}\n` +
      (formData.notes ? `• *Notes:* ${formData.notes}\n` : "");

    const whatsappUrl = getWhatsAppUrl(formattedMessage);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <div className="bg-studio-ivory py-12 sm:py-20 border-b border-studio-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block mb-2">
              {t.contactPage.eyebrow}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-studio-charcoal font-normal">
              {t.contactPage.title}
            </h1>
            <p className="text-sm sm:text-base text-studio-stone mt-3 leading-relaxed">
              {t.contactPage.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: WhatsApp Pre-filled Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="border border-studio-border bg-studio-parchment/60 p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-studio-charcoal font-normal">
                    {t.contactPage.formTitle}
                  </h2>
                  <p className="text-xs text-studio-stone mt-1">
                    Fill in your event details below to start a pre-filled booking conversation directly on WhatsApp with our team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-studio-charcoal mb-1"
                      >
                        {t.contactPage.nameLabel} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.contactPage.namePlaceholder}
                        className="w-full text-sm border border-studio-border bg-studio-ivory px-3.5 py-2.5 text-studio-charcoal focus:border-studio-maroon focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-studio-charcoal mb-1"
                      >
                        {t.contactPage.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder={t.contactPage.phonePlaceholder}
                        className="w-full text-sm border border-studio-border bg-studio-ivory px-3.5 py-2.5 text-studio-charcoal focus:border-studio-maroon focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold uppercase tracking-wider text-studio-charcoal mb-1"
                      >
                        {t.contactPage.serviceLabel}
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full text-sm border border-studio-border bg-studio-ivory px-3.5 py-2.5 text-studio-charcoal focus:border-studio-maroon focus:outline-none"
                      >
                        {servicesList.map((s) => (
                          <option key={s.slug} value={s.nameEn}>
                            {language === "gu" ? s.nameGu : s.nameEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-xs font-semibold uppercase tracking-wider text-studio-charcoal mb-1"
                      >
                        {t.contactPage.dateLabel}
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        value={formData.eventDate}
                        onChange={(e) =>
                          setFormData({ ...formData, eventDate: e.target.value })
                        }
                        className="w-full text-sm border border-studio-border bg-studio-ivory px-3.5 py-2.5 text-studio-charcoal focus:border-studio-maroon focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Town / City */}
                  <div>
                    <label
                      htmlFor="town"
                      className="block text-xs font-semibold uppercase tracking-wider text-studio-charcoal mb-1"
                    >
                      {t.contactPage.townLabel}
                    </label>
                    <input
                      type="text"
                      id="town"
                      value={formData.town}
                      onChange={(e) =>
                        setFormData({ ...formData, town: e.target.value })
                      }
                      placeholder={t.contactPage.townPlaceholder}
                      className="w-full text-sm border border-studio-border bg-studio-ivory px-3.5 py-2.5 text-studio-charcoal focus:border-studio-maroon focus:outline-none"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-semibold uppercase tracking-wider text-studio-charcoal mb-1"
                    >
                      {t.contactPage.notesLabel}
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder={t.contactPage.notesPlaceholder}
                      className="w-full text-sm border border-studio-border bg-studio-ivory px-3.5 py-2.5 text-studio-charcoal focus:border-studio-maroon focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      data-track="contact-form-whatsapp"
                      className="w-full inline-flex items-center justify-center text-xs sm:text-sm font-semibold tracking-wider uppercase bg-studio-maroon text-studio-ivory hover:bg-studio-crimson py-4 px-6 transition-colors duration-150"
                    >
                      <svg
                        className="w-4 h-4 mr-2.5 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.16-.175.348-.219.464-.219.116 0 .232.001.333.006.107.005.252-.041.391.294.145.348.493 1.202.536 1.29.044.087.073.19.015.305-.058.116-.088.19-.175.29-.087.102-.184.227-.262.305-.088.087-.18.182-.077.359.102.174.453.747.971 1.208.669.595 1.233.779 1.408.866.174.087.276.073.377-.044.102-.116.435-.508.551-.682.116-.174.232-.145.392-.087s1.016.479 1.19.566.29.13.333.203c.044.073.044.421-.1 1.026z" />
                      </svg>
                      <span>{t.contactPage.sendViaWhatsApp}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Direct Info & Location */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Box */}
              <div className="border border-studio-border bg-studio-parchment/60 p-6 space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-studio-maroon block">
                  {t.contactPage.addressTitle}
                </span>
                <p className="text-base font-serif text-studio-charcoal">
                  {businessConfig.name}
                </p>
                <p className="text-sm text-studio-stone leading-relaxed">
                  {businessConfig.address.full}
                </p>
                <p className="text-xs text-studio-stone">
                  <span className="font-medium text-studio-charcoal">Landmark:</span>{" "}
                  {businessConfig.address.landmark}
                </p>

                <div className="pt-3">
                  <a
                    href={businessConfig.map.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="contact-directions-btn"
                    className="inline-flex items-center text-xs uppercase font-semibold tracking-wider text-studio-maroon hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <span className="ml-1">↗</span>
                  </a>
                </div>
              </div>

              {/* Direct Call & WhatsApp */}
              <div className="border border-studio-border bg-studio-parchment/60 p-6 space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-studio-maroon block">
                  {t.contactPage.directCallTitle}
                </span>

                {businessConfig.contact.phone && (
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="text-studio-stone">Call:</span>
                    <a
                      href={telUrl}
                      data-track="contact-phone-click"
                      className="font-medium text-studio-charcoal hover:text-studio-maroon"
                    >
                      +91 {businessConfig.contact.phone}
                    </a>
                  </div>
                )}

                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-studio-stone">WhatsApp:</span>
                  <a
                    href={generalWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="contact-whatsapp-direct"
                    className="font-medium text-studio-maroon hover:underline"
                  >
                    Open Studio WhatsApp Chat
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-studio-stone">Instagram:</span>
                  <a
                    href={businessConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-studio-charcoal hover:text-studio-maroon"
                  >
                    {businessConfig.contact.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="border border-studio-border bg-studio-parchment/60 p-6 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-studio-maroon block">
                  {t.contactPage.hoursTitle}
                </span>
                <p className="text-sm font-medium text-studio-charcoal">
                  {language === "gu"
                    ? businessConfig.hours.displayGu
                    : businessConfig.hours.display}
                </p>
                <p className="text-xs text-studio-stone">
                  {t.locationHours.appointmentNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
