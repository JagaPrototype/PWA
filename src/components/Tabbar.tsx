import { useRouter } from "../router/AppRouter";
import { ICONS } from "../config/icons.registry";

const TABS = [
  { id: "home"       as const, label: "Главная",      icon: ICONS.actionHomeFill        },
  { id: "all-tasks"  as const, label: "Задачи",       icon: ICONS.documentFolderOpenFill },
  { id: "all-spaces" as const, label: "Пространства", icon: ICONS.actionCatalogFill     },
];

export default function TabBar() {
  const { activeTab, screen, dispatch } = useRouter();

  // Показываем только на tab-root экранах
  const tabScreens = ["home", "all-tasks", "all-spaces"];
  if (!tabScreens.includes(screen as string)) return null;

  return (
    <div className="shared-tabbar">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className="shared-tab"
            onClick={() => dispatch({ type: "tab_switch", to: tab.id })}
          >
            <img
              className={`shared-tab-icon${isActive ? " shared-tab-icon--active" : " shared-tab-icon--inactive"}`}
              src={tab.icon}
              alt=""
            />
            <span className={`shared-tab-label${isActive ? "" : " shared-tab-label--inactive"}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
