import { useState } from "react";
import "./AssigneeSelect.css";
import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";
import { AVATARS } from "../../config/assets.registry";

const ALL_USERS = [
  { id: "1", name: "Ирина Александровна Крылова",         role: "Дизайнер",                          avatar: AVATARS.photo1 },
  { id: "2", name: "Максимиллиан Святославович ...",      role: "Аналитик",                          avatar: AVATARS.photo2 },
  { id: "3", name: "Анна Иванова",                        role: "Аналитик",                          avatar: AVATARS.photo3 },
  { id: "4", name: "Валерий Карп",                        role: "Администратор, Руководитель проекта", avatar: AVATARS.user0  },
] as const;

type UserId = typeof ALL_USERS[number]["id"];

export default function AssigneeSelectScreen({ dispatch }: ScreenProps) {
  const [selected, setSelected] = useState<Set<UserId>>(new Set(["1", "2", "3"]));
  const [search, setSearch] = useState("");

  const toggle = (id: UserId) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = ALL_USERS.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  // Selected users first, then unselected
  const sorted = [
    ...filtered.filter((u) => selected.has(u.id)),
    ...filtered.filter((u) => !selected.has(u.id)),
  ];

  return (
    <div className="as-screen">

      {/* Header */}
      <div className="as-header">
        <span className="as-title">Исполнитель</span>
        <button className="as-close" onClick={() => dispatch({ type: "back" })}>
          <img src={ICONS.navClose} alt="" />
        </button>
      </div>

      {/* Search */}
      <div className="as-search-wrap">
        <img
          src={ICONS.actionSearch}
          alt=""
          className="as-search-icon"
        />
        <input
          className="as-search-input"
          type="text"
          placeholder="Поиск"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 0 && (
          <button className="as-search-clear" onClick={() => setSearch("")}>
            <img src={ICONS.navClose} alt="" style={{ width: 16, height: 16 }} />
          </button>
        )}
      </div>

      {/* List */}
      <div className="as-list">
        {sorted.map((user, i) => {
          const isSelected = selected.has(user.id);
          const showDivider = i > 0 && !isSelected && selected.has(sorted[i - 1].id);
          return (
            <div key={user.id}>
              {showDivider && <div className="as-divider" />}
              <button className="as-row" onClick={() => toggle(user.id)}>
                <img src={user.avatar} alt="" className="as-avatar" />
                <div className="as-user-info">
                  <div className="as-user-name">{user.name}</div>
                  <div className="as-user-role">{user.role}</div>
                </div>
                <span className={`as-checkbox${isSelected ? " as-checkbox--selected" : ""}`}>
                  {isSelected && (
                    <img
                      src={ICONS.navCheck}
                      alt=""
                      style={{ width: 12, height: 12, filter: "brightness(0) invert(1)" }}
                    />
                  )}
                </span>
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}
