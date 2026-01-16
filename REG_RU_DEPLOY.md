# Инструкция по деплою на REG.Ru

## Подготовка файлов

1. **Соберите проект:**
   ```bash
   npm run build
   ```
   
2. **Проверьте папку `dist/`** - там должны быть все файлы для загрузки:
   - `index.html`
   - `assets/` (CSS, JS, изображения)
   - `favicon.svg`
   - `robots.txt`
   - `sitemap.xml`
   - PDF файлы (если есть)

## Способ 1: Загрузка через FTP (Самый простой)

### Шаг 1: Получите данные FTP

1. Войдите в панель управления REG.Ru: https://www.reg.ru/user/
2. Перейдите в раздел **"Хостинг"** → **"Управление"**
3. Найдите ваш домен `takto.ru`
4. Перейдите в **"FTP-доступ"** или **"Файловый менеджер"**
5. Запишите данные:
   - **FTP-сервер** (например: `ftp.takto.ru` или IP-адрес)
   - **FTP-логин** (обычно совпадает с доменом или указан в панели)
   - **FTP-пароль** (можно сгенерировать в панели)

### Шаг 2: Подключитесь через FTP-клиент

**Вариант A: FileZilla (бесплатный)**

1. Скачайте FileZilla: https://filezilla-project.org/
2. Установите и откройте
3. Введите данные FTP:
   - Хост: ваш FTP-сервер
   - Имя пользователя: FTP-логин
   - Пароль: FTP-пароль
   - Порт: 21 (или 22 для SFTP)
4. Нажмите "Быстрое соединение"

**Вариант B: Через панель REG.Ru (Файловый менеджер)**

1. В панели REG.Ru перейдите в **"Файловый менеджер"**
2. Откройте папку `public_html` или `www` (корневая папка сайта)

### Шаг 3: Загрузите файлы

1. **Удалите все старые файлы** из папки `public_html` (если есть)
2. **Загрузите ВСЕ файлы из папки `dist/`** в `public_html`:
   - Скопируйте `index.html` в корень `public_html`
   - Скопируйте всю папку `assets/` в `public_html/assets/`
   - Скопируйте `favicon.svg` в корень `public_html`
   - Скопируйте `robots.txt` в корень `public_html`
   - Скопируйте `sitemap.xml` в корень `public_html`
   - Скопируйте PDF файлы (если есть) в корень `public_html`

### Шаг 4: Проверьте структуру

После загрузки структура должна быть такой:
```
public_html/
├── index.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── politika_obrabotki_i_zashiti_dannih.pdf
├── oferta_2.pdf
└── assets/
    ├── index-*.css
    ├── index-*.js
    └── *.svg (иконки и логотипы)
```

## Способ 2: Загрузка через Git (Если доступен)

Если на вашем тарифе REG.Ru есть поддержка Git:

1. В панели REG.Ru найдите раздел **"Git"** или **"Версионирование"**
2. Подключите репозиторий: `https://github.com/ignatovivin/vibesite.git`
3. Настройте автоматический деплой из ветки `main`
4. Укажите команды:
   - Build command: `npm run build`
   - Output directory: `dist`

## Способ 3: Загрузка через SSH (Для продвинутых)

Если у вас есть SSH доступ:

```bash
# Подключитесь к серверу
ssh ваш_логин@ваш_сервер.reg.ru

# Перейдите в папку сайта
cd public_html

# Клонируйте репозиторий (если нужно)
git clone https://github.com/ignatovivin/vibesite.git temp

# Соберите проект
cd temp
npm install
npm run build

# Скопируйте файлы
cp -r dist/* ../

# Очистите временные файлы
cd ..
rm -rf temp
```

## Настройка домена

### Шаг 1: Подключение домена к хостингу

1. В панели REG.Ru перейдите в **"Домены"** → **"Управление DNS"**
2. Убедитесь, что DNS записи указывают на ваш хостинг:
   - **A-запись**: `@` → IP-адрес вашего хостинга
   - **CNAME**: `www` → `@` или IP-адрес

### Шаг 2: Настройка SSL-сертификата

1. В панели REG.Ru найдите раздел **"SSL-сертификаты"**
2. Активируйте бесплатный Let's Encrypt сертификат для домена `takto.ru`
3. Включите принудительное перенаправление на HTTPS

## Важные настройки

### 1. Файл .htaccess (для Apache)

Создайте файл `.htaccess` в папке `public_html`:

```apache
# Перенаправление на HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Поддержка SPA (React Router)
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Кэширование статических файлов
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Сжатие файлов
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### 2. Проверка путей к файлам

Убедитесь, что в `index.html` все пути начинаются с `/`:
- `/favicon.svg` ✅
- `/assets/...` ✅
- `/robots.txt` ✅

## Проверка после деплоя

1. **Откройте сайт:** https://takto.ru
2. **Проверьте:**
   - ✅ Сайт открывается
   - ✅ Все стили загружаются
   - ✅ Все изображения отображаются
   - ✅ Форма работает
   - ✅ Яндекс Метрика работает (проверьте в консоли браузера)
   - ✅ PDF файлы открываются

3. **Проверьте консоль браузера** (F12) на наличие ошибок

## Обновление сайта

После каждого изменения:

1. Соберите проект: `npm run build`
2. Загрузите обновленные файлы из `dist/` через FTP
3. Или используйте Git (если настроен автоматический деплой)

## Полезные ссылки

- Панель управления REG.Ru: https://www.reg.ru/user/
- Документация REG.Ru: https://www.reg.ru/support/
- Файловый менеджер: доступен в панели управления

## Поддержка

Если возникли проблемы:
1. Проверьте логи в панели REG.Ru
2. Убедитесь, что все файлы загружены правильно
3. Проверьте права доступа к файлам (должны быть 644 для файлов, 755 для папок)
4. Обратитесь в поддержку REG.Ru
