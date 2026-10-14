import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { businessConfig } from "@/lib/business";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { BookingCTA } from "@/components/ui/BookingCTA";

interface AreaPageProps {
  params: Promise<{ town: string }>;
}

interface TownContent {
  slug: string;
  nameEn: string;
  nameGu: string;
  distance: string;
  travelTime: string;
  headlineEn: string;
  headlineGu: string;
  editorialEn: string[];
  editorialGu: string[];
  travelTipsEn: string;
  travelTipsGu: string;
}

const townGuides: Record<string, TownContent> = {
  visnagar: {
    slug: "visnagar",
    nameEn: "Visnagar",
    nameGu: "વિસનગર",
    distance: "approx. 18 km",
    travelTime: "25–30 minutes",
    headlineEn: "Bridal Makeup for Visnagar Brides Visiting Unjha",
    headlineGu: "વિસનગરથી ઊંઝા પધારતી કન્યાઓ માટે વિશેષ બ્રાઈડલ શ્રુંગાર",
    editorialEn: [
      "Visnagar and Unjha share a close cultural connection. Located directly along the Visnagar-Unjha highway, our studio at Shilp Complex sits right at Visnagar Chokdi — making arrival effortless without navigating through town traffic.",
      "Many brides and families from Visnagar prefer visiting The Bridel Studio for peaceful, one-on-one bridal consultations, professional skin-prep routines, and traditional Gujarati bridal draping.",
    ],
    editorialGu: [
      "વિસનગર-ઊંઝા હાઇવે પર સીધું જોડાણ હોવાથી અને અમારો સ્ટુડિયો વિસનગર ચોકડી ખાતે જ શિલ્પ કોમ્પ્લેક્સમાં આવેલો હોવાથી વિસનગરની કન્યાઓ માટે અહીં પહોંચવું અત્યંત સરળ છે.",
      "શાંત વાતાવરણ અને વ્યક્તિગત કાળજી સાથે બ્રાઈડલ મેકઅપ અને પાનેતર ડ્રેપિંગ માટે વિસનગરના પરિવારો The Bridel Studio પસંદ કરે છે.",
    ],
    travelTipsEn:
      "Take the Visnagar-Unjha Road directly. As you enter Unjha at Visnagar Chokdi, Shilp Complex is conveniently positioned with easy parking.",
    travelTipsGu:
      "વિસનગર-ઊંઝા રોડથી સીધા આવતાં વિસનગર ચોકડી પર જ શિલ્પ કોમ્પ્લેક્સ આવેલું છે.",
  },
  mehsana: {
    slug: "mehsana",
    nameEn: "Mehsana",
    nameGu: "મહેસાણા",
    distance: "approx. 26 km",
    travelTime: "30–35 minutes",
    headlineEn: "Bespoke Bridal Styling for Mehsana Brides",
    headlineGu: "મહેસાણાની કન્યાઓ માટે ખાસ બ્રાઈડલ સ્ટાઇલિંગ",
    editorialEn: [
      "While Mehsana is bustling with busy commercial salons, brides seeking a calm, dedicated, non-rushed environment travel to The Bridel Studio in Unjha. We accept strictly limited bridal appointments per day to ensure complete focus on you.",
      "Whether you are planning an elaborate royal lehenga look or an intimate engagement glow, our studio offers individualized artistry that stays radiant throughout the celebrations.",
    ],
    editorialGu: [
      "મહેસાણાથી માત્ર ૩૦ મિનિટના અંતરે આવેલા અમારા સ્ટુડિયોમાં અમે એક સમયે મર્યાદિત બુકિંગ જ સ્વીકારીએ છીએ જેથી કન્યાને સંપૂર્ણ સમય અને પૂરતી કાળજી મળી રહે.",
      "રોયલ લુકથી માંડીને સોફ્ટ એન્ગેજમેન્ટ મેકઅપ સુધીની સેવાઓ માટે મહેસાણાની કન્યાઓ ઊંઝા આવે છે.",
    ],
    travelTipsEn:
      "Travel northbound on State Highway 41 (Mehsana-Unjha-Patan route). Turn toward Visnagar Chokdi upon entering Unjha.",
    travelTipsGu:
      "સ્ટેટ હાઇવે ૪૧ મારફતે ઉત્તર તરફ મુસાફરી કરી ઊંઝા પ્રવેશતાં જ વિસનગર ચોકડી તરફ વળો.",
  },
  sidhpur: {
    slug: "sidhpur",
    nameEn: "Sidhpur",
    nameGu: "સિદ્ધપુર",
    distance: "approx. 14 km",
    travelTime: "15–20 minutes",
    headlineEn: "Bridal Artistry for Sidhpur Wedding Muhurats",
    headlineGu: "સિદ્ધપુરના લગ્ન મુહૂર્ત માટે બ્રાઈડલ આર્ટિસ્ટ્રી",
    editorialEn: [
      "Sidhpur is just a short 15-minute commute from Unjha along NH 27. Brides having their wedding celebrations or reception banquets in Sidhpur frequently schedule their morning or afternoon bridal makeup sessions at The Bridel Studio.",
      "Our early-morning slot scheduling accommodates traditional muhurat timings, allowing brides to get ready in comfort and return to their venue well ahead of the ceremony.",
    ],
    editorialGu: [
      "સિદ્ધપુરથી ઊંઝા માત્ર ૧૫-૨૦ મિનિટના અંતરે છે. વહેલી સવારના મુહૂર્ત માટે સમયસર તૈયાર થઈને મંડપ સુધી પહોંચવા માટે આ ઉત્તમ સુવિધા છે.",
      "અમારા સ્ટુડિયોમાં વહેલી સવારના મુહૂર્ત માટે ખાસ વ્યવસ્થા ઉપલબ્ધ છે.",
    ],
    travelTipsEn:
      "Head south on NH 27 / Mehsana-Palanpur highway. Unjha is accessible within 14 km, with direct route to Visnagar Chokdi.",
    travelTipsGu:
      "NH ૨૭ હાઇવે દ્વારા દક્ષિણ તરફ માત્ર ૧૪ કિમીનું અંતર કાપી વિસનગર ચોકડી પહોંચી શકાય છે.",
  },
  patan: {
    slug: "patan",
    nameEn: "Patan",
    nameGu: "પાટણ",
    distance: "approx. 30 km",
    travelTime: "40–45 minutes",
    headlineEn: "Heritage Bridal Styling for Patan Brides",
    headlineGu: "પાટણની કન્યાઓ માટે હેરિટેજ બ્રાઈડલ શ્રુંગાર",
    editorialEn: [
      "Patan is world-renowned for its heritage Patola textiles and royal Gujarati wedding customs. At The Bridel Studio, we appreciate the craftsmanship of authentic heritage trousseaus and specialize in draping, jewelry setting, and makeup that harmonizes with rich silks and antique gold.",
      "Brides travelling from Patan receive dedicated sessions designed to complement their attire with balanced, non-cakey, photo-ready makeup.",
    ],
    editorialGu: [
      "પાટણના ઐતિહાસિક પટોળા અને પરંપરાગત ઘરેણાં સાથે સુમેળ સાધતો શાહી શ્રુંગાર અમારા સ્ટુડિયોની વિશેષતા છે.",
      "પાટણથી પધારતી કન્યાઓ માટે ખાસ આઉટફિટ સેટિંગ અને ફોટોજેનિક મેકઅપ પ્રદાન કરવામાં આવે છે.",
    ],
    travelTipsEn:
      "Drive via the Patan - Unjha Highway entering Unjha city. Continue toward Visnagar Chokdi to reach Shilp Complex.",
    travelTipsGu:
      "પાટણ - ઊંઝા હાઇવે દ્વારા સીધા ઊંઝા શહેરમાં પ્રવેશી વિસનગર ચોકડી પર શિલ્પ કોમ્પ્લેક્સ પહોંચી શકાય છે.",
  },
};

