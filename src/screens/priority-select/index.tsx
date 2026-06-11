import "./PrioritySelect.css";
import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";

const PRIORITIES = [
  { id: "critical", label: "Критичный",  icon: ICONS.priorityVeryHighFill, bg: "rgba(255,71,71,0.1)",   iconFilter: "invert(34%) sepia(99%) saturate(1500%) hue-rotate(337deg) brightness(105%)"  },
  { id: "high",     label: "Высокий",    icon: ICONS.priorityHighFill,     bg: "rgba(255,139,51,0.1)",  iconFilter: "invert(55%) sepia(90%) saturate(800%) hue-rotate(345deg) brightness(105%)"  },
  { id: "normal",   label: "Нормальный", icon: ICONS.priorityNormalFill,   bg: "rgba(13,190,105,0.1)",  iconFilter: "invert(60%) sepia(60%) saturate(600%) hue-rotate(110deg) brightness(100%)"  },
  { id: "low",      label: "Низкий",     icon: ICONS.priorityLowFill,      bg: "rgba(133,143,163,0.1)", iconFilter: "invert(55%) sepia(8%) saturate(500%) hue-rotate(195deg) brightness(90%)"   },
] as const;

export default function PrioritySelectScreen({ dispatch }: ScreenProps) {
  return (
    <div className="ps-screen">

      {/* Header */}
      <div className="ps-header">
        <span className="ps-title">Приоритет</span>
        <button className="ps-close" onClick={() => dispatch({ type: "back" })}>
          <img src={ICONS.navClose} alt="" />
        </button>
      </div>

      {/* List */}
      <div className="ps-list">
        {PRIORITIES.map((p, i) => (
          <button
            key={p.id}
            className="ps-row"
            onClick={() => dispatch({ type: "back" })}
          >
            <span className="ps-chip" style={{ background: p.bg }}>
              <img
                src={p.icon}
                alt=""
                className="ps-chip-icon"
                style={{ filter: `brightness(0) saturate(100%) ${p.iconFilter}` }}
              />
              <span className="ps-chip-label">{p.label}</span>
            </span>
            <span className={`ps-radio${i === 0 ? " ps-radio--selected" : ""}`}>
              {i === 0 && <span className="ps-radio-dot" />}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
}
