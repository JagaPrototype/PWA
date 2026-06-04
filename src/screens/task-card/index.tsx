import { useState } from "react";
import "./TaskCard.css";
import type { ScreenProps } from "../../router/types";
import { ICONS } from "../../config/icons.registry";
import { AVATARS } from "../../config/assets.registry";

// ─── Types & Data ─────────────────────────────────────────────────────────────

const TABS = [
  { id: "info",      label: "Информация",  icon: ICONS.alertInformationFill  },
  { id: "comments",  label: "Комментарии", icon: ICONS.commCommentsFill      },
  { id: "attach",    label: "Вложения",    icon: ICONS.actionAttachment      },
  { id: "relations", label: "Связи",       icon: ICONS.commConnect           },
  { id: "history",   label: "История",     icon: ICONS.organizeHistoryAction },
] as const;
type TabId = typeof TABS[number]["id"];

const TASK = {
  id:        "LKMRMOB-720",
  project:   { name: "Мобильная Яга", color: "#2EAA6E" },
  name:      "Проектирование отказоустойчивой event-driven архитектуры",
  status:    "В разработке",
  subStatus: "В процессе",
  priority:  "Критичный",
  description: `Спроектировать и задокументировать отказоустойчивую event-driven архитектуру, которая станердным способом асинхронного взаимодействия между сервисами. Фокус — на надёжности (reliability) и устойчивости (resilience).\n\nЧто входит в проектирование:\nВыбор и обоснование ядра EDA: Сравнение и выбор брокера сообщений/событий (Apache Kafka, Apache Pulsar, RabbitMQ, AWS Kinesis/SQS) с учетом требований к персистентност...`,
};

const TAGS = [
  { label: "Яга",          bg: "rgba(255,79,18,0.12)",  color: "rgba(255,79,18,1)"   },
  { label: "Мобилка",      bg: "rgba(0,85,255,0.12)",   color: "rgba(0,85,255,1)"    },
  { label: "Доработка",    bg: "rgba(13,190,105,0.12)", color: "rgba(13,190,105,1)"  },
  { label: "Вне текущего", bg: "rgba(232,235,244,1)",   color: "rgba(68,83,113,1)"   },
];

const IMPORTANT_FIELDS = [
  { label: "Версия",                  value: "1.01",                                              type: "text"     },
  { label: "Чек-лист",                value: "Сделать ресерч бесплатных плагинов",                type: "checkbox" },
  { label: "Числовое значение",       value: "100",                                               type: "text"     },
  { label: "Подсказка",               value: "Текстовое поле",                                    type: "hint"     },
  { label: "План",                    value: "04 дек 2025 – 05 дек 2025",                         type: "date"     },
  { label: "Вложения",                value: "Attachment_name-1.xls",    size: "256 КБ",          type: "file"     },
  { label: "Факт",                    value: "04 дек 2025 – 05 дек 2025",                         type: "date"     },
  { label: "Одиночная дата",          value: "31 дек 2025",                                       type: "date"     },
  { label: "Оценка",                  value: "1н 1д 1м",                                          type: "text"     },
  { label: "Список",                  value: "1.0.0.1  ·  1.2",                                   type: "text"     },
  { label: "Спринт",                  value: "Спринт 45",                status: "Активно",       type: "sprint"   },
  { label: "Ссылка на старый дизайн", value: "https://pixso.net/app/design/YY6cUXiH6lm5",         type: "link"     },
] as const;

const ATTACHMENTS = [
  { date: "16 сентября", files: [
    { name: "Requirements_name-2.xls",        size: "12,1 МБ" },
  ]},
  { date: "Сегодня", files: [
    { name: "ФТ для авторизации.doc",          size: "12,1 МБ" },
    { name: "Вторая версия ФТ.doc",            size: "12,1 МБ" },
    { name: "Новые требования законодател...", size: "12,1 МБ" },
  ]},
];

