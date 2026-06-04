import { useState } from "react";
import type { ScreenId } from "../router/types";
import { SCREEN_MANIFEST } from "../config/screens.manifest";

// ─── Only rendered in development build ───────────────────────────────────────

interface Props {
  screen: ScreenId;
}

export default function CompareOverlay({ screen }: Props) {
  const [visible, setVisible]     = useState(false);
  const [opacity, setOpacity]     = useState(50);
  const [variantIdx, setVariant]  = useState(0);

  const entry = SCREEN_MANIFEST[screen];
  if (!entry) return null;

  const variant = entry.variants[variantIdx] ?? entry.variants[0];

  return (
    <>
      {/* Reference PNG overlay */}
      {visible && variant && (
        <img
          src={variant.src}
          alt="reference"
          style={{
            position:        "absolute",
            inset:           0,
            width:           "100%",
            height:          "100%",
            objectFit:       "cover",
            objectPosition:  "top center",
            opacity:         opacity / 100,
            pointerEvents:   "none",
            zIndex:          9000,
            userSelect:      "none",
          }}
        />
      )}

      {/* Control panel */}
      <div style={panel}>
        {/* Toggle button */}
        <button
          style={btnBase(visible)}
          title={visible ? "Скрыть эталон" : "Показать эталон"}
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? "◉" : "○"}
        </button>

        {/* Controls — shown when overlay is active */}
        {visible && (
          <>
            {/* Opacity slider */}
            <input
              type="range"
              min={10}
              max={90}
              step={5}
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              style={{ width: 64, accentColor: "#0055ff" }}
              title={`Прозрачность: ${opacity}%`}
            />

            {/* Variant selector */}
            {entry.variants.length > 1 && (
              <select
                value={variantIdx}
                onChange={(e) => setVariant(Number(e.target.value))}
                style={select}
              >
                {entry.variants.map((v, i) => (
                  <option key={i} value={i}>{v.label}</option>
                ))}
              </select>
            )}

            {/* Screen name */}
            <span style={label}>{entry.name}</span>
          </>
        )}
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const panel: React.CSSProperties = {
  position:       "absolute",
  bottom:         100,
  right:          8,
  zIndex:         9999,
  display:        "flex",
  flexDirection:  "column",
  alignItems:     "flex-end",
  gap:            6,
  pointerEvents:  "all",
};

const btnBase = (active: boolean): React.CSSProperties => ({
  width:        36,
  height:       36,
  borderRadius: "50%",
  border:       "none",
  background:   active ? "#0055ff" : "rgba(0,0,0,0.55)",
  color:        "#fff",
  fontSize:     18,
  lineHeight:   1,
  cursor:       "pointer",
  display:      "flex",
  alignItems:   "center",
  justifyContent: "center",
  backdropFilter: "blur(6px)",
  boxShadow:    "0 2px 8px rgba(0,0,0,0.25)",
});

const select: React.CSSProperties = {
  fontSize:     12,
  padding:      "3px 6px",
  borderRadius: 8,
  border:       "1px solid #ccc",
  background:   "rgba(255,255,255,0.95)",
  cursor:       "pointer",
  maxWidth:     120,
};

const label: React.CSSProperties = {
  fontSize:     11,
  color:        "rgba(255,255,255,0.8)",
  background:   "rgba(0,0,0,0.5)",
  padding:      "2px 8px",
  borderRadius: 999,
  backdropFilter: "blur(4px)",
  whiteSpace:   "nowrap",
};
