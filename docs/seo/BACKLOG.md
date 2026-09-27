# SEO-бэклог witnessmac.com

Очередь тем для контентного агента, порядок его работы описан в `docs/seo/CONTENT_AGENT.md`. Берётся верхний пункт со статусом `todo`, одна страница на PR. Порядок пересобирает еженедельный монитор, когда в Search Console появляются запросы, по которым мы уже показываемся на 2–3 странице выдачи.

Источники спроса:
- **Semrush**, базы `de` и `us`, 27.09.2026 (объём в месяц и KD). Первичный ресёрч 07–09.09 лежит в `docs/GTM.md` §4 репозитория приложения.
- **Реклама**: реальные поисковые запросы кампании Witness, 10–27.09.2026, показы за 17 дней. Это не объём рынка, а доказательство, что так ищут.
- Там, где цифры нет, стоит «гипотеза»: объём проверяется до того, как писать.

## Правила для каждой страницы

1. **Факты о конкурентах только с источником.** Каждое утверждение о чужом продукте ссылается на его официальную страницу и несёт дату проверки, как в `/vergleich`. Сравнительная реклама в Германии регулируется §6 UWG: сравнение должно быть объективным и проверяемым. Нет источника, нет утверждения.
2. **О Witness только то, что есть в продукте.** Проверенный уровень: DE, EN, RU, UK. Остальные языки распознаются без пометок риска. Никаких обещаний, которых нет в `llms.txt` и на главных страницах.
3. **Честный ответ раньше продажи.** На информационный запрос страница сначала отвечает на вопрос (например, как включить встроенную диктовку), потом объясняет, где её предел, и только потом показывает Witness.
4. **Без длинных тире и без подводок** вроде «Стоит отметить» и «Важно понимать». Такой текст читается как машинный.
5. **Техника:** немецкие страницы строятся на `ComparisonPage` и данных в `app/_data/comparisons.ts`; canonical, hreflang (если есть языковые версии), запись в `sitemap.xml`, ссылка с хаба и с главных страниц, FAQ и Article в JSON-LD, тест в `tests/rendered-html.test.mjs`.

## Очередь

Semrush (базы `de` и `us`) перепроверен 27.09.2026. Объём в месяц, KD в скобках.

| # | Статус | Страница (путь) | Язык | Целевые запросы | Спрос | Почему сейчас |
|---|---|---|---|---|---|---|
| 1 | review: PR #3 | Diktierfunktion am Mac: einschalten, nutzen, Grenzen (`/vergleich/mac-diktierfunktion`) | DE | diktierfunktion mac, mac diktierfunktion, diktierfunktion macbook, macbook diktierfunktion, diktieren mac, diktieren am mac, mac os spracheingabe, apple diktierfunktion | 390 (20) + 390 (30) + 260 (23) + 210 (22) + 90 (18) + 70 (14) + 320 (19) + 140 (34): около 1 900/мес. Реклама: ~200 показов за 17 дней | Самый частый кластер в рекламе при низком KD. В топе справка Apple, CHIP, heise, netzwelt |
| 2 | todo | Английский шаблон для сравнений и гайдов | EN | нет | нет | Инженерная задача, без неё пункты 3 и 4 не сделать: `ComparisonPage` сейчас жёстко немецкий (`lang="de"`, `de_DE`, подписи, хлебные крошки). Отдельный PR без контента |
| 3 | todo | Best Wispr Flow alternatives for Mac (`/en/compare/wispr-flow-alternatives`) | EN | wispr flow alternative, wispr flow alternatives, wispr flow alternative mac | us: 260 (15) + 260 (9) + 20; de: 320 (26) | Самый низкий KD среди коммерческих запросов. В топе r/macapps и подборки конкурентов (letterly, saner, toolfinder, eesel, tryvoiceink, weesper). Здесь ранжируется формат подборки |
| 4 | todo | How to use dictation on Mac, and when an app is better (`/en/guides/mac-dictation`) | EN | how to use dictation on mac, speech to text mac, dictation on mac, mac dictation, voice to text mac, dictation mac, mac dictation not working | us: 2 400 (35) + 1 300 (26) + 720 (33) + 480 (29) + 390 (28) + 210 (27) + 260 (18): около 5 800/мес | Английский двойник п. 1 и самый большой кластер в бэклоге. В топе справка Apple, университет Мельбурна, тред r/macapps «Mac dictation still sucks» |
| 5 | todo | Хаб `/vergleich` как полноценная подборка «Diktier-Apps für den Mac 2026» | DE | sprache zu text app, diktier app, diktierprogramm | 390 (23) + 320 (35) + 110 (15) | Коммерческий запрос «какое приложение». Хаб уже есть и получает ссылки со всех главных, нужны сводная таблица всех приложений и короткий вывод по каждому |
| 6 | todo | Diktieren mit KI (`/vergleich/ki-spracherkennung`) | DE | ki spracherkennung, diktieren mit ki | 390 (41) + 20 | Здесь рекламируется Wispr Flow. KD выше, поэтому после п. 1 и 5 |
| 7 | todo | Spokenly-Alternative (`/vergleich/spokenly-alternative`) | DE | spokenly | de: 210 (36); us: 1 600 (32), но «spokenly alternative» всего 10 | Спрос почти весь навигационный. Страница нужна скорее для AI-ответов и честного ответа «почему платить, если есть бесплатное», чем ради трафика |
| 8 | todo | FluidVoice und MacParakeet: Open-Source-Diktier-Apps (`/vergleich/open-source-diktier-apps-mac`) | DE | fluidvoice, macparakeet | de: 140; us: 90; macparakeet 0 | Бесплатные open-source конкуренты растут. Одна страница на обоих |
| 9 | todo | Why dictation silently drops words, and how to catch it (`/en/guides/dictation-missed-words`) | EN | dictation missing words, whisper hallucination | whisper hallucination 20, остальное без данных | Не ради трафика, а ради ссылок и AI-цитирования: ровно та боль, вокруг которой построен Witness (тред Theo, 4 100 лайков у ответа про пропущенные слова) |

## Не писать

- Транскрибация файлов и голосовых: `audio zu text`, `mp4 to text`, `ogg to text`, `sprachnachricht in text umwandeln`. Другая задача, продукт её не решает.
- `text zu sprache` и `text to speech`: обратная задача.
- `spracheingabe` без «mac»: ищут, как включить Gboard и голосовой ввод Windows.
- `whisper`, `whisper ai`: слой лидера, Wispr Flow держит первые позиции.
- Русские и украинские запросы про диктовку на Mac: Semrush не нашёл данных ни в базе `ru`, ни в `ua` (27.09). Вернуться, если в Search Console появятся показы на `/ru` или `/uk`.
- Диктовка в Word на Mac: «word diktieren mac» и варианты по 20. Большой «diktierfunktion word» (1 300) почти целиком про Windows и Office.
- Юристы и DSGVO отдельной страницей: «diktiersoftware anwalt» 20. Тема уже закрыта страницей `/vergleich/diktiersoftware-mac-dsgvo`.

## Сделано

| Дата | Что | Где |
|---|---|---|
| 27.09.2026 | Ссылки с четырёх главных страниц на `/vergleich` и шесть сравнений | PR #1, `c187952` |
| 27.09.2026 | Открыты AI-краулеры (GPTBot, ClaudeBot, CCBot) в Cloudflare | настройка зоны |
