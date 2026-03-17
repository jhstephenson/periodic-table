import { createContext, useContext } from 'react';

export const THEMES = {
  dark: {
    bg: "#0a0a10",
    panelBg: "#111118",
    panelBorder: "#1c1c28",
    inputBg: "#15151f",
    inputBorder: "#252530",
    text: "#e8e8f0",
    textSecondary: "#ccc",
    textMuted: "#888",
    textFaint: "#555",
    textGhost: "#333",
    accent: "#4ECDC4",
    overlayBg: "rgba(0,0,0,0.75)",
    statsBg: "rgba(255,255,255,0.02)",
    statsBorder: "rgba(255,255,255,0.04)",
    factBg: "rgba(255,255,255,0.03)",
    factBorder: "rgba(255,255,255,0.06)",
    shadow: "rgba(0,0,0,0.5)",
    cellAlpha: "30",       // active cell bg opacity
    cellBorderAlpha: "40", // inactive cell border opacity
    catBgAlpha: 0.12,
    sectionLabel: "#555",
    modalContentText: "#c0c0c8",
    modalFact: "#d0d0d8",
    discoverer: "#444",
    closeBtn: "#666",
    closeBtnHover: "#eee",
    legendInactive: "#666",
  },
  light: {
    bg: "#f4f4f8",
    panelBg: "#ffffff",
    panelBorder: "#ddd",
    inputBg: "#ffffff",
    inputBorder: "#ccc",
    text: "#1a1a2e",
    textSecondary: "#333",
    textMuted: "#555",
    textFaint: "#888",
    textGhost: "#aaa",
    accent: "#0d9488",
    overlayBg: "rgba(0,0,0,0.45)",
    statsBg: "rgba(0,0,0,0.03)",
    statsBorder: "rgba(0,0,0,0.06)",
    factBg: "rgba(0,0,0,0.02)",
    factBorder: "rgba(0,0,0,0.08)",
    shadow: "rgba(0,0,0,0.12)",
    cellAlpha: "20",
    cellBorderAlpha: "35",
    catBgAlpha: 0.10,
    sectionLabel: "#888",
    modalContentText: "#444",
    modalFact: "#333",
    discoverer: "#999",
    closeBtn: "#999",
    closeBtnHover: "#333",
    legendInactive: "#888",
  },
};

export const CATEGORY_COLORS = {
  dark: {
    "alkali-metal": "#E8485C",
    "alkaline-earth": "#F5A623",
    "transition-metal": "#4ECDC4",
    "post-transition": "#45B7D1",
    "metalloid": "#96CEB4",
    "nonmetal": "#A8E6CF",
    "halogen": "#DDA0DD",
    "noble-gas": "#B19CD9",
    "lanthanide": "#FFB347",
    "actinide": "#FF6B6B",
    "unknown": "#888",
  },
  light: {
    "alkali-metal": "#c0283c",
    "alkaline-earth": "#c07e0e",
    "transition-metal": "#1a9e96",
    "post-transition": "#2189a0",
    "metalloid": "#4e9e78",
    "nonmetal": "#2e8e5e",
    "halogen": "#9e5a9e",
    "noble-gas": "#7b5cc0",
    "lanthanide": "#c07c10",
    "actinide": "#cc3838",
    "unknown": "#777",
  },
};

export const CATEGORY_LABELS = {
  "alkali-metal": "Alkali Metal",
  "alkaline-earth": "Alkaline Earth",
  "transition-metal": "Transition Metal",
  "post-transition": "Post-Transition",
  "metalloid": "Metalloid",
  "nonmetal": "Nonmetal",
  "halogen": "Halogen",
  "noble-gas": "Noble Gas",
  "lanthanide": "Lanthanide",
  "actinide": "Actinide",
  "unknown": "Unknown",
};

export const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export function getCatColor(mode, catKey) {
  return CATEGORY_COLORS[mode][catKey] || "#888";
}

export function getCatBg(mode, catKey) {
  const c = CATEGORY_COLORS[mode][catKey] || "#888";
  const alpha = THEMES[mode].catBgAlpha;
  const r = parseInt(c.slice(1, 3), 16);
  const g = parseInt(c.slice(3, 5), 16);
  const b = parseInt(c.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function getTrendColor(value, min, max, alpha = 1) {
  if (value == null) return `hsla(0, 0%, 53%, ${alpha})`; // #888888
  const percent = (value - min) / (max - min);
  const hue = (1 - percent) * 240; // Blue (low) to Red (high)
  return `hsla(${hue}, 85%, 55%, ${alpha})`;
}
