import { useState } from "react";
import { useRouter } from "../router/AppRouter";
import "./HomeScreenWrapper.css";

const SPACES = [
  { id: 1, letter: "C", color: "#3BBC9E", code: "CRMBTCPT", name: "CRM B2C: проблемы", fav: true },
  { id: 2, letter: "Ц", color: "#6952F5", code: "FSOKR",    name: "Центр эксплуатации феде...", fav: false },
  { id: 3, letter: "М", color: "#6952F5", code: "MISSUP",   name: "МИС: централизованная...", fav: false },
  { id: 4, letter: "Г", color: "#EE9123", code: "TEODNK",   name: "Горыныч", fav: false },
  { id: 5, letter: "А", color: "#2F9AFF", code: "ARCHIT",   name: "Архитектура платформы", fav: false },
];

const FAV_ICONS: Record<string, string> = {
  kanban: "/icons/24/action-kanban-board-fill.svg", /* 24 / Action / Kanban board Fill */
  list:   "/icons/24/editor-list.svg",             /* 24 / Editor / List */
};

const FAVORITES = [
  { id: 1, name: "Лукоморье Моб. Все",   sub: "Активный спринт", icon: "kanban" },
  { id: 2, name: "Релиз в разработке",   sub: "Тестирование",    icon: "kanban" },
  { id: 3, name: "Корпоративный портал", sub: "Дефекты",         icon: "list"   },
];

const RECENT = [
  { id: "ARCH-1051", name: "Стратегия мультитенантности", status: "Беклог", color: "#858FA3" },
  { id: "ARCH-1033", name: "Анализ и проектирование гибридной схемы хранения данных (Hot/Warm/Cold) для оптимизации затрат и и производительности", status: "В работе", color: "#2F9AFF" },
  { id: "ARCH-1042", name: "Проектирование отказоустойчивой event-driven архитектуры", status: "Беклог", color: "#858FA3" },
  { id: "ARCH-1033", name: "Service Mesh внедрение и миграция модуля отчётности для авторизации на ABAC", status: "В работе", color: "#2F9AFF" },
  { id: "ARCH-1069", name: "Оптимизация стратегии кэширования многоуровневой архитектуры (L1/L2/L3)", status: "В работе", color: "#2F9AFF" },
  { id: "ARCH-1020", name: "Рефакторинг модуля авторизации на основе ABAC для поддержки динамических бизнес-правил", status: "Готово", color: "#0DBE69" },
  { id: "ARCH-1015", name: "Разработка API Gateway с поддержкой rate limiting и circuit breaker", status: "Готово", color: "#0DBE69" },
];

export default function HomeScreen() {
  const { navigate } = useRouter();
  const [favOpen, setFavOpen] = useState(true);
  const [recentOpen, setRecentOpen] = useState(true);
  const [favPage, setFavPage] = useState(0);

  return (
    <div className="hs-screen">
      {/* Status bar */}
      <div className="hs-statusbar">19:39</div>

      {/* Header */}
      <div className="hs-header">
        <div className="hs-avatar">
          <img src="/assets/59bfba4547fffd860f08dd8186f25dca3cc6bed1.png" alt="avatar" />
        </div>
        <button className="hs-search-btn" onClick={() => navigate("search")}>
          <img src="/assets/ActionSearch.png" width="24" height="24" alt="search" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="hs-scroll">

        {/* ── Пространства ── */}
        <div className="hs-section">
          <div className="hs-section-row">
            <span className="hs-section-title">Пространства</span>
          </div>
          <div className="hs-spaces-row">
            {/* Кнопка "все пространства" */}
            <button className="hs-space-card hs-space-all" onClick={() => navigate("all-spaces")}>
              <img src="/icons/28/action-catalog-fill.svg" width="28" height="28" alt="spaces" />
            </button>
            {SPACES.map(s => (
              <button key={s.id} className="hs-space-card" onClick={() => navigate("spaces")}>
                <div className="hs-space-avatar-wrap">
                  <div className="hs-space-squircle" style={{ background: s.color }}>{s.letter}</div>
                  {s.fav && (
                    <svg className="hs-space-star" width="20" height="20" viewBox="0 0 20 20">
                      <path
                        d="M10 2.5l2.1 4.26 4.7.68-3.4 3.32.8 4.68L10 13.1l-4.2 2.34.8-4.68L3.2 7.44l4.7-.68L10 2.5z"
                        fill="#EE9123"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        style={{ paintOrder: "stroke fill" }}
                      />
                    </svg>
                  )}
                </div>
                <div className="hs-space-info">
                  <span className="hs-space-code">{s.code}</span>
                  <span className="hs-space-name">{s.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Избранные виды ── */}
        <div className="hs-widget">
          <div className="hs-widget-header">
            <div className="hs-widget-title-row">
              <img src="/assets/Vector1602.png" width="20" height="20" alt="" className="hs-header-star" />
              <span className="hs-widget-title">Избранные виды</span>
              <span className="hs-badge">{FAVORITES.length}</span>
            </div>
            <button className="hs-icon-btn" onClick={() => setFavOpen(!favOpen)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{ transform: favOpen ? "none" : "rotate(180deg)", transition: "200ms" }}>
                <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          {favOpen && (
            <>
              <div className="hs-fav-list">
                {FAVORITES.map((f, i) => (
                  <button key={i} className="hs-fav-item" onClick={() => navigate("project-view")}>
                    <div className="hs-fav-icon">
                      <img src={FAV_ICONS[f.icon]} width="24" height="24" alt="" />
                    </div>
                    <div className="hs-fav-text">
                      <span className="hs-fav-name">{f.name}</span>
                      <span className="hs-fav-sub">{f.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="hs-dots">
                {[0,1,2].map(i => (
                  <div key={i} className={`hs-dot ${i === favPage ? "active" : ""}`}
                    onClick={() => setFavPage(i)} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── Недавние ── */}
        <div className="hs-widget">
          <div className="hs-widget-header">
            <div className="hs-widget-title-row">
              <img src="/assets/Vector23.png" width="20" height="20" alt="" />
              <span className="hs-widget-title">Недавние</span>
              <span className="hs-badge">{RECENT.length}</span>
            </div>
            <button className="hs-icon-btn" onClick={() => setRecentOpen(!recentOpen)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                style={{ transform: recentOpen ? "none" : "rotate(180deg)", transition: "200ms" }}>
                <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          {recentOpen && (
            <div className="hs-recent-list">
              {RECENT.map((t, i) => (
                <button key={i} className="hs-task-row" onClick={() => navigate("task-card")}>
                  <span className="hs-task-name">{t.name}</span>
                  <div className="hs-task-meta">
                    <span className="hs-task-id">{t.id}</span>
                    <span className="hs-task-status" style={{ color: t.color }}>{t.status}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ height: 100 }} />
      </div>

      {/* TabBar */}
      <nav className="hs-tabbar">
        <button className="hs-tab active">
          <img src="/assets/ActionHomeFill.png" width="24" height="24" alt="" />
          <span>Главная</span>
        </button>
        <button className="hs-tab" onClick={() => navigate("tasks")}>
          <img src="/assets/DocumentFolderOpenFill.png" width="24" height="24" alt="" />
          <span>Задачи</span>
        </button>
        <button className="hs-tab" onClick={() => navigate("all-spaces")}>
          <img src="/assets/ActionCatalogFill.png" width="24" height="24" alt="" />
          <span>Пространства</span>
        </button>
      </nav>
    </div>
  );
}
