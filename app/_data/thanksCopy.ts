import type { Locale } from "../_lib/locale";

export type ThanksCopy = {
  meta: { title: string; description: string };
  badge: { preview: string; download: string };
  state: { started: string; preview: string; ready: string };
  title: string;
  body: { started: string; preview: string; direct: string };
  iframeTitle: string;
  inlineDownload: { again: string; now: string };
  key: { label: string; note: string };
  install: { title: string; steps: { title: string; body: string }[]; permissionAlt: string; settingsGroup: string; accessibility: string; help: string; helpLink: string };
  form: {
    emailLabel: string; emailHelp: string; emailPlaceholder: string; emailError: string;
    roleLabel: string; languagesLabel: string; usecaseLabel: string; choose: string; optOut: string;
    roles: [string, string][]; usecases: [string, string][]; singleLanguage: string;
    requiredError: string; sendError: string; submit: string; sending: string; skip: string;
    successTitle: string; successBody: string; previewTitle: string; previewBody: string;
    noscript: string; consent: string; privacyLink: string;
  };
};

const de: ThanksCopy = {
  meta: { title: "Download · LocalDictation", description: "LocalDictation installieren und den Lizenzschlüssel anfordern." },
  badge: { preview: "Private Vorschau", download: "Download" },
  state: { started: "Download läuft", preview: "Download-Platz ist vorbereitet", ready: "Download ist bereit" },
  title: "Wohin sollen wir deinen Lizenzschlüssel schicken?",
  body: {
    started: "LocalDictation wird bereits geladen. Die freiwillige Form hält die Datei nicht auf und hilft uns, deinen Lizenzschlüssel und passende Einrichtungshinweise zu senden.",
    preview: "Der signierte Build ist noch nicht an diese Vorschau angeschlossen. Sobald er bereit ist, startet der Download vor dieser Seite automatisch — die Form bleibt freiwillig.",
    direct: "Wenn du direkt hier gelandet bist, kannst du den signierten Build unten starten. Die Form bleibt freiwillig.",
  },
  iframeTitle: "LocalDictation Download",
  inlineDownload: { again: "Download erneut starten", now: "Download jetzt starten" },
  key: { label: "Lizenzschlüssel", note: "Kein Profil. Kein Passwort. Bis zu zwei Macs." },
  install: {
    title: "In drei Schritten startklar",
    steps: [
      { title: "Image öffnen", body: "LocalDictation in den Programme-Ordner ziehen." },
      { title: "Mikrofon erlauben", body: "macOS fragt beim ersten Diktat einmal nach." },
      { title: "Bedienungshilfe erlauben", body: "Damit Text genau am Cursor eingesetzt werden kann." },
    ],
    permissionAlt: "Beispiel der macOS-Bedienungshilfen-Einstellung",
    settingsGroup: "Datenschutz & Sicherheit",
    accessibility: "Bedienungshilfen",
    help: "Etwas klemmt?",
    helpLink: "Schreib mir direkt",
  },
  form: {
    emailLabel: "E-Mail für deinen Lizenzschlüssel",
    emailHelp: "Kein Produktkonto. Der Schlüssel kommt per E-Mail.",
    emailPlaceholder: "du@unternehmen.de",
    emailError: "Bitte gib eine gültige E-Mail-Adresse ein.",
    roleLabel: "Womit arbeitest du?",
    languagesLabel: "Welche Sprachen mischst du?",
    usecaseLabel: "Wo diktierst du am meisten? (optional)",
    choose: "Bitte auswählen",
    optOut: "Nicht angeben",
    roles: [["development", "Entwicklung"], ["legal", "Recht"], ["medicine", "Medizin / Praxis"], ["consulting", "Beratung"], ["marketing_sales", "Marketing / Vertrieb"], ["administration", "Verwaltung"], ["other", "Sonstiges"]],
    usecases: [["email", "E-Mail"], ["tickets_docs", "Tickets & Doku"], ["ai_prompts", "KI-Prompts"], ["notes", "Notizen"], ["chats", "Chats"]],
    singleLanguage: "nur eine Sprache",
    requiredError: "Bitte beantworte die beiden Pflichtfragen.",
    sendError: "Das hat noch nicht geklappt. Bitte versuche es erneut oder überspringe die Form.",
    submit: "Schlüssel anfordern",
    sending: "Wird gesendet …",
    skip: "Überspringen",
    successTitle: "Schlüssel ist unterwegs",
    successBody: "Prüfe deinen Posteingang. Wenn nach einigen Minuten nichts angekommen ist, antworte einfach über den Kontaktlink unten.",
    previewTitle: "Die Oberfläche ist bereit",
    previewBody: "In dieser privaten Vorschau wird noch keine E-Mail versendet. Sobald Lizenz-Backend und Absender verbunden sind, bestätigt dieser Schritt den Versand.",
    noscript: "Die freiwillige Formularvorschau benötigt JavaScript. Der Download und die Installationsanleitung funktionieren ohne Formular weiter.",
    consent: "Mit dem Absenden stimmst du der Verarbeitung dieser Angaben für Aktivierung und Onboarding zu.",
    privacyLink: "Datenschutz",
  },
};

