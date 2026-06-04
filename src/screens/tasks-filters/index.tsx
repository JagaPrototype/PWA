import { useState } from "react";
import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";

const FILTER_OPTIONS = [
  "Мои",
  "Просроченные",
  "Активные",
  "Недавно обновлённые",
];

export default function TasksFiltersScreen({ dispatch }: ScreenProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set(["Мои"]));

  const toggle = (f: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(f) ? next.delete(f) : next.add(f);
      return next;
    });

  return (
    <div style={s.root}>

      {/* Header */}
      <div style={s.header}>
        <button style={s.backBtn} onClick={() => dispatch({ type: "back" })}>
          <img src={ICONS.navChevronLeft} alt="" style={s.backIcon} />
        </button>
        <span style={s.title}>Фильтры</span>
        <button style={s.resetBtn} onClick={() => setChecked(new Set())}>
          Сбросить
        </button>
      </div>

      {/* Search input */}
      <div style={s.searchWrap}>
        <img src={ICONS.actionSearch} alt="" style={s.searchIcon} />
        <span style={s.searchPlaceholder}>Поиск</span>
      </div>

      {/* Filter list */}
      <div style={s.list}>
        {FILTER_OPTIONS.map((f) => (
          <button key={f} style={s.row} onClick={() => toggle(f)}>
            <span style={s.label}>{f}</span>
            <div style={{
              ...s.checkbox,
              background: checked.has(f) ? "rgba(0,85,255,1)" : "transparent",
              border: checked.has(f) ? "none" : "1.5px solid rgba(161,169,184,1)",
            }}>
              {checked.has(f) && (
                <img src={ICONS.navCheck} alt="" style={s.checkIcon} />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Apply */}
      <div style={s.applyWrap}>
        <button style={s.applyBtn} onClick={() => dispatch({ type: "back" })}>
          Применить
        </button>
      </div>

    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    width: "100%", height: "100%",
    display: "flex", flexDirection: "column",
    background: "rgba(255,255,255,1)",
    fontFamily: "'Inter', -apple-system, sans-serif",
    overflow: "hidden",
  },
  header: {
    display: "flex", alignItems: "center",
    padding: "16px 16px 12px",
    gap: 12,
  },
  backBtn: {
    background: "transparent", border: "none",
    cursor: "pointer", padding: 0,
    display: "flex", alignItems: "center",
  },
  backIcon: {
    width: 24, height: 24,
    filter: "brightness(0) saturate(100%)",
  },
  title: {
    flex: 1,
    fontSize: 26, lineHeight: "31px", fontWeight: 600, letterSpacing: "-0.5px",
    color: "rgba(14,17,23,1)",
  },
  resetBtn: {
    background: "transparent", border: "none",
    cursor: "pointer", padding: 0,
    fontSize: 15, lineHeight: "17px", fontWeight: 400, letterSpacing: "-0.2px",
    color: "rgba(0,85,255,1)",
  },
  searchWrap: {
    margin: "0 16px 8px",
    height: 40, borderRadius: 10,
    background: "rgba(241,243,249,1)",
    display: "flex", alignItems: "center",
    gap: 8, padding: "0 12px",
  },
  searchIcon: {
    width: 16, height: 16,
    filter: "brightness(0) saturate(100%) invert(65%) sepia(8%) saturate(350%) hue-rotate(195deg) brightness(90%)",
  },
  searchPlaceholder: {
    fontSize: 15, lineHeight: "17px", fontWeight: 400, letterSpacing: "-0.2px",
    color: "rgba(133,143,163,1)",
  },
  list: { flex: 1, overflowY: "auto" },
  row: {
    width: "100%", display: "flex", alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "1px solid rgba(236,238,241,1)",
    background: "transparent", border: "none",
    borderBottomColor: "rgba(236,238,241,1)",
    borderBottomStyle: "solid", borderBottomWidth: 1,
    cursor: "pointer", textAlign: "left",
  },
  label: {
    fontSize: 15, lineHeight: "17px", fontWeight: 400, letterSpacing: "-0.2px",
    color: "rgba(14,17,23,1)",
  },
  checkbox: {
    width: 20, height: 20, borderRadius: 4,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
  checkIcon: { width: 14, height: 14, filter: "brightness(0) invert(1)" },
  applyWrap: {
    padding: "12px 16px 24px",
  },
  applyBtn: {
    width: "100%", height: 50, borderRadius: 12,
    background: "rgba(0,85,255,1)", color: "rgba(255,255,255,1)",
    border: "none", cursor: "pointer",
    fontSize: 16, lineHeight: "18px", fontWeight: 500, letterSpacing: "-0.3px",
  },
};
