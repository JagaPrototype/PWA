/**
 * DesignRegistry — единственный источник дизайн-токенов проекта.
 *
 * Источник: «Сова Styles» (color.css, text.css, effect.css).
 * Используется для типизации и проверки корректности применения токенов.
 *
 * CSS-классы из text.css и effect.css подключены глобально через global.css.
 * CSS-переменные цветов объявлены в tokens.css.
 */

// ─── Цвета (light theme, color.css) ──────────────────────────────────────────

export const COLORS = {
  // Foreground
  fgDefault:   "rgba(14, 17, 23, 1)",      // текст, иконки активные
  fgSoft:      "rgba(68, 83, 113, 1)",      // текст вторичный, иконки soft
  fgMuted:     "rgba(133, 143, 163, 1)",    // плейсхолдеры, подписи
  fgDisabled:  "rgba(68, 83, 113, 0.5)",    // отключённые иконки

  // Background
  surface1:    "rgba(255, 255, 255, 1)",    // основной белый фон
  surface2:    "rgba(241, 243, 249, 1)",    // фон строк/карточек
  surface3:    "rgba(232, 235, 244, 1)",    // фон бейджей, кнопок свернуть
  surface4:    "rgba(208, 217, 233, 1)",    // неактивные dots

  // Border
  borderMuted: "rgba(236, 238, 241, 1)",    // разделители
  borderSoft:  "rgba(208, 212, 220, 1)",
  borderDefault: "rgba(161, 169, 184, 1)",

  // Accent
  accent:      "rgba(0, 85, 255, 1)",

  // Static (не меняются в dark theme)
  warning:     "rgba(238, 145, 35, 1)",     // звёздочки, предупреждения
  success:     "rgba(13, 190, 105, 1)",
  error:       "rgba(255, 71, 71, 1)",
  info:        "rgba(25, 152, 255, 1)",

  // Status (для чипов задач)
  status01:    "rgba(59, 188, 158, 1)",     // бирюза
  status02:    "rgba(47, 154, 255, 1)",     // синий
  status03:    "rgba(105, 82, 245, 1)",     // фиолет
  status04:    "rgba(153, 36, 255, 1)",     // пурпур
  status05:    "rgba(227, 58, 130, 1)",     // розовый
  status06:    "rgba(255, 79, 18, 1)",      // оранжево-красный
} as const;

// ─── Типографика (mobile, text.css) ──────────────────────────────────────────
// Используй CSS-классы напрямую: className="mobile-H2"
// Этот объект — справочник для разработчика.

export const TEXT = {
  // Заголовки
  H1:  { size: 32, line: 36, weight: 600, ls: -0.8 },  // .mobile-H1
  H2:  { size: 26, line: 31, weight: 600, ls: -0.5 },  // .mobile-H2  ← Пространства
  H3:  { size: 22, line: 24, weight: 600, ls: -0.5 },  // .mobile-H3  ← буква аватара
  H4:  { size: 18, line: 20, weight: 600, ls: -0.3 },  // .mobile-H4
  H5:  { size: 16, line: 18, weight: 600, ls: -0.3 },  // .mobile-H5

  // Body
  bodyL:       { size: 16, line: 18, weight: 400, ls: -0.3 },  // .mobile-body-l
  bodyLStrong: { size: 16, line: 18, weight: 500, ls: -0.3 },  // .mobile-body-l-strong
  bodyM:       { size: 15, line: 17, weight: 400, ls: -0.2 },  // .mobile-body-m     ← task name
  bodyMStrong: { size: 15, line: 17, weight: 500, ls: -0.2 },  // .mobile-body-m-strong ← view name

  // Description
  descL:       { size: 14, line: 16, weight: 400, ls: -0.2 },  // .mobile-description-l
  descLStrong: { size: 14, line: 16, weight: 500, ls: -0.2 },  // .mobile-description-l-strong
  descM:       { size: 13, line: 16, weight: 400, ls: -0.2 },  // .mobile-description-m ← subtitles
  descMStrong: { size: 13, line: 16, weight: 500, ls: -0.2 },  // .mobile-description-m-strong

  // Caption
  capL:        { size: 12, line: 13, weight: 400, ls: -0.1 },  // .mobile-caption-l ← space code, task id
  capLStrong:  { size: 12, line: 13, weight: 500, ls: -0.1 },  // .mobile-caption-l-strong
  capM:        { size: 11, line: 12, weight: 400, ls: -0.1 },  // .mobile-caption-m
  capMStrong:  { size: 11, line: 12, weight: 500, ls: -0.1 },  // .mobile-caption-m-strong ← tab labels, badges
  capS:        { size: 10, line: 11, weight: 400, ls: -0.1 },  // .mobile-caption-s
  capSStrong:  { size: 10, line: 11, weight: 500, ls: -0.1 },  // .mobile-caption-s-strong
} as const;

// ─── Тени (effect.css) ────────────────────────────────────────────────────────
// Используй CSS-классы напрямую: className="shadow-bottom-controls"

export const SHADOWS = {
  none:           "shadow-none",
  bottomS:        "shadow-bottom-s",          // лёгкие карточки
  bottomM:        "shadow-bottom-m",          // поповеры
  bottomL:        "shadow-bottom-l",          // модальные окна
  bottomXL:       "shadow-bottom-xl",         // самые поднятые
  bottomControls: "shadow-bottom-controls",   // кнопки, контролы
  topControls:    "shadow-top-controls",      // TabBar
} as const;

// ─── Border radius (из макетов Pixso, в дизайн-системе не токенизированы) ────

export const RADIUS = {
  full:    999,   // pill — кнопки свернуть, бейджи
  xl:      24,    // белая панель контента
  l:       20,    // карточки пространств
  m:       16,    // squircle-аватары, кнопка поиска
  iconWrap: 12,   // обёртка иконок в строках видов
  card:    24,    // строки видов (view rows)
  tabBar:  0,     // TabBar — без скруглений
} as const;

// ─── Spacing (из макетов Pixso, в дизайн-системе не токенизированы) ──────────

export const SPACING = {
  pagePadding:    16,   // горизонтальный отступ от края экрана
  widgetPadding:  12,   // внутренний отступ виджетов
  headerHeight:   52,   // высота заголовка виджета
  rowHeight:      64,   // высота строки (вид, задача, пространство)
  avatarSize:     56,   // аватар пользователя / squircle пространства
  iconWrapSize:   40,   // обёртка иконки в строке вида
  iconSize:       24,   // стандартная иконка
  tabBarHeight:   83,   // высота TabBar
  toggleSize:     36,   // кнопка свернуть/развернуть виджет
} as const;
