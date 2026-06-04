import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  "В работе": { bg: "rgba(47,154,255,0.12)", color: "rgba(47,154,255,1)" },
  "Готово":   { bg: "rgba(13,190,105,0.12)", color: "rgba(13,190,105,1)" },
  "Беклог":   { bg: "rgba(232,235,244,1)",   color: "rgba(68,83,113,1)"  },
};

const TASKS = [
  { id: "ARCH-1051", name: "Стратегия мультитенантности",                                                         status: "Беклог",   priority: ICONS.priorityHighFill,   project: { letter: "A", color: "#2EAA6E" } },
  { id: "ARCH-1033", name: "Анализ и проектирование гибридной схемы хранения данных (Hot/Warm/Cold) для оптимизации затрат и производительност...", status: "В работе", priority: ICONS.priorityNormalFill, project: { letter: "A", color: "#2EAA6E" } },
  { id: "ARCH-1042", name: "Проектирование отказоустойчивой event-driven архитектуры",                            status: "Беклог",   priority: ICONS.priorityNormalFill, project: { letter: "A", color: "#2EAA6E" } },
  { id: "ARCH-1033", name: "Service Mesh внедрение и миграция модуля отчетности для авторизация на ABAC",        status: "В работе", priority: ICONS.priorityLowFill,    project: { letter: "A", color: "#2EAA6E" } },
  { id: "ARCH-1069", name: "Оптимизация стратегии кеширования многоуровневой архитектуры (L1/L2/L3) для снижения p95-латентности ключевых API-...", status: "Готово", priority: ICONS.priorityHighFill, project: { letter: "A", color: "#2EAA6E" } },
  { id: "ARCH-1020", name: "Рефакторинг модуля авторизации на основе ABAC для поддержки динамически изменяемых бизнес-правил", status: "Беклог", priority: ICONS.priorityNormalFill, project: { letter: "A", color: "#2EAA6E" } },
];

