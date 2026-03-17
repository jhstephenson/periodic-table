import { useState, useCallback, createContext, useContext } from "react";
import ELEMENT_INFO from "./elementInfo";
import { THEMES, CATEGORY_COLORS, CATEGORY_LABELS, ThemeContext, useTheme, getCatColor, getCatBg } from "./theme";
import { CELL, GAP } from "./constants";
import { TRENDS, PHASES } from "./constants";
import { DescriptiveDropdown } from "./components/DescriptiveDropdown";
import { TrendLegend } from "./components/TrendLegend";
import { ELEMENTS } from "./elements";
import { ElementCell } from "./components/ElementCell";
import { LearnMoreModal } from "./components/LearnMoreModal";
import { DetailPanel } from "./components/DetailPanel";
import { ThemeToggle } from "./components/ThemeToggle";
import { ShellDiagramPanel } from "./components/ShellDiagramPanel";
import { DocumentationPanel } from "./components/DocumentationPanel";
import { Quiz } from "./components/Quiz";







/* ─── Main App ─── */
export default function PeriodicTable() {
  const [mode, setMode] = useState("dark");
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [highlightCat, setHighlightCat] = useState(null);
  const [search, setSearch] = useState("");
  const [tempFilter, setTempFilter] = useState("all");
  const [modalElement, setModalElement] = useState(null);
  const [shellDiagramElement, setShellDiagramElement] = useState(null);
  const [showDocs, setShowDocs] = useState(false);
  const [trend, setTrend] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const t = THEMES[mode];

  const filteredSet = useCallback(() => {
    const s = search.toLowerCase().trim();
    return ELEMENTS.filter((el) => {
      if (s && !el.name.toLowerCase().includes(s) && !el.sym.toLowerCase().includes(s) && !String(el.z).includes(s)) return false;
      if (tempFilter === "solid" && el.phase !== "Solid") return false;
      if (tempFilter === "liquid" && el.phase !== "Liquid") return false;
      if (tempFilter === "gas" && el.phase !== "Gas") return false;
      return true;
    });
  }, [search, tempFilter]);

  const filtered = filteredSet();
  const filteredZ = new Set(filtered.map((e) => e.z));

  const trendMin = trend ? Math.min(...ELEMENTS.map(el => Array.isArray(el[trend]) ? el[trend][0] : el[trend]).filter(v => v != null)) : null;
  const trendMax = trend ? Math.max(...ELEMENTS.map(el => Array.isArray(el[trend]) ? el[trend][0] : el[trend]).filter(v => v != null)) : null;

  return (
    <ThemeContext.Provider value={{ mode, t }}>
      <div style={{
        background: t.bg, minHeight: "100vh", padding: "20px 24px",
        fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
        color: t.text, overflow: "auto", transition: "background 0.3s, color 0.3s",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px", color: t.text }}>
                Periodic Table<span style={{ color: t.accent, marginLeft: 4 }}>.</span>
              </h1>
              <p style={{ margin: "2px 0 0", fontSize: 11, color: t.textFaint, letterSpacing: 1.5, textTransform: "uppercase" }}>118 Elements &mdash; Interactive Explorer</p>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="text" placeholder="Search name, symbol, or #"
                value={search} onChange={(e) => setSearch(e.target.value)}
                style={{
                  background: t.inputBg, border: `1px solid ${t.inputBorder}`, borderRadius: 8,
                  padding: "7px 12px", color: t.textSecondary, fontSize: 12, width: 200,
                  outline: "none", fontFamily: "inherit",
                }}
              />
              <DescriptiveDropdown
                options={PHASES}
                value={tempFilter}
                onChange={setTempFilter}
                placeholder="All Phases"
              />
              <DescriptiveDropdown
                options={TRENDS}
                value={trend}
                onChange={(val) => setTrend(val || null)}
                placeholder="No Trend"
              />
              <button onClick={() => setShowQuiz(true)}>Quiz</button>
              <button onClick={() => setShowDocs(true)}>Help</button>
              <ThemeToggle onToggle={() => setMode(m => m === "dark" ? "light" : "dark")} />
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 auto", minWidth: 0, overflowX: "auto" }}>
              <div style={{
                display: "inline-grid",
                gridTemplateColumns: `repeat(18, ${CELL}px)`,
                gridTemplateRows: `repeat(10, ${CELL}px)`,
                gap: GAP,
              }}>
                {ELEMENTS.map((el) => (
                  <ElementCell
                    key={el.z} el={el}
                    isHovered={hovered && hovered.z === el.z}
                    isFiltered={filteredZ.has(el.z)}
                    selected={selected}
                    onHover={setHovered}
                    onClick={setSelected}
                    highlightCat={highlightCat}
                    trend={trend}
                    trendMin={trendMin}
                    trendMax={trendMax}
                  />
                ))}
                <div style={{ gridRow: 6, gridColumn: 3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: getCatColor(mode, "lanthanide"), letterSpacing: 0.5, opacity: 0.6 }}>57&ndash;71</div>
                <div style={{ gridRow: 7, gridColumn: 3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: getCatColor(mode, "actinide"), letterSpacing: 0.5, opacity: 0.6 }}>89&ndash;103</div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 10px", marginTop: 14 }}>
                {Object.keys(CATEGORY_LABELS).map((key) => {
                  const color = getCatColor(mode, key);
                  return (
                    <div key={key}
                      onMouseEnter={() => setHighlightCat(key)}
                      onMouseLeave={() => setHighlightCat(null)}
                      style={{
                        display: "flex", alignItems: "center", gap: 5, cursor: "pointer",
                        padding: "3px 6px", borderRadius: 4,
                        background: highlightCat === key ? color + "18" : "transparent",
                        transition: "background 0.15s",
                      }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
                      <span style={{ fontSize: 10, color: highlightCat === key ? color : t.legendInactive }}>{CATEGORY_LABELS[key]}</span>
                    </div>
                  );
                })}
              </div>
              {trend && <TrendLegend trend={trend} trendMin={trendMin} trendMax={trendMax} />}
            </div>

            <div style={{ flex: "0 0 auto", alignSelf: "flex-start", position: "sticky", top: 20, zIndex: 5 }}>
              {(selected || hovered) ? (
                <DetailPanel el={selected || hovered} onClose={() => setSelected(null)} onLearnMore={setModalElement} onShowShellDiagram={setShellDiagramElement} />
              ) : (
                <div style={{
                  width: 320, padding: 24, borderRadius: 12,
                  background: t.panelBg, border: `1px solid ${t.panelBorder}`, textAlign: "center",
                }}>
                  <div style={{ fontSize: 32, marginBottom: 8, opacity: 0.3 }}>&#9883;</div>
                  <div style={{ fontSize: 13, color: t.textFaint }}>Hover or click an element<br />to explore its properties</div>
                  <div style={{ fontSize: 11, color: t.textGhost, marginTop: 12 }}>Click &ldquo;Learn More&rdquo; for<br />descriptions, uses &amp; fun facts</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {modalElement && <LearnMoreModal el={modalElement} onClose={() => setModalElement(null)} />}
        {shellDiagramElement && <ShellDiagramPanel el={shellDiagramElement} onClose={() => setShellDiagramElement(null)} />}
        {showDocs && <DocumentationPanel onClose={() => setShowDocs(false)} />}
        {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
      </div>
    </ThemeContext.Provider>
  );
}
