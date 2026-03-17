import { useTheme } from "../theme";

export function ShellDiagram({ shells, color, size = 140 }) {
  const { t } = useTheme();
  const maxElectrons = [2, 8, 18, 32, 50, 72];
  const nucleusSize = size * (16 / 140);
  const baseRadius = size * (12 / 140);
  const radiusIncrement = size * (14 / 140);
  const maxDotSize = size * (8 / 140);

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: nucleusSize, height: nucleusSize, borderRadius: "50%", background: color,
        boxShadow: `0 0 12px ${color}80`,
      }} />
      {shells.map((electrons, i) => {
        const radius = baseRadius + i * radiusIncrement;
        const circumference = 2 * Math.PI * radius;
        const dotSize = Math.min(maxDotSize, circumference / maxElectrons[i] - 2);

        return (
          <div key={i}>
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              width: radius * 2, height: radius * 2,
              borderRadius: "50%", border: `1px solid ${t.textGhost}`,
              transform: "translate(-50%, -50%)",
            }} />
            {Array.from({ length: electrons }).map((_, j) => {
              const angle = (j / electrons) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <div key={j} style={{
                  position: "absolute",
                  top: `calc(50% + ${y}px - ${dotSize / 2}px)`,
                  left: `calc(50% + ${x}px - ${dotSize / 2}px)`,
                  width: dotSize, height: dotSize,
                  borderRadius: "50%", background: t.text,
                  boxShadow: `0 0 4px ${t.shadow}`,
                }} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
