import type { Locale } from "../_lib/locale";

// Download bytes of the four pinned model distributions in Witness 0.6.27.
// Preparation and the macOS compilation cache need additional disk space.
export const speechModels = [
  { name: "Whisper large-v3 turbo", bytes: 1_638_464_446, family: "whisper" },
  { name: "Whisper large-v3", bytes: 3_195_115_988, family: "whisper" },
  { name: "Parakeet Ultra", bytes: 632_314_500, family: "parakeet" },
  { name: "Parakeet TDT v3", bytes: 483_257_242, family: "parakeet" },
] as const;

export function modelSize(bytes: number, locale: Locale) {
  const gigabytes = bytes >= 1_000_000_000;
  return `${new Intl.NumberFormat(locale, { minimumFractionDigits: gigabytes ? 2 : 0, maximumFractionDigits: gigabytes ? 2 : 0 }).format(bytes / (gigabytes ? 1_000_000_000 : 1_000_000))} ${gigabytes ? "GB" : "MB"}`;
}

type ReleaseCopy = {
  announcement: string; eyebrow: string; title: string; intro: string;
  modelsTitle: string; modelsNote: string; downloadNote: string;
  modelDetails: readonly [string, string, string, string];
  notetakerTitle: string; notetakerBody: string; demo: string; demoNote: string;
  meetingPrivacy: string; interfaceTitle: string; interfaceBody: string;
  faq: { q: string; a: string }[];
};

