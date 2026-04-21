"use client";

import { useState } from "react";
import { Moon, Leaf, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function RecetteGratuite() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Veuillez entrer un email valide.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        // Redirect to PDF after a short delay
        setTimeout(() => {
          window.open("/recette-anti-insomnie-gratuite.pdf", "_blank");
        }, 800);
      } else {
        setError(data.error || "Une erreur est survenue.");
      }
    } catch {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="text-emerald-300 hover:text-white transition-colors text-sm font-medium"
        >
          &larr; Retour au site
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {!submitted ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <Moon className="w-10 h-10 text-emerald-300" />
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6 space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Recevez votre recette{" "}
                  <span className="text-emerald-300">gratuite</span>{" "}
                  anti-insomnie
                </h1>
                <p className="text-emerald-100/80 text-lg">
                  Purée Patate Douce à l&apos;Anis Étoilé — un plat délicieux aux
                  ingrédients soigneusement sélectionnés pour des nuits paisibles.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-emerald-100/90">
                  <Leaf className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-sm">100% naturel, sans produits chimiques</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100/90">
                  <Clock className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-sm">Prêt en 30 minutes (10 min préparation + 20 min cuisson)</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-100/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  <span className="text-sm">Explication des bienfaits de chaque ingrédient sur le sommeil</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-lg transition-all"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-300 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <>
                      Oui, je veux ma recette gratuite
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Privacy */}
              <p className="text-center text-emerald-200/50 text-xs mt-5">
                Votre email est en sécurité. Pas de spam. Désabonnement en un
                clic.
              </p>
            </div>
          ) : (
            /* Success State */
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-emerald-400/30 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-300" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Merci ! Votre recette est prête
              </h2>

              <p className="text-emerald-100/80 mb-6 text-lg">
                Votre recette gratuite &ldquo;Purée Patate Douce à l&apos;Anis
                Étoilé&rdquo; s&apos;est ouverte dans un nouvel onglet.
              </p>

              <div className="space-y-4">
                <a
                  href="/recette-anti-insomnie-gratuite.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-lg text-center transition-all duration-300 hover:scale-[1.02]"
                >
                  Ouvrir ma recette gratuite
                </a>

                <Link
                  href="/"
                  className="block w-full py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-lg text-center transition-all duration-300"
                >
                  Découvrir l&apos;ebook complet — 12,50 $
                </Link>
              </div>

              <p className="text-emerald-200/50 text-xs mt-6">
                Cette recette est extraite de notre ebook &ldquo;15 Recettes
                Culinaires Naturelles pour un Meilleur Sommeil&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center">
        <p className="text-emerald-300/40 text-xs">
          &copy; {new Date().getFullYear()} Dors Mieux. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
