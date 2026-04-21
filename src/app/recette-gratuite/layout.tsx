import type { Metadata } from "next";

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
  openGraph: {
    title: "Recette gratuite anti-insomnie | Dors Mieux",
    description:
      "Recevez gratuitement une recette anti-insomnie : Purée Patate Douce à l'Anis Étoilé. 100% naturel, prêt en 30 minutes.",
    type: "website",
    url: "https://dorsmieux.online/recette-gratuite",
  },
};

export default function RecetteGratuiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
