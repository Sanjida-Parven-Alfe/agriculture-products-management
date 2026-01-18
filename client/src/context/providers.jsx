"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";

const AppContext = createContext({
  darkMode: false,
  language: "en",
  toggleTheme: () => {},
  toggleLanguage: () => {},
});

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("darkMode");
    const savedLang = localStorage.getItem("language");

    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "bn" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  if (!mounted) {
    return (
        <SessionProvider>
            <AppContext.Provider value={{ darkMode: false, language: "en", toggleTheme: () => {}, toggleLanguage: () => {} }}>
                <div className="opacity-0">{children}</div>
            </AppContext.Provider>
        </SessionProvider>
    );
  }

  return (
    <SessionProvider>
        <AppContext.Provider value={{ darkMode, toggleTheme, language, toggleLanguage }}>
            {children}
        </AppContext.Provider>
    </SessionProvider>
  );
}

export const useApp = () => useContext(AppContext);