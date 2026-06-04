/**
 * IconRegistry — единственный источник иконок в проекте.
 *
 * Источник: набор «Сова Icons» (16 пакетов, ~1488 SVG).
 * Хранение: /public/icons/sova/{key}.svg
 * Использование: <img src={ICONS.actionSearch} />
 *
 * ПРАВИЛА:
 * - использовать только иконки из этого реестра
 * - не подключать сторонние иконочные библиотеки
 * - не использовать PNG-иконки из /assets/
 * - если нужной иконки нет — сообщить, не придумывать замену
 */

const BASE = `${import.meta.env.BASE_URL}icons/sova`;
const i = (name: string) => `${BASE}/${name}.svg` as const;

export const ICONS = {

  // ── Action ──────────────────────────────────────────────────────────────
  actionHomeFill:           i("action-home-fill"),          // TabBar «Главная» (активна)
  actionHome:               i("action-home"),               // TabBar «Главная» (неактивна)
  actionSearch:             i("action-search"),             // Кнопка поиска
  actionCatalogFill:        i("action-catalog-fill"),       // Кнопка «Все пространства», TabBar
  actionCatalog:            i("action-catalog"),            // TabBar «Пространства» (неактивна)
  actionKanbanBoardFill:    i("action-kanban-board-fill"),  // Вид: Kanban
  actionKanbanBoard:        i("action-kanban-board"),       // Вид: Kanban (outline)
  actionFilterFill:         i("action-filter-fill"),        // Фильтр (активен)
  actionFilter:             i("action-filter"),             // Фильтр
  actionFiltersFill:        i("action-filters-fill"),       // Множественный фильтр
  actionEqualiser:          i("action-equaliser"),          // Equaliser
  actionEqualiserFill:      i("action-equaliser-fill"),     // Equaliser (fill)
  actionKebabMenu:          i("action-kebab-menu"),         // Kebab-меню пространств
  actionMore:               i("action-more"),               // Доп. действия (•••)
  actionAdd:                i("action-add"),                // Добавить / FAB
  actionCopyFill:           i("action-copy-fill"),          // Копировать
  actionAttachment:         i("action-attachment"),         // Вложения
  actionSettingsFill:       i("action-settings-fill"),      // Настройки
  actionSettings:           i("action-settings"),           // Настройки (outline)
  actionNotificationFill:   i("action-notification-fill"),  // Уведомления
  actionTrashFill:          i("action-trash-fill"),         // Удалить

  // ── Navigation ──────────────────────────────────────────────────────────
  navChevronUp:             i("navigation-chevron-up"),           // —
  navChevronUpMini:         i("navigation-chevron-up-mini"),      // Свернуть виджет
  navChevronDown:           i("navigation-chevron-down"),         // —
  navChevronDownMini:       i("navigation-chevron-down-mini"),    // Развернуть виджет
  navChevronRight:          i("navigation-chevron-right"),        // Стрелка вправо в строках
  navChevronRightMini:      i("navigation-chevron-right-mini"),   // Мини-стрелка вправо
  navChevronLeft:           i("navigation-chevron-left"),         // Back-кнопка
  navChevronLeftMini:       i("navigation-chevron-left-mini"),    // Мини back
  navClose:                 i("navigation-close"),                // Закрыть модалку
  navCloseLarge:            i("navigation-close-large"),          // Закрыть (крупный)
  navCheck:                 i("navigation-check"),                // Применить / OK
  navCaretSort:             i("navigation-caret-sort"),           // Сортировка
  navRepeat:                i("navigation-repeat"),               // подстатус «В процессе»
  navRepeat20:              i("navigation-repeat-20"),            // подстатус 20px

  // ── Document ────────────────────────────────────────────────────────────
  documentFolderOpenFill:   i("document-folder-open-fill"),   // TabBar «Задачи» (активна)
  documentFolderOpen:       i("document-folder-open"),        // TabBar «Задачи» (неактивна)

  // ── Rating ──────────────────────────────────────────────────────────────
  ratingStarFill:           i("rating-star-fill"),     // Виджет «Избранные виды», бейдж
  ratingStar:               i("rating-star"),           // Звезда (outline)
  ratingFavoriteFill:       i("rating-favorite-fill"), // Избранное (другая форма)

  // ── Organize ────────────────────────────────────────────────────────────
  organizeHistory:          i("organize-history"),         // Заголовок виджета «Недавние»
  organizeHistoryAction:    i("organize-history-action"),  // Таб «История» TaskCard
  organizeTimeFill:         i("organize-time-fill"),       // Дедлайн / срок

  // ── Editor ──────────────────────────────────────────────────────────────
  editorListFill:           i("editor-list-fill"),  // Вид: Список (fill)
  editorList:               i("editor-list"),        // Вид: Список (outline)

  // ── Communication ───────────────────────────────────────────────────────
  commCommentsFill:         i("communication-comments-fill"),       // Таб «Комментарии»
  commComments:             i("communication-comments"),            // Комментарии (outline)
  commConnect:              i("communication-connect"),             // Связи задачи
  commParentConnection:     i("communication-parent-connection"),   // Родительская связь
  commParentBranch:         i("communication-parent-branch"),       // Ветка родит. связи
  commTaskRemoveFill:       i("communication-task-remove-fill"),    // Удалить задачу

  // ── Priority ────────────────────────────────────────────────────────────
  priorityHighFill:         i("priority-high-fill"),              // Приоритет: Высокий
  priorityVeryHighFill:     i("priority-very-high-fill"),         // Приоритет: Очень высокий
  priorityNormalFill:       i("priority-normal-fill"),            // Приоритет: Нормальный
  priorityLowFill:          i("priority-low-fill"),               // Приоритет: Низкий
  priorityNegNormalFill:    i("priority-negative-normal-fill"),   // Приоритет: Отриц. нормальный
  priorityNegLowFill:       i("priority-negative-low-fill"),      // Приоритет: Отриц. низкий

  // ── Users ───────────────────────────────────────────────────────────────
  userFill:                 i("users-user-fill"),   // Исполнитель
  usersFill:                i("users-users-fill"),  // Несколько исполнителей

  // ── Alert ───────────────────────────────────────────────────────────────
  alertInformationFill:     i("alert-information-fill"),  // таб Информация
  alertInformation:         i("alert-information"),

  // ── Document ────────────────────────────────────────────────────────────
  documentFill:             i("document-fill"),           // иконка проекта

  // ── Organize: Calendar ──────────────────────────────────────────────────
  organizeCalendarFill:     i("organize-calendar-fill"),  // поля дат

  // ── Rating: Tags ────────────────────────────────────────────────────────
  ratingTagsFill:           i("rating-tags-fill"),        // метки

  // ── Entertainment (Сова Icons_Place) ────────────────────────────────────
  entertainmentPaletteFill: i("entertainment-palette-fill"), // Пространство «Палитра»
  entertainmentPalette:     i("entertainment-palette"),

  // ── Work (Сова Icons_Place) ─────────────────────────────────────────────
  workBoardFill:            i("work-board-fill"),       // Вид: доска
  workBoard:                i("work-board"),
  workListFill:             i("work-list-fill"),        // Вид: список (Work)
  workList:                 i("work-list"),
  workMilestonesFill:       i("work-milestones-fill"),  // Вехи

} as const;

export type IconKey = keyof typeof ICONS;

/**
 * Вспомогательная функция для использования в JSX:
 * <Icon name="actionSearch" size={24} />
 */
export function iconSrc(key: IconKey): string {
  return ICONS[key];
}
