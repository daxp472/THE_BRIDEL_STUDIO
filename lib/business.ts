/**
 * The Bridel Studio - Core Business Configuration
 * Single source of truth for NAP (Name, Address, Phone) consistency, social links, and studio details.
 *
 * NOTE FOR OWNER:
 * Please supply your 10-digit phone number, WhatsApp number, business hours, and owner name
 * in the marked TODO fields below or via environment variables.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  type: string;
  tagline: {
    en: string;
    gu: string;
  };
  address: {
    full: string;
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    countryName: string;
    landmark: string;
  };
  contact: {
    // TODO: Supply 10-digit mobile number for phone calls (e.g. "9876543210")
    phone: string;
    // TODO: Supply 10-digit WhatsApp business number (e.g. "9876543210")
    whatsapp: string;
    instagram: string;
    instagramHandle: string;
  };
  hours: {
    // TODO: Supply business operating hours (e.g. "Mon - Sun: 10:00 AM - 7:00 PM (By Appointment)")
    display: string;
    displayGu: string;
    schemaHours: string[]; // Schema.org openingHours format, e.g. ["Mo-Su 10:00-19:00"]
  };
  owner: {
    // TODO: Supply Studio Owner / Lead Bridal Artist Name
    name: string;
    role: string;
    roleGu: string;
  };
  map: {
    directionsUrl: string;
    // TODO: Provide Google Maps embed URL / coordinates once the map pin is finalised
    embedUrl: string | null;
    hasFinalPin: boolean;
  };
  townsServed: Array<{
    slug: string;
    nameEn: string;
    nameGu: string;
    distance: string;
    travelTime: string;
    routeNote: string;
    routeNoteGu: string;
  }>;
}

export const businessConfig: BusinessConfig = {
  name: "The Bridel Studio",
  legalName: "The Bridel Studio",
  type: "Bridal makeup & beauty studio",
  tagline: {
    en: "Timeless Bridal Artistry & Bespoke Beauty in Unjha",
    gu: "ઊંઝામાં ઉત્કૃષ્ટ બ્રાઈડલ આર્ટિસ્ટ્રી અને સ્પેશિયલ બ્યુટી સેવાઓ",
  },
  address: {
    full: "The Bridel Studio, First Floor, Shilp Complex, Visnagar Chokdi, Unjha, Gujarat 384170, India",
    street: "First Floor, Shilp Complex, Visnagar Chokdi",
    locality: "Unjha",
    region: "Gujarat",
    postalCode: "384170",
    country: "IN",
    countryName: "India",
    landmark: "Visnagar Chokdi, First Floor, Shilp Complex",
  },
  contact: {
    // Verified Studio Phone & WhatsApp: 9723165947
    phone: "9723165947",
    whatsapp: "9723165947",
    instagram: "https://www.instagram.com/the__bridel_studio/",
    instagramHandle: "@the__bridel_studio",
  },
  hours: {
    display: "Mon – Sun: 10:00 AM – 7:00 PM (Prior Appointment Recommended)",
    displayGu: "સોમવાર – રવિવાર: સવારે ૧૦:૦૦ થી સાંજે ૭:૦૦ (અગાઉથી એપોઇન્ટમેન્ટ સલાહભર્યું)",
    schemaHours: ["Mo-Su 10:00-19:00"],
  },
  owner: {
    // Verified Founder & Lead Artist from Instagram
    name: "Rigal Patel",
    role: "Lead Bridal Artist & Founder",
    roleGu: "મુખ્ય બ્રાઈડલ આર્ટિસ્ટ અને સ્થાપક",
  },
  map: {
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Bridel+Studio+Shilp+Complex+Visnagar+Chokdi+Unjha",
    /**
     * TODO: Embed pin not finalised. Once pin is set, insert iframe src here.
     */
    embedUrl: null,
    hasFinalPin: false,
  },
  townsServed: [
    {
      slug: "visnagar",
      nameEn: "Visnagar",
      nameGu: "વિસનગર",
      distance: "approx. 18 km",
      travelTime: "25–30 mins",
      routeNote: "Direct route via Visnagar-Unjha Road, reaching right at Visnagar Chokdi (Shilp Complex).",
      routeNoteGu: "વિસનગર-ઊંઝા રોડ દ્વારા સીધો માર્ગ, વિસનગર ચોકડી (શિલ્પ કોમ્પ્લેક્સ) પર આગમન.",
    },
    {
      slug: "mehsana",
      nameEn: "Mehsana",
      nameGu: "મહેસાણા",
      distance: "approx. 26 km",
      travelTime: "30–35 mins",
      routeNote: "Accessible via Ahmedabad - Patan Highway / SH 41 directly into Unjha.",
      routeNoteGu: "અમદાવાદ - પાટણ હાઇવે / SH 41 મારફતે ઊંઝા તરફ સરળ આગમન.",
    },
    {
      slug: "sidhpur",
      nameEn: "Sidhpur",
      nameGu: "સિદ્ધપુર",
      distance: "approx. 14 km",
      travelTime: "15–20 mins",
      routeNote: "Quick commute via NH 27 / Mehsana-Palanpur Highway.",
      routeNoteGu: "NH 27 / મહેસાણા-પાલનપુર હાઇવે દ્વારા માત્ર ૧૫-૨૦ મિનિટનો પ્રવાસ.",
    },
    {
      slug: "patan",
      nameEn: "Patan",
      nameGu: "પાટણ",
      distance: "approx. 30 km",
      travelTime: "40–45 mins",
      routeNote: "Straight drive via Patan - Unjha Highway entering Unjha city.",
      routeNoteGu: "પાટણ - ઊંઝા હાઇવે દ્વારા અનુકૂળ સફર.",
    },
  ],
};

/**
 * Builds standard WhatsApp booking URL
 */
export function getWhatsAppUrl(
  customMessage: string = "Hi, I'd like to book bridal makeup at The Bridel Studio"
): string {
  const number = businessConfig.contact.whatsapp.replace(/\D/g, "");
  const encodedText = encodeURIComponent(customMessage);
  if (!number) {
    // If phone number is not yet supplied, point to the official Instagram direct message or studio contact
    return `${businessConfig.contact.instagram}`;
  }
  return `https://wa.me/91${number}?text=${encodedText}`;
}

/**
 * Builds standard tel: click URL
 */
export function getTelUrl(): string {
  const cleanNumber = businessConfig.contact.phone.replace(/\D/g, "");
  if (!cleanNumber) return "";
  return `tel:+91${cleanNumber}`;
}
