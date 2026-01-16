# Инструкция по деплою сайта

Есть несколько способов задеплоить ваш сайт. Самый простой - через **Vercel**.

## Вариант 1: Vercel (Рекомендуется) - Самый простой

### Способ A: Через Vercel CLI (без GitHub)

1. **Установите Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Войдите в Vercel:**
   ```bash
   vercel login
   ```

3. **Задеплойте проект:**
   ```bash
   vercel
   ```
   
   Следуйте инструкциям в терминале. Vercel автоматически:
   - Определит, что это Vite проект
   - Соберет проект
   - Задеплоит его
   - Дам вам ссылку вида: `https://your-project.vercel.app`

4. **Для продакшн деплоя:**
   ```bash
   vercel --prod
   ```

### Способ B: Через GitHub + Vercel (Автоматический деплой)

1. **Создайте репозиторий на GitHub:**
   - Зайдите на https://github.com
   - Создайте новый репозиторий (например, `vibe-site`)
   - НЕ добавляйте README, .gitignore или лицензию

2. **Подключите локальный репозиторий к GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ВАШ_USERNAME/vibe-site.git
   git push -u origin main
   ```

3. **Задеплойте через Vercel:**
   - Зайдите на https://vercel.com
   - Войдите через GitHub
   - Нажмите "Add New Project"
   - Выберите ваш репозиторий `vibe-site`
   - Vercel автоматически определит настройки
   - Нажмите "Deploy"
   - Готово! Сайт будет доступен по ссылке

4. **Автоматический деплой:**
   - Теперь каждый раз, когда вы делаете `git push`, сайт автоматически обновляется!

## Вариант 2: Netlify

1. **Установите Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Войдите:**
   ```bash
   netlify login
   ```

3. **Задеплойте:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

Или через веб-интерфейс:
- Зайдите на https://netlify.com
- Перетащите папку `dist` (после `npm run build`) в окно браузера

## Вариант 3: GitHub Pages

1. **Установите gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Добавьте в package.json:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   },
   "homepage": "https://ВАШ_USERNAME.github.io/vibe-site"
   ```

3. **Задеплойте:**
   ```bash
   npm run deploy
   ```

## Быстрый старт (Vercel CLI)

Если хотите быстро задеплоить прямо сейчас:

```bash
# 1. Установите Vercel CLI
npm install -g vercel

# 2. Войдите
vercel login

# 3. Задеплойте
vercel

# 4. Для продакшн
vercel --prod
```

После этого вы получите ссылку, которой можно делиться!

## Важные замечания

- **EmailJS**: Убедитесь, что ваши ключи EmailJS настроены правильно (они уже должны быть в коде)
- **Переменные окружения**: Если нужны секретные ключи, добавьте их в настройках Vercel/Netlify
- **Домен**: Vercel и Netlify дают бесплатный домен, но можно подключить свой

## Рекомендация

**Используйте Vercel** - это самый простой и быстрый способ для React/Vite проектов. Бесплатно, быстро, автоматический деплой из GitHub.
