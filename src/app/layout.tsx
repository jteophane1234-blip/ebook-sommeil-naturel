import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: {
    "msvalidate.01": "7EC1F1CC4EF2BFB6250C97CEED23114E",
  },
  title: "15 Recettes Culinaires Naturelles pour un Meilleur Sommeil | Ebook",
  description:
    "Retrouvez un sommeil profond et réparateur grâce à 15 recettes culinaires 100% naturelles. Plan alimentaire de 30 jours inclus. Livraison instantanée par e-mail.",
  keywords: [
    "sommeil naturel",
    "recettes pour dormir",
    "insomnie",
    "alimentation sommeil",
    "recettes culinaires naturelles",
    "meilleur sommeil",
    "plan alimentaire sommeil",
  ],
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://dorsmieux.online"),
  alternates: {
    canonical: "https://dorsmieux.online",
  },
  openGraph: {
    title: "15 Recettes Culinaires Naturelles pour un Meilleur Sommeil",
    description:
      "Retrouvez un sommeil profond et réparateur grâce à 15 recettes culinaires 100% naturelles. Plan alimentaire de 30 jours inclus.",
    type: "website",
    url: "https://dorsmieux.online",
    siteName: "Dors Mieux",
    images: [
      {
        url: "/ebook-cover.png",
        width: 1200,
        height: 630,
        alt: "15 Recettes Culinaires Naturelles pour un Meilleur Sommeil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ebook-cover.png"],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "15 Recettes Culinaires Naturelles pour un Meilleur Sommeil",
  "description": "Retrouvez un sommeil profond et réparateur grâce à 15 recettes culinaires 100% naturelles. Plan alimentaire de 30 jours inclus.",
  "image": "https://dorsmieux.online/ebook-cover.png",
  "brand": {
    "@type": "Brand",
    "name": "Dors Mieux",
  },
  "offers": {
    "@type": "Offer",
    "price": "12.50",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://dorsmieux.online",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "2",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dors Mieux",
  "url": "https://dorsmieux.online",
  "description": "Retrouvez un sommeil profond et réparateur grâce à des recettes culinaires 100% naturelles.",
  "inLanguage": "fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
