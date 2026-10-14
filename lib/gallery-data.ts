/**
 * Gallery Image Catalog
 *
 * Real studio makeover photos and services from The Bridel Studio (@the__bridel_studio).
 * All photos are hosted locally in /public/images/.
 */

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "bridal" | "engagement" | "reception" | "details";
  titleEn: string;
  titleGu: string;
  captionEn: string;
  captionGu: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "look-1",
    src: "/images/post-1.jpg",
    alt: "Signature Bridal transformation styling by Rigal Patel at The Bridel Studio Unjha",
    category: "bridal",
    titleEn: "Signature Bridal Transformation",
    titleGu: "સિગ્નેચર બ્રાઈડલ ટ્રાન્સફોર્મેશન",
    captionEn: "Refined long-wear base paired with traditional jewelry and bridal veil draping.",
    captionGu: "પરંપરાગત અલંકારો અને ચુનરી સાથે સુંદર એચડી બ્રાઈડલ લુક.",
  },
  {
    id: "look-2",
    src: "/images/post-2.jpg",
    alt: "Subtle engagement and occasion glow by The Bridel Studio",
    category: "engagement",
    titleEn: "Luminous Occasion Glow",
    titleGu: "સગાઈ પ્રસંગ માટે નેચરલ ગ્લો",
    captionEn: "Soft radiant hues with skin prep and textured hair styling.",
    captionGu: "સોફ્ટ રોઝ ટોન અને આકર્ષક હેરસ્ટાઇલ સાથે સુંદર સગાઈ લુક.",
  },
  {
    id: "look-3",
    src: "/images/post-3.jpg",
    alt: "Reception stage glam and evening look at The Bridel Studio Unjha",
    category: "reception",
    titleEn: "Reception Evening Glamour",
    titleGu: "રિસેપ્શન ઇવનિંગ ગ્લેમર",
    captionEn: "Sculpted facial dimensions and durable set techniques designed for spotlighting.",
    captionGu: "સાંજની લાઇટો માટે ખાસ તૈયાર કરાયેલ સ્ટેજ-રેડી લુક.",
  },
  {
    id: "look-4",
    src: "/images/post-4.jpg",
    alt: "Family and guest makeover styling by The Bridel Studio",
    category: "details",
    titleEn: "Sider & Party Elegance",
    titleGu: "સાઇડર અને પાર્ટી શ્રુંગાર",
    captionEn: "Coordinated styling for bridesmaids and sisters with saree/dupatta draping.",
    captionGu: "બહેનો અને સગાં-વહાલાં માટે સુંદર પાર્ટી મેકઅપ.",
  },
  {
    id: "look-5",
    src: "/images/post-5.jpg",
    alt: "Bridal jewelry placement and hairstyle details at The Bridel Studio",
    category: "details",
    titleEn: "Bridal Accessories & Hair Artistry",
    titleGu: "દાગીના અને હેર આર્ટિસ્ટ્રી",
    captionEn: "Precision placement of maang tikka, mathapatti, and floral hair accessories.",
    captionGu: "માથાપટ્ટી, ફૂલો અને આભૂષણોનું ચોકસાઈપૂર્વક સેટિંગ.",
  },
  {
    id: "look-6",
    src: "/images/post-6.jpg",
    alt: "Royal wedding bride styling in Unjha",
    category: "bridal",
    titleEn: "Regal Heritage Bridal Style",
    titleGu: "રોયલ હેરિટેજ બ્રાઈડલ લુક",
    captionEn: "Deep velvet tones and harmonious palette matching wedding trousseau.",
    captionGu: "લગ્નના પોશાક સાથે સુમેળ સાધતો અદભુત લુક.",
  },
  {
    id: "look-7",
    src: "/images/post-7.jpg",
    alt: "Eye makeup detail by Rigal Patel at The Bridel Studio",
    category: "details",
    titleEn: "Handcrafted Eye Artistry",
    titleGu: "નયનરમ્ય આઈ આર્ટિસ્ટ્રી",
    captionEn: "Defined liner, smooth blending, and lightweight lashes for expressive eyes.",
    captionGu: "સુંદર બ્લેન્ડેડ આઈશેડો અને પરફેક્ટ લાઇનર સાથે આંખોનો શ્રુંગાર.",
  },
  {
    id: "look-8",
    src: "/images/post-8.jpg",
    alt: "Hair treatment and styling results at The Bridel Studio",
    category: "reception",
    titleEn: "Hair Glow & Styling Texture",
    titleGu: "હેર ટેક્સચર અને સ્ટાઇલિંગ",
    captionEn: "Healthy hair treatments, smoothing, and voluminous event hairdos.",
    captionGu: "સ્મૂથિંગ, પ્રોટીન અને ખાસ ઈવેન્ટ હેરસ્ટાઈલ.",
  },
  {
    id: "look-9",
    src: "/images/post-9.jpg",
    alt: "Skin glow prep session at The Bridel Studio Unjha",
    category: "engagement",
    titleEn: "Hydra & Korean Skin Glow",
    titleGu: "હાઇડ્રા અને કોરિયન સ્કીન ગ્લો",
    captionEn: "Deep skin prep and hydration treatments creating a natural canvas for makeup.",
    captionGu: "નેચરલ સ્કીન કેર અને ગ્લોઇંગ બેઝ.",
  },
  {
    id: "look-10",
    src: "/images/post-10.jpg",
    alt: "Bridal portrait by The Bridel Studio",
    category: "bridal",
    titleEn: "Timeless Bridal Grace",
    titleGu: "સનાતન બ્રાઈડલ લાવણ્ય",
    captionEn: "A look that remains fresh and elegant across all ceremonial rituals.",
    captionGu: "લગ્નની દરેક પળમાં અખંડ રહેતો લુક.",
  },
  {
    id: "look-11",
    src: "/images/post-11.jpg",
    alt: "Hair & Makeup styling at Shilp Complex Unjha",
    category: "reception",
    titleEn: "High-Fashion Evening Look",
    titleGu: "હાઈ-ફેશન ઈવનિંગ સ્ટાઇલ",
    captionEn: "Contoured finish and defined lip tone for night reception stages.",
    captionGu: "સ્ટેજ-પ્રૂફ સ્કલ્પટેડ બેઝ અને રોયલ લુક.",
  },
  {
    id: "look-12",
    src: "/images/post-12.jpg",
    alt: "Chunari draping and jewelry alignment at The Bridel Studio",
    category: "details",
    titleEn: "Traditional Panetar & Chunari Draping",
    titleGu: "પાનેતર અને ચુનરી ડ્રેપિંગ",
    captionEn: "Authentic Gujarati bridal draping that stays secure throughout the muhurat.",
    captionGu: "પરંપરાગત ગુજરાતી ડ્રેપિંગ જે મુહૂર્ત દરમિયાન પરફેક્ટ રહે.",
  },
];
