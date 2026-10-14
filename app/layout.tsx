import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Noto_Sans_Gujarati,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { businessConfig } from "@/lib/business";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-gujarati",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebridelstudio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Bridal Makeup & Beauty Studio in Unjha | The Bridel Studio",
    template: "%s | The Bridel Studio Unjha",
  },
  description:
    "The Bridel Studio by Rigal Patel is Unjha's premier bridal makeup & beauty studio. Offering luxury bridal makeup, engagement makeover, HD reception styling, Hydra & Korean facials, hair spa, and skin treatments at First Floor, Shilp Complex, Visnagar Chokdi, Unjha 384170. Call/WhatsApp: 9723165947.",
  keywords: [
    "Best Makeup in Unjha",
    "Best Makeup Artist in Unjha",
    "Best Bridal Makeup in Unjha",
    "Bridal Makeup in Unjha",
    "The Bridel Studio",
    "The Bridal Studio Unjha",
    "Beauty Parlour in Unjha",
    "Ladies Beauty Parlour in Unjha",
    "Bridal Studio Unjha",
    "Rigal Patel Makeup Artist",
    "Rigal Patel Unjha",
    "Makeup Artist Unjha Gujarat",
    "Bridal Makeover Near Me",
    "Bridal Makeup Visnagar Chokdi",
    "Shilp Complex Unjha Parlour",
    "Engagement Makeup Unjha",
    "Reception Makeup Artist Unjha",
    "Sider Makeup in Unjha",
    "Party Makeup in Unjha",
    "Gujarati Bridal Panetar Draping Unjha",
    "Hydra Facial Unjha",
    "Korean Facial Unjha",
    "Hair Spa in Unjha",
    "Hair Keratin Treatment Unjha",
    "Hair Smoothing Unjha",
    "Bridal Makeup Visnagar",
    "Bridal Makeup Mehsana",
    "Bridal Makeup Sidhpur",
    "Bridal Makeup Patan",
    "Best Parlour Near Me Unjha",
    "ઊંઝામાં બેસ્ટ બ્રાઈડલ મેકઅપ",
    "ઊંઝા બ્યુટી પાર્લર",
  ],
  authors: [{ name: "The Bridel Studio", url: siteUrl }],
  creator: "The Bridel Studio",
  publisher: "The Bridel Studio",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  verification: {
    google: "google03e2532bb73fbf41",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: `${siteUrl}?lang=en`,
      gu: `${siteUrl}?lang=gu`,
    },
  },
  openGraph: {
    title: "Bridal Makeup in Unjha | The Bridel Studio",
    description:
      "Timeless bridal artistry, hair & skin care in Unjha, Gujarat. First Floor, Shilp Complex, Visnagar Chokdi.",
    url: siteUrl,
    siteName: businessConfig.name,
    images: [
      {
        url: `${siteUrl}/images/logo.jpg`,
        width: 1024,
        height: 1024,
        alt: "The Bridel Studio - Bridal Makeup & Beauty Studio in Unjha",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Makeup in Unjha | The Bridel Studio",
    description:
      "Bespoke bridal makeup & occasion styling in Unjha, Gujarat. First Floor, Shilp Complex, Visnagar Chokdi.",
    images: [`${siteUrl}/images/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${gujarati.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-studio-ivory text-studio-charcoal">
        <LanguageProvider>
          <SchemaOrg />
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