export const releaseCopy: Record<Locale, ReleaseCopy> = {
  de: {
    announcement: "Neu: 4 Sprachmodelle und Notetaker als Demo",
    eyebrow: "Neu in 0.6.27", title: "Das Modell, das zu deiner Stimme passt.",
    intro: "Probiere verschiedene Modelle aus und vergleiche sie mit deiner Sprache und deinem Mikrofon. Diktat und Notetaker verwenden dieselbe Auswahl, vollständig auf deinem Mac.",
    modelsTitle: "Vier lokale Sprachmodelle", modelsNote: "Ungefähre Downloadgrößen. Die macOS-Vorbereitung braucht zusätzlichen Speicher. Ein größeres Modell ist nicht immer die bessere Wahl.",
    downloadNote: "Wähle ein Modell in den Einstellungen oder am Ende der Einrichtung. Nach „Herunterladen und auswählen“ siehst du den Fortschritt. Dein aktuelles Modell bleibt nutzbar. Eine Mitteilung sagt dir, wann der Neustart ansteht; danach wird das neue Modell lokal vorbereitet. Inaktive Modelle kannst du entfernen.",
    modelDetails: ["Ausgewogen · alle 100 Witness-Sprachen", "Vollständiges Modell · alle 100 Sprachen · mehr Rechenzeit", "Schnelle Erkennung · 25 europäische Sprachen", "Weitere schnelle Option · 25 europäische Sprachen"],
    notetakerTitle: "Eine lokale Notiz für deine Besprechung.",
    notetakerBody: "Starte eine Besprechungsnotiz aus Witness. Dein Mikrofon und die ausgewählte Besprechungs-App liefern den Ton für ein lokales Transkript mit Sprecherzuordnungen.",
    demo: "Demo", demoNote: "Die Sprechertrennung wird noch verbessert. Sprecherzuordnungen können ungenau sein — prüfe sie anhand des Gesprächs.",
    meetingPrivacy: "Audio wird nicht gespeichert oder hochgeladen. Besprechungsnotizen bleiben auf deinem Mac, bis du sie löschst. Witness nimmt erst nach deinem Start auf; informiere andere Beteiligte und hole nötige Einwilligungen ein.",
    interfaceTitle: "Kompakt im Menü, klar in den Einstellungen.",
    interfaceBody: "Getrennte Bereiche für Diktat und Notetaker. Dein gewähltes Tastenkürzel und die passende Anleitung bleiben sichtbar. Gedrückt halten oder zweimal drücken: Du entscheidest. Historie und seltene Aktionen sind zusammengefasst.",
    faq: [
      { q: "Kann ich das Spracherkennungsmodell wechseln?", a: "Ja, in den Einstellungen oder am Ende der Einrichtung. Whisper large-v3 turbo, das vollständige Whisper large-v3, Parakeet Ultra und Parakeet TDT v3 stehen zur Wahl. Die App zeigt Größe und Sprachunterstützung vor dem Download. Währenddessen bleibt dein Modell nutzbar; die fertige Auswahl wird nach Neustart und lokaler Vorbereitung angewendet. Diktat und Notetaker nutzen dasselbe Modell." },
      { q: "Wie weit ist der Notetaker?", a: "Notetaker ist als Demo enthalten. Nach deinem Start erstellt er ein lokales Besprechungstranskript. Die Sprechertrennung wird noch verbessert und kann Personen falsch zuordnen. Prüfe Text und Zuordnungen. Audio bleibt im Arbeitsspeicher, Notizen bleiben bis zur Löschung lokal gespeichert. Du bist für erforderliche Hinweise und Einwilligungen verantwortlich." },
    ],
  },
  en: {
    announcement: "New: 4 speech models and a Notetaker demo",
    eyebrow: "New in 0.6.27", title: "Find the model that suits your voice.",
    intro: "Try different models with your own languages and microphone. Dictation and Notetaker share your choice, running entirely on your Mac.",
    modelsTitle: "Four local speech models", modelsNote: "Approximate download sizes. macOS preparation needs additional disk space. A larger model is not always a better fit.",
    downloadNote: "Choose a model in Settings or at the end of setup. Download and select shows progress while your current model keeps working. A notification tells you when to restart; the new model is then prepared locally. You can remove inactive models.",
    modelDetails: ["Balanced recognition · all 100 Witness languages", "Full model · all 100 languages · more processing time", "Fast recognition · 25 European languages", "Another fast option · 25 European languages"],
    notetakerTitle: "A local note for your meeting.",
    notetakerBody: "Start a meeting note from Witness. Your microphone and selected meeting app supply the audio for a local transcript with speaker labels.",
    demo: "Demo", demoNote: "Speaker separation is still being improved. Speaker labels can be inaccurate — check them against the conversation.",
    meetingPrivacy: "Audio is never saved or uploaded. Meeting notes stay on your Mac until you delete them. Witness records only after you start it; inform participants and obtain any required consent.",
    interfaceTitle: "A compact menu. Clearer settings.",
    interfaceBody: "Separate Dictation and Notetaker views. Your chosen shortcut stays visible with the right instructions. Hold to talk or press twice: you choose. History and occasional actions are grouped away.",
    faq: [
      { q: "Can I switch speech recognition models?", a: "Yes, in Settings or at the end of setup. Choose Whisper large-v3 turbo, full Whisper large-v3, Parakeet Ultra or Parakeet TDT v3. The app shows size and language support before downloading. Your current model keeps working; a completed selection is applied after restart and local preparation. Dictation and Notetaker use the same model." },
      { q: "How ready is Notetaker?", a: "Notetaker is included as a demo. After you start it, it creates a local meeting transcript. Speaker separation is still being improved and can assign speech to the wrong person. Check the text and speaker labels. Audio stays in memory; notes remain stored locally until deleted. You are responsible for any required notice and consent." },
    ],
  },
  ru: {
    announcement: "Новое: 4 модели распознавания и демо-ноуттейкер",
    eyebrow: "Новое в 0.6.27", title: "Подбери модель под свой голос.",
    intro: "Попробуй разные модели со своими языками и микрофоном. Диктовка и ноуттейкер используют одну выбранную модель и работают на твоём Mac.",
    modelsTitle: "Четыре локальные модели", modelsNote: "Примерный объём загрузки. Для подготовки в macOS понадобится дополнительное место. Более крупная модель не всегда подходит лучше.",
    downloadNote: "Выбери модель в настройках или в конце онбординга. После «Скачать и выбрать» появится прогресс, а текущая модель продолжит работать. Уведомление подскажет, когда перезапустить приложение; затем новая модель подготовится на Mac. Неактивные модели можно удалить.",
    modelDetails: ["Баланс скорости и распознавания · все 100 языков Witness", "Полная модель · все 100 языков · больше времени на обработку", "Быстрое распознавание · 25 европейских языков", "Ещё один быстрый вариант · 25 европейских языков"],
    notetakerTitle: "Локальная заметка по встрече.",
    notetakerBody: "Запусти заметку по встрече в Witness. Звук микрофона и выбранного приложения встречи превратится в локальный транскрипт с отметками спикеров.",
    demo: "Демо", demoNote: "Разделение по спикерам ещё улучшается. Реплика может быть приписана другому человеку — сверяй отметки с разговором.",
    meetingPrivacy: "Аудио не сохраняется и не загружается на сервер. Заметки остаются на Mac до удаления. Запись начинается только по твоему действию; предупреди участников и получи согласие, если оно требуется.",
    interfaceTitle: "Компактная панель, понятные настройки.",
    interfaceBody: "Диктовка и ноуттейкер — в отдельных вкладках. Выбранный хоткей виден вместе с подходящей подсказкой. Удерживать клавишу или нажимать дважды — решаешь ты. История и редкие действия собраны отдельно.",
    faq: [
      { q: "Можно менять модель распознавания?", a: "Да, в настройках или в конце онбординга. На выбор Whisper large-v3 turbo, полный Whisper large-v3, Parakeet Ultra и Parakeet TDT v3. Перед загрузкой видны размер и поддерживаемые языки. Текущая модель продолжит работать; скачанный вариант применится после перезапуска и локальной подготовки. Диктовка и ноуттейкер используют одну модель." },
      { q: "Насколько готов ноуттейкер?", a: "Ноуттейкер доступен в демо-режиме. После запуска записи он создаёт локальный транскрипт встречи. Разделение по спикерам ещё улучшается и может приписать реплику другому человеку. Проверяй текст и отметки спикеров. Аудио остаётся в оперативной памяти, заметки хранятся локально до удаления. За необходимые предупреждения и согласие участников отвечаешь ты." },
    ],
  },
  uk: {
    announcement: "Нове: 4 моделі розпізнавання та демо-ноуттейкер",
    eyebrow: "Нове у 0.6.27", title: "Підбери модель під свій голос.",
    intro: "Спробуй різні моделі зі своїми мовами й мікрофоном. Диктування та ноуттейкер використовують одну вибрану модель і працюють на твоєму Mac.",
    modelsTitle: "Чотири локальні моделі", modelsNote: "Орієнтовний обсяг завантаження. Для підготовки в macOS потрібне додаткове місце. Більша модель не завжди підходить краще.",
    downloadNote: "Вибери модель у налаштуваннях або наприкінці початкового налаштування. Після «Завантажити й вибрати» з’явиться прогрес, а поточна модель продовжить працювати. Сповіщення підкаже, коли перезапустити застосунок; потім нова модель підготується на Mac. Неактивні моделі можна видалити.",
    modelDetails: ["Баланс швидкості та розпізнавання · усі 100 мов Witness", "Повна модель · усі 100 мов · більше часу на обробку", "Швидке розпізнавання · 25 європейських мов", "Ще один швидкий варіант · 25 європейських мов"],
    notetakerTitle: "Локальна нотатка за зустріччю.",
    notetakerBody: "Запусти нотатку зустрічі у Witness. Звук мікрофона та вибраного застосунку зустрічі стане локальним транскриптом із позначками мовців.",
    demo: "Демо", demoNote: "Розділення за мовцями ще вдосконалюється. Репліку може бути приписано іншій людині — звіряй позначки з розмовою.",
    meetingPrivacy: "Аудіо не зберігається й не завантажується на сервер. Нотатки лишаються на Mac до видалення. Запис починається лише за твоєю дією; попередь учасників та отримай згоду, якщо вона потрібна.",
    interfaceTitle: "Компактна панель, зрозумілі налаштування.",
    interfaceBody: "Диктування та ноуттейкер — в окремих вкладках. Вибрана гаряча клавіша видима разом із відповідною підказкою. Утримувати клавішу чи натискати двічі — вирішуєш ти. Історію та рідкісні дії згруповано окремо.",
    faq: [
      { q: "Чи можна змінювати модель розпізнавання?", a: "Так, у налаштуваннях або наприкінці початкового налаштування. На вибір Whisper large-v3 turbo, повний Whisper large-v3, Parakeet Ultra та Parakeet TDT v3. До завантаження видно розмір і підтримувані мови. Поточна модель продовжить працювати; завантажений варіант застосовується після перезапуску й локальної підготовки. Диктування та ноуттейкер використовують одну модель." },
      { q: "Наскільки готовий ноуттейкер?", a: "Ноуттейкер доступний у демо-режимі. Після початку запису він створює локальний транскрипт зустрічі. Розділення за мовцями ще вдосконалюється й може приписати репліку іншій людині. Перевіряй текст і позначки мовців. Аудіо лишається в оперативній пам’яті, нотатки зберігаються локально до видалення. За потрібні попередження та згоду учасників відповідаєш ти." },
    ],
  },
};
