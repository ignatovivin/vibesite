import React from 'react'
import './PartnersSection.css'
import Badge from './Badge'
import iconPartner1 from '../assets/icon-partner-1.svg'
import iconPartner2 from '../assets/icon-partner-2.svg'
import iconPartner3 from '../assets/icon-partner-3.svg'

/**
 * PartnersSection component displaying partner information
 */
function PartnersSection() {
  const partners = [
    {
      text: 'Решения для корпоративных клиентов и индивидуальных предпринимателей',
      icon: iconPartner1
    },
    {
      text: 'Надежное партнерство в сфере регулярных и государственных платежей',
      icon: iconPartner2
    },
    {
      text: 'Решения для корпоративных клиентов и индивидуальных предпринимателей',
      icon: iconPartner3
    }
  ]

  return (
    <section className="partners-section-wrapper">
      <div className="partners-section">
        <div className="partners-section__container">
          <div className="partners-section__header">
            <Badge variant="secondary" size="s" colorScheme="neutral">
              Доверие
            </Badge>
            <div className="partners-section__header-content">
              <h2 className="partners-section__title text-style-font-heading-h-2">
                Наши партнеры
              </h2>
              <p className="partners-section__subtitle">
                Работаем с ведущими банками России для обеспечения надежности и стабильности ваших платежей
              </p>
            </div>
          </div>
          <div className="partners-section__cards">
            {partners.map((partner, index) => (
              <div key={index} className="partners-card">
                <div className="partners-card__icon">
                  <img src={partner.icon} alt={`Партнер ${index + 1}`} />
                </div>
                <p className="partners-card__text">{partner.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