const en: ThanksCopy = {
  meta: { title: "Download · LocalDictation", description: "Install LocalDictation and request your licence key." },
  badge: { preview: "Private preview", download: "Download" },
  state: { started: "Download started", preview: "The download slot is ready", ready: "Download is ready" },
  title: "Where should we send your licence key?",
  body: {
    started: "LocalDictation is already downloading. This optional form never gates the file and helps us send your licence key and relevant setup guidance.",
    preview: "The signed build is not connected to this preview yet. Once it is ready, the download will start before this page opens — the form will remain optional.",
    direct: "If you landed here directly, you can start the signed build below. The form remains optional.",
  },
  iframeTitle: "LocalDictation download",
  inlineDownload: { again: "Start download again", now: "Start download now" },
  key: { label: "Licence key", note: "No profile. No password. Up to two Macs." },
  install: {
    title: "Ready in three steps",
    steps: [
      { title: "Open the image", body: "Drag LocalDictation into Applications." },
      { title: "Allow microphone", body: "macOS asks once on your first dictation." },
      { title: "Allow Accessibility", body: "So text can be inserted exactly at your cursor." },
    ],
    permissionAlt: "Example of the macOS Accessibility setting",
    settingsGroup: "Privacy & Security",
    accessibility: "Accessibility",
    help: "Something stuck?",
    helpLink: "Email me directly",
  },
  form: {
    emailLabel: "Email for your licence key",
    emailHelp: "No product account. Your key arrives by email.",
    emailPlaceholder: "you@company.com",
    emailError: "Enter a valid email address.",
    roleLabel: "What kind of work do you do?",
    languagesLabel: "Which languages do you mix?",
    usecaseLabel: "Where do you dictate most? (optional)",
    choose: "Choose one",
    optOut: "Prefer not to say",
    roles: [["development", "Software development"], ["legal", "Legal"], ["medicine", "Medicine / Practice"], ["consulting", "Consulting"], ["marketing_sales", "Marketing / Sales"], ["administration", "Administration"], ["other", "Other"]],
    usecases: [["email", "Email"], ["tickets_docs", "Tickets & documentation"], ["ai_prompts", "AI prompts"], ["notes", "Notes"], ["chats", "Chats"]],
    singleLanguage: "one language only",
    requiredError: "Please answer both required questions.",
    sendError: "That did not work yet. Try again or skip the form for now.",
    submit: "Request licence key",
    sending: "Sending …",
    skip: "Skip for now",
    successTitle: "Your key is on its way",
    successBody: "Check your inbox. If nothing arrives after a few minutes, use the contact link below.",
    previewTitle: "The flow is ready",
    previewBody: "This private preview does not send email yet. Once the licence backend and sender are connected, this step confirms delivery.",
    noscript: "The optional form preview needs JavaScript. The download and installation guide continue to work without the form.",
    consent: "By submitting, you agree that these details may be used for activation and onboarding.",
    privacyLink: "Privacy (DE)",
  },
};

