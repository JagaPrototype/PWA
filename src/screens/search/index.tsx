import { useState } from "react";
import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";

const RECENT = ["Стратегия мультитенантности", "ARCH-1033", "CRM B2C проблемы", "event-driven архитектура"];

const RESULTS = [
  { id: "ARCH-1051", name: "Стратегия мультитенантности",    status: "Беклог",   project: { letter: "A", color: "#2EAA6E" } },
  { id: "ARCH-1033", name: "Анализ гибридной схемы хранения данных", status: "В работе", project: { letter: "A", color: "#2EAA6E" } },
  { id: "STP-105",   name: "Стратегия мультитенантности STP", status: "Приостановлено", project: { letter: "S", color: "#F5820D" } },
];

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  "В работе":        { bg: "rgba(47,154,255,0.12)", color: "rgba(47,154,255,1)" },
  "Готово":          { bg: "rgba(13,190,105,0.12)", color: "rgba(13,190,105,1)" },
  "Беклог":          { bg: "rgba(232,235,244,1)",   color: "rgba(68,83,113,1)"  },
  "Приостановлено":  { bg: "rgba(232,235,244,1)",   color: "rgba(68,83,113,1)"  },
};

export default function SearchScreen({ dispatch }: ScreenProps) {
  const [query, setQuery] = useState("");
  const hasResults = query.length > 0;

  return (
    <div style={s.root}>

      {/* Search bar */}
      <div style={s.searchBar}>
        <div style={s.inputWrap}>
          <img src={ICONS.actionSearch} alt="" style={s.searchIcon} />
          <input
            style={s.input}
            type="text"
            placeholder="Поиск"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query.length > 0 && (
            <button style={s.clearBtn} onClick={() => setQuery("")}>
              <img src={ICONS.navClose} alt="" style={s.clearIcon} />
            </button>
          )}
        </div>
        <button style={s.cancelBtn} onClick={() => dispatch({ type: "back" })}>
          Отмена
        </button>
      </div>

      {/* Filter / Sort */}
      {hasResults && (
        <div style={s.filterBar}>
          <button style={s.filterIconBtn} onClick={() => dispatch({ type: "modal", to: "search-filters" })}>
            <img src={ICONS.actionFilterFill} alt="" style={s.filterIconImg} />
          </button>
          <button style={s.filterIconBtn} onClick={() => dispatch({ type: "modal", to: "search-sort" })}>
            <img src={ICONS.navCaretSort} alt="" style={s.filterIconImg} />
          </button>
        </div>
      )}

      <div style={s.content}>
        {!hasResults ? (
          /* Recent searches */
          <div>
            <span style={s.sectionLabel}>Недавние</span>
            {RECENT.map((r, i) => (
              <button key={i} style={s.recentRow} onClick={() => setQuery(r)}>
                <img src={ICONS.organizeHistory} alt="" style={s.recentIcon} />
                <span style={s.recentText}>{r}</span>
              </button>
            ))}
          </div>
        ) : (
          /* Results */
          <div>
            <span style={s.sectionLabel}>Задачи</span>
            {RESULTS.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()) || r.id.toLowerCase().includes(query.toLowerCase())).map((task, i) => {
              const st = STATUS_STYLE[task.status] ?? STATUS_STYLE["Беклог"];
              return (
                <button key={i} style={s.taskRow} onClick={() => dispatch({ type: "push", to: "task-card" })}>
                  <span style={s.taskName}>{task.name}</span>
                  <div style={s.taskMeta}>
                    <span style={{ ...s.projectAvatar, background: task.project.color }}>{task.project.letter}</span>
                    <span style={s.taskId}>{task.id}</span>
                    <span style={{ ...s.statusChip, background: st.bg, color: st.color }}>{task.status}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
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
  searchBar: {
    flexShrink: 0, display: "flex", alignItems: "center",
    gap: 12, padding: "12px 16px",
  },
  inputWrap: {
    flex: 1, height: 40, borderRadius: 10,
    background: "rgba(241,243,249,1)",
    display: "flex", alignItems: "center", gap: 8, padding: "0 12px",
  },
  searchIcon: { width: 16, height: 16, flexShrink: 0, filter: "brightness(0) saturate(100%) invert(65%) sepia(8%) saturate(350%) hue-rotate(195deg) brightness(90%)" },
  input: {
    flex: 1, border: "none", outline: "none", background: "transparent",
    fontSize: 15, lineHeight: "17px", fontWeight: 400, letterSpacing: "-0.2px",
    color: "rgba(14,17,23,1)",
  },
  clearBtn: { background: "transparent", border: "none", cursor: "pointer", padding: 0, display: "flex" },
  clearIcon: { width: 16, height: 16, filter: "brightness(0) saturate(100%) invert(65%) sepia(8%) saturate(350%) hue-rotate(195deg) brightness(90%)" },
  cancelBtn: {
    background: "transparent", border: "none", cursor: "pointer",
    fontSize: 15, lineHeight: "17px", fontWeight: 400, color: "rgba(0,85,255,1)",
    whiteSpace: "nowrap",
  },
  filterBar: {
    flexShrink: 0, display: "flex", gap: 8, padding: "0 16px 12px",
  },
  filterIconBtn: {
    width: 32, height: 32, borderRadius: 8,
    background: "rgba(232,235,244,1)", border: "none", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  filterIconImg: { width: 16, height: 16, filter: "brightness(0) saturate(100%) invert(35%) sepia(20%) saturate(500%) hue-rotate(200deg) brightness(90%)" },
  content: { flex: 1, minHeight: 0, overflowY: "auto", scrollbarWidth: "none" as const },
  sectionLabel: {
    display: "block", padding: "8px 16px 4px",
    fontSize: 12, lineHeight: "13px", fontWeight: 400, color: "rgba(133,143,163,1)",
  },
  recentRow: {
    display: "flex", alignItems: "center", gap: 12,
    padding: "12px 16px",
    borderBottom: "1px solid rgba(236,238,241,1)",
    background: "transparent", border: "none", cursor: "pointer",
    width: "100%", textAlign: "left" as const,
    borderBottomColor: "rgba(236,238,241,1)", borderBottomStyle: "solid" as const, borderBottomWidth: 1,
  },
  recentIcon: { width: 16, height: 16, filter: "brightness(0) saturate(100%) invert(65%) sepia(8%) saturate(350%) hue-rotate(195deg) brightness(90%)", flexShrink: 0 },
  recentText: { fontSize: 15, lineHeight: "17px", fontWeight: 400, color: "rgba(14,17,23,1)" },
  taskRow: {
    display: "flex", flexDirection: "column", gap: 6,
    padding: "12px 16px",
    background: "transparent", border: "none",
    borderBottom: "1px solid rgba(236,238,241,1)",
    borderBottomColor: "rgba(236,238,241,1)", borderBottomStyle: "solid" as const, borderBottomWidth: 1,
    width: "100%", textAlign: "left" as const, cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
  },
  taskName: { fontSize: 15, lineHeight: "17px", fontWeight: 400, color: "rgba(14,17,23,1)" },
  taskMeta: { display: "flex", alignItems: "center", gap: 6 },
  projectAvatar: { width: 16, height: 16, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,1)", flexShrink: 0 },
  taskId: { fontSize: 12, lineHeight: "13px", color: "rgba(133,143,163,1)", flex: 1 },
  statusChip: { fontSize: 11, lineHeight: "12px", fontWeight: 500, padding: "3px 8px", borderRadius: 999, whiteSpace: "nowrap" as const },
};
