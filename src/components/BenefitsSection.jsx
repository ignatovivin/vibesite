import './BenefitsSection.css'
import Badge from './Badge'
import iconFastStart from '../assets/icon-fast-start.svg'
import iconAllServices from '../assets/icon-all-services.svg'
import iconBankReliability from '../assets/icon-bank-reliability.svg'
import iconScalability from '../assets/icon-scalability.svg'

/**
 * BenefitsSection component displaying TAKTO advantages
 */
function BenefitsSection() {
  const benefits = [
    {
      title: 'Быстрый старт',
      subtitle: (
        <>
          За пару дней начните <br />принимать платежи
        </>
      ),
      icon: iconFastStart
    },
    {
      title: 'Все сервисы в одном',
      subtitle: 'Одна интеграция закрывает платежи, продажи и процессы',
      icon: iconAllServices
    },
    {
      title: 'Банковская надежность',
      subtitle: 'Партнерства с крупными банками-эквайерами, PCI DSS',
      icon: iconBankReliability
    },
    {
      title: 'Масштабируемость',
      subtitle: 'Модульная архитектура растет вместе вашим бизнесом',
      icon: iconScalability
    }
  ]

  return (
    <section id="markets" className="benefits-section-wrapper">
      <div className="benefits-section">
        <div className="benefits-section__container">
          <div className="benefits-section__header">
            <Badge variant="secondary" size="s" colorScheme="neutral">
              Преимущества ТАКТО
            </Badge>
            <div className="benefits-section__header-content">
              <h2 className="benefits-section__title text-style-font-heading-h-2">
                Почему выбирают ТАКТО
              </h2>
              <p className="benefits-section__subtitle text-style-font-body-l">
                Мы объединили лучшее от финтеха и SaaS инструментов, чтобы создать подходящий продукт для вашего бизнеса
              </p>
            </div>
          </div>
          <div className="benefits-section__cards">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefits-card">
                <div className="benefits-card__icon">
                  <img src={benefit.icon} alt={benefit.title} />
                </div>
                <div className="benefits-card__content">
                  <h3 className="benefits-card__title text-style-font-heading-h-3">{benefit.title}</h3>
                  <p className="benefits-card__subtitle text-style-font-body-s">{benefit.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