const ru: ThanksCopy = {
  meta: { title: "Скачивание · LocalDictation", description: "Установи LocalDictation и запроси лицензионный ключ." },
  badge: { preview: "Закрытая превью-версия", download: "Скачивание" },
  state: { started: "Загрузка началась", preview: "Место для загрузки готово", ready: "Файл готов к загрузке" },
  title: "Куда прислать твой лицензионный ключ?",
  body: {
    started: "LocalDictation уже качается. Форма добровольная, файл она не задерживает — она нужна, чтобы прислать ключ и подсказки по настройке.",
    preview: "Подписанная сборка ещё не подключена к этой превью-версии. Как только она будет готова, загрузка начнётся до открытия этой страницы — форма останется добровольной.",
    direct: "Если ты попал сюда напрямую, запусти подписанную сборку по кнопке ниже. Форма остаётся добровольной.",
  },
  iframeTitle: "Загрузка LocalDictation",
  inlineDownload: { again: "Запустить загрузку ещё раз", now: "Запустить загрузку" },
  key: { label: "Лицензионный ключ", note: "Ни профиля, ни пароля. До двух Mac." },
  install: {
    title: "Три шага до старта",
    steps: [
      { title: "Открой образ", body: "Перетащи LocalDictation в папку «Программы»." },
      { title: "Разреши микрофон", body: "macOS спросит один раз при первой диктовке." },
      { title: "Разреши универсальный доступ", body: "Чтобы текст вставлялся точно под курсор." },
    ],
    permissionAlt: "Пример настройки универсального доступа в macOS",
    settingsGroup: "Конфиденциальность и безопасность",
    accessibility: "Универсальный доступ",
    help: "Что-то не пошло?",
    helpLink: "Напиши мне напрямую",
  },
  form: {
    emailLabel: "Почта для лицензионного ключа",
    emailHelp: "Аккаунт в продукте не нужен. Ключ придёт письмом.",
    emailPlaceholder: "ty@company.com",
    emailError: "Укажи корректный адрес почты.",
    roleLabel: "Чем ты занимаешься?",
    languagesLabel: "Какие языки мешаешь?",
    usecaseLabel: "Где диктуешь чаще всего? (необязательно)",
    choose: "Выбери вариант",
    optOut: "Не указывать",
    roles: [["development", "Разработка"], ["legal", "Право"], ["medicine", "Медицина / практика"], ["consulting", "Консалтинг"], ["marketing_sales", "Маркетинг / продажи"], ["administration", "Администрирование"], ["other", "Другое"]],
    usecases: [["email", "Почта"], ["tickets_docs", "Тикеты и документация"], ["ai_prompts", "Промпты для ИИ"], ["notes", "Заметки"], ["chats", "Чаты"]],
    singleLanguage: "только один язык",
    requiredError: "Ответь, пожалуйста, на два обязательных вопроса.",
    sendError: "Пока не получилось. Попробуй ещё раз или пропусти форму.",
    submit: "Запросить ключ",
    sending: "Отправляем …",
    skip: "Пропустить",
    successTitle: "Ключ уже в пути",
    successBody: "Загляни в почту. Если через несколько минут ничего нет, напиши мне по контактной ссылке ниже.",
    previewTitle: "Сценарий готов",
    previewBody: "В этой закрытой превью-версии письма ещё не отправляются. Как только лицензионный бэкенд и отправитель будут подключены, этот шаг подтвердит отправку.",
    noscript: "Добровольная форма требует JavaScript. Загрузка и инструкция по установке работают и без неё.",
    consent: "Отправляя форму, ты соглашаешься на обработку этих данных для активации и онбординга.",
    privacyLink: "Приватность (DE)",
  },
};

