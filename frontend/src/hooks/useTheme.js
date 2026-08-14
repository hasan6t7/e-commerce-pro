import { useEffect, useState } from "react";

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
    return savedTheme;
  }

  return "system";
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      const activeTheme = theme === "system" ? getSystemTheme() : theme;

      root.classList.toggle("dark", activeTheme === "dark");
      root.classList.toggle("light", activeTheme === "light");
    };

    applyTheme();

    localStorage.setItem("theme", theme);

    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleSystemThemeChange = () => {
      applyTheme();
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );
    };
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};

export default useTheme;