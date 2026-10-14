import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SpecialOffers } from "@/components/sections/SpecialOffers";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { MapSection } from "@/components/sections/MapSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Best Bridal Makeup & Beauty Studio in Unjha | The Bridel Studio",
  description:
    "The Bridel Studio by Rigal Patel is Unjha's premier bridal makeup studio and ladies beauty parlour. Specializing in royal bridal makeovers, HD engagement looks, hair spa, Hydra & Korean facials, and skin care at First Floor, Shilp Complex, Visnagar Chokdi, Unjha 384170. Call/WhatsApp: 9723165947.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  /**
   * REVIEWS NOTE:
   * HARD RULE: No fake reviews or ratings are rendered.
   * TODO: When genuine client testimonials from Google or brides are available,
   * create a <VerifiedReviews /> section component and render it here.
   */

  return (
    <div className="flex flex-col">
      {/* 1. Hero with official studio flyer, WhatsApp + Call buttons */}
      <Hero />

      {/* 2. Official Services & Special Offers (Clean up ₹249, Hair Spa ₹399, etc.) */}
      <SpecialOffers />

      {/* 3. Services Preview */}
      <ServicesPreview />

      {/* 3. Gallery Strip */}
      <GalleryStrip />

      {/* 4. About Snippet */}
      <AboutSnippet />

      {/* 5. Location + Hours + Directions */}
      <MapSection />

      {/* 6. Final Call to Action */}
      <FinalCta />
    </div>
  );
}
