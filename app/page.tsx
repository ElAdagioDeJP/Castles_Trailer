import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Castle's Trailer Repair Services - Expert RV & Boat Trailer Repair in Leesburg, VA",
  description:
    "Professional trailer repair services with 5+ years experience. We service RVs, boats, cargo, and all trailer types. Weekend appointments available. Call (703) 722-2065",
  keywords:
    "trailer repair, Leesburg VA, RV repair, boat trailer repair, Castle's Trailer Repair Services, DOT inspections, brake repair",
  icons: {
    icon: [
      {
        url: "/images/castle-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/castle-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/images/castle-logo.png",
    apple: [
      {
        url: "/images/castle-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Castle's Trailer Repair Services - Expert Trailer Repair",
    description: "Professional trailer repair services in Leesburg, VA. Delivering safely on time!",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/castle-logo.png",
        width: 512,
        height: 512,
        alt: "Castle Auto Transport Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle's Trailer Repair Services - Expert Trailer Repair",
    description: "Professional trailer repair services in Leesburg, VA. Delivering safely on time!",
    images: ["/images/castle-logo.png"],
  },
}

export default function Page() {
  return <ClientPage />
}