const QUICK_FILTERS = ["Мои", "Актуальные", "Просроченные"];

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function ProjectViewScreen({ dispatch }: ScreenProps) {
  return (
    <div style={s.root}>

      {/* ── Header ── */}
      <div style={s.header}>
        <button style={s.backBtn} onClick={() => dispatch({ type: "back" })}>
          <img src={ICONS.navChevronLeft} alt="" style={s.backIcon} />
        </button>
        <div style={s.headerCenter}>
          <span style={s.headerTitle}>Задачи моих подчиненных</span>
          <span style={s.headerSub}>Список</span>
        </div>
        <div style={s.headerActions}>
          <button style={s.iconBtn}>
            <img src={ICONS.actionKanbanBoard} alt="" style={s.iconBtnImg} />
          </button>
          <button style={s.iconBtn}>
            <img src={ICONS.actionEqualiserFill} alt="" style={s.iconBtnImg} />
          </button>
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div style={s.filterBar}>
        <button style={s.filterIconBtn}>
          <img src={ICONS.actionFilterFill} alt="" style={s.filterIconImg} />
        </button>
        <button style={s.filterIconBtn}>
          <img src={ICONS.navCaretSort} alt="" style={s.filterIconImg} />
        </button>
        {QUICK_FILTERS.map((f) => (
          <button key={f} style={s.chip}>{f}</button>
        ))}
      </div>

      {/* ── Task list ── */}
      <div style={s.list}>
        {TASKS.map((task, i) => {
          const st = STATUS_STYLE[task.status] ?? STATUS_STYLE["Беклог"];
          return (
            <button
              key={i}
              style={s.taskRow}
              onClick={() => dispatch({ type: "push", to: "task-card" })}
            >
              <span style={s.taskName}>{task.name}</span>
              <div style={s.taskMeta}>
                <img src={task.priority} alt="" style={s.priorityIcon} />
                <span style={{ ...s.projectAvatar, background: task.project.color }}>
                  {task.project.letter}
                </span>
                <span style={s.taskId}>{task.id}</span>
                <span style={{ ...s.statusChip, background: st.bg, color: st.color }}>
                  {task.status}
                </span>
              </div>
            </button>
          );
        })}
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

  // Header
  header: {
    flexShrink: 0, display: "flex", alignItems: "center",
    padding: "12px 16px", gap: 8,
  },
  backBtn: {
    background: "transparent", border: "none", cursor: "pointer",
    padding: 0, display: "flex", alignItems: "center", flexShrink: 0,
  },
  backIcon: { width: 24, height: 24, filter: "brightness(0) saturate(100%)" },
  headerCenter: {
    flex: 1, display: "flex", flexDirection: "column", gap: 2, minWidth: 0,
  },
  headerTitle: {
    fontSize: 16, lineHeight: "18px", fontWeight: 600, letterSpacing: "-0.3px",
    color: "rgba(14,17,23,1)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
  },
  headerSub: {
    fontSize: 12, lineHeight: "13px", fontWeight: 400, letterSpacing: "-0.1px",
    color: "rgba(133,143,163,1)",
  },
  headerActions: { display: "flex", gap: 8, flexShrink: 0 },
  iconBtn: {
    width: 32, height: 32, borderRadius: 8,
    background: "rgba(232,235,244,1)", border: "none",
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  },
  iconBtnImg: {
    width: 16, height: 16,
    filter: "brightness(0) saturate(100%) invert(35%) sepia(20%) saturate(500%) hue-rotate(200deg) brightness(90%)",
  },

  // Filter bar
  filterBar: {
    flexShrink: 0, display: "flex", alignItems: "center",
    gap: 8, padding: "0 16px 12px",
    overflowX: "auto", scrollbarWidth: "none",
  },
  filterIconBtn: {
    flexShrink: 0, width: 32, height: 32, borderRadius: 8,
    background: "rgba(232,235,244,1)", border: "none",
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  },
  filterIconImg: {
    width: 16, height: 16,
    filter: "brightness(0) saturate(100%) invert(35%) sepia(20%) saturate(500%) hue-rotate(200deg) brightness(90%)",
  },
  chip: {
    flexShrink: 0, height: 32, padding: "0 12px", borderRadius: 999,
    border: "none", cursor: "pointer",
    fontSize: 15, lineHeight: "17px", fontWeight: 400, letterSpacing: "-0.2px",
    background: "rgba(232,235,244,1)", color: "rgba(68,83,113,1)", whiteSpace: "nowrap",
  },

  // Task list
  list: { flex: 1, minHeight: 0, overflowY: "auto", scrollbarWidth: "none" as const },
  taskRow: {
    display: "flex", flexDirection: "column", gap: 6,
    padding: "12px 16px",
    borderBottom: "1px solid rgba(236,238,241,1)",
    background: "transparent", border: "none",
    borderBottomColor: "rgba(236,238,241,1)", borderBottomStyle: "solid" as const, borderBottomWidth: 1,
    width: "100%", textAlign: "left" as const, cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
  },
  taskName: {
    fontSize: 15, lineHeight: "17px", fontWeight: 400, letterSpacing: "-0.2px",
    color: "rgba(14,17,23,1)",
    display: "-webkit-box", WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const, overflow: "hidden",
  },
  taskMeta: { display: "flex", alignItems: "center", gap: 6 },
  priorityIcon: { width: 16, height: 16, flexShrink: 0 },
  projectAvatar: {
    flexShrink: 0, width: 16, height: 16, borderRadius: 4,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 10, fontWeight: 500, letterSpacing: "-0.1px",
    color: "rgba(255,255,255,1)", userSelect: "none" as const,
  },
  taskId: {
    fontSize: 12, lineHeight: "13px", fontWeight: 400, letterSpacing: "-0.1px",
    color: "rgba(133,143,163,1)", flex: 1,
  },
  statusChip: {
    fontSize: 11, lineHeight: "12px", fontWeight: 500, letterSpacing: "-0.1px",
    padding: "3px 8px", borderRadius: 999, whiteSpace: "nowrap" as const,
  },
};
