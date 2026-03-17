import { CELL } from "../constants";
import { useTheme, getCatColor, getCatBg, THEMES, getTrendColor } from "../theme";

export function ElementCell({ el, isHovered, isFiltered, selected, onHover, onClick, highlightCat, trend, trendMin, trendMax }) {
  const { mode, t } = useTheme();
  const dimmed = highlightCat && highlightCat !== el.cat;
  const filtered = isFiltered === false;
  const active = isHovered || (selected && selected.z === el.z);

  const trendValue = trend ? (Array.isArray(el[trend]) ? el[trend][0] : el[trend]) : null;

  let textColor, bgColor, borderColor;

  if (trend) {
    borderColor = getTrendColor(trendValue, trendMin, trendMax);
    bgColor = getTrendColor(trendValue, trendMin, trendMax, active ? 0.3 : 0.15);
    textColor = trendValue == null ? borderColor : t.cat_text;
  } else {
    borderColor = getCatColor(mode, el.cat);
    bgColor = getCatBg(mode, el.cat);
    textColor = borderColor;
  }

  return (
    <div
      onMouseEnter={() => onHover(el)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(el)}
      style={{
        gridRow: el.row, gridColumn: el.col,
        width: CELL, height: CELL,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        borderRadius: 6, cursor: "pointer", position: "relative",
        background: active && !trend ? borderColor + t.cellAlpha : bgColor,
        border: `1.5px solid ${borderColor + (active ? "" : t.cellBorderAlpha)}`,
        opacity: dimmed || filtered ? 0.15 : 1,
        transition: "all 0.15s ease",
        transform: active ? "scale(1.18)" : "scale(1)",
        zIndex: active ? 20 : 1,
        boxShadow: active ? `0 0 14px ${borderColor}50` : "none",
      }}
    >
      <span style={{ fontSize: 8, color: textColor, opacity: 0.7, lineHeight: 1, marginBottom: 1 }}>{el.z}</span>
      <span style={{ fontSize: 16, fontWeight: 700, color: textColor, lineHeight: 1.1 }}>{el.sym}</span>
      <span style={{ fontSize: 6.5, color: textColor, opacity: 0.65, lineHeight: 1, marginTop: 1, maxWidth: CELL - 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{el.name}</span>
    </div>
  );
}