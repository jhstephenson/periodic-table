import ELEMENT_INFO from "../elementInfo";
import { useTheme, getCatColor, CATEGORY_LABELS, THEMES } from "../theme";
import { ShellDiagram } from "./ShellDiagram";

export function DetailPanel({ el, onClose, onLearnMore, onShowShellDiagram }) {
  const { mode, t } = useTheme();
  const color = getCatColor(mode, el.cat);
  if (!el) return null;
  const yearStr = el.year === -1 ? "Ancient" : el.year;
  const fmt = (v, unit) => (v != null ? `${v} ${unit}` : "\u2014");
  const info = ELEMENT_INFO[el.z];

  return (
    <div style={{
      background: t.panelBg, border: `1px solid ${color}40`, borderRadius: 12,
      padding: "20px 24px", minWidth: 520,
      boxShadow: `0 8px 40px ${t.shadow}, 0 0 30px ${color}15`, position: "relative",
    }}>
      <button onClick={onClose} style={{ position: "absolute", top: 10, right: 14, background: "none", border: "none", color: t.closeBtn, fontSize: 18, cursor: "pointer" }}>&times;</button>

      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 10,
              background: color + "18", border: `2px solid ${color}60`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 28, fontWeight: 800, color, lineHeight: 1 }}>{el.sym}</span>
              <span style={{ fontSize: 10, color, opacity: 0.6 }}>{el.z}</span>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: t.text }}>{el.name}</div>
              <div style={{ fontSize: 12, color, fontWeight: 500, marginTop: 2 }}>{CATEGORY_LABELS[el.cat]}</div>
              <div style={{ fontSize: 11, color: t.textMuted, marginTop: 2 }}>{el.config}</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 20px", fontSize: 12 }}>
            {[["Atomic Mass", `${el.mass} u`], ["Phase", el.phase], ["Melting Pt", fmt(el.mp, "\u00B0C")], ["Boiling Pt", fmt(el.bp, "\u00B0C")], ["Density", fmt(el.density, "g/cm\u00B3")], ["Discovered", yearStr], ["Discoverer", el.disc || "\u2014"]].map(([label, val]) => (
              <div key={label}>
                <span style={{ color: t.textFaint }}>{label}</span>
                <div style={{ color: t.textSecondary, fontWeight: 500, marginTop: 1 }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
        {el.shells && (
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onShowShellDiagram(el)}>
            <ShellDiagram shells={el.shells} color={color} size={80} />
          </div>
        )}
      </div>

      {info && (
        <button
          onClick={() => onLearnMore(el)}
          style={{
            marginTop: 16, width: "100%", padding: "10px 0",
            background: `linear-gradient(135deg, ${color}20, ${color}08)`,
            border: `1px solid ${color}40`, borderRadius: 8, color,
            fontSize: 12, fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit", letterSpacing: 0.5, transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.target.style.background = color + "30"; e.target.style.borderColor = color; }}
          onMouseLeave={(e) => { e.target.style.background = `linear-gradient(135deg, ${color}20, ${color}08)`; e.target.style.borderColor = color + "40"; }}
        >&#10024; Learn More</button>
      )}
    </div>
  );
}