const COMMENTS_DATA = [
  { date: "16 сентября", messages: [
    { own: false, senderId: "alex", name: "Александра Петрова",  avatar: AVATARS.photo1, text: "Привет!",                                                              time: "18:07" },
    { own: false, senderId: "alex", name: null,                  avatar: AVATARS.photo1, text: "Нужно спроектировать отказоустойчивой event-driven архитектуры (EDA)", time: "18:07" },
    { own: false, senderId: "evg",  name: "Евгений Онегович",    avatar: AVATARS.photo2, text: "Приветик!",                                                            time: "18:07" },
  ]},
  { date: "Сегодня", messages: [
    { own: true,  senderId: "me",   name: "Михаил Константинов", avatar: null,           text: "1",                       time: "18:07" },
    { own: true,  senderId: "me",   name: null,                  avatar: null,           text: "Привет!",                 time: "18:07" },
    { own: false, senderId: "alex", name: null,                  avatar: AVATARS.photo1, text: "Привет! Очень интересно", time: "18:07" },
  ]},
];

const RELATIONS_DATA = [
  {
    title: "Родительская задача",
    icon: ICONS.commParentConnection,
    count: null as number | null,
    subtitle: null as string | null,
    expanded: true,
    tasks: [{
      name: "Стратегия мультитенантности",
      id: "RCH-1051",
      status: "В работе",
      statusBg: "rgba(47,154,255,0.12)", statusColor: "rgba(47,154,255,1)",
      priority: ICONS.priorityHighFill,
      project: { letter: "R", color: "#5C8FF5" },
      assignees: [AVATARS.photo1, AVATARS.photo2, AVATARS.photo3],
    }],
    subGroups: null as null | { label: string; count: number }[],
  },
  {
    title: "Дочерние задачи",
    icon: ICONS.commParentBranch,
    count: 3 as number | null,
    subtitle: "Отображаются в иерархии" as string | null,
    expanded: true,
    tasks: [
      {
        name: "Стратегия мультитенантности",
        id: "RCH-1051",
        status: "В работе",
        statusBg: "rgba(47,154,255,0.12)", statusColor: "rgba(47,154,255,1)",
        priority: ICONS.priorityHighFill,
        project: { letter: "R", color: "#5C8FF5" },
        assignees: [AVATARS.photo1],
      },
      {
        name: "Аналитика Event-driven архитектуры",
        id: "RCH-1052",
        status: "Готово",
        statusBg: "rgba(13,190,105,0.12)", statusColor: "rgba(13,190,105,1)",
        priority: ICONS.priorityNormalFill,
        project: { letter: "R", color: "#5C8FF5" },
        assignees: [AVATARS.photo1, AVATARS.photo2, AVATARS.photo3],
      },
      {
        name: "Event-driven архитектура",
        id: "RCH-1053",
        status: "Согласование лида",
        statusBg: "rgba(105,82,245,0.12)", statusColor: "rgba(105,82,245,1)",
        priority: ICONS.priorityLowFill,
        project: { letter: "R", color: "#5C8FF5" },
        assignees: [AVATARS.photo1, AVATARS.photo2],
      },
    ] as any[],
    subGroups: null as null | { label: string; count: number }[],
  },
  {
    title: "Связанные задачи",
    icon: ICONS.commConnect,
    count: 7 as number | null,
    subtitle: "Не отображаются в иерархии, могут быть из других пространств" as string | null,
    expanded: true,
    tasks: [] as any[],
    subGroups: [
      {
        label: "Блокирование", count: 4,
        subLabels: [
          {
            label: "Блокирует",
            tasks: [
              { name: "Аналитика Event-driven архитектуры", id: "RCH-1051", status: "Отдано в разработку", statusBg: "rgba(232,235,244,1)", statusColor: "rgba(68,83,113,1)", priority: ICONS.priorityNormalFill, project: { letter: "R", color: "#5C8FF5" }, assignees: [AVATARS.photo1, AVATARS.photo2, AVATARS.photo3] },
            ],
          },
          {
            label: "Заблокировано",
            tasks: [
              { name: "Аналитика Event-driven архитектуры", id: "RCH-1051", status: "Согласование лида", statusBg: "rgba(105,82,245,0.12)", statusColor: "rgba(105,82,245,1)", priority: ICONS.priorityNormalFill, project: { letter: "R", color: "#5C8FF5" }, assignees: [AVATARS.photo1, AVATARS.photo2] },
              { name: "Стратегия мультитенантности",       id: "RCH-1051", status: "Согласование лида", statusBg: "rgba(105,82,245,0.12)", statusColor: "rgba(105,82,245,1)", priority: ICONS.priorityHighFill,   project: { letter: "R", color: "#5C8FF5" }, assignees: [AVATARS.photo1] },
              { name: "Event-driven архитектура",          id: "RCH-1051", status: "Согласование лида", statusBg: "rgba(105,82,245,0.12)", statusColor: "rgba(105,82,245,1)", priority: ICONS.priorityLowFill,    project: { letter: "R", color: "#5C8FF5" }, assignees: [AVATARS.photo1] },
            ],
          },
        ],
      },
      {
        label: "Влияет", count: 4,
        subLabels: [
          {
            label: "Влияет на",
            tasks: [
              { name: "Аналитика Event-driven архитектуры", id: "RCH-105",  status: "Согласование лида", statusBg: "rgba(105,82,245,0.12)", statusColor: "rgba(105,82,245,1)", priority: ICONS.priorityNormalFill, project: { letter: "R", color: "#5C8FF5" }, assignees: [AVATARS.photo1, AVATARS.photo2, AVATARS.photo3] },
              { name: "Стратегия мультитенантности",       id: "RCH-1051", status: "Согласование лида", statusBg: "rgba(105,82,245,0.12)", statusColor: "rgba(105,82,245,1)", priority: ICONS.priorityHighFill,   project: { letter: "R", color: "#5C8FF5" }, assignees: [AVATARS.photo1] },
              { name: "Event-driven архитектура",          id: "RCH-105",  status: "Согласование лида", statusBg: "rgba(105,82,245,0.12)", statusColor: "rgba(105,82,245,1)", priority: ICONS.priorityLowFill,    project: { letter: "R", color: "#5C8FF5" }, assignees: [AVATARS.photo1, AVATARS.photo2] },
            ],
          },
        ],
      },
    ] as any[],
  },
];

