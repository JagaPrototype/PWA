import type { ScreenId } from "../router/types";

// ─── Reference PNG variant ────────────────────────────────────────────────────

export interface ScreenVariant {
  /** Human-readable name shown in CompareOverlay selector */
  label: string;
  /** Path relative to /public */
  src: string;
}

// ─── Manifest entry ───────────────────────────────────────────────────────────

export interface ScreenManifestEntry {
  /** Display name */
  name: string;
  /** All reference PNG variants for this screen */
  variants: ScreenVariant[];
}

// ─── Full manifest ────────────────────────────────────────────────────────────
// Each screen lists every PNG state that needs to be visually matched.
// Add or rename variants as mockups arrive.

export const SCREEN_MANIFEST: Record<ScreenId, ScreenManifestEntry> = {
  splash: {
    name: "Заставка",
    variants: [
      { label: "default", src: "/screens/splash/default.png" },
    ],
  },

  login: {
    name: "Авторизация",
    variants: [
      { label: "default", src: "/screens/login/default.png" },
      { label: "error",   src: "/screens/login/error.png" },
    ],
  },

  home: {
    name: "Главная",
    variants: [
      { label: "default (раскрыто)",  src: "/screens/home/default.png" },
      { label: "свёрнуто",            src: "/screens/home/collapsed.png" },
      { label: "пусто",               src: "/screens/home/empty.png" },
      { label: "полная прокрутка",    src: "/screens/home/full.png" },
    ],
  },

  "all-tasks": {
    name: "Все задачи",
    variants: [
      { label: "default", src: "/screens/all-tasks/default.png" },
    ],
  },

  "all-spaces": {
    name: "Все пространства",
    variants: [
      { label: "default", src: "/screens/all-spaces/default.png" },
      { label: "kebab",   src: "/screens/all-spaces/kebab.png" },
    ],
  },

  "task-card": {
    name: "Карточка задачи",
    variants: [
      { label: "Основной",    src: "/screens/task-card/tab-main.png" },
      { label: "Вложения",    src: "/screens/task-card/tab-attachments.png" },
      { label: "Комментарии", src: "/screens/task-card/tab-comments.png" },
      { label: "Связи",       src: "/screens/task-card/tab-relations.png" },
      { label: "История",     src: "/screens/task-card/tab-history.png" },
    ],
  },

  "project-view": {
    name: "Вид проекта",
    variants: [
      { label: "default", src: "/screens/project-view/default.png" },
    ],
  },

  search: {
    name: "Поиск",
    variants: [
      { label: "default", src: "/screens/search/default.png" },
    ],
  },

  "search-filters": {
    name: "Фильтры поиска",
    variants: [
      { label: "default", src: "/screens/search-filters/default.png" },
    ],
  },

  "search-sort": {
    name: "Сортировка поиска",
    variants: [
      { label: "default", src: "/screens/search-sort/default.png" },
    ],
  },

  "tasks-filters": {
    name: "Фильтры задач",
    variants: [
      { label: "default", src: "/screens/tasks-filters/default.png" },
    ],
  },

  "tasks-sort": {
    name: "Сортировка задач",
    variants: [
      { label: "default", src: "/screens/tasks-sort/default.png" },
    ],
  },

  spaces: {
    name: "Пространства (kebab)",
    variants: [
      { label: "default", src: "/screens/spaces/default.png" },
    ],
  },
};
