"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn w-11 h-11 rounded-full border-2 border-border-color flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent"
      aria-label="Basculer le thème"
    >
      <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-lg`}></i>
    </button>
  );
}
