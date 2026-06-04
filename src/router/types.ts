// ─── Screen identifiers ───────────────────────────────────────────────────────

export type TabId = "home" | "all-tasks" | "all-spaces";

export type ScreenId =
  // Entry
  | "splash"
  | "login"
  // Tab roots
  | "home"
  | "all-tasks"
  | "all-spaces"
  // Push screens
  | "search"
  | "task-card"
  | "project-view"
  // Modal screens
  | "search-filters"
  | "search-sort"
  | "tasks-filters"
  | "tasks-sort"
  | "spaces";

// ─── Navigation actions ───────────────────────────────────────────────────────

export type NavAction =
  /** Add screen on top of current stack */
  | { type: "push"; to: ScreenId }
  /** Replace current screen (no back) */
  | { type: "replace"; to: ScreenId }
  /** Switch active tab, resets push stack */
  | { type: "tab_switch"; to: TabId }
  /** Slide-up overlay, back closes it */
  | { type: "modal"; to: ScreenId }
  /** Pop one screen from the stack */
  | { type: "back" };

// ─── Router state ─────────────────────────────────────────────────────────────

export interface RouterState {
  /** Full navigation stack */
  stack: ScreenId[];
  /** Currently active bottom-tab root */
  activeTab: TabId;
}

// ─── Context exposed to screens ───────────────────────────────────────────────

export interface RouterContextType {
  screen: ScreenId;
  activeTab: TabId;
  canGoBack: boolean;
  dispatch: (action: NavAction) => void;
}

// ─── Props passed to every screen component ───────────────────────────────────

export interface ScreenProps {
  dispatch: (action: NavAction) => void;
  activeTab: TabId;
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const TAB_ROOTS: ScreenId[] = ["home", "all-tasks", "all-spaces"];
export const MODAL_SCREENS: ScreenId[] = [
  "search-filters",
  "search-sort",
  "tasks-filters",
  "tasks-sort",
  "spaces",
];
