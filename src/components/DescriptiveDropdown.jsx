import { useState, useRef, useEffect } from "react";
import { useTheme } from "../theme";

export function DescriptiveDropdown({ options, value, onChange, placeholder }) {
  const { t } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selectedOption = options.find(opt => opt.value === value) || { label: placeholder };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div ref={ref} style={{ position: "relative", width: 200 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%", background: t.inputBg, border: `1px solid ${t.inputBorder}`,
          borderRadius: 8, padding: "7px 12px", color: t.textSecondary,
          fontSize: 12, outline: "none", fontFamily: "inherit", cursor: "pointer",
          textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span>{selectedOption.label}</span>
        <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▼</span>
      </button>
      {isOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0, zIndex: 100,
          background: t.panelBg, border: `1px solid ${t.panelBorder}`, borderRadius: 8,
          marginTop: 4, boxShadow: `0 4px 12px ${t.shadow}`,
          maxHeight: 300, overflowY: "auto",
        }}>
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => { onChange(option.value); setIsOpen(false); }}
              style={{
                padding: "10px 14px", cursor: "pointer",
                background: option.value === value ? t.accent + "20" : "transparent",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = t.accent + "10"}
              onMouseLeave={(e) => e.currentTarget.style.background = option.value === value ? t.accent + "20" : "transparent"}
            >
              <div style={{ fontWeight: 600, color: t.text }}>{option.label}</div>
              <div style={{ fontSize: 11, color: t.textMuted, marginTop: 2, whiteSpace: "pre-wrap" }}>{option.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}