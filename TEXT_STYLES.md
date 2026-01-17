# Текстовые стили проекта

Документация по типографической системе проекта ТАКТО.

## Использование

Все текстовые стили используют шрифт **Inter** и доступны как CSS классы.

### Display Styles (Десктоп)

Для крупных заголовков и hero-секций:

- `.text-style-font-display-l` - 48px, weight 600, line-height 52px
- `.text-style-font-display-l-strong` - 48px, weight 800, line-height 52px
- `.text-style-font-display-m` - 42px, weight 600, line-height 44px
- `.text-style-font-display-m-strong` - 42px, weight 800, line-height 44px
- `.text-style-font-display-s` - 32px, weight 600, line-height 44px
- `.text-style-font-display-s-strong` - 32px, weight 800, line-height 44px

### Heading Styles (Десктоп)

Для заголовков секций (h1-h6):

- `.text-style-font-heading-h-1` - 48px, weight 600, line-height 52px (равен Display L)
- `.text-style-font-heading-h-1-strong` - 48px, weight 800, line-height 52px
- `.text-style-font-heading-h-2` - 28px, weight 800, line-height 32px (бывший h1)
- `.text-style-font-heading-h-3` - 22px, weight 800, line-height 24px (бывший h2)
- `.text-style-font-heading-h-4` - 18px, weight 800, line-height 20px (бывший h3)
- `.text-style-font-heading-h-5` - 16px, weight 800, line-height 20px (бывший h4)
- `.text-style-font-heading-h-6` - 14px, weight 800, line-height 20px (бывший h5)

### Body Styles (Десктоп)

Для основного текста:

- `.text-style-font-body-l` - 18px, weight 400, line-height 26px
- `.text-style-font-body-l-strong` - 18px, weight 600, line-height 26px
- `.text-style-font-body-m` - 16px, weight 400, line-height 24px
- `.text-style-font-body-m-strong` - 16px, weight 600, line-height 24px
- `.text-style-font-body-s` - 14px, weight 400, line-height 20px
- `.text-style-font-body-s-strong` - 14px, weight 600, line-height 20px

### Description Styles (Десктоп)

Для мелкого текста и описаний:

- `.text-style-font-description-l` - 12px, weight 400, line-height 16px
- `.text-style-font-description-l-strong` - 12px, weight 600, line-height 16px
- `.text-style-font-description-m` - 11px, weight 400, line-height 16px, letter-spacing 0.2px
- `.text-style-font-description-m-strong` - 11px, weight 600, line-height 16px, letter-spacing 0.2px
- `.text-style-font-description-s` - 10px, weight 400, line-height 12px, letter-spacing 0.4px
- `.text-style-font-description-s-strong` - 10px, weight 600, line-height 12px, letter-spacing 0.4px

## Мобильные стили

На экранах до 768px автоматически применяются мобильные версии стилей:

- Display L: 48px → 28px
- Display M: 42px → 24px
- Display S: 32px → 20px
- Heading H1: 48px → 28px (равен Display L)
- Heading H2: 28px → 18px (бывший h1)
- Heading H3: 22px → 16px (бывший h2)
- Heading H4: 18px → 15px (бывший h3)
- Heading H5: 16px → 14px (бывший h4)
- Heading H6: 14px → 13px (бывший h5)
- Body L: 18px → 15px
- Body M: 16px → 14px
- Body S: 14px → 13px

Также доступны явные мобильные классы:
- `.text-style-mobile-font-display-l`
- `.text-style-mobile-font-heading-h-1`
- и т.д.

## Shadow Styles

### Light Theme Shadows

- `.effect-style-shadow-none` - без тени
- `.effect-style-shadow-bottom-s` - маленькая тень снизу
- `.effect-style-shadow-bottom-m` - средняя тень снизу
- `.effect-style-shadow-bottom-l` - большая тень снизу
- `.effect-style-shadow-bottom-xl` - очень большая тень снизу
- `.effect-style-shadow-bottom-controls` - тень для контролов
- `.effect-style-shadow-bottom-accent-*` - акцентные тени (синие)
- `.effect-style-shadow-top-*` - тени сверху

### Dark Theme Shadows

- `.effect-style-shadow-dark-*` - аналогичные классы для темной темы

## Примеры использования

```html
<!-- Большой заголовок -->
<h1 class="text-style-font-display-l-strong">
  Заголовок страницы
</h1>

<!-- Подзаголовок -->
<h2 class="text-style-font-heading-h-1">
  Подзаголовок секции
</h2>

<!-- Основной текст -->
<p class="text-style-font-body-m">
  Основной текст параграфа
</p>

<!-- Мелкий текст -->
<span class="text-style-font-description-l">
  Дополнительная информация
</span>

<!-- Карточка с тенью -->
<div class="effect-style-shadow-bottom-m">
  Контент карточки
</div>
```

## Примечания

- Все стили используют шрифт **Inter**
- Мобильные стили применяются автоматически через медиа-запросы
- Все размеры адаптивны и оптимизированы для разных экранов
- Стили не переопределяют цвет, только типографику
