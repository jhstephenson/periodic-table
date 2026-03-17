import ELEMENT_INFO from "../elementInfo";
import { useTheme, getCatColor, CATEGORY_LABELS, THEMES } from "../theme";

export function LearnMoreModal({ el, onClose }) {
  const { mode, t } = useTheme();
  const color = getCatColor(mode, el.cat);
  const info = ELEMENT_INFO[el.z];
  if (!info) return null;

  const yearStr = el.year === -1 ? "Ancient" : el.year;
  const fmt = (v, unit) => (v != null ? `${v} ${unit}` : "\u2014");

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: t.overlayBg, backdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24, animation: "fadeIn 0.2s ease",
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div onClick={(e) => e.stopPropagation()} style={{
        background: t.panelBg, border: `1px solid ${color}40`,
        borderRadius: 16, padding: 0, width: "100%", maxWidth: 600,
        maxHeight: "calc(100vh - 48px)", display: "flex", flexDirection: "column",
        boxShadow: `0 24px 80px ${t.shadow}, 0 0 40px ${color}15`,
        animation: "slideUp 0.25s ease", position: "relative",
      }}>
        {/* Header */}
        <div style={{ padding: "24px 28px 20px", borderBottom: `1px solid ${color}15`, flexShrink: 0 }}>
          <button onClick={onClose} style={{
            position: "absolute", top: 0, right: 0, background: "none", border: "none",
            color: t.closeBtn, fontSize: 22, cursor: "pointer", padding: "18px 22px",
            lineHeight: 1, zIndex: 1, transition: "color 0.15s",
          }}
            onMouseEnter={(e) => e.target.style.color = t.closeBtnHover}
            onMouseLeave={(e) => e.target.style.color = t.closeBtn}
          >&times;</button>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{
              width: 80, height: 80, borderRadius: 14,
              background: color + "15", border: `2px solid ${color}50`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ fontSize: 36, fontWeight: 800, color, lineHeight: 1 }}>{el.sym}</span>
              <span style={{ fontSize: 11, color, opacity: 0.6, marginTop: 2 }}>{el.z}</span>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: t.text }}>{el.name}</div>
              <div style={{ fontSize: 13, color, fontWeight: 500, marginTop: 3 }}>{CATEGORY_LABELS[el.cat]}</div>
              <div style={{ fontSize: 12, color: t.textMuted, marginTop: 3, fontFamily: "monospace" }}>{el.config}</div>
            </div>
          </div>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: "8px 16px", marginTop: 16,
            padding: "12px 16px", background: t.statsBg, borderRadius: 10, border: `1px solid ${t.statsBorder}`,
          }}>
            {[["Mass", `${el.mass} u`], ["Phase", el.phase], ["Melting", fmt(el.mp, "\u00B0C")], ["Boiling", fmt(el.bp, "\u00B0C")], ["Density", fmt(el.density, "g/cm\u00B3")], ["Discovered", yearStr]].map(([label, val]) => (
              <div key={label} style={{ flex: "1 0 auto", minWidth: 80 }}>
                <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: t.sectionLabel }}>{label}</div>
                <div style={{ fontSize: 12, color: t.textSecondary, fontWeight: 500, marginTop: 2 }}>{val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ padding: "20px 28px 28px", overflowY: "auto", flex: 1 }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color, fontWeight: 600, marginBottom: 6 }}>Description</div>
            <div style={{ fontSize: 13, color: t.modalContentText, lineHeight: 1.7 }}>{info.description}</div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color, fontWeight: 600, marginBottom: 6 }}>Notable Properties</div>
            <div style={{ fontSize: 13, color: t.modalContentText, lineHeight: 1.7 }}>{info.properties}</div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color, fontWeight: 600, marginBottom: 8 }}>Key Uses</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {(info.uses || []).map((use, i) => (
                <div key={i} style={{
                  fontSize: 13, color: t.modalContentText, lineHeight: 1.6,
                  padding: "8px 14px", borderRadius: 8,
                  background: color + "08", borderLeft: `3px solid ${color}50`,
                }}>{use}</div>
              ))}
            </div>
          </div>
          {info.funFact && (
            <div style={{
              padding: "14px 16px", borderRadius: 10,
              background: `linear-gradient(135deg, ${color}08, ${color}04)`,
              border: `1px solid ${color}20`,
            }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color, fontWeight: 600, marginBottom: 6 }}>Fun Fact</div>
              <div style={{ fontSize: 13, color: t.modalFact, lineHeight: 1.7, fontStyle: "italic" }}>{info.funFact}</div>
            </div>
          )}
          {el.disc && (
            <div style={{ marginTop: 16, fontSize: 11, color: t.discoverer, textAlign: "center" }}>
              Discovered by {el.disc}{el.year > 0 ? ` in ${el.year}` : ""}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}