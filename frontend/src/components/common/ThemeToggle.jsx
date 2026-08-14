import useTheme from "../../hooks/useTheme";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-border bg-surface px-4 py-2 text-foreground transition hover:bg-surface-secondary"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;