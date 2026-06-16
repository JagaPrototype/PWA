import { useState } from "react";
import "./StatusSelect.css";
import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";

const STATUSES = [
  { id: "backlog",    label: "Беклог",       bg: "rgba(232,235,244,1)",    color: "rgba(68,83,113,1)"    },
  { id: "analytics", label: "Аналитика",     bg: "rgba(47,154,255,0.15)",  color: "rgba(47,154,255,1)"   },
  { id: "design",    label: "Дизайн",        bg: "rgba(47,154,255,0.15)",  color: "rgba(47,154,255,1)"   },
  { id: "dev",       label: "В разработке",  bg: "rgba(0,85,255,1)",       color: "rgba(255,255,255,1)"  },
  { id: "done",      label: "Готово",        bg: "rgba(13,190,105,1)",     color: "rgba(255,255,255,1)"  },
] as const;

export default function StatusSelectScreen({ dispatch }: ScreenProps) {
  const [selected, setSelected] = useState<string>("dev");

  return (
    <div className="ss-screen">

      {/* Header */}
      <div className="ss-header">
        <span className="ss-title">Статус</span>
        <button className="ss-close" onClick={() => dispatch({ type: "back" })}>
          <img src={ICONS.navClose} alt="" />
        </button>
      </div>

      {/* List */}
      <div className="ss-list">
        {STATUSES.map((s) => (
          <button
            key={s.id}
            className="ss-row"
            onClick={() => {
              setSelected(s.id);
              dispatch({ type: "back" });
            }}
          >
            <span className="ss-chip" style={{ background: s.bg, color: s.color }}>
              {s.label}
            </span>
            <span className={`ss-radio${selected === s.id ? " ss-radio--selected" : ""}`}>
              {selected === s.id && <span className="ss-radio-dot" />}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
}
