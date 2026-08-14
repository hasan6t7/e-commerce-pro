import useTheme from "../../hooks/useTheme";


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-surface p-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`rounded-lg px-3 py-2 text-sm transition ${
          theme === "light"
            ? "bg-primary text-white"
            : "text-foreground-secondary hover:bg-surface-secondary"
        }`}
      >
        ☀️ Light
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        className={`rounded-lg px-3 py-2 text-sm transition ${
          theme === "system"
            ? "bg-primary text-white"
            : "text-foreground-secondary hover:bg-surface-secondary"
        }`}
      >
        🖥 System
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`rounded-lg px-3 py-2 text-sm transition ${
          theme === "dark"
            ? "bg-primary text-white"
            : "text-foreground-secondary hover:bg-surface-secondary"
        }`}
      >
        🌙 Dark
      </button>
    </div>
  );
};

export default ThemeToggle;