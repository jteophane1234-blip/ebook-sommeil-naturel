"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Moon,
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Award,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import { useLanguage } from "@/components/language-provider";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  paymentLink: string;
  inStock: boolean;
  features: string[];
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "Masque de Sommeil en Soie",
    description:
      "Masque 100% soie naturelle pour une obscurité totale. Confort ultime pour des nuits paisibles.",
    price: "14,99 \u20AC",
    image: "/products/masque-sommeil.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["100% soie naturelle", "Obscurité totale", "Sangle ajustable"],
  },
  {
    id: "prod-2",
    name: "Bouchons d\u2019Oreilles Naturels",
    description:
      "Bouchons en cire d\u2019abeille naturelle. Isolation phonique optimale pour un sommeil profond.",
    price: "9,99 \u20AC",
    image: "/products/bouchons-oreilles.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["Cire d\u2019abeille", "Réutilisables", "Confort thermique"],
  },
  {
    id: "prod-3",
    name: "Couverture Lestée Premium",
    description:
      "Couverture lestée 7 kg pour une thérapie de pression douce. Sommeil profond garanti.",
    price: "49,99 \u20AC",
    image: "/products/couverture-lestee.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["7 kg", "Perles de verre", "Peluche ultra-douce"],
  },
  {
    id: "prod-4",
    name: "Oreiller Ergonomique",
    description:
      "Oreiller mémoire de forme pour un alignement cervical parfait. Adapte à votre position.",
    price: "34,99 \u20AC",
    image: "/products/oreiller-ergonomique.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["Mémoire de forme", "Anti-acariens", "Lavable"],
  },
  {
    id: "prod-5",
    name: "Diffuseur Huiles Essentielles",
    description:
      "Diffuseur ultrasonique bois et céramique. 10h d\u2019autonomie. 7 couleurs LED.",
    price: "24,99 \u20AC",
    image: "/products/diffuseur.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["300 ml", "Silencieux", "LED ambiance"],
  },
  {
    id: "prod-6",
    name: "Spray Oreiller Lavande",
    description:
      "Spray d\u2019oreiller à la lavande de Provence. 100% naturel pour une relaxation optimale.",
    price: "12,99 \u20AC",
    image: "/products/spray-oreiller.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["Lavande de Provence", "100% naturel", "200 utilisations"],
  },
  {
    id: "prod-7",
    name: "Veilleuse LED Lune",
    description:
      "Veilleuse en forme de lune en céramique. Lumière chaude apaisante pour la chambre.",
    price: "16,99 \u20AC",
    image: "/products/veilleuse.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["Céramique artisanale", "Capteur crépusculaire", "Faible consommation"],
  },
  {
    id: "prod-8",
    name: "Machine à Bruit Blanc",
    description:
      "30 sons naturels apaisants. Minuteur programmable. Compact et portable.",
    price: "39,99 \u20AC",
    image: "/products/machine-bruit.png",
    paymentLink: "#lien-digistore-a-remplir",
    inStock: true,
    features: ["30 sons", "Minuteur", "USB + batterie"],
  },
];

const trustBadges = [
  {
    icon: Truck,
    title: "Livraison Europe",
    description: "Expédition rapide dans toute l\u2019Europe",
  },
  {
    icon: ShieldCheck,
    title: "Paiement Sécurisé",
    description: "Transactions 100% sécurisées",
  },
  {
    icon: RotateCcw,
    title: "Satisfait ou Remboursé",
    description: "Garantie 30 jours",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Produits testés et approuvés",
  },
];

const INITIAL_VISIBLE = 4;

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
      {/* Product image */}
      <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 p-6 flex items-center justify-center h-56">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {product.inStock && (
          <Badge className="absolute top-3 left-3 bg-green-100 text-green-700 border-green-200 text-xs">
            En stock
          </Badge>
        )}
      </div>

      <CardContent className="p-5 flex flex-col gap-3">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5">
          {product.features.map((feature) => (
            <Badge
              key={feature}
              variant="outline"
              className="text-xs border-purple-200 text-purple-700 bg-purple-50"
            >
              {feature}
            </Badge>
          ))}
        </div>

        <Separator className="bg-gray-100" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-2xl font-bold text-purple-700">
            {product.price}
          </span>
          <a
            href={product.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold gap-2 shadow-sm">
              <ShoppingCart className="w-4 h-4" />
              Acheter
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, INITIAL_VISIBLE);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-16 md:py-20 text-center">
          <Badge className="bg-purple-400/20 text-purple-200 border-purple-400/30 px-4 py-1.5 text-sm mb-6">
            <Moon className="w-4 h-4 mr-1.5" />
            Boutique Dors Mieux
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Améliorez votre sommeil{" "}
            <span className="text-purple-300">naturellement</span>
          </h1>
          <p className="text-lg text-purple-200/80 mt-4 max-w-2xl mx-auto">
            Découvrez notre sélection d&apos;accessoires premium pour des nuits paisibles
            et un sommeil réparateur.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nos Produits
            </h2>
            <p className="text-gray-500 mt-2">
              Soigneusement sélectionnés pour votre bien-être nocturne
            </p>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length > INITIAL_VISIBLE && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:text-purple-800 gap-2"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Voir moins
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Voir tous les produits
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-purple-50/50 border border-purple-100"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                  <badge.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ebook CTA Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ebook offert : 15 Recettes pour mieux dormir
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Complétez votre routine sommeil avec notre guide complet de
                recettes culinaires naturelles. Plan alimentaire de 30 jours inclus.
              </p>
              <Link href="/livre">
                <Button
                  size="lg"
                  className="bg-purple-700 hover:bg-purple-800 text-white font-semibold gap-2 shadow-md"
                >
                  Découvrir l&apos;ebook
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 text-purple-300/70 mt-auto">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-purple-700 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Dors <span className="text-purple-300">Mieux</span>
                </span>
              </Link>
              <p className="text-sm text-purple-400/80 leading-relaxed">
                Votre partenaire pour un sommeil de qualité. Accessoires premium
                et conseils naturels pour des nuits réparatrices.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">
                Navigation
              </h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm hover:text-purple-300 transition-colors"
                >
                  Boutique
                </Link>
                <Link
                  href="/livre"
                  className="text-sm hover:text-purple-300 transition-colors"
                >
                  Ebook - 15 Recettes
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider">
                Suivez-nous
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center hover:bg-purple-800 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-purple-800/50 my-8" />

          <div className="text-center text-xs text-purple-500/60 space-y-1">
            <p>© {new Date().getFullYear()} Dors Mieux. Tous droits réservés.</p>
            <p>
              Paiement sécurisé via{" "}
              <a
                href="https://www.digistore24.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Digistore24
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
