import { useState } from "react";
import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";

const SORT_BY = ["Код задачи", "Приоритет", "Статус", "Автор", "Исполнители", "Наблюдатели", "Выполнить до", "Метка"];
const SORT_DIR = ["По убыванию", "По возрастанию"];

export default function TasksSortScreen({ dispatch }: ScreenProps) {
  const [sortBy, setSortBy] = useState("Код задачи");
  const [sortDir, setSortDir] = useState("По убыванию");

  return (
    <div style={s.root}>

      {/* Header */}
      <div style={s.header}>
        <button style={s.backBtn} onClick={() => dispatch({ type: "back" })}>
          <img src={ICONS.navChevronLeft} alt="" style={s.backIcon} />
        </button>
        <span style={s.title}>Сортировка</span>
      </div>

      {/* Sort by */}
      <div style={s.list}>
        {SORT_BY.map((opt) => (
          <button key={opt} style={s.row} onClick={() => setSortBy(opt)}>
            <span style={s.label}>{opt}</span>
            <div style={s.radioOuter}>
              {sortBy === opt && <div style={s.radioInner} />}
            </div>
          </button>
        ))}

        <div style={s.divider} />

        {SORT_DIR.map((opt) => (
          <button key={opt} style={s.row} onClick={() => setSortDir(opt)}>
            <span style={s.label}>{opt}</span>
            <div style={s.radioOuter}>
              {sortDir === opt && <div style={s.radioInner} />}
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
    padding: "16px 16px 12px", gap: 12,
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
    fontSize: 26, lineHeight: "31px", fontWeight: 600, letterSpacing: "-0.5px",
    color: "rgba(14,17,23,1)",
  },
  list: { flex: 1, overflowY: "auto" },
  row: {
    width: "100%", display: "flex", alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottomColor: "rgba(236,238,241,1)",
    borderBottomStyle: "solid", borderBottomWidth: 1,
    background: "transparent", border: "none",
    borderBottom: "1px solid rgba(236,238,241,1)",
    cursor: "pointer", textAlign: "left",
  },
  label: {
    fontSize: 15, lineHeight: "17px", fontWeight: 400, letterSpacing: "-0.2px",
    color: "rgba(14,17,23,1)",
  },
  radioOuter: {
    width: 20, height: 20, borderRadius: "50%",
    border: "1.5px solid rgba(161,169,184,1)",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
  radioInner: {
    width: 10, height: 10, borderRadius: "50%",
    background: "rgba(0,85,255,1)",
    border: "2px solid rgba(0,85,255,1)",
  },
  divider: {
    height: 1, background: "rgba(236,238,241,1)",
    margin: "4px 0",
  },
  applyWrap: { padding: "12px 16px 24px" },
  applyBtn: {
    width: "100%", height: 50, borderRadius: 12,
    background: "rgba(0,85,255,1)", color: "rgba(255,255,255,1)",
    border: "none", cursor: "pointer",
    fontSize: 16, lineHeight: "18px", fontWeight: 500, letterSpacing: "-0.3px",
  },
};
