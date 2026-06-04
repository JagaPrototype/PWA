/**
 * AssetRegistry — реестр визуальных ассетов проекта (не иконки).
 *
 * Сюда входят:
 * - фотографии (аватары пользователей, изображения)
 * - PNG-скриншоты экранов (эталоны для сравнения)
 * - логотипы
 * - прочие графические элементы, не являющиеся UI-иконками
 *
 * Иконки хранятся в icons.registry.ts — НЕ здесь.
 *
 * ПРАВИЛА:
 * - PNG использовать только там, где это реальное изображение (фото, иллюстрация)
 * - не использовать PNG как замену SVG-иконок
 * - все пути относительно /public
 */

// ─── Аватары пользователей ────────────────────────────────────────────────────

export const AVATARS = {
  /** Аватар текущего пользователя в шапке Home */
  currentUser: "/assets/avatar-me.png",

  /** Реальные фотографии исполнителей (из фотки.zip) */
  photo1: "/assets/photo-1.png",
  photo2: "/assets/photo-2.png",
  photo3: "/assets/photo-3.png",

  /** Дополнительные аватары для hardcoded данных */
  user0: "/assets/Avatar0.png",
  user1: "/assets/Avatar1.png",
  user2: "/assets/Avatar2.png",
  user3: "/assets/Avatar3.png",
  user4: "/assets/Avatar4.png",
  user5: "/assets/Avatar5.png",
  user6: "/assets/Avatar6.png",
  user7: "/assets/Avatar7.png",
  user8: "/assets/Avatar8.png",
} as const;

// ─── Логотип ──────────────────────────────────────────────────────────────────

export const LOGOS = {
  yaga:     "/assets/logo-yaga.svg",
  yagaPng:  "/assets/yaga.png",
} as const;

// ─── Индикаторы / системные элементы ─────────────────────────────────────────

export const SYSTEM = {
  /** iOS-статусбар (если нужен в заглушках) */
  statusBar: "/downloads/Status Bar.svg",
} as const;

// ─── Эталонные PNG экранов (для CompareOverlay) ───────────────────────────────
// Используются только в dev-режиме через CompareOverlay.
// В production-сборке не включаются в бандл.

export const SCREEN_REFS = {
  home: {
    default:   "/screens/home/default.png",
    collapsed: "/screens/home/collapsed.png",
    empty:     "/screens/home/empty.png",
    full:      "/screens/home/full.png",
  },
  login: {
    default: "/screens/login/default.png",
    error:   "/screens/login/error.png",
  },
  allTasks: {
    default: "/screens/all-tasks/default.png",
  },
  allSpaces: {
    default: "/screens/all-spaces/default.png",
    kebab:   "/screens/all-spaces/kebab.png",
  },
  taskCard: {
    tabMain:        "/screens/task-card/tab-main.png",
    tabAttachments: "/screens/task-card/tab-attachments.png",
    tabComments:    "/screens/task-card/tab-comments.png",
    tabRelations:   "/screens/task-card/tab-relations.png",
    tabHistory:     "/screens/task-card/tab-history.png",
  },
  projectView: {
    default: "/screens/project-view/default.png",
  },
  search: {
    default: "/screens/search/default.png",
  },
  searchFilters: {
    default: "/screens/search-filters/default.png",
  },
  searchSort: {
    default: "/screens/search-sort/default.png",
  },
  tasksFilters: {
    default: "/screens/tasks-filters/default.png",
  },
  tasksSort: {
    default: "/screens/tasks-sort/default.png",
  },
  spaces: {
    default: "/screens/spaces/default.png",
  },
} as const;

// ─── Статусные индикаторы (из старых ассетов, пока не заменены) ───────────────
// Использовать только если нет эквивалента в Icons Registry

export const INDICATORS = {
  /** Pagination dots (если нужны как PNG) */
  dotActive:   "/assets/indicate.png",
  dotInactive: "/assets/indicate0.png",
} as const;