const HISTORY_DATA = [
  { user: "Александра Петрова", avatar: AVATARS.photo1, time: "1 ч назад",  text: "Изменила значение поля Статус",                action: "Беклог → В работе" },
  { user: "Александра Петрова", avatar: AVATARS.photo1, time: "3 ч назад",  text: "Изменила Тег задачи: Тег задачи",              action: null },
  { user: "Александра Петрова", avatar: AVATARS.photo1, time: "5 ч назад",  text: "Изменила значение поля Подстатус",             action: "В разработке" },
  { user: "Иван Яшин",          avatar: AVATARS.photo3, time: "1 д назад",  text: "Прикрепил вложение: Requirements_name-2.xls", action: null },
  { user: "Иван Яшин",          avatar: AVATARS.photo3, time: "2 д назад",  text: "Создал задачу",                               action: null },
];

// ─── Переиспользуемая строка-карточка задачи в Relations ──────────────────────

function RelTaskRow({ task, dispatch }: { task: any; dispatch: ScreenProps["dispatch"] }) {
  return (
    <button
      className="tc-rel-row"
      onClick={() => dispatch({ type: "push", to: "task-card" })}
    >
      <div className="tc-rel-task-name">{task.name}</div>
      <div className="tc-rel-task-meta">
        {task.priority && <img src={task.priority} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />}
        {task.project && (
          <span className="tc-rel-project-avatar" style={{ background: task.project.color }}>
            {task.project.letter}
          </span>
        )}
        <span className="tc-rel-task-id">{task.id}</span>
        {task.assignees && (
          <div className="tc-rel-assignees">
            {task.assignees.map((av: string, ai: number) => (
              <img key={ai} src={av} alt="" className="tc-rel-assignee-img" style={{ marginLeft: ai > 0 ? -5 : 0 }} />
            ))}
          </div>
        )}
        <span className="tc-rel-status-chip" style={task.statusBg ? { background: task.statusBg, color: task.statusColor } : undefined}>
          {task.status}
        </span>
      </div>
    </button>
  );
}

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function TaskCardScreen({ dispatch }: ScreenProps) {
  const [activeTab, setActiveTab]         = useState<TabId>("info");
  const [descExpanded, setDescExpanded]   = useState(false);
  const [generalOpen, setGeneralOpen]     = useState(true);
  const [importantOpen, setImportantOpen] = useState(true);
  const [commentText, setCommentText]     = useState("");
  const [relExpanded, setRelExpanded]     = useState<boolean[]>(RELATIONS_DATA.map((r) => r.expanded));
  const [subGroupsExp, setSubGroupsExp]   = useState<Record<string, boolean>>({
    "Блокирование": true,
    "Влияет":       true,
  });

  return (
    <div className="tc">

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div className="tc-header">
        <button className="tc-back" onClick={() => dispatch({ type: "back" })}>
          <img className="tc-back-icon" src={ICONS.navChevronLeft} alt="" />
        </button>
        <div className="tc-project-avatar" style={{ background: TASK.project.color }}>
          <img src={ICONS.documentFill} alt="" />
        </div>
        <div className="tc-header-info">
          <div className="tc-header-id">{TASK.id}</div>
          <div className="tc-header-project">{TASK.project.name}</div>
        </div>
        <button className="tc-kebab">
          <img className="tc-kebab-icon" src={ICONS.actionKebabMenu} alt="" />
        </button>
      </div>

      {/* ── Tabs ────────────────────────────────────────────────────────────── */}
      <div className="tc-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tc-tab${activeTab === tab.id ? " tc-tab--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <img src={tab.icon} alt="" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* ══ INFO TAB ════════════════════════════════════════════════════════════ */}
      {activeTab === "info" && (
        <div className="tc-content">

          {/* Название + чипсы (surface2 фон, full-width) */}
          <div className="tc-card tc-card--header">
            <h1 className="tc-task-name">{TASK.name}</h1>

            <div className="tc-chips-row">
              <button className="tc-chip-status tc-chip-status--primary">{TASK.status}</button>
              <button className="tc-chip-status tc-chip-status--secondary">
                <img
                  src={ICONS.navRepeat20} alt=""
                  style={{ width: 16, height: 16, filter: "brightness(0) saturate(100%) invert(47%) sepia(50%) saturate(1000%) hue-rotate(190deg) brightness(105%)" }}
                />
                {TASK.subStatus}
              </button>
            </div>

            <div className="tc-meta-row">
              <div className="tc-assignees-chip">
                <div className="tc-avatars">
                  {[AVATARS.photo1, AVATARS.photo2, AVATARS.photo3].map((a, i) => (
                    <img key={i} className="tc-avatar-img" src={a} alt="" />
                  ))}
                  <div className="tc-avatar-more">+99</div>
                </div>
              </div>
              <div className="tc-priority-chip">
                <img className="tc-priority-icon" src={ICONS.priorityVeryHighFill} alt="" />
                {TASK.priority}
              </div>
            </div>
          </div>

          {/* Описание — floating white card */}
          <div className="tc-card tc-card--description">
            <div className="tc-section-title">Описание</div>
            <p className="tc-description">
              {descExpanded ? TASK.description : TASK.description.slice(0, 200) + "..."}
            </p>
            <button className="tc-more-btn" onClick={() => setDescExpanded((v) => !v)}>
              {descExpanded ? "Свернуть" : "Подробнее"}
            </button>
          </div>

          {/* Секция «Общее» — floating white card */}
          <div className="tc-card--section">
            <div className="tc-section-header">
              <div className="tc-section-header-left">
                <span className="tc-section-title">Общее</span>
              </div>
              <button
                className={`tc-collapse-btn${generalOpen ? " tc-collapse-btn--open" : ""}`}
                onClick={() => setGeneralOpen((v) => !v)}
              >
                <img src={ICONS.navChevronDown} alt="" />
              </button>
            </div>

            {!generalOpen && (
              <p className="tc-section-preview">
                Метка • Дата создания • Ссылка • Наблюдатели • Автор
              </p>
            )}
            {generalOpen && (<>
              {/* Метка */}
              <div className="tc-field-group">
                <span className="tc-field-group-label">Метка</span>
                <div className="tc-field-box tc-field-box--tags">
                  {TAGS.map((tag) => (
                    <span key={tag.label} className="tc-tag" style={{ background: tag.bg, color: tag.color }}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
              {/* Ссылка на дизайн */}
              <div className="tc-field-group">
                <span className="tc-field-group-label">Ссылка на дизайн</span>
                <div className="tc-field-box">
                  <span className="tc-field-box-link">https://pixso.net/app/design/YY6cUXiH6lm</span>
                  <img src={ICONS.actionCopyFill} alt="" style={{ width: 16, height: 16, flexShrink: 0, filter: "brightness(0) saturate(100%) invert(65%) sepia(8%) saturate(350%) hue-rotate(195deg) brightness(90%)" }} />
                </div>
              </div>
              {/* Наблюдатели */}
              <div className="tc-field-group">
                <span className="tc-field-group-label">Наблюдатели</span>
                <div className="tc-field-box">
                  <div className="tc-avatar-stack">
                    {[AVATARS.photo1, AVATARS.photo2, AVATARS.photo3].map((a, i) => (
                      <img key={i} src={a} alt="" className="tc-stack-img" style={{ marginLeft: i > 0 ? -6 : 0 }} />
                    ))}
                    <span className="tc-stack-more" style={{ marginLeft: -6 }}>+1</span>
                  </div>
                </div>
              </div>
              {/* Автор */}
              <div className="tc-field-group">
                <span className="tc-field-group-label">Автор</span>
                <div className="tc-field-box" style={{ gap: 8 }}>
                  <img src={AVATARS.photo1} alt="" className="tc-stack-img" style={{ flexShrink: 0 }} />
                  <span className="tc-field-box-text">Иван Олегович Яшин</span>
                </div>
              </div>
              {/* Дата создания */}
              <div className="tc-field-group">
                <span className="tc-field-group-label">Дата создания</span>
                <div className="tc-field-box">
                  <span className="tc-field-box-text">18.11.2025</span>
                </div>
              </div>
              {/* Родитель — иконка documentFill, не звезда */}
              <div className="tc-field-group">
                <span className="tc-field-group-label">Родитель</span>
                <div className="tc-field-box" style={{ gap: 8 }}>
                  <span className="tc-parent-icon-wrap">
                    <img src={ICONS.documentFill} alt="" style={{ width: 12, height: 12, filter: "brightness(0) invert(1)" }} />
                  </span>
                  <span className="tc-field-box-text">START Lukomor_1</span>
                </div>
              </div>
            </>)}
          </div>

          {/* Секция «Важное» — floating white card */}
          <div className="tc-card--section tc-card--section-last">
            <div className="tc-section-header">
              <div className="tc-section-header-left">
                <span className="tc-section-title">Важное</span>
              </div>
              <button
                className={`tc-collapse-btn${importantOpen ? " tc-collapse-btn--open" : ""}`}
                onClick={() => setImportantOpen((v) => !v)}
              >
                <img src={ICONS.navChevronDown} alt="" />
              </button>
            </div>

            {!importantOpen && (
              <p className="tc-section-preview">
                Дата создания • Версия • План • Факт • Ссылка • Автор • Списки • Оценка
              </p>
            )}
            {importantOpen && (IMPORTANT_FIELDS as any[]).map((f) => (
              <div className="tc-field-group" key={f.label}>
                <span className="tc-field-group-label">{f.label}</span>

                {f.type === "text" && (
                  <div className="tc-field-box"><span className="tc-field-box-text">{f.value}</span></div>
                )}
                {f.type === "hint" && (
                  <div className="tc-field-box"><span className="tc-field-box-hint">{f.value}</span></div>
                )}
                {f.type === "checkbox" && (
                  <div className="tc-field-box" style={{ gap: 10 }}>
                    <div className="tc-checkbox" />
                    <span className="tc-field-box-text">{f.value}</span>
                  </div>
                )}
                {f.type === "date" && (
                  <div className="tc-field-box" style={{ gap: 8 }}>
                    <img src={ICONS.organizeCalendarFill} alt="" style={{ width: 16, height: 16, flexShrink: 0, filter: "brightness(0) saturate(100%) invert(65%) sepia(8%) saturate(350%) hue-rotate(195deg) brightness(90%)" }} />
                    <span className="tc-field-box-text">{f.value}</span>
                  </div>
                )}
                {f.type === "file" && (
                  <div className="tc-field-box" style={{ gap: 10 }}>
                    <img src={ICONS.documentFolderOpen} alt="" style={{ width: 20, height: 20, flexShrink: 0, filter: "brightness(0) saturate(100%) invert(20%) sepia(90%) saturate(3000%) hue-rotate(210deg) brightness(110%)" }} />
                    <div>
                      <div className="tc-field-box-text">{f.value}</div>
                      <div style={{ fontSize: 11, color: "rgba(133,143,163,1)" }}>{f.size}</div>
                    </div>
                  </div>
                )}
                {f.type === "link" && (
                  <div className="tc-field-box">
                    <span className="tc-field-box-link">{f.value}</span>
                  </div>
                )}
                {f.type === "sprint" && (
                  <div className="tc-field-box" style={{ gap: 8 }}>
                    <span className="tc-field-box-text">{f.value}</span>
                    <span className="tc-sprint-badge">{f.status}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ══ COMMENTS TAB ════════════════════════════════════════════════════════ */}
      {activeTab === "comments" && (
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
          <div className="tc-content">
            <div className="tc-comments-list">
              {COMMENTS_DATA.map((group, gi) => (
                <div key={gi}>
                  <div className="tc-comment-date">{group.date}</div>
                  {group.messages.map((msg, mi) => {
                    const prev = mi > 0 ? group.messages[mi - 1] : null;
                    const isNewSender = !prev || prev.senderId !== msg.senderId;
                    const showAvatar = !msg.own && isNewSender;
                    const showName   = !msg.own && !!msg.name && isNewSender;

                    return (
                      <div key={mi} className={`tc-msg-group${msg.own ? " tc-msg-group--own" : ""}`}>
                        {!msg.own && (
                          showAvatar
                            ? <img className="tc-msg-avatar" src={msg.avatar!} alt="" />
                            : <div className="tc-msg-avatar-spacer" />
                        )}
                        <div className="tc-msg-body">
                          {showName && <div className="tc-msg-name">{msg.name}</div>}
                          <div className={`tc-msg-bubble${msg.own ? " tc-msg-bubble--own" : ""}`}>
                            {msg.text}
                          </div>
                          <div className={`tc-msg-time${msg.own ? " tc-msg-time--own" : ""}`}>
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="tc-input-bar">
            <button className="tc-input-attach">
              <img src={ICONS.actionAttachment} alt="" />
            </button>
            <div className="tc-input-wrap">
              <textarea
                className="tc-input-field"
                placeholder="Комментарий..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={1}
              />
              <button className="tc-input-send">
                <img src={ICONS.navChevronRight} alt="" style={{ width: 18, height: 18, filter: "brightness(0) saturate(100%) invert(20%) sepia(90%) saturate(3000%) hue-rotate(210deg) brightness(110%)" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ ATTACHMENTS TAB ═════════════════════════════════════════════════════ */}
      {activeTab === "attach" && (
        <div className="tc-content tc-content--padded">
          {ATTACHMENTS.map((group, gi) => (
            <div key={gi}>
              <div className="tc-date-label">{group.date}</div>
              <div className="tc-attach-cards">
                {group.files.map((file, fi) => (
                  <button key={fi} className="tc-file-card">
                    <img
                      className="tc-file-card-icon"
                      src={ICONS.documentFill}
                      alt=""
                    />
                    <div className="tc-file-card-info">
                      <div className="tc-file-name">{file.name}</div>
                      <div className="tc-file-size">{file.size}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ══ RELATIONS TAB ═══════════════════════════════════════════════════════ */}
      {activeTab === "relations" && (
        <div className="tc-content">
          {RELATIONS_DATA.map((section, si) => (
            <div className="tc-rel-section" key={si}>
              <button
                className="tc-rel-header"
                onClick={() => setRelExpanded((prev) => prev.map((v, i) => i === si ? !v : v))}
              >
                <div className="tc-rel-header-left">
                  <img className="tc-rel-icon" src={section.icon} alt="" />
                  <span className="tc-rel-title">{section.title}</span>
                  {section.count !== null && (
                    <span className="tc-rel-badge">{section.count}</span>
                  )}
                </div>
                <img
                  className={`tc-section-chevron${relExpanded[si] ? " tc-section-chevron--open" : ""}`}
                  src={ICONS.navChevronDown}
                  alt=""
                />
              </button>

              {/* Subtitle — всегда видим */}
              {section.subtitle && (
                <div className="tc-rel-subtitle">{section.subtitle}</div>
              )}

              {relExpanded[si] && (<>

                {/* Задачи секции — в подложке surface2 */}
                {section.tasks.length > 0 && (
                  <div className="tc-rel-tasks-wrap">
                    {section.tasks.map((task: any, ti: number) => (
                      <RelTaskRow key={ti} task={task} dispatch={dispatch} />
                    ))}
                  </div>
                )}

                {/* Подгруппы: «Блокирование»/«Влияет» с sub-labels и подложками */}
                {section.subGroups && section.subGroups.map((sg: any) => (
                  <div key={sg.label}>
                    <button
                      className="tc-rel-subgroup"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSubGroupsExp((prev) => ({ ...prev, [sg.label]: !prev[sg.label] }));
                      }}
                    >
                      <span className="tc-rel-subgroup-label">{sg.label}</span>
                      <span className="tc-rel-badge">{sg.count}</span>
                      <img
                        src={ICONS.navChevronDown}
                        alt=""
                        className="tc-rel-subgroup-chevron"
                        style={{ transform: subGroupsExp[sg.label] ? "rotate(180deg)" : "none" }}
                      />
                    </button>

                    {subGroupsExp[sg.label] && sg.subLabels && sg.subLabels.map((sl: any) => (
                      <div key={sl.label} style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                        <span className="tc-rel-sublabel">{sl.label}</span>
                        <div className="tc-rel-tasks-wrap">
                          {sl.tasks.map((task: any, ti: number) => (
                            <RelTaskRow key={ti} task={task} dispatch={dispatch} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

              </>)}
            </div>
          ))}
        </div>
      )}

      {/* ══ HISTORY TAB ═════════════════════════════════════════════════════════ */}
      {activeTab === "history" && (
        <div className="tc-content">
          {HISTORY_DATA.map((item, i) => (
            <div className="tc-history-item" key={i}>
              <img className="tc-history-avatar" src={item.avatar} alt="" />
              <div className="tc-history-body">
                <div className="tc-history-header">
                  <span className="tc-history-user">{item.user}</span>
                  <span className="tc-history-time">{item.time}</span>
                </div>
                <div className="tc-history-text">{item.text}</div>
                {item.action && <div className="tc-history-action">{item.action}</div>}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
