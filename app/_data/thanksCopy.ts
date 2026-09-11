import type { Locale } from "../_lib/locale";

export type ThanksCopy = {
  meta: { title: string; description: string };
  badge: { preview: string; download: string };
  state: { started: string; preview: string; ready: string };
  title: string;
  body: { started: string; preview: string; direct: string };
  /** What the key costs and where it comes from. The app issues it; this page never asks for an address. */
  trade: string;
  iframeTitle: string;
  inlineDownload: { again: string; now: string };
  key: { label: string; note: string };
  install: { title: string; steps: { title: string; body: string }[]; permissionAlt: string; settingsGroup: string; accessibility: string; help: string; helpLink: string };
};

const de: ThanksCopy = {
  meta: { title: "Download · Witness", description: "Witness installieren und den Lizenzschlüssel anfordern." },
  badge: { preview: "Download nicht verfügbar", download: "Download" },
  state: { started: "Download läuft", preview: "Download derzeit nicht verfügbar", ready: "Download ist bereit" },
  title: "Deinen Schlüssel holst du in der App",
  body: {
    started: "Die Datei lädt bereits.",
    preview: "Der Download ist gerade nicht erreichbar. Sobald er wieder verfügbar ist, startet er vor dieser Seite automatisch.",
    direct: "Wenn du direkt hier gelandet bist, starte den signierten Build unten.",
  },
  trade: "Drei Tage diktierst du ohne Schlüssel — danach fragt Witness nach einem, und mit ihm sind es dreizehn. Den Schlüssel forderst du direkt in der App an, unter Einstellungen → Lizenz.",
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
};

const en: ThanksCopy = {
  meta: { title: "Download · Witness", description: "Install Witness and request your licence key." },
  badge: { preview: "Download unavailable", download: "Download" },
  state: { started: "Download started", preview: "The download is currently unavailable", ready: "Download is ready" },
  title: "You get your key inside the app",
  body: {
    started: "The file is already downloading.",
    preview: "The download is not reachable right now. Once it is available again, it starts before this page opens.",
    direct: "If you landed here directly, start the signed build below.",
  },
  trade: "You dictate for three days without a key — then Witness asks for one, and with it you have thirteen. You request the key in the app itself, under Settings → Licence.",
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
};

const ru: ThanksCopy = {
  meta: { title: "Скачивание · Witness", description: "Установи Witness и запроси лицензионный ключ." },
  badge: { preview: "Загрузка недоступна", download: "Скачивание" },
  state: { started: "Загрузка началась", preview: "Загрузка сейчас недоступна", ready: "Файл готов к загрузке" },
  title: "Ключ ты забираешь в приложении",
  body: {
    started: "Файл уже качается.",
    preview: "Загрузка сейчас недоступна. Как только она снова заработает, файл начнёт скачиваться до открытия этой страницы.",
    direct: "Если ты попал сюда напрямую, запусти подписанную сборку по кнопке ниже.",
  },
  trade: "Три дня диктуешь без ключа — потом Witness попросит его, и с ключом дней становится тринадцать. Ключ запрашивается прямо в приложении, в разделе Настройки → Лицензия.",
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
};

const uk: ThanksCopy = {
  meta: { title: "Завантаження · Witness", description: "Встанови Witness і запроси ліцензійний ключ." },
  badge: { preview: "Завантаження недоступне", download: "Завантаження" },
  state: { started: "Завантаження почалося", preview: "Завантаження зараз недоступне", ready: "Файл готовий до завантаження" },
  title: "Ключ ти забираєш у застосунку",
  body: {
    started: "Файл уже завантажується.",
    preview: "Завантаження зараз недоступне. Щойно воно запрацює, файл почне завантажуватися до відкриття цієї сторінки.",
    direct: "Якщо ти потрапив сюди напряму, запусти підписану збірку кнопкою нижче.",
  },
  trade: "Три дні диктуєш без ключа — далі Witness попросить його, і з ключем днів стає тринадцять. Ключ запитується прямо у застосунку, у розділі Налаштування → Ліцензія.",
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
};

export const thanksCopy: Record<Locale, ThanksCopy> = { de, en, ru, uk };
