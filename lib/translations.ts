export type Language = "en" | "gu";

export interface Translations {
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
    bookNow: string;
    toggleLanguage: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bookViaWhatsApp: string;
    callStudio: string;
    viewGallery: string;
  };
  servicesPreview: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewDetails: string;
    priceOnRequest: string;
  };
  galleryStrip: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewFullGallery: string;
  };
  aboutSnippet: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    readStory: string;
    studioLocationBadge: string;
  };
  locationHours: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    hoursLabel: string;
    landmarkLabel: string;
    getDirections: string;
    appointmentNote: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonWhatsApp: string;
    buttonCall: string;
  };
  stickyBar: {
    call: string;
    whatsapp: string;
    directions: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    selectService: string;
    dateLabel: string;
    townLabel: string;
    townPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    sendViaWhatsApp: string;
    directCallTitle: string;
    hoursTitle: string;
    addressTitle: string;
  };
  areas: {
    eyebrow: string;
    visitingUnjha: string;
    travelInfo: string;
    bookConsultation: string;
    whyChooseStudio: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    instagramFollow: string;
    rights: string;
    visitingTowns: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      bookNow: "Inquire on WhatsApp",
      toggleLanguage: "ગુજરાતી",
    },
    hero: {
      badge: "Bridal Makeup Studio in Unjha",
      titleLine1: "Timeless Bridal Artistry,",
      titleLine2: "Crafted for Your Special Day.",
      subtitle:
        "Every bride deserves a look as unique as her story. Thoughtfully tailored makeup, hair styling, and draping at Shilp Complex, Unjha.",
      bookViaWhatsApp: "Message on WhatsApp",
      callStudio: "Call Studio",
      viewGallery: "Explore Gallery",
    },
    servicesPreview: {
      eyebrow: "Our Craft",
      title: "Bridal & Occasion Styling",
      subtitle:
        "Specialized beauty services focused on hygiene, premium products, and lasting elegance.",
      viewAll: "View All Services",
      viewDetails: "View Details",
      priceOnRequest: "Price on request",
    },
    galleryStrip: {
      eyebrow: "Real Brides & Details",
      title: "Moments from The Studio",
      subtitle:
        "Natural skin textures, nuanced eye work, and balanced aesthetics captured in real light.",
      viewFullGallery: "View Complete Gallery",
    },
    aboutSnippet: {
      eyebrow: "The Studio Story",
      title: "Rooted in Craft, Dedicated to Every Bride",
      body1:
        "Located at Shilp Complex on Visnagar Chokdi in Unjha, The Bridel Studio is dedicated to creating calm, joyful, and deeply personal styling experiences for brides and their families.",
      body2:
        "We believe bridal makeup should never feel like a mask. Our approach honors your natural features, your bridal attire, and the cultural richness of Gujarati weddings.",
      readStory: "Read More About Us",
      studioLocationBadge: "Shilp Complex, Visnagar Chokdi, Unjha",
    },
    locationHours: {
      eyebrow: "Find Us in Unjha",
      title: "Studio Location & Hours",
      addressLabel: "Studio Address",
      hoursLabel: "Opening Hours",
      landmarkLabel: "Landmark",
      getDirections: "Get Directions on Google Maps",
      appointmentNote:
        "We prioritize personalized one-on-one sessions. Please book in advance before visiting for bridal consultations.",
    },
    finalCta: {
      eyebrow: "Reserve Your Muhurat",
      title: "Planning Your Wedding Look?",
      subtitle:
        "Connect with us directly to discuss your wedding dates, bridal outfit colors, and personalized styling requirements.",
      buttonWhatsApp: "Chat with Us on WhatsApp",
      buttonCall: "Call The Studio",
    },
    stickyBar: {
      call: "Call",
      whatsapp: "WhatsApp",
      directions: "Directions",
    },
    contactPage: {
      eyebrow: "Get in Touch",
      title: "Speak with Our Studio",
      subtitle:
        "We are here to assist with wedding date availability, bridal consultation slots, and styling questions.",
      formTitle: "Quick WhatsApp Enquiry",
      nameLabel: "Your Full Name",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Your 10-digit number",
      serviceLabel: "Service Required",
      selectService: "Select a service",
      dateLabel: "Event / Wedding Date",
      townLabel: "Your Town / City",
      townPlaceholder: "Unjha, Visnagar, Mehsana, Sidhpur, Patan...",
      notesLabel: "Specific requirements or questions",
      notesPlaceholder: "Mention outfit colors, time, or family members needing styling...",
      sendViaWhatsApp: "Send Enquiry via WhatsApp",
      directCallTitle: "Direct Contact",
      hoursTitle: "Studio Hours",
      addressTitle: "Studio Address",
    },
    areas: {
      eyebrow: "Regional Bridal Services",
      visitingUnjha: "Traveling to Unjha for Your Bridal Look",
      travelInfo: "Travel & Location Guide",
      bookConsultation: "Schedule a Bridal Consultation",
      whyChooseStudio: "Why Brides Choose The Bridel Studio",
    },
    footer: {
      tagline:
        "Dedicated bridal artistry and personalized styling in Unjha, North Gujarat.",
      quickLinks: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Studio Details",
      instagramFollow: "Follow on Instagram",
      rights: "All rights reserved.",
      visitingTowns: "Nearby Brides Traveling to Unjha",
    },
  },
  gu: {
    nav: {
      home: "મુખ્ય પૃષ્ઠ",
      services: "સેવાઓ",
      gallery: "ગેલેરી",
      about: "અમારા વિશે",
      contact: "સંપર્ક",
      bookNow: "વોટ્સએપ પર પૂછપરછ",
      toggleLanguage: "EN",
    },
    hero: {
      badge: "ઊંઝામાં ઉત્કૃષ્ટ બ્રાઈડલ સ્ટુડિયો",
      titleLine1: "આપના જીવનના અનમોલ દિવસ માટે,",
      titleLine2: "સુંદર અને સ્મરણીય બ્રાઈડલ શ્રુંગાર.",
      subtitle:
        "દરેક કન્યાનો અંદાજ અને પસંદગી અનન્ય હોય છે. શિલ્પ કોમ્પ્લેક્સ, ઊંઝા ખાતે કાળજીપૂર્વક તૈયાર કરાતો બ્રાઈડલ મેકઅપ, હેર સ્ટાઇલિંગ અને ડ્રેપિંગ.",
      bookViaWhatsApp: "વોટ્સએપ પર મેસેજ કરો",
      callStudio: "સ્ટુડિયો પર ફોન કરો",
      viewGallery: "ગેલેરી જુઓ",
    },
    servicesPreview: {
      eyebrow: "અમારી વિશેષ સેવાઓ",
      title: "બ્રાઈડલ અને પ્રસંગ શ્રુંગાર",
      subtitle:
        "સ્વચ્છતાના ઉચ્ચ ધોરણો, શ્રેષ્ઠ ઉત્પાદનો અને ચહેરાની કુદરતી સુંદરતાને નિખારતી સેવાઓ.",
      viewAll: "બધી સેવાઓ જુઓ",
      viewDetails: "વિગત જુઓ",
      priceOnRequest: "ભાવ પૂછપરછ પર આધારિત",
    },
    galleryStrip: {
      eyebrow: "વાસ્તવિક લુક્સ અને ડિટેલ્સ",
      title: "સ્ટુડિયોની ખાસ ઝલક",
      subtitle:
        "કુદરતી સ્કિન ટેક્સચર અને બારીક આઈ આર્ટિસ્ટ્રીના વાસ્તવિક ફોટોગ્રાફ્સ.",
      viewFullGallery: "સંપૂર્ણ ગેલેરી જુઓ",
    },
    aboutSnippet: {
      eyebrow: "અમારી ઓળખ",
      title: "કલા અને સ્નેહથી સજાવતી સફર",
      body1:
        "ઊંઝામાં વિસનગર ચોકડી ખાતે શિલ્પ કોમ્પ્લેક્સમાં આવેલું 'The Bridel Studio' દરેક કન્યા અને પરિવારજનો માટે શાંતિપૂર્ણ અને સુવિધાજનક વાતાવરણ પૂરું પાડે છે.",
      body2:
        "અમારો ઉદ્દેશ્ય તમારા કુદરતી સૌંદર્યને સાચવીને, લગ્નના પરિધાન અને ગુજરાતી સંસ્કૃતિને અનુરૂપ ભવ્ય લુક આપવાનો છે.",
      readStory: "વધુ જાણો",
      studioLocationBadge: "શિલ્પ કોમ્પ્લેક્સ, વિસનગર ચોકડી, ઊંઝા",
    },
    locationHours: {
      eyebrow: "સરનામું અને સમય",
      title: "સ્ટુડિયોનું સરનામું અને સમય",
      addressLabel: "સ્ટુડિયોનું સરનામું",
      hoursLabel: "ઓપનિંગ સમય",
      landmarkLabel: "લેન્ડમાર્ક",
      getDirections: "ગૂગલ મેપ્સ પર રસ્તો જુઓ",
      appointmentNote:
        "અમે દરેક કન્યાને પૂરતો સમય આપવા માટે અગાઉથી એપોઇન્ટમેન્ટ લેવાની સલાહ આપીએ છીએ.",
    },
    finalCta: {
      eyebrow: "તમારા મુહૂર્ત માટે બુકિંગ",
      title: "લગ્ન પ્રસંગના લુક માટે ચર્ચા કરવી છે?",
      subtitle:
        "લગ્નની તારીખ, આઉટફિટ કલર્સ અને વ્યક્તિગત તૈયારીઓ અંગે સીધો અમારો સંપર્ક કરો.",
      buttonWhatsApp: "વોટ્સએપ પર વાતચીત કરો",
      buttonCall: "સ્ટુડિયો પર કૉલ કરો",
    },
    stickyBar: {
      call: "કૉલ",
      whatsapp: "વોટ્સએપ",
      directions: "દિશા",
    },
    contactPage: {
      eyebrow: "સંપર્ક સાધો",
      title: "અમારા સ્ટુડિયો સાથે વાત કરો",
      subtitle:
        "લગ્નની તારીખોનું બુકિંગ, પરામર્શ અને સ્ટાઇલિંગ સંબંધિત પૂછપરછ માટે આપનું સ્વાગત છે.",
      formTitle: "ઝડપી વોટ્સએપ પૂછપરછ",
      nameLabel: "આપનું પૂરું નામ",
      namePlaceholder: "નામ લખો",
      phoneLabel: "મોબાઇલ નંબર",
      phonePlaceholder: "૧૦ આંકડાનો નંબર",
      serviceLabel: "જરૂરી સેવા",
      selectService: "સેવા પસંદ કરો",
      dateLabel: "પ્રસંગ / લગ્નની તારીખ",
      townLabel: "તમારું ગામ / શહેર",
      townPlaceholder: "ઊંઝા, વિસનગર, મહેસાણા, સિદ્ધપુર, પાટણ...",
      notesLabel: "વિશેષ માહિતી અથવા પ્રશ્નો",
      notesPlaceholder: "કપડાંનો કલર, સમય અથવા અન્ય વિગત જણાવો...",
      sendViaWhatsApp: "વોટ્સએપ દ્વારા મોકલો",
      directCallTitle: "સીધો સંપર્ક",
      hoursTitle: "સ્ટુડિયો સમય",
      addressTitle: "સરનામું",
    },
    areas: {
      eyebrow: "આસપાસના વિસ્તારો માટે",
      visitingUnjha: "બ્રાઈડલ મેકઅપ માટે ઊંઝા તરફ આગમન",
      travelInfo: "મુસાફરી અને માર્ગદર્શિકા",
      bookConsultation: "બ્રાઈડલ કન્સલ્ટેશન શેડ્યૂલ કરો",
      whyChooseStudio: "કન્યાઓ The Bridel Studio કેમ પસંદ કરે છે",
    },
    footer: {
      tagline: "ઊંઝા અને ઉત્તર ગુજરાતમાં વિશ્વસનીય અને સમર્પિત બ્રાઈડલ આર્ટિસ્ટ્રી.",
      quickLinks: "નેવિગેશન",
      servicesTitle: "સેવાઓ",
      contactTitle: "સ્ટુડિયો સંપર્ક",
      instagramFollow: "ઇન્સ્ટાગ્રામ પર ફોલો કરો",
      rights: "સર્વ હક સુરક્ષિત.",
      visitingTowns: "આસપાસના વિસ્તારોમાંથી આવતી કન્યાઓ",
    },
  },
};
