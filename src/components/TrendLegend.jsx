import { useTheme } from "../theme";
import { TRENDS } from "../constants";

export function TrendLegend({ trend, trendMin, trendMax }) {
  const { t } = useTheme();

  if (!trend) {
    return null;
  }

  const trendLabel = TRENDS.find(t => t.value === trend)?.label;

  const gradient = 'linear-gradient(to right, hsla(240, 85%, 55%, 1), hsla(0, 85%, 55%, 1))';

  return (
    <div style={{
      marginTop: 16,
      padding: '12px 16px',
      background: t.panelBg,
      border: `1px solid ${t.panelBorder}`,
      borderRadius: 8,
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: t.text, marginBottom: 8 }}>
        {trendLabel} Trend
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 11, color: t.textMuted }}>Low</span>
        <div style={{
          flex: 1,
          height: 12,
          borderRadius: 6,
          background: gradient,
        }} />
        <span style={{ fontSize: 11, color: t.textMuted }}>High</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
         <span style={{ fontSize: 11, color: t.textMuted }}>{trendMin.toFixed(2)}</span>
         <span style={{ fontSize: 11, color: t.textMuted }}>{trendMax.toFixed(2)}</span>
      </div>
    </div>
  );
}
