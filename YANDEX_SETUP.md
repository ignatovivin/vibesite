# Настройка индексации сайта в Yandex

## Шаги для добавления сайта в Yandex

### 1. Добавление сайта в Yandex Webmaster

1. Перейдите на https://webmaster.yandex.ru/
2. Войдите в свой аккаунт Yandex
3. Нажмите "Добавить сайт"
4. Введите URL вашего сайта: `https://takto.space`
5. Выберите способ подтверждения прав на сайт

### 2. Подтверждение прав на сайт

#### Вариант 1: HTML-файл (рекомендуется)
1. В Yandex Webmaster выберите "HTML-файл"
2. Скачайте предложенный файл
3. Разместите его в корневой директории сайта (в папке `public/`)
4. После размещения нажмите "Проверить"

#### Вариант 2: Мета-тег (уже настроен)
1. В Yandex Webmaster выберите "Мета-тег"
2. Скопируйте значение атрибута `content` из мета-тега
3. Вставьте его в файл `index.html` в строку:
   ```html
   <meta name="yandex-verification" content="ВАШ_КОД_ВЕРИФИКАЦИИ" />
   ```
4. Пересоберите проект: `npm run build`
5. Загрузите обновленный сайт на сервер
6. В Yandex Webmaster нажмите "Проверить"

#### Вариант 3: DNS-запись
1. В Yandex Webmaster выберите "DNS-запись"
2. Добавьте TXT-запись в настройках DNS вашего домена
3. Дождитесь распространения DNS (может занять до 24 часов)
4. В Yandex Webmaster нажмите "Проверить"

### 3. Отправка sitemap.xml в Yandex

1. После подтверждения прав перейдите в раздел "Индексирование" → "Файлы Sitemap"
2. Введите URL вашего sitemap: `https://takto.space/sitemap.xml`
3. Нажмите "Добавить"
4. Yandex начнет индексацию страниц из sitemap

### 4. Настройка индексации

1. Перейдите в раздел "Индексирование" → "Настройка индексации"
2. Убедитесь, что включены:
   - Индексация страниц сайта
   - Индексация изображений
   - Индексация документов

### 5. Мониторинг индексации

1. В разделе "Индексирование" → "История" вы можете отслеживать:
   - Количество проиндексированных страниц
   - Ошибки индексации
   - Время последнего обхода сайта

2. В разделе "Поисковые запросы" вы можете видеть:
   - Запросы, по которым ваш сайт показывается
   - Позиции в поисковой выдаче
   - Клики по сайту

## Дополнительные рекомендации

### Yandex Metrika (опционально, но рекомендуется)

1. Зарегистрируйтесь на https://metrika.yandex.ru/
2. Создайте счетчик для вашего сайта
3. Получите код счетчика
4. Добавьте код в `index.html` перед закрывающим тегом `</head>`:

```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(ВАШ_ID_СЧЕТЧИКА, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/ВАШ_ID_СЧЕТЧИКА" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
```

### Проверка индексации

После добавления сайта в Yandex Webmaster проверьте индексацию:

1. В поиске Yandex введите: `site:takto.space`
2. Если страницы проиндексированы, они появятся в результатах поиска

### Время индексации

- Первая индексация обычно происходит в течение 1-7 дней
- Обновление индекса происходит регулярно (обычно раз в несколько дней)
- После изменений на сайте можно запросить переиндексацию вручную в Yandex Webmaster

## Полезные ссылки

- Yandex Webmaster: https://webmaster.yandex.ru/
- Yandex Metrika: https://metrika.yandex.ru/
- Документация Yandex Webmaster: https://yandex.ru/support/webmaster/
