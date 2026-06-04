import { useState } from "react";
import { useRouter } from "../router/AppRouter";
import "./HomeScreen.css";

const SPACES = [
  { id: 1, name: "CRM B2C: проблемы", color: "#0055ff", letter: "C" },
  { id: 2, name: "Лукоморье", color: "#ee9123", letter: "Л" },
  { id: 3, name: "ARCH", color: "#6952f5", letter: "A" },
  { id: 4, name: "Тестирование", color: "#0dbe69", letter: "Т" },
  { id: 5, name: "Дефекты", color: "#e33a82", letter: "Д" },
];

const FAVORITES = [
  { id: 1, name: "Лукоморье Мо6. Все", sub: "Активный спринт", icon: "⊞" },
  { id: 2, name: "Релиз в разработке", sub: "Тестирование", icon: "⊞" },
  { id: 3, name: "Корпоративный портал", sub: "Дефекты", icon: "≡" },
];

const RECENT = [
  { id: "ARCH-1051", name: "Стратегия мультитенантности", status: "Беклог", statusColor: "neutral" },
  { id: "ARCH-1033", name: "Анализ и проектирование гибридной схемы хранения данных (Hot/Warm/Cold) для оптимизации затрат", status: "В работе", statusColor: "info" },
  { id: "ARCH-1042", name: "Проектирование отказоустойчивой event-driven архитектуры", status: "Беклог", statusColor: "neutral" },
  { id: "ARCH-1033", name: "Service Mesh внедрение и миграция модуля отчетности для авторизации на ABAC", status: "В работе", statusColor: "info" },
  { id: "ARCH-1069", name: "Оптимизация стратегии кэширования многоуровневой архитектуры (L1/L2/L3)", status: "В работе", statusColor: "info" },
  { id: "ARCH-1020", name: "Рефакторинг модуля авторизации на основе ABAC", status: "Готово", statusColor: "success" },
];

export default function HomeScreen() {
  const { navigate } = useRouter();
  const [favCollapsed, setFavCollapsed] = useState(false);
  const [recentCollapsed, setRecentCollapsed] = useState(false);
  const [favPage, setFavPage] = useState(0);

  return (
    <div className="home-screen">
      {/* Status bar */}
      <div className="home-status-bar">19:39</div>

      {/* Header */}
      <div className="home-header">
        <div className="home-avatar">
          <div className="home-avatar-img">М</div>
        </div>
        <button className="home-search-btn" onClick={() => navigate("search")}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="home-scroll">

        {/* Spaces widget */}
        <div className="home-section">
          <div className="home-section-header">
            <div className="home-section-title-row">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
                <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor"/>
                <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
                <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor"/>
              </svg>
              <span className="home-section-title">Пространства</span>
            </div>
            <button className="home-see-all" onClick={() => navigate("all-spaces")}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="home-spaces-scroll">
            {SPACES.map(s => (
              <button key={s.id} className="home-space-card" onClick={() => navigate("spaces")}>
                <div className="home-space-avatar" style={{ background: s.color }}>
                  {s.letter}
                </div>
                <span className="home-space-name">{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Favorites widget */}
        <div className="home-section">
          <div className="home-section-header">
            <div className="home-section-title-row">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 1.9.7-4L2.2 5.7l4-.6L8 1.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              <span className="home-section-title">Избранные виды</span>
              <span className="home-badge">{FAVORITES.length}</span>
            </div>
            <button className="home-collapse-btn" onClick={() => setFavCollapsed(!favCollapsed)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: favCollapsed ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>
                <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {!favCollapsed && (
            <>
              <div className="home-favorites-list">
                {FAVORITES.map((f, i) => (
                  <button key={i} className="home-fav-card" onClick={() => navigate("project-view")}>
                    <div className="home-fav-icon">≡</div>
                    <div className="home-fav-info">
                      <span className="home-fav-name">{f.name}</span>
                      <span className="home-fav-sub">{f.sub}</span>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                ))}
              </div>
              <div className="home-dots">
                {[0,1,2].map(i => (
                  <div key={i} className={`home-dot ${i === favPage ? "active" : ""}`} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Recent tasks widget */}
        <div className="home-section">
          <div className="home-section-header">
            <div className="home-section-title-row">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span className="home-section-title">Недавние</span>
              <span className="home-badge">{RECENT.length}</span>
            </div>
            <button className="home-collapse-btn" onClick={() => setRecentCollapsed(!recentCollapsed)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: recentCollapsed ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>
                <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          {!recentCollapsed && (
            <div className="home-recent-list">
              {RECENT.map((t, i) => (
                <button key={i} className="home-task-row" onClick={() => navigate("task-card")}>
                  <span className="home-task-name">{t.name}</span>
                  <div className="home-task-meta">
                    <span className="home-task-id">{t.id}</span>
                    <span className={`home-task-status status-${t.statusColor}`}>{t.status}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ height: "100px" }} />
      </div>

      {/* TabBar */}
      <nav className="home-tabbar">
        <button className="home-tab active" onClick={() => navigate("home")}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 9.5L11 3l8 6.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <span>Главная</span>
        </button>
        <button className="home-tab" onClick={() => navigate("tasks")}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 11l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Задачи</span>
        </button>
        <button className="home-tab" onClick={() => navigate("all-spaces")}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>Пространства</span>
        </button>
      </nav>
    </div>
  );
}
