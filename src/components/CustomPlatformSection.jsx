import React, { useState } from 'react'
import './CustomPlatformSection.css'
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
 * CustomPlatformSection component
 */
function CustomPlatformSection() {
  const [selectedTab, setSelectedTab] = useState('Старт')

  const tabs = ['Старт', 'Рост', 'Масштаб']

  const plans = {
    'Старт': [
      {
        title: 'Платежи',
        subtitle: 'Документооборот и чеки',
        features: [
          'Прием онлайн-платежей',
          'Базовая аналитика платежей',
          'Техподдержка в рабочие часы'
        ]
      },
      {
        title: 'Аналитика',
        subtitle: 'Отчеты по продажам и платежам',
        features: [
          'Реестры платежей',
          'Отчет о продажах',
          'Визуальный дешборд'
        ]
      },
      {
        title: 'CRM',
        subtitle: 'Управление клиентами и сделками',
        features: [
          'База клиентов',
          'Воронка продаж',
          'Автоматизация'
        ]
      }
    ],
    'Рост': [
      {
        title: 'Аналитика',
        subtitle: 'Отчеты по продажам и платежам',
        features: [
          'Реестры платежей',
          'Отчет о продажах',
          'Визуальный дешборд'
        ]
      },
      {
        title: 'CRM',
        subtitle: 'Управление клиентами и сделками',
        features: [
          'База клиентов',
          'Воронка продаж',
          'Автоматизация'
        ]
      },
      {
        title: 'Интеграции',
        subtitle: 'Подключение к внешним сервисам',
        features: [
          'API для разработчиков',
          'Интеграции с мессенджерами',
          'Подключение к 1С и другим системам'
        ]
      }
    ],
    'Масштаб': [
      {
        title: 'CRM',
        subtitle: 'Управление клиентами и сделками',
        features: [
          'База клиентов',
          'Воронка продаж',
          'Автоматизация'
        ]
      },
      {
        title: 'Интеграции',
        subtitle: 'Подключение к внешним сервисам',
        features: [
          'API для разработчиков',
          'Интеграции с мессенджерами',
          'Подключение к 1С и другим системам'
        ]
      },
      {
        title: 'Автоматизация',
        subtitle: 'Автоматические процессы и задачи',
        features: [
          'Автоматические чеки и документы',
          'Напоминания и уведомления',
          'Автоматизация рутинных задач'
        ]
      }
    ]
  }

  const currentPlans = plans[selectedTab] || []

  return (
    <section id="solutions" className="custom-platform-section-wrapper">
      <div className="custom-platform-section">
        <div className="custom-platform-section__container">
          <div className="custom-platform-section__header">
            <Badge variant="secondary" size="s" colorScheme="neutral">
              Гибкая платформа
            </Badge>
            <div className="custom-platform-section__header-content">
              <h2 className="custom-platform-section__title text-style-font-heading-h-2">
                Соберите платформу под себя
              </h2>
              <p className="custom-platform-section__subtitle text-style-font-body-l">
                Начните с базовых функций и добавляйте модули по мере роста бизнеса
              </p>
            </div>
          </div>
          <div className="custom-platform-section__main">
            <div className="custom-platform-section__tabs">
              <div className="custom-platform-section__tabs-wrapper">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`custom-platform-section__tab text-style-font-body-m-strong ${selectedTab === tab ? 'custom-platform-section__tab--active' : ''}`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="custom-platform-section__cards">
              {currentPlans.map((plan, index) => (
                <div key={index} className="custom-platform-card">
                  <div className="custom-platform-card__info">
                    <h3 className="custom-platform-card__title text-style-font-heading-h-3">{plan.title}</h3>
                    <p className="custom-platform-card__subtitle text-style-font-body-m">{plan.subtitle}</p>
                  </div>
                  <div className="custom-platform-card__features">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="custom-platform-card__feature">
                        <div className="custom-platform-card__dot">
                          <DotIcon />
                        </div>
                        <span className="custom-platform-card__feature-text text-style-font-body-s">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomPlatformSection
