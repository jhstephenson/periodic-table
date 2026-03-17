import { useTheme } from "../theme";
import ReactMarkdown from "react-markdown";
import documentation from "../documentation";

export function DocumentationPanel({ onClose }) {
  const { t } = useTheme();

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: t.modalOverlay,
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 100,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.panelBg,
          borderRadius: 12,
          padding: "20px 24px",
          boxShadow: `0 8px 40px ${t.shadow}`,
          position: "relative",
          maxWidth: "80%",
          maxHeight: "80%",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 10, right: 14,
            background: "none", border: "none",
            color: t.closeBtn, fontSize: 18, cursor: "pointer",
          }}
        >
          &times;
        </button>
        <ReactMarkdown>{documentation}</ReactMarkdown>
      </div>
    </div>
  );
}
