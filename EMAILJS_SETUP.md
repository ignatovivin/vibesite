# Настройка EmailJS для отправки формы

## Шаги настройки:

1. **Зарегистрируйтесь на EmailJS**
   - Перейдите на https://www.emailjs.com/
   - Создайте бесплатный аккаунт

2. **Создайте Email Service**
   - В Dashboard перейдите в "Email Services"
   - Добавьте новый сервис (Gmail, Outlook и т.д.)
   - Скопируйте **Service ID**

3. **Создайте Email Template**
   - Перейдите в "Email Templates"
   - Создайте новый шаблон
   - Используйте следующие переменные в шаблоне:
     - `{{from_name}}` - Имя отправителя
     - `{{from_email}}` - Email отправителя
     - `{{phone}}` - Телефон
     - `{{company}}` - Компания
     - `{{industry}}` - Сфера деятельности
     - `{{turnover}}` - Оборот в месяц
     - `{{task}}` - Задача
   - Скопируйте **Template ID**

4. **Получите Public Key**
   - Перейдите в "Account" → "General"
   - Скопируйте **Public Key**

5. **Обновите константы в ContactSection.jsx**
   - Откройте `src/components/ContactSection.jsx`
   - Замените значения:
     ```javascript
     const EMAILJS_PUBLIC_KEY = 'ваш_public_key'
     const EMAILJS_SERVICE_ID = 'ваш_service_id'
     const EMAILJS_TEMPLATE_ID = 'ваш_template_id'
     ```

## Пример шаблона Email:

```
Тема: Новая заявка с сайта

Имя: {{from_name}}
Email: {{from_email}}
Телефон: {{phone}}
Компания: {{company}}
Сфера деятельности: {{industry}}
Оборот в месяц: {{turnover}}
Задача: {{task}}
```

## Готово!

После настройки форма будет отправлять письма на указанный email при заполнении и отправке формы.
