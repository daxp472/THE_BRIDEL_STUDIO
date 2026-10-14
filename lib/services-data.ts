/**
 * Services Configuration for The Bridel Studio
 *
 * HARD RULE: Never invent prices or awards.
 * Where specific pricing is pending confirmation from the studio owner,
 * we explicitly indicate "Price on request" / "ભાવ પૂછપરછ પર આધારિત".
 */

export interface ServiceDetail {
  slug: string;
  nameEn: string;
  nameGu: string;
  shortDescEn: string;
  shortDescGu: string;
  fullDescEn: string[];
  fullDescGu: string[];
  // TODO: Supply starting price or leave as "Price on request"
  startingPrice: string;
  startingPriceGu: string;
  duration: string;
  durationGu: string;
  includesEn: string[];
  includesGu: string[];
  // Real photo path placed in /public/images/
  imagePath: string;
  imageAlt: string;
  faqs: Array<{
    questionEn: string;
    questionGu: string;
    answerEn: string;
    answerGu: string;
  }>;
}

export const servicesList: ServiceDetail[] = [
  {
    slug: "bridal-makeup",
    nameEn: "Signature Bridal Makeup",
    nameGu: "સિગ્નેચર બ્રાઈડલ મેકઅપ",
    shortDescEn:
      "Complete bridal transformation tailored to your skin tone, wedding attire, and bridal jewelry. Flawless HD finish crafted to last through every emotional wedding moment.",
    shortDescGu:
      "તમારી સ્કીન ટોન, લગ્નના પરિધાન અને ઘરેણાંને અનુરૂપ સંપૂર્ણ બ્રાઈડલ ટ્રાન્સફોર્મેશન. લગ્નની દરેક લાગણીભરી પળોમાં અખંડ રહેતો અદભુત એચડી ફિનિશ.",
    fullDescEn: [
      "Every bride deserves an individualized look that accentuates her innate features without masking her identity. Our signature bridal makeup service begins with an in-depth consultation regarding your bridal outfit, jewelry selection, and lighting conditions of your wedding venue in or around Unjha.",
      "We utilize professional, skin-friendly products paired with meticulous hygiene standards. The look is crafted with long-wear formulations designed to endure Gujarati wedding traditions, emotions, and hours of celebration with elegance.",
    ],
    fullDescGu: [
      "દરેક કન્યા પોતાની કુદરતી સુંદરતા સાથે ચમકવાને હકદાર છે. અમારી સિગ્નેચર બ્રાઈડલ સેવા તમારા લગ્નના પોશાક, જ્વેલરી અને ઊંઝા તથા આસપાસના મંડપની લાઈટિંગને ધ્યાનમાં રાખીને વિગતવાર ચર્ચા સાથે શરૂ થાય છે.",
      "અમે ઉચ્ચ ગુણવત્તાવાળા, ત્વચાને અનુકૂળ ઉત્પાદનો અને સ્વચ્છતાના આકરા ધોરણો સાથે કામ કરીએ છીએ. જેથી ગુજરાતી લગ્નના લાંબા સમય સુધી આપનો લુક તાજો અને આકર્ષક રહે.",
    ],
    startingPrice: "Price on request",
    startingPriceGu: "ભાવ પૂછપરછ પર આધારિત",
    duration: "2.5 – 3.5 Hours",
    durationGu: "૨.૫ – ૩.૫ કલાક",
    includesEn: [
      "HD / Waterproof Bridal Makeup Base",
      "Custom Eye Artistry & Lashes",
      "Hair Styling & Dupatta / Chunari Draping",
      "Bridal Jewelry Placement Assistance",
      "Skin Prep & Long-wear Setting",
    ],
    includesGu: [
      "એચડી / વોટરપ્રૂફ બ્રાઈડલ બેઝ",
      "આંખોનો વિશેષ શ્રુંગાર અને આઈલેશેસ",
      "હેર સ્ટાઇલ અને ચુનરી / દુપટ્ટા ડ્રેપિંગ",
      "દાગીના સેટિંગમાં સંપૂર્ણ મદદ",
      "સ્કીન પ્રેપ અને લોંગ-લાસ્ટિંગ સેટિંગ",
    ],
    imagePath: "/images/bridal-makeup.jpg",
    imageAlt: "Signature bridal makeup styling at The Bridel Studio Unjha",
    faqs: [
      {
        questionEn: "How far in advance should I book my bridal makeup?",
        questionGu: "મારે બ્રાઈડલ મેકઅપ માટે કેટલો સમય અગાઉથી બુકિંગ કરાવવું જોઈએ?",
        answerEn:
          "During the active Gujarati wedding season (Lagna Kaal), dates fill up quickly. We recommend reserving your wedding date as soon as your muhurat and venue are finalized.",
        answerGu:
          "લગ્ન સીઝન દરમિયાન તારીખો ઝડપથી બુક થઈ જતી હોવાથી, તમારું મુહૂર્ત નક્કી થતાં જ અગાઉથી તારીખ આરક્ષિત કરવાની ભલામણ કરવામાં આવે છે.",
      },
      {
        questionEn: "Do you offer makeup consultation before the wedding day?",
        questionGu: "શું તમે લગ્ન પહેલાં મેકઅપ કન્સલ્ટેશન આપો છો?",
        answerEn:
          "Yes. We discuss your skin type, outfit colors, jewelry placement, and preferred look during an advance consultation session at our studio in Shilp Complex, Unjha.",
        answerGu:
          "હા, ઊંઝા સ્થિત શિલ્પ કોમ્પ્લેક્સ ખાતેના અમારા સ્ટુડિયોમાં આપના પરિધાન, ત્વચા અને પસંદગી વિશે અગાઉથી પરામર્શ કરવામાં આવે છે.",
      },
    ],
  },
  {
    slug: "engagement-makeup",
    nameEn: "Engagement & Sagan Styling",
    nameGu: "એન્ગેજમેન્ટ અને સગાઈ સ્ટાઇલિંગ",
    shortDescEn:
      "A luminous, fresh, and modern aesthetic designed for ring ceremonies and intimate family celebrations.",
    shortDescGu:
      "વીંટી બદલવાની વિધિ અને કૌટુંબિક પ્રસંગો માટે એક તાજો, કુદરતી ગ્લો આપતો અને મોર્ડન લુક.",
    fullDescEn: [
      "Engagement looks require an effortless balance of contemporary elegance and radiant glow. Whether you are wearing an embroidered lehenga, an evening gown, or a traditional saree, we craft an aesthetic tailored to your outfit's color palette and personal style.",
      "The finish is radiant, breathable, and photographs beautifully in both daylight and ambient stage lighting.",
    ],
    fullDescGu: [
      "સગાઈ પ્રસંગ માટે આધુનિક સુંદરતા અને કુદરતી ચમકનો સુમેળ જરૂરી છે. તમે લહેંગા, ગાઉન કે સાડી પહેરી રહ્યા હોવ, અમે તમારા લુકને અનુકૂળ મેકઅપ કરીએ છીએ.",
      "આ લુક કેમેરામાં અને દિવસ તથા સાંજની લાઈટિંગમાં અતિ સુંદર દેખાય છે.",
    ],
    startingPrice: "Price on request",
    startingPriceGu: "ભાવ પૂછપરછ પર આધારિત",
    duration: "2 – 2.5 Hours",
    durationGu: "૨ – ૨.૫ કલાક",
    includesEn: [
      "Dewy / Matte Radiant Skin Finish",
      "Soft Glam Eye Artistry",
      "Hair Styling (Braids, Buns, or Textured Waves)",
      "Outfit / Dupatta Setting",
    ],
    includesGu: [
      "નેચરલ ગ્લોઇંગ સ્કિન ફિનિશ",
      "સોફ્ટ ગ્લેમ આઈ મેકઅપ",
      "હેર સ્ટાઇલિંગ (વેવ્સ, બ્રેઇડ્સ કે બન)",
      "દુપટ્ટા અને આઉટફિટ સેટિંગ",
    ],
    imagePath: "/images/engagement-makeup.jpg",
    imageAlt: "Engagement makeup look crafted at The Bridel Studio",
    faqs: [
      {
        questionEn: "Can I choose between a dewy or matte finish for engagement?",
        questionGu: "શું હું સગાઈ માટે ડ્યૂઈ કે મેટ ફિનિશ પસંદ કરી શકું?",
        answerEn:
          "Absolutely. We assess your skin hydration levels and personal taste to deliver either a dewy glow or a velvet-soft matte finish.",
        answerGu:
          "ચોક્કસ, આપની ત્વચાના પ્રકાર અને વ્યક્તિગત પસંદગી મુજબ ડ્યૂઈ અથવા મેટ ફિનિશ નક્કી કરવામાં આવે છે.",
      },
    ],
  },
  {
    slug: "reception-makeup",
    nameEn: "Reception & Evening Glam",
    nameGu: "રિસેપ્શન અને ઇવનિંગ ગ્લેમ",
    shortDescEn:
      "Defined, regal evening looks with striking eye artistry and sculpted definition suited for grand reception stages and spotlighting.",
    shortDescGu:
      "ભવ્ય રિસેપ્શન સ્ટેજ અને સ્પોટલાઇટ્સ માટે આકર્ષક આઈ મેકઅપ અને શિલ્પિત ઈવનિંગ ગ્લેમ લુક.",
    fullDescEn: [
      "Reception events often involve intensive stage illumination and extended photo sessions. Our reception glam focuses on sculpted facial dimensions, rich pigments, and durable set techniques that resist shine and creasing.",
      "From royal traditional looks to contemporary high-fashion elegance, we ensure your evening presence is memorable.",
    ],
    fullDescGu: [
      "રિસેપ્શનમાં સ્ટેજ લાઈટિંગ અને ફોટોગ્રાફી મહત્વપૂર્ણ હોય છે. અમારો રિસેપ્શન લુક ચહેરાના સુંદર આકારો અને લાંબો સમય ટકી રહે તેવી ટેકનિક પર કેન્દ્રિત છે.",
      "રોયલ ટ્રેડિશનલથી માંડીને હાઈ-ફેશન સ્ટાઇલ સુધી આપની સાંજને વિશેષ બનાવીએ છીએ.",
    ],
    startingPrice: "Price on request",
    startingPriceGu: "ભાવ પૂછપરછ પર આધારિત",
    duration: "2 – 2.5 Hours",
    durationGu: "૨ – ૨.૫ કલાક",
    includesEn: [
      "Stage-Proof Sculpted Base",
      "Dramatic / Classic Eye Artistry",
      "Evening Hair Styling & Extensions Placement",
      "Gown / Saree / Lehenga Drape Setting",
    ],
    includesGu: [
      "સ્ટેજ-પ્રૂફ સ્કલ્પટેડ બેઝ",
      "ક્લાસિક / ગ્લેમરસ આઈ મેકઅપ",
      "ઈવનિંગ હેર સ્ટાઈલ",
      "ગાઉન / સાડી / લહેંગા ડ્રેપિંગ",
    ],
    imagePath: "/images/reception-makeup.jpg",
    imageAlt: "Evening reception makeup styling at The Bridel Studio Unjha",
    faqs: [
      {
        questionEn: "How long does reception makeup stay intact under stage lights?",
        questionGu: "સ્ટેજ લાઈટ્સ નીચે રિસેપ્શન મેકઅપ કેટલો સમય સરખો રહે છે?",
        answerEn:
          "We use professional primer barriers and setting products that keep makeup fresh, sweat-resistant, and shine-controlled for 8+ hours.",
        answerGu:
          "અમે ખાસ પ્રાઈમર અને સેટિંગ ટેકનિક વાપરીએ છીએ જેથી ૮ કલાકથી વધુ સમય સુધી લુક બિલકુલ નવો અને તાજો રહે છે.",
      },
    ],
  },
  {
    slug: "sider-makeup",
    nameEn: "Sider & Family Party Makeup",
    nameGu: "સાઇડર અને ફેમિલી પાર્ટી મેકઅપ",
    shortDescEn:
      "Elegant party looks for the bride's sisters, mother, and wedding guests with tailored hair styling and draping.",
    shortDescGu:
      "કન્યાના બહેનો, માતા અને સ્વજનો માટે સુંદર અને સૌમ્ય પાર્ટી મેકઅપ તથા હેર સ્ટાઇલિંગ.",
    fullDescEn: [
      "Weddings are family celebrations. We provide coordinated styling for bridesmaids, mothers, and close relatives so everyone feels confident and cohesive.",
      "Each family member receives personalized skin prep, clean natural or glam makeup, and graceful hair arrangement.",
    ],
    fullDescGu: [
      "લગ્ન એ પરિવારનો ઉત્સવ છે. અમે કન્યાના નિકટના સ્વજનો માટે સંતુલિત અને સૌમ્ય મેકઅપ પ્રદાન કરીએ છીએ.",
      "દરેક સભ્ય માટે વ્યક્તિગત ત્વચા અનુકૂળ મેકઅપ અને સુંદર હેર સ્ટાઇલિંગ કરવામાં આવે છે.",
    ],
    startingPrice: "Price on request",
    startingPriceGu: "ભાવ પૂછપરછ પર આધારિત",
    duration: "1 – 1.5 Hours per person",
    durationGu: "૧ – ૧.૫ કલાક વ્યક્તિદીઠ",
    includesEn: [
      "Skin Glow Base & Soft Eye Styling",
      "Traditional or Modern Hairdo",
      "Saree / Dupatta Pinning & Draping",
    ],
    includesGu: [
      "નેચરલ સ્કિન ગ્લો અને આઈ સ્ટાઇલિંગ",
      "ટ્રેડિશનલ અથવા મોર્ડન હેરસ્ટાઇલ",
      "સાડી અથવા દુપટ્ટા પિનિંગ અને ડ્રેપિંગ",
    ],
    imagePath: "/images/sider-makeup.jpg",
    imageAlt: "Family and sider makeup styling at The Bridel Studio",
    faqs: [
      {
        questionEn: "Can multiple family members book sider makeup together?",
        questionGu: "શું પરિવારના એકથી વધુ સભ્યો એકસાથે બુકિંગ કરાવી શકે?",
        answerEn:
          "Yes, we accommodate group bookings for bridal parties. Please inform us of the exact guest count in advance so we schedule proper time slots.",
        answerGu:
          "હા, ગ્રુપ બુકિંગ ઉપલબ્ધ છે. સમયસર સ્લોટ ફાળવવા માટે મહેમાનોની સંખ્યા અગાઉથી જણાવવી જરૂરી છે.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesList.find((s) => s.slug === slug);
}

export interface SpecialOfferItem {
  id: string;
  nameEn: string;
  nameGu: string;
  category: string;
  price: number;
  priceDisplay: string;
  tagline: string;
}

/**
 * Official Special Offers Menu (from The Bridel Studio flyer)
 * Call / WhatsApp: 9723165947
 */
export const specialOffersList: SpecialOfferItem[] = [
  {
    id: "clean-up",
    nameEn: "Clean Up",
    nameGu: "ક્લીન અપ",
    category: "Skin Care",
    price: 249,
    priceDisplay: "₹249",
    tagline: "Instant glow & deep skin refreshment",
  },
  {
    id: "waxing-full",
    nameEn: "Full Hand & Leg (Underarms)",
    nameGu: "ફુલ હેન્ડ & લેગ (અંડરઆર્મ્સ)",
    category: "Waxing",
    price: 299,
    priceDisplay: "₹299",
    tagline: "Smooth skin hair removal with hygiene care",
  },
  {
    id: "hair-spa",
    nameEn: "Hair Spa",
    nameGu: "હેર સ્પા",
    category: "Hair Care",
    price: 399,
    priceDisplay: "₹399",
    tagline: "Deep conditioning & scalp revitalization",
  },
  {
    id: "loreal-treatment",
    nameEn: "L'Oréal Treatment",
    nameGu: "લોરિયલ ટ્રીટમેન્ટ",
    category: "Hair Care",
    price: 599,
    priceDisplay: "₹599",
    tagline: "Professional salon shine & nourishment",
  },
  {
    id: "protein-spa",
    nameEn: "Portion Hair Spa (Protein)",
    nameGu: "પ્રોટીન હેર સ્પા",
    category: "Hair Care",
    price: 999,
    priceDisplay: "₹999",
    tagline: "Intensive repair for damaged hair",
  },
  {
    id: "mani-pedi",
    nameEn: "Mani-Pedi (Menu Pedi)",
    nameGu: "મેની-પેડી",
    category: "Nails & Hands",
    price: 549,
    priceDisplay: "₹549",
    tagline: "Complete nail grooming & soothing massage",
  },
];

