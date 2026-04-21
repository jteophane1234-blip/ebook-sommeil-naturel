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
  openGraph: {
    title: "15 Recettes Culinaires Naturelles pour un Meilleur Sommeil",
    description:
      "Retrouvez un sommeil profond et réparateur grâce à 15 recettes culinaires 100% naturelles. Plan alimentaire de 30 jours inclus.",
    type: "website",
    url: "https://dorsmieux.online",
    siteName: "Dors Mieux",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
