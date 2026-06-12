import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations } from "@/i18n/translations";

export type Language = "en" | "ar";

type TranslationValue = string | { [key: string]: TranslationValue };

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "travelgate-language";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "ar" ? "ar" : "en";
};

const resolveKey = (
  dictionary: Record<string, TranslationValue>,
  key: string,
): string => {
  const value = key
    .split(".")
    .reduce<TranslationValue | undefined>(
      (acc, segment) =>
        typeof acc === "object" && acc !== null ? acc[segment] : undefined,
      dictionary,
    );

  return typeof value === "string" ? value : key;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language, dir]);

  const setLanguage = (next: Language) => setLanguageState(next);

  const toggleLanguage = () =>
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));

  const t = (key: string) => resolveKey(translations[language], key);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage, t, dir }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
