"use client";

import React, { createContext, useContext, useCallback, useSyncExternalStore } from "react";
import type { Locale, Translations } from "@/lib/i18n/types";
import { DEFAULT_LOCALE, getTranslations, SUPPORTED_LOCALES } from "@/lib/i18n/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "ebook-locale";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return null;
}

function isValidLocale(value: string | null): value is Locale {
  return value !== null && SUPPORTED_LOCALES.some((l) => l.code === value);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const storedLocale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const locale: Locale = isValidLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
  const t = getTranslations(locale);

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
    // Dispatch a storage event so useSyncExternalStore re-renders
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
