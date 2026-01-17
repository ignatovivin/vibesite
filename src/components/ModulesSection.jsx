import React, { useState } from 'react'
import './ModulesSection.css'
import Badge from './Badge'

/**
 * Dot Icon SVG Component
 */
const DotIcon = ({ className = '' }) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="4"
      cy="4"
      r="4"
      fill="currentColor"
    />
  </svg>
)

/**
 * Arrow Icon SVG Component (for cards)
 */
const ArrowIcon = ({ className = '', isOpen = false }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * ModulesSection component displaying modular architecture
 */
function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState('Платежи')

  const toggleModule = (moduleName) => {
    setSelectedModule(selectedModule === moduleName ? '' : moduleName)
  }

  const moduleCards = [
    {
      name: 'Платежи',
      subtitle: 'Принимайте платежи через все доступные каналы',
      features: [
        'Ссылки на оплату за 30 секунд',
        'QR-коды для офлайн точек',
        'Интеграция с сайтом и CRM',
        'СБП и банковские карты',
        'Интернет-эквайринг'
      ]
    },
    {
      name: 'Автоматизация',
      subtitle: 'Принимайте платежи через все доступные каналы',
      features: [
        'Автоматические чеки и документы',
        'Реестры для бухгалтерии',
        'Напоминание о платежах',
        'Возвраты в один клик',
        'Интеграция с CRM'
      ]
    },
    {
      name: 'Рост',
      subtitle: 'Принимайте платежи через все доступные каналы',
      features: [
        'Конверсия воронки продаж',
        'Наглядный отчет продаж',
        'Интеграции с мессенджерами'
      ]
    }
  ]

  const modules = [
    { name: 'Лиды', active: true, row: 1 },
    { name: 'Платежи', active: true, row: 1 },
    { name: 'Документы', active: true, row: 1 },
    { name: 'CRM', active: false, row: 2 },
    { name: 'Процессы', active: false, row: 2 },
    { name: 'Реестры', active: false, row: 2 },
    { name: 'API', active: false, row: 3 },
    { name: 'Интеграции', active: false, row: 3 },
    { name: 'Масштаб', active: false, row: 3 }
  ]

  // Определяем, какой ряд нужно подсветить
  const getHighlightedRow = () => {
    if (selectedModule === 'Платежи') return 1
    if (selectedModule === 'Автоматизация') return 2
    if (selectedModule === 'Рост') return 3
    return null
  }

  const highlightedRow = getHighlightedRow()

  return (
    <section id="products" className="modules-section-wrapper">
      <div className="modules-section">
        <div className="modules-section__container">
          <div className="modules-section__header">
            <Badge variant="secondary" size="s" colorScheme="neutral">
              Модульная архитектура
            </Badge>
            <div className="modules-section__header-content">
              <h2 className="modules-section__title text-style-font-heading-h-2">
                Модули для каждого этапа роста
              </h2>
              <p className="modules-section__subtitle">
                Начните с базового приема платежей, затем добавляйте модули по мере развития бизнеса
              </p>
            </div>
          </div>
          <div className="modules-section__content">
            <div className="modules-section__cards">
              {moduleCards.map((card, index) => {
                const isSelected = selectedModule === card.name
                return (
                  <div
                    key={index}
                    className={`module-card ${isSelected ? 'module-card--selected' : ''}`}
                    onClick={() => toggleModule(card.name)}
                  >
                    <div className="module-card__header">
                      <div className="module-card__content">
                        <h3 className="module-card__title text-style-font-heading-h-3">{card.name}</h3>
                        <p className="module-card__subtitle text-style-font-body-s">{card.subtitle}</p>
                      </div>
                      <div className="module-card__icon">
                        <ArrowIcon isOpen={isSelected} />
                      </div>
                    </div>
                    {card.features && (
                      <div className="module-card__features">
                        {card.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="module-card__feature">
                            <span className="module-card__checkmark">
                              <DotIcon />
                            </span>
                            <span className="module-card__feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="modules-section__grid">
              {modules.map((module, index) => {
                const isRowHighlighted = highlightedRow === module.row
                // Подсвечиваем только если ряд подсвечен (аккордеон открыт)
                const rowClass = isRowHighlighted ? `module-item--row-highlighted module-item--row-${highlightedRow}` : ''
                // Надписи показываем только когда аккордеон открыт
                return (
                  <div
                    key={index}
                    className={`module-item ${rowClass}`}
                  >
                    <div className="module-item__icon-circle"></div>
                    {module.name && isRowHighlighted && (
                      <span className="module-item__name">{module.name}</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModulesSection
