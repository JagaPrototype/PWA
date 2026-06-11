import { lazy } from "react";
import type { ScreenId, ScreenProps } from "../router/types";

// ─── Screen component type ────────────────────────────────────────────────────

export type ScreenComponent = React.LazyExoticComponent<
  React.ComponentType<ScreenProps>
>;

// ─── Registry entry ───────────────────────────────────────────────────────────

export interface ScreenConfig {
  id: ScreenId;
  component: ScreenComponent;
}

// ─── Placeholder factory ──────────────────────────────────────────────────────
// Creates a lazy wrapper around PlaceholderScreen with a fixed label.
// Replace each entry below with the real screen component when ready.

function placeholder(label: string): ScreenComponent {
  return lazy(() =>
    import("../screens/placeholder/PlaceholderScreen").then((mod) => ({
      default: (props: ScreenProps) => mod.default({ ...props, label }),
    }))
  );
}

// ─── Screen registry ─────────────────────────────────────────────────────────

export const SCREENS: Record<ScreenId, ScreenComponent> = {
  // Entry
  splash:          lazy(() => import("../screens/splash")),
  login:           lazy(() => import("../screens/login")),

  // Tab roots
  home:            lazy(() => import("../screens/home")),
  "all-tasks":     lazy(() => import("../screens/all-tasks")),
  "all-spaces":    lazy(() => import("../screens/all-spaces")),

  // Push screens
  search:          lazy(() => import("../screens/search")),
  "task-card":     lazy(() => import("../screens/task-card")),
  "project-view":  lazy(() => import("../screens/project-view")),

  // Modal screens
  "search-filters": placeholder("Фильтры поиска"),
  "search-sort":    placeholder("Сортировка поиска"),
  "tasks-filters":  lazy(() => import("../screens/tasks-filters")),
  "tasks-sort":     lazy(() => import("../screens/tasks-sort")),
  spaces:            placeholder("Пространства (kebab)"),
  "priority-select": lazy(() => import("../screens/priority-select")),
};