const uk: ThanksCopy = {
  meta: { title: "Завантаження · LocalDictation", description: "Встанови LocalDictation і запроси ліцензійний ключ." },
  badge: { preview: "Закрита прев'ю-версія", download: "Завантаження" },
  state: { started: "Завантаження почалося", preview: "Місце для завантаження готове", ready: "Файл готовий до завантаження" },
  title: "Куди надіслати твій ліцензійний ключ?",
  body: {
    started: "LocalDictation уже завантажується. Форма добровільна, файл вона не затримує — вона потрібна, щоб надіслати ключ і підказки з налаштування.",
    preview: "Підписану збірку ще не під'єднано до цієї прев'ю-версії. Щойно вона буде готова, завантаження почнеться до відкриття цієї сторінки — форма лишиться добровільною.",
    direct: "Якщо ти потрапив сюди напряму, запусти підписану збірку кнопкою нижче. Форма лишається добровільною.",
  },
  iframeTitle: "Завантаження LocalDictation",
  inlineDownload: { again: "Запустити завантаження ще раз", now: "Запустити завантаження" },
  key: { label: "Ліцензійний ключ", note: "Ні профілю, ні пароля. До двох Mac." },
  install: {
    title: "Три кроки до старту",
    steps: [
      { title: "Відкрий образ", body: "Перетягни LocalDictation у теку «Програми»." },
      { title: "Дозволь мікрофон", body: "macOS запитає один раз під час першого диктування." },
      { title: "Дозволь універсальний доступ", body: "Щоб текст вставлявся точно під курсор." },
    ],
    permissionAlt: "Приклад налаштування універсального доступу в macOS",
    settingsGroup: "Конфіденційність і безпека",
    accessibility: "Універсальний доступ",
    help: "Щось не пішло?",
    helpLink: "Напиши мені напряму",
  },
  form: {
    emailLabel: "Пошта для ліцензійного ключа",
    emailHelp: "Обліковий запис у продукті не потрібен. Ключ прийде листом.",
    emailPlaceholder: "ty@company.com",
    emailError: "Вкажи коректну адресу пошти.",
    roleLabel: "Чим ти займаєшся?",
    languagesLabel: "Які мови змішуєш?",
    usecaseLabel: "Де диктуєш найчастіше? (необов'язково)",
    choose: "Обери варіант",
    optOut: "Не вказувати",
    roles: [["development", "Розробка"], ["legal", "Право"], ["medicine", "Медицина / практика"], ["consulting", "Консалтинг"], ["marketing_sales", "Маркетинг / продажі"], ["administration", "Адміністрування"], ["other", "Інше"]],
    usecases: [["email", "Пошта"], ["tickets_docs", "Тікети та документація"], ["ai_prompts", "Промпти для ШІ"], ["notes", "Нотатки"], ["chats", "Чати"]],
    singleLanguage: "лише одна мова",
    requiredError: "Дай відповідь, будь ласка, на два обов'язкові запитання.",
    sendError: "Поки не вийшло. Спробуй ще раз або пропусти форму.",
    submit: "Запросити ключ",
    sending: "Надсилаємо …",
    skip: "Пропустити",
    successTitle: "Ключ уже в дорозі",
    successBody: "Заглянь у пошту. Якщо за кілька хвилин нічого немає, напиши мені за контактним посиланням нижче.",
    previewTitle: "Сценарій готовий",
    previewBody: "У цій закритій прев'ю-версії листи ще не надсилаються. Щойно ліцензійний бекенд і відправника буде під'єднано, цей крок підтвердить надсилання.",
    noscript: "Добровільна форма потребує JavaScript. Завантаження та інструкція зі встановлення працюють і без неї.",
    consent: "Надсилаючи форму, ти погоджуєшся на обробку цих даних для активації та онбордингу.",
    privacyLink: "Приватність (DE)",
  },
};

export const thanksCopy: Record<Locale, ThanksCopy> = { de, en, ru, uk };