export async function generateStaticParams() {
  return Object.keys(townGuides).map((slug) => ({
    town: slug,
  }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { town } = await params;
  const guide = townGuides[town];

  if (!guide) {
    return { title: "Location Not Found" };
  }

  return {
    title: `Bridal Makeup for Brides from ${guide.nameEn} | The Bridel Studio Unjha`,
    description: `Traveling from ${guide.nameEn} to Unjha for bridal makeup? ${guide.headlineEn}. Located at Shilp Complex, Visnagar Chokdi, Unjha.`,
    alternates: {
      canonical: `/areas/${guide.slug}`,
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { town } = await params;
  const guide = townGuides[town];

  if (!guide) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Areas", url: "/areas/visnagar" },
    { name: guide.nameEn, url: `/areas/${guide.slug}` },
  ];

  return (
    <>
      <SchemaOrg breadcrumbs={breadcrumbs} />

      <article className="bg-studio-ivory py-12 sm:py-20 border-b border-studio-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs text-studio-stone"
          >
            <Link href="/" className="hover:text-studio-maroon">
              Home
            </Link>
            <span>/</span>
            <span>Visiting from {guide.nameEn}</span>
          </nav>

          {/* Header */}
          <header className="space-y-4 border-b border-studio-border pb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-studio-maroon">
              <span className="w-5 h-px bg-studio-brass" />
              <span>
                {guide.nameEn} to Unjha • {guide.distance} ({guide.travelTime})
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-studio-charcoal font-normal">
              {guide.headlineEn}
            </h1>

            <p className="text-sm font-gujarati text-studio-stone">
              {guide.headlineGu}
            </p>
          </header>

          {/* Narrative Content */}
          <section className="space-y-6 text-sm sm:text-base text-studio-stone leading-relaxed">
            {guide.editorialEn.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="border border-studio-border bg-studio-parchment/60 p-6 space-y-3 mt-6">
              <h2 className="font-serif text-xl text-studio-charcoal">
                Travel & Route Directions from {guide.nameEn}
              </h2>
              <p className="text-sm text-studio-stone">{guide.travelTipsEn}</p>
              <p className="text-xs font-gujarati text-studio-stone pt-1">
                {guide.travelTipsGu}
              </p>
              <div className="pt-2">
                <a
                  href={businessConfig.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track={`area-directions-${guide.slug}`}
                  className="inline-flex items-center text-xs uppercase font-semibold tracking-wider text-studio-maroon hover:underline"
                >
                  <span>Open Route to Shilp Complex, Unjha on Google Maps</span>
                  <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* Studio Actions */}
          <section className="border-t border-studio-border pt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-studio-stone block">
                The Bridel Studio
              </span>
              <span className="text-sm font-medium text-studio-charcoal">
                Shilp Complex, Visnagar Chokdi, Unjha
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <BookingCTA
                label={`Inquire from ${guide.nameEn}`}
                customMessage={`Hi, I'm visiting from ${guide.nameEn} and would like to inquire about bridal makeup at The Bridel Studio in Unjha`}
                className="text-xs uppercase"
              />
              <Link
                href="/services"
                className="text-xs uppercase font-semibold tracking-wider text-studio-charcoal hover:text-studio-maroon py-3.5 px-5 border border-studio-border text-center"
              >
                Explore Services
              </Link>
            </div>
          </section>

          {/* Other Regional Towns Navigation */}
          <section className="border-t border-studio-border pt-8">
            <span className="text-xs uppercase tracking-widest text-studio-stone block mb-3">
              Other Regional Travel Guides
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {businessConfig.townsServed
                .filter((t) => t.slug !== guide.slug)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/areas/${t.slug}`}
                    className="px-3 py-1.5 border border-studio-border bg-studio-parchment/40 hover:bg-studio-parchment hover:border-studio-maroon transition-colors"
                  >
                    Visiting from {t.nameEn} ({t.travelTime})
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
