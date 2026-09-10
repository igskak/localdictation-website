import type { Locale } from "../_lib/locale";

export type ThanksCopy = {
  meta: { title: string; description: string };
  badge: { preview: string; download: string };
  state: { started: string; preview: string; ready: string };
  title: string;
  /** Used when no endpoint exists: a page with no field may not ask where to send anything. */
  titleInApp: string;
  body: { started: string; preview: string; direct: string };
  /** What the key costs and where it comes from. `inApp` is the truth when no lead endpoint is configured. */
  trade: { mail: string; inApp: string };
  iframeTitle: string;
  inlineDownload: { again: string; now: string };
  key: { label: string; note: string };
  install: { title: string; steps: { title: string; body: string }[]; permissionAlt: string; settingsGroup: string; accessibility: string; help: string; helpLink: string };
  form: {
    emailLabel: string; emailHelp: string; emailPlaceholder: string; emailError: string;
    usecaseLabel: string; optOut: string;
    usecases: [string, string][];
    sendError: string; submit: string; sending: string; skip: string;
    successTitle: string; successBody: string; previewTitle: string; previewBody: string;
    noscript: string; consent: string; privacyLink: string;
  };
};

const de: ThanksCopy = {
  meta: { title: "Download · Witness", description: "Witness installieren und den Lizenzschlüssel anfordern." },
  badge: { preview: "Download nicht verfügbar", download: "Download" },
  state: { started: "Download läuft", preview: "Download derzeit nicht verfügbar", ready: "Download ist bereit" },
  title: "Wohin sollen wir deinen Lizenzschlüssel schicken?",
  titleInApp: "Deinen Schlüssel holst du in der App",
  body: {
    started: "Die Datei lädt bereits.",
    preview: "Der Download ist gerade nicht erreichbar. Sobald er wieder verfügbar ist, startet er vor dieser Seite automatisch.",
    direct: "Wenn du direkt hier gelandet bist, starte den signierten Build unten.",
  },
  trade: {
    mail: "Drei Tage diktierst du ohne Schlüssel — danach fragt Witness nach einem, und mit ihm sind es dreizehn. Trag deine Adresse ein, dann liegt er am dritten Tag bereit. Oder überspring das hier und fordere ihn in der App an, unter Einstellungen → Lizenz.",
    inApp: "Drei Tage diktierst du ohne Schlüssel — danach fragt Witness nach einem, und mit ihm sind es dreizehn. Den Schlüssel forderst du direkt in der App an, unter Einstellungen → Lizenz.",
  },
  iframeTitle: "Witness Download",
  inlineDownload: { again: "Download erneut starten", now: "Download jetzt starten" },
  key: { label: "Lizenzschlüssel", note: "Kein Profil. Kein Passwort. Bis zu zwei Macs." },
  install: {
    title: "In drei Schritten startklar",
    steps: [
      { title: "Image öffnen", body: "Witness in den Programme-Ordner ziehen." },
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
    usecaseLabel: "Wo diktierst du am meisten? (optional)",
    optOut: "Nicht angeben",
    usecases: [["email", "E-Mail"], ["tickets_docs", "Tickets & Doku"], ["ai_prompts", "KI-Prompts"], ["notes", "Notizen"], ["chats", "Chats"]],
    sendError: "Das hat noch nicht geklappt. Bitte versuche es erneut oder überspringe die Form.",
    submit: "Schlüssel anfordern",
    sending: "Wird gesendet …",
    skip: "Überspringen",
    successTitle: "Schlüssel ist unterwegs",
    successBody: "Prüfe deinen Posteingang. Wenn nach einigen Minuten nichts angekommen ist, antworte einfach über den Kontaktlink unten.",
    previewTitle: "Die Oberfläche ist bereit",
    previewBody: "Über dieses Formular wird derzeit keine E-Mail versendet. Deinen Schlüssel forderst du in der App an: Einstellungen, dann Lizenz.",
    noscript: "Das freiwillige Formular benötigt JavaScript. Der Download und die Installationsanleitung funktionieren ohne Formular weiter.",
    consent: "Mit dem Absenden stimmst du der Verarbeitung dieser Angaben für Aktivierung und Onboarding zu.",
    privacyLink: "Datenschutz",
  },
};

const en: ThanksCopy = {
  meta: { title: "Download · Witness", description: "Install Witness and request your licence key." },
  badge: { preview: "Download unavailable", download: "Download" },
  state: { started: "Download started", preview: "The download is currently unavailable", ready: "Download is ready" },
  title: "Where should we send your licence key?",
  titleInApp: "You get your key inside the app",
  body: {
    started: "The file is already downloading.",
    preview: "The download is not reachable right now. Once it is available again, it starts before this page opens.",
    direct: "If you landed here directly, start the signed build below.",
  },
  trade: {
    mail: "You dictate for three days without a key — then Witness asks for one, and with it you have thirteen. Leave your address and it is waiting on day three. Or skip this and request it in the app, under Settings → Licence.",
    inApp: "You dictate for three days without a key — then Witness asks for one, and with it you have thirteen. You request the key in the app itself, under Settings → Licence.",
  },
  iframeTitle: "Witness download",
  inlineDownload: { again: "Start download again", now: "Start download now" },
  key: { label: "Licence key", note: "No profile. No password. Up to two Macs." },
  install: {
    title: "Ready in three steps",
    steps: [
      { title: "Open the image", body: "Drag Witness into Applications." },
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
    usecaseLabel: "Where do you dictate most? (optional)",
    optOut: "Prefer not to say",
    usecases: [["email", "Email"], ["tickets_docs", "Tickets & documentation"], ["ai_prompts", "AI prompts"], ["notes", "Notes"], ["chats", "Chats"]],
    sendError: "That did not work yet. Try again or skip the form for now.",
    submit: "Request licence key",
    sending: "Sending …",
    skip: "Skip for now",
    successTitle: "Your key is on its way",
    successBody: "Check your inbox. If nothing arrives after a few minutes, use the contact link below.",
    previewTitle: "The flow is ready",
    previewBody: "This form does not send email at the moment. Request your key in the app instead: Settings, then License.",
    noscript: "The optional form needs JavaScript. The download and installation guide continue to work without the form.",
    consent: "By submitting, you agree that these details may be used for activation and onboarding.",
    privacyLink: "Privacy",
  },
};

const ru: ThanksCopy = {
  meta: { title: "Скачивание · Witness", description: "Установи Witness и запроси лицензионный ключ." },
  badge: { preview: "Загрузка недоступна", download: "Скачивание" },
  state: { started: "Загрузка началась", preview: "Загрузка сейчас недоступна", ready: "Файл готов к загрузке" },
  title: "Куда прислать твой лицензионный ключ?",
  titleInApp: "Ключ ты забираешь в приложении",
  body: {
    started: "Файл уже качается.",
    preview: "Загрузка сейчас недоступна. Как только она снова заработает, файл начнёт скачиваться до открытия этой страницы.",
    direct: "Если ты попал сюда напрямую, запусти подписанную сборку по кнопке ниже.",
  },
  trade: {
    mail: "Три дня диктуешь без ключа — потом Witness попросит его, и с ключом дней становится тринадцать. Оставь адрес, и на третий день он уже будет у тебя. Или пропусти и запроси ключ в приложении, в разделе Настройки → Лицензия.",
    inApp: "Три дня диктуешь без ключа — потом Witness попросит его, и с ключом дней становится тринадцать. Ключ запрашивается прямо в приложении, в разделе Настройки → Лицензия.",
  },
  iframeTitle: "Загрузка Witness",
  inlineDownload: { again: "Запустить загрузку ещё раз", now: "Запустить загрузку" },
  key: { label: "Лицензионный ключ", note: "Ни профиля, ни пароля. До двух Mac." },
  install: {
    title: "Три шага до старта",
    steps: [
      { title: "Открой образ", body: "Перетащи Witness в папку «Программы»." },
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
    usecaseLabel: "Где диктуешь чаще всего? (необязательно)",
    optOut: "Не указывать",
    usecases: [["email", "Почта"], ["tickets_docs", "Тикеты и документация"], ["ai_prompts", "Промпты для ИИ"], ["notes", "Заметки"], ["chats", "Чаты"]],
    sendError: "Пока не получилось. Попробуй ещё раз или пропусти форму.",
    submit: "Запросить ключ",
    sending: "Отправляем …",
    skip: "Пропустить",
    successTitle: "Ключ уже в пути",
    successBody: "Загляни в почту. Если через несколько минут ничего нет, напиши мне по контактной ссылке ниже.",
    previewTitle: "Сценарий готов",
    previewBody: "Через эту форму письма сейчас не отправляются. Запроси ключ в приложении: Настройки, затем Лицензия.",
    noscript: "Добровольная форма требует JavaScript. Загрузка и инструкция по установке работают и без неё.",
    consent: "Отправляя форму, ты соглашаешься на обработку этих данных для активации и онбординга.",
    privacyLink: "Приватность (EN)",
  },
};

const uk: ThanksCopy = {
  meta: { title: "Завантаження · Witness", description: "Встанови Witness і запроси ліцензійний ключ." },
  badge: { preview: "Завантаження недоступне", download: "Завантаження" },
  state: { started: "Завантаження почалося", preview: "Завантаження зараз недоступне", ready: "Файл готовий до завантаження" },
  title: "Куди надіслати твій ліцензійний ключ?",
  titleInApp: "Ключ ти забираєш у застосунку",
  body: {
    started: "Файл уже завантажується.",
    preview: "Завантаження зараз недоступне. Щойно воно запрацює, файл почне завантажуватися до відкриття цієї сторінки.",
    direct: "Якщо ти потрапив сюди напряму, запусти підписану збірку кнопкою нижче.",
  },
  trade: {
    mail: "Три дні диктуєш без ключа — далі Witness попросить його, і з ключем днів стає тринадцять. Залиш адресу, і на третій день він уже буде в тебе. Або пропусти й запроси ключ у застосунку, у розділі Налаштування → Ліцензія.",
    inApp: "Три дні диктуєш без ключа — далі Witness попросить його, і з ключем днів стає тринадцять. Ключ запитується прямо у застосунку, у розділі Налаштування → Ліцензія.",
  },
  iframeTitle: "Завантаження Witness",
  inlineDownload: { again: "Запустити завантаження ще раз", now: "Запустити завантаження" },
  key: { label: "Ліцензійний ключ", note: "Ні профілю, ні пароля. До двох Mac." },
  install: {
    title: "Три кроки до старту",
    steps: [
      { title: "Відкрий образ", body: "Перетягни Witness у теку «Програми»." },
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
    usecaseLabel: "Де диктуєш найчастіше? (необов'язково)",
    optOut: "Не вказувати",
    usecases: [["email", "Пошта"], ["tickets_docs", "Тікети та документація"], ["ai_prompts", "Промпти для ШІ"], ["notes", "Нотатки"], ["chats", "Чати"]],
    sendError: "Поки не вийшло. Спробуй ще раз або пропусти форму.",
    submit: "Запросити ключ",
    sending: "Надсилаємо …",
    skip: "Пропустити",
    successTitle: "Ключ уже в дорозі",
    successBody: "Заглянь у пошту. Якщо за кілька хвилин нічого немає, напиши мені за контактним посиланням нижче.",
    previewTitle: "Сценарій готовий",
    previewBody: "Через цю форму листи зараз не надсилаються. Запроси ключ у застосунку: Налаштування, далі Ліцензія.",
    noscript: "Добровільна форма потребує JavaScript. Завантаження та інструкція зі встановлення працюють і без неї.",
    consent: "Надсилаючи форму, ти погоджуєшся на обробку цих даних для активації та онбордингу.",
    privacyLink: "Приватність (EN)",
  },
};

export const thanksCopy: Record<Locale, ThanksCopy> = { de, en, ru, uk };
