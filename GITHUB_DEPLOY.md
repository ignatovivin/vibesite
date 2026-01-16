# Инструкция по деплою через GitHub

## Шаг 1: Настройка Git (если еще не настроено)

Выполните в терминале (замените на свои данные):

```bash
git config --global user.email "ваш-email@example.com"
git config --global user.name "Ваше Имя"
```

## Шаг 2: Создание коммита

```bash
git add .
git commit -m "Initial commit: VibeSite project"
```

## Шаг 3: Создание репозитория на GitHub

1. Зайдите на https://github.com
2. Нажмите кнопку **"+"** в правом верхнем углу → **"New repository"**
3. Введите название репозитория (например: `vibe-site` или `takto-site`)
4. **НЕ** добавляйте README, .gitignore или лицензию (они уже есть)
5. Нажмите **"Create repository"**

## Шаг 4: Подключение локального репозитория к GitHub

После создания репозитория GitHub покажет инструкции. Выполните команды (замените `ВАШ_USERNAME` и `НАЗВАНИЕ_РЕПОЗИТОРИЯ`):

```bash
git remote add origin https://github.com/ВАШ_USERNAME/НАЗВАНИЕ_РЕПОЗИТОРИЯ.git
git push -u origin main
```

Например:
```bash
git remote add origin https://github.com/username/vibe-site.git
git push -u origin main
```

## Шаг 5: Деплой через Vercel (Рекомендуется)

### Вариант A: Через веб-интерфейс Vercel

1. Зайдите на https://vercel.com
2. Нажмите **"Sign Up"** или **"Log In"**
3. Войдите через **GitHub** (нажмите "Continue with GitHub")
4. После входа нажмите **"Add New Project"**
5. Выберите ваш репозиторий из списка
6. Vercel автоматически определит настройки:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Нажмите **"Deploy"**
8. Готово! Через 1-2 минуты вы получите ссылку вида: `https://your-project.vercel.app`

### Вариант B: Через Vercel CLI

```bash
# Установите Vercel CLI (если еще не установлен)
npm install -g vercel

# Войдите в Vercel
vercel login

# Задеплойте (Vercel автоматически подключится к GitHub)
vercel

# Для продакшн деплоя
vercel --prod
```

## Шаг 6: Автоматический деплой

После подключения к Vercel:
- Каждый раз, когда вы делаете `git push`, сайт автоматически обновляется!
- Vercel создает отдельную ссылку для каждого коммита (для тестирования)
- Основная ссылка (production) обновляется при push в ветку `main`

## Альтернатива: Netlify

Если хотите использовать Netlify вместо Vercel:

1. Зайдите на https://netlify.com
2. Войдите через GitHub
3. Нажмите **"Add new site"** → **"Import an existing project"**
4. Выберите ваш GitHub репозиторий
5. Настройки:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Нажмите **"Deploy site"**

## Полезные команды для работы с Git

```bash
# Проверить статус
git status

# Добавить изменения
git add .

# Создать коммит
git commit -m "Описание изменений"

# Отправить на GitHub
git push

# Посмотреть все коммиты
git log
```

## Важные замечания

- ✅ **EmailJS** уже настроен в коде
- ✅ **Переменные окружения** не требуются (все ключи уже в коде)
- ✅ **Домен**: Vercel/Netlify дают бесплатный домен, но можно подключить свой
- ✅ **HTTPS**: Включен автоматически

## Что дальше?

После деплоя:
1. Вы получите публичную ссылку на сайт
2. Можете делиться этой ссылкой с кем угодно
3. При каждом изменении кода и `git push` сайт автоматически обновится

## Проблемы?

Если что-то не работает:
- Проверьте, что все файлы закоммичены: `git status`
- Убедитесь, что репозиторий подключен: `git remote -v`
- Проверьте логи деплоя в Vercel/Netlify
