import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicesList } from "@/lib/services-data";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { BookingCTA } from "@/components/ui/BookingCTA";
import { SpecialOffers } from "@/components/sections/SpecialOffers";

export const metadata: Metadata = {
  title: "Best Bridal Makeup & Beauty Parlour Services in Unjha | Rates & Packages",
  description:
    "Explore complete bridal makeup packages, HD engagement looks, hair spa, Hydra facials, waxing, and beauty services with transparent rates at The Bridel Studio, Shilp Complex, Visnagar Chokdi, Unjha. Call/WhatsApp 9723165947.",
  keywords: [
    "Bridal Makeup Services in Unjha",
    "Best Makeup Artist in Unjha",
    "Beauty Parlour in Unjha",
    "Bridal Makeup Price in Unjha",
    "Clean Up Price Unjha",
    "Hair Spa in Unjha",
    "Hydra Facial Unjha",
    "Korean Facial Unjha",
    "The Bridel Studio Services",
    "Rigal Patel Unjha",
  ],
  alternates: {
    canonical: "/services",
  },
};

const servicesFaqs = [
  {
    question: "What is the starting price for beauty and parlour services at The Bridel Studio Unjha?",
    answer:
      "Our special studio offers start at just ₹249 for Clean Up, ₹299 for Full Hand & Leg Waxing, and ₹399 for Hair Spa. Custom bridal makeup packages are tailored to your bridal trousseau and jewelry with consultation.",
  },
  {
    question: "How can I book bridal makeup or parlour appointments at The Bridel Studio?",
    answer:
      "You can directly message or call our studio at 9723165947 on WhatsApp with your wedding date or preferred timing for immediate confirmation.",
  },
  {
    question: "Where is The Bridel Studio located in Unjha?",
    answer:
      "We are conveniently located at First Floor, Shilp Complex, Visnagar Chokdi, Unjha, Gujarat 384170, with direct highway access for brides traveling from Visnagar, Mehsana, Sidhpur, and Patan.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
        faqs={servicesFaqs}
      />

      {/* 1. Official Studio Price Menu & Special Offers (Featuring Home Page Price Flyer) */}
      <SpecialOffers />

      {/* 2. Detailed Bridal & Occasion Styling Packages */}
      <div className="bg-studio-ivory py-12 sm:py-20 border-b border-studio-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block mb-2">
              Luxury Bridal Packages • Unjha
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-studio-charcoal font-normal">
              Signature Bridal & Occasion Artistry
            </h1>
            <p className="text-sm sm:text-base text-studio-stone mt-4 leading-relaxed">
              Every bridal appointment by Rigal Patel at The Bridel Studio is curated around personal consultation, strict hygiene standards, and long-wear skin formulations crafted to endure Gujarati wedding traditions and emotions.
            </p>
          </div>

          {/* Services Detailed List */}
          <div className="space-y-16">
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="border border-studio-border bg-studio-parchment/60 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Photo Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-4/5 w-full bg-studio-parchment border border-studio-border overflow-hidden">
                      <Image
                        src={service.imagePath}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Info Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center space-x-3 text-xs text-studio-maroon font-semibold uppercase tracking-wider">
                      <span>Service 0{index + 1}</span>
                      <span className="w-4 h-px bg-studio-brass" />
                      <span>{service.duration}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-4xl text-studio-charcoal font-normal">
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-studio-maroon transition-colors"
                      >
                        {service.nameEn}
                      </Link>
                    </h2>

                    <p className="text-xs font-gujarati text-studio-stone">
                      {service.nameGu}
                    </p>

                    <p className="text-sm sm:text-base text-studio-stone leading-relaxed">
                      {service.shortDescEn}
                    </p>

                    {/* What's Included */}
                    <div className="pt-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-studio-charcoal block mb-2">
                        Includes:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-studio-charcoal">
                        {service.includesEn.map((inc) => (
                          <li key={inc} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-studio-brass shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-studio-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-studio-stone block">
                          Starting Investment
                        </span>
                        <span className="text-sm font-semibold text-studio-maroon">
                          {service.startingPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-xs uppercase font-semibold tracking-wider text-studio-charcoal hover:text-studio-maroon px-4 py-3 border border-studio-border bg-studio-ivory hover:bg-studio-parchment transition-colors"
                        >
                          Full Details
                        </Link>
                        <BookingCTA
                          serviceName={service.nameEn}
                          label="Inquire via WhatsApp"
                          className="text-xs px-5 py-3"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Quick Consultation CTA */}
          <div className="mt-16 border border-studio-border bg-studio-parchment p-8 sm:p-10 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block">
              Personalized Consultation • Unjha
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-studio-charcoal font-normal">
              Need a Custom Bridal or Occasion Package?
            </h3>
            <p className="text-sm text-studio-stone max-w-xl mx-auto">
              Call or WhatsApp us directly at <strong className="text-studio-charcoal">9723165947</strong> to discuss wedding dates, Panetar draping, and customized family styling packages.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookingCTA
                label="Message Rigal Patel on WhatsApp"
                customMessage="Hi Rigal, I would like to inquire about bridal packages and appointments at The Bridel Studio Unjha"
                className="text-xs uppercase px-7 py-3.5"
              />
              <a
                href="tel:+919723165947"
                className="inline-flex items-center text-xs uppercase font-semibold tracking-wider px-6 py-3.5 border border-studio-maroon text-studio-maroon hover:bg-studio-ivory"
              >
                Call: 9723165947
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
