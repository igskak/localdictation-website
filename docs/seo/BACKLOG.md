# SEO-бэклог witnessmac.com

Очередь тем для контент-агента. Берётся верхний пункт со статусом `todo`, одна страница на PR. Порядок пересобирает еженедельный монитор, когда в Search Console появляются запросы, по которым мы уже показываемся на 2–3 странице выдачи.

Источники спроса:
- **Semrush**, база `de`, 07–09.09.2026 (объём в месяц и KD), подробности в `docs/GTM.md` §4 репозитория приложения.
- **Реклама**: реальные поисковые запросы кампании Witness, 10–27.09.2026, показы за 17 дней. Это не объём рынка, а доказательство, что так ищут.
- Там, где цифры нет, стоит «гипотеза»: объём проверяется до того, как писать.

## Правила для каждой страницы

1. **Факты о конкурентах только с источником.** Каждое утверждение о чужом продукте ссылается на его официальную страницу и несёт дату проверки, как в `/vergleich`. Сравнительная реклама в Германии регулируется §6 UWG: сравнение должно быть объективным и проверяемым. Нет источника, нет утверждения.
2. **О Witness только то, что есть в продукте.** Проверенный уровень: DE, EN, RU, UK. Остальные языки распознаются без пометок риска. Никаких обещаний, которых нет в `llms.txt` и на главных страницах.
3. **Честный ответ раньше продажи.** На информационный запрос страница сначала отвечает на вопрос (например, как включить встроенную диктовку), потом объясняет, где её предел, и только потом показывает Witness.
4. **Без длинных тире и без подводок** вроде «Стоит отметить» и «Важно понимать». Такой текст читается как машинный.
5. **Техника:** canonical, hreflang (если есть языковые версии), запись в `sitemap.xml`, ссылка с хаба и с главных страниц, FAQ и Article в JSON-LD, тест в `tests/rendered-html.test.mjs`.

## Очередь

| # | Статус | Страница (путь) | Язык | Целевые запросы | Спрос | Почему сейчас |
|---|---|---|---|---|---|---|
| 1 | todo | Diktierfunktion am Mac: einschalten, Grenzen, Alternativen (`/ratgeber/diktierfunktion-mac`) | DE | diktierfunktion mac, mac diktierfunktion, macbook diktierfunktion, diktieren mac, diktieren am mac | Semrush: diktierfunktion mac 390/мес, KD 20; diktieren mac 90, KD 18. Реклама: ~200 показов на вариантах за 17 дней, больше, чем у любого другого кластера | Самый частый запрос в рекламе, почти пустой аукцион, низкий KD. Ищущий уже диктует на Mac, это покупатель на замену. Spokenly занимает ту же нишу страницей `apple-dictation-alternative` |
| 2 | todo | Dictation on Mac: the built-in feature and when an app is better (`/en/guides/mac-dictation`) | EN | speech to text mac, macos speech to text, mac speech to text, voice to text mac, mac dictation | Semrush de: speech to text mac 140, KD 28. Реклама: ~40 показов. US не замерено | Английский двойник п. 1. У английского сайта пока нет ни одной страницы кроме главной |
| 3 | todo | Spokenly-Alternative (`/vergleich/spokenly-alternative`) | DE | spokenly, spokenly mac | Реклама: «spokenly mac». Объём: гипотеза | Бесплатный локальный конкурент с сильным SEO. CaschysBlog о нём писал. Честный ответ «почему платить, если есть бесплатное» закрывает главное возражение |
| 4 | todo | Best Wispr Flow alternatives for Mac (`/en/compare/wispr-flow-alternatives`) | EN | wispr flow alternative, wispr flow alternative mac | Гипотеза (Semrush без юнитов). Выдача: r/macapps и подборки конкурентов (lumevoice, dictationdaddy, gladia, getvoibe) | Формат, который ранжируется в этой выдаче, это подборка. Wispr Flow критикуют публично (тред Theo, 23.09) |
| 5 | todo | Sprache zu Text am Mac: App oder Bordmittel (`/ratgeber/sprache-zu-text-mac`) | DE | sprache zu text app, sprache zu text mac, macbook sprache zu text, spracheingabe mac | Semrush: sprache zu text app 390, KD 23; sprache zu text 1 300, KD 24 | Второй по чистоте немецкий кластер. Пересекается с п. 1: писать после него и связать ссылками |
| 6 | todo | FluidVoice- und MacParakeet-Alternative (`/vergleich/open-source-diktier-apps-mac`) | DE | fluidvoice, macparakeet, mac parakeet, open source diktier app mac | Реклама: macparakeet 7 + mac parakeet 3, fluid voice 4 показа. Объём: гипотеза | Бесплатные open-source конкуренты растут. Одна страница на обоих: кому хватит бесплатного, а кому нужны проверка и поддержка |
| 7 | todo | Why dictation silently drops words, and how to catch it (`/en/guides/dictation-missed-words`) | EN | dictation missing words, speech to text skipping words, whisper hallucination | Гипотеза | Ровно та боль, вокруг которой построен Witness (тред Theo: 4 100 лайков у ответа про пропущенные слова). Материал, на который ссылаются |
| 8 | todo | Diktieren mit KI (`/ratgeber/diktieren-mit-ki`) | DE | ki spracherkennung, diktieren mit ki | Semrush: ki spracherkennung 390, KD 41. Реклама: diktieren mit ki 3 | Здесь рекламируется Wispr Flow. Выше KD, поэтому после п. 1 и 5 |
| 9 | todo | Диктовка на Mac по-русски / по-українськи (`/ru/...`, `/uk/...`) | RU, UK | диктовка mac, голосовой ввод mac, диктування mac | Гипотеза | Вероятно почти пустая выдача. Писать только после замера объёма |
| 10 | todo | Diktieren für Kanzleien und Beratung, DSGVO (`/ratgeber/diktieren-kanzlei-dsgvo`) | DE | diktiersoftware anwalt mac, diktieren dsgvo | Гипотеза; кластер Dragon/Philips занят sprecho.ai (конкуренция 0.91–1.00) | Аватар из ICP. Юридические формулировки требуют аккуратности, поэтому в конце очереди |

## Не писать

- Транскрибация файлов и голосовых: `audio zu text`, `mp4 to text`, `ogg to text`, `sprachnachricht in text umwandeln`. Другая задача, продукт её не решает.
- `text zu sprache` и `text to speech`: обратная задача.
- `spracheingabe` без «mac»: ищут, как включить Gboard и голосовой ввод Windows.
- `whisper`, `whisper ai`: слой лидера, Wispr Flow держит первые позиции.

## Сделано

| Дата | Что | Где |
|---|---|---|
| 27.09.2026 | Ссылки с четырёх главных страниц на `/vergleich` и шесть сравнений | PR #1, `c187952` |
| 27.09.2026 | Открыты AI-краулеры (GPTBot, ClaudeBot, CCBot) в Cloudflare | настройка зоны |
