import React from 'react'
import './HeroSection.css'
import Badge from './Badge'
import Button from './Button'

/**
 * Arrow Right Icon SVG Component
 */
const ArrowRightIcon = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7.5 5L12.5 10L7.5 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Users Icon SVG Component
 */
const UsersIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Security Icon SVG Component
 */
const SecurityIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Breaking Icon SVG Component (for Badge)
 */
const BreakingIcon = ({ className = '' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 1V3M8 13V15M3 8H1M15 8H13M3.34314 3.34314L4.75736 4.75736M11.2426 11.2426L12.6569 12.6569M3.34314 12.6569L4.75736 11.2426M11.2426 4.75736L12.6569 3.34314"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * HeroSection component
 */
function HeroSection() {
  const modules = [
    { name: 'Лиды', color: 'accent' },
    { name: 'Платежи', color: 'yellow' },
    { name: 'Документы', color: 'neutral' },
    { name: 'CRM', color: 'accent' },
    { name: 'Аналитика', color: 'yellow' },
    { name: 'Интеграции', color: 'neutral' }
  ]

  return (
    <section className="hero-section-wrapper">
      <div className="hero-section">
        <div className="hero-section__container">
          <div className="hero-section__main">
            <Badge variant="secondary" size="s" colorScheme="accent" className="hero-section__badge">
              <BreakingIcon />
              Платежи, продажи и процессы для бизнес
            </Badge>
            
            <div className="hero-section__content">
              <div className="hero-section__title-wrapper">
                <h1 className="hero-section__title text-style-font-heading-h-1">
                  ТАКТО-дирижер вашего{' '}
                  <span className="hero-section__title-accent">бизнес&shy;-оркестра</span>
                </h1>
                <p className="hero-section__description">
                  Модульная платформа для быстрого<br className="hero-section__description-break" /> старта и роста вашего бизнеса
                </p>
              </div>
              
              <Button
                variant="primary"
                size="m"
                colorScheme="neutral"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="hero-section__cta-button"
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Оставить заявку
                  <ArrowRightIcon />
                </span>
              </Button>
            </div>
            
            <div className="hero-section__info">
              <div className="hero-section__info-item">
                <UsersIcon />
                <span>1000+ компаний</span>
              </div>
              <div className="hero-section__info-item">
                <SecurityIcon />
                <span>Банковская безопасность</span>
              </div>
            </div>
          </div>
          
          <div className="hero-section__divider-vertical"></div>
          
          <div className="hero-section__visual">
            <div className="hero-section__visual-container">
              <div className="hero-section__visual-header">
                <p className="hero-section__visual-title">Ваши бизнес-процессы</p>
              </div>
              
              <div className="hero-section__quick-start-box">
                <div className="hero-section__quick-start-label">Быстрый старт</div>
                <div className="hero-section__quick-start-time">1-2 дня</div>
              </div>
              
              <div className="hero-section__modules-grid">
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className={`hero-section__module-item hero-section__module-item--${module.color}`}
                  >
                    <div className="hero-section__module-dot"></div>
                    <span className="hero-section__module-name">{module.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="hero-section__visual-footer">
                <div className="hero-section__divider-line"></div>
                <p className="hero-section__harmony-text">в единой гармонии</p>
                <div className="hero-section__divider-line"></div>
              </div>
              
              <div className="hero-section__commission-box">
                <div className="hero-section__commission-label">Комиссия от</div>
                <div className="hero-section__commission-rate">1.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
