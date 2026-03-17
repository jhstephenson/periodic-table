import { useTheme, THEMES } from "../theme";

export function ThemeToggle({ onToggle }) {
  const { t, mode: currentMode } = useTheme();
  return (
    <button
      onClick={onToggle}
      title={currentMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        background: t.inputBg, border: `1px solid ${t.inputBorder}`, borderRadius: 8,
        padding: "6px 10px", color: t.textFaint, fontSize: 16, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "color 0.15s, border-color 0.15s, background 0.15s",
        lineHeight: 1, width: 36, height: 34,
      }}
      onMouseEnter={(e) => { e.target.style.color = t.accent; e.target.style.borderColor = t.accent + "60"; }}
      onMouseLeave={(e) => { e.target.style.color = t.textFaint; e.target.style.borderColor = t.inputBorder; }}
    >
      {currentMode === "dark" ? "\u2600" : "\u263D"}
    </button>
  );
}