import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { BookingCTA } from "@/components/ui/BookingCTA";

export const metadata: Metadata = {
  title: "About The Studio | Bridal Makeup in Unjha",
  description:
    "Learn about The Bridel Studio in Unjha. Dedicated bridal artistry, hygiene standards, and bespoke occasion styling at Shilp Complex, Visnagar Chokdi.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  /**
   * OWNER NOTE:
   * HARD RULE: Do not invent awards, client counts, or years in business.
   * If the owner provides their biography, it will be integrated seamlessly.
   */

  return (
    <>
      <SchemaOrg
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      <div className="bg-studio-ivory py-12 sm:py-20 border-b border-studio-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <header className="space-y-4 border-b border-studio-border pb-8">
            <span className="text-xs uppercase tracking-widest text-studio-maroon font-semibold block">
              Our Ethos & Philosophy
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-studio-charcoal font-normal">
              About The Bridel Studio
            </h1>
            <p className="text-base sm:text-lg text-studio-stone leading-relaxed font-normal">
              A serene beauty sanctuary at Shilp Complex, Visnagar Chokdi, Unjha — dedicated to honoring each bride’s individuality.
            </p>
          </header>

          {/* Core Philosophy Section */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="font-serif text-2xl text-studio-maroon block">
                The Philosophy
              </span>
              <span className="text-xs font-gujarati text-studio-stone mt-1 block">
                અમારો અભિગમ
              </span>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-studio-stone leading-relaxed">
              <p>
                Bridal makeup should never feel like an artificial disguise. When a woman steps into our studio, our focus is on understanding her comfort, her skin sensitivities, her wedding outfit hues, and the specific rituals of her family.
              </p>
              <p>
                From classic Gujarati Panetar draping and intricate mathapatti placement to subtle modern evening glams, every brushstroke is intentional. We balance traditional dignity with contemporary skin aesthetics.
              </p>
            </div>
          </section>

          {/* Hygiene & Product Standards */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-studio-border pt-12">
            <div className="md:col-span-4">
              <span className="font-serif text-2xl text-studio-maroon block">
                Hygiene & Purity
              </span>
              <span className="text-xs font-gujarati text-studio-stone mt-1 block">
                સ્વચ્છતા અને ઉત્તમ ઉત્પાદનો
              </span>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-studio-stone leading-relaxed">
              <p>
                Skin safety is paramount. All makeup palettes, brush sets, beauty sponges, and draping tools undergo meticulous sanitization between sessions.
              </p>
              <p>
                We carefully curate skin-friendly, long-wearing formulations that resist sweat and temperature variations common during celebratory ceremonies, ensuring your look remains luminous from morning rituals to evening vidaai.
              </p>
            </div>
          </section>

          {/* Studio Sanctuary in Unjha */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-studio-border pt-12">
            <div className="md:col-span-4">
              <span className="font-serif text-2xl text-studio-maroon block">
                Our Location
              </span>
              <span className="text-xs font-gujarati text-studio-stone mt-1 block">
                ઊંઝા ખાતે અમારું સ્થાન
              </span>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-studio-stone leading-relaxed">
              <p>
                Conveniently situated at Shilp Complex near Visnagar Chokdi, Unjha, our studio offers a calm, well-lit setting away from wedding commotion.
              </p>
              <p>
                We regularly welcome brides from Unjha and neighboring towns including Visnagar, Mehsana, Sidhpur, and Patan who travel here for dedicated one-on-one attention.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <BookingCTA
                  label="Inquire via WhatsApp"
                  className="text-xs uppercase"
                />
                <Link
                  href="/contact"
                  className="text-xs uppercase font-semibold tracking-wider text-studio-charcoal hover:text-studio-maroon py-3 px-5 border border-studio-border text-center"
                >
                  View Studio Location
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
