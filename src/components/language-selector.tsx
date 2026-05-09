"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SUPPORTED_LOCALES } from "@/lib/i18n/translations";
import type { Locale } from "@/lib/i18n/types";

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="w-4 h-4 text-purple-600" />
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="bg-purple-50 text-gray-700 text-sm border border-purple-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-400/40 cursor-pointer appearance-auto"
        aria-label="Select language"
      >
        {SUPPORTED_LOCALES.map((l) => (
          <option key={l.code} value={l.code} className="bg-white text-gray-900">
            {l.flag} {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
