import type { Metadata } from "next";

const recipeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Purée Patate Douce à l'Anis Étoilé",
  "description":
    "Recette anti-insomnie gratuite : Purée Patate Douce à l'Anis Étoilé. 100% naturel, prêt en 30 minutes.",
  "image": "https://dorsmieux.online/ebook-cover.png",
  "author": {
    "@type": "Organization",
    "name": "Dors Mieux",
  },
  "prepTime": "PT10M",
  "cookTime": "PT20M",
  "totalTime": "PT30M",
  "recipeCategory": "Plat principal",
  "recipeCuisine": "Française",
  "keywords": "anti-insomnie, sommeil naturel, patate douce, anis étoilé",
  "suitableForDiet": "https://schema.org/VeganDiet",
  "url": "https://dorsmieux.online/recette-gratuite",
};

export const metadata: Metadata = {
  title: "Recette gratuite anti-insomnie | Dors Mieux",
  description:
    "Recevez gratuitement une recette anti-insomnie : Purée Patate Douce à l'Anis Étoilé. 100% naturel, prêt en 30 minutes. Téléchargez votre recette PDF gratuite maintenant !",
  keywords: [
    "recette gratuite anti-insomnie",
    "recette pour dormir",
    "insomnie remède naturel",
    "patate douce anis étoilé",
    "recette sommeil naturel",
    "alimentation anti-insomnie",
  ],
  alternates: {
    canonical: "https://dorsmieux.online/recette-gratuite",
  },
  openGraph: {
    title: "Recette gratuite anti-insomnie | Dors Mieux",
    description:
      "Recevez gratuitement une recette anti-insomnie : Purée Patate Douce à l'Anis Étoilé. 100% naturel, prêt en 30 minutes.",
    type: "website",
    url: "https://dorsmieux.online/recette-gratuite",
    images: [
      {
        url: "/ebook-cover.png",
        width: 1200,
        height: 630,
        alt: "Recette gratuite anti-insomnie — Purée Patate Douce à l'Anis Étoilé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/ebook-cover.png"],
  },
};

export default function RecetteGratuiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />
      {children}
    </>
  );
}
