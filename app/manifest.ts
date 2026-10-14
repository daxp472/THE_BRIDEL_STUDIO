import { MetadataRoute } from "next";
import { businessConfig } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessConfig.name,
    short_name: "Bridel Studio",
    description: "Bridal makeup & beauty studio at Shilp Complex, Visnagar Chokdi, Unjha",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBF7",
    theme_color: "#5B1924",
    icons: [
      {
        src: "/images/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
    ],
  };
}
