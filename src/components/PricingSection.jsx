import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './PricingSection.css'
import Button from './Button'
import Badge from './Badge'

/**
 * Checkmark Icon SVG Component
 */
const CheckmarkIcon = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16.6667 5L7.50004 14.1667L3.33337 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Arrow Left Icon SVG Component
 */
const ArrowLeftIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Arrow Right Icon SVG Component
 */
const ArrowRightIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * PricingSection component with pricing cards
 */
function PricingSection() {
  const [isSlider, setIsSlider] = useState(false)
  const [swiper, setSwiper] = useState(null)

  const plans = [
    {
      name: 'Базовый',
      price: '2,3%',
      priceDetails: 'с оборота',
      description: 'Лёгкий старт для команд из 2−10 сотрудников',
      features: [
        'Прием онлайн-платежей',
        'Базовая аналитика платежей',
        'Техподдержка в рабочие часы',
        'API для интеграций',
        'Экспорт отчетов для биллинга'
      ],
      buttonVariant: 'outline',
      highlighted: false
    },
    {
      name: 'Расширенный',
      price: '1,8%',
      priceDetails: 'с оборота + модули',
      description: 'Растущим компаниям из 10−50 сотрудников',
      features: [
        'Все возможности Базового',
        'Продвинутая аналитика и BI',
        'Индивидуальные интеграции',
        'Модули автоматизации',
        'Приоритетная поддержка'
      ],
      buttonVariant: 'primary',
      highlighted: true,
      badge: 'Выгодно'
    },
    {
      name: 'Продвинутый',
      price: '0,5%',
      priceDetails: 'с оборота + модули',
      description: 'Оптимально для компаний из 50−250 сотрудников',
      features: [
        'Прием онлайн-платежей',
        'Базовая аналитика платежей',
        'Техподдержка в рабочие часы',
        'API для интеграций',
        'Экспорт отчетов для биллинга'
      ],
      buttonVariant: 'outline',
      highlighted: false
    }
  ]

  // Определяем, нужно ли показывать слайдер (до планшетной версии - 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsSlider(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderCard = (plan, index) => (
    <div
      key={index}
      className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}
    >
      <div className="pricing-card__content">
        <div className="pricing-card__header">
          <div className="pricing-card__title-section">
            <div className="pricing-card__title-row">
              <h3 className="pricing-card__title">{plan.name}</h3>
              {plan.badge && (
                <>
                  <span className="pricing-card__divider"></span>
                  <span className="pricing-card__badge">{plan.badge}</span>
                </>
              )}
            </div>
            <div className="pricing-card__price-section">
              <span className="pricing-card__price">{plan.price}</span>
              <span className="pricing-card__price-details">{plan.priceDetails}</span>
            </div>
          </div>
          <p className="pricing-card__description">
            {plan.description.split(' из ').map((part, i, arr) => 
              i === arr.length - 1 ? (
                <React.Fragment key={i}>
                  <br />из {part}
                </React.Fragment>
              ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
              )
            )}
          </p>
        </div>

        <Button
          variant={plan.buttonVariant}
          size="l"
          colorScheme="accent"
          className="pricing-card__button"
          onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector('#contact')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          Подключить
        </Button>
      </div>

      <div className="pricing-card__features">
        {plan.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="pricing-card__feature">
            <span className="pricing-card__checkmark">
              <CheckmarkIcon />
            </span>
            <span className="pricing-card__feature-text">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-section__container">
        <div className="pricing-section__header">
          <Badge variant="secondary" size="s" colorScheme="neutral">
            Тарифы
          </Badge>
          <div className="pricing-section__header-content">
            <h2 className="pricing-section__title text-style-font-heading-h-2">
              Выберите свой план
            </h2>
            <p className="pricing-section__subtitle">
              Прозрачные тарифы без скрытых форм
            </p>
          </div>
        </div>
        <div className={`pricing-section__cards ${isSlider ? 'pricing-section__cards--slider' : ''}`}>
          {isSlider ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1.1}
              slidesPerGroup={1}
              navigation={{
                prevEl: '.pricing-section__nav-button--prev',
                nextEl: '.pricing-section__nav-button--next',
              }}
              onSwiper={(swiperInstance) => {
                setSwiper(swiperInstance)
                setTimeout(() => {
                  if (swiperInstance.navigation) {
                    swiperInstance.navigation.init()
                    swiperInstance.navigation.update()
                  }
                }, 100)
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.02,
                  spaceBetween: 4,
                },
                375: {
                  slidesPerView: 1.02,
                  spaceBetween: 4,
                },
              }}
              className="pricing-section__swiper"
              watchOverflow={true}
            >
              {plans.map((plan, index) => (
                <SwiperSlide key={index}>
                  {renderCard(plan, index)}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            plans.map((plan, index) => renderCard(plan, index))
          )}
        </div>
        {isSlider && (
          <div className="pricing-section__navigation">
            <button
              className="pricing-section__nav-button pricing-section__nav-button--prev"
              aria-label="Предыдущий тариф"
            >
              <ArrowLeftIcon />
            </button>
            <button
              className="pricing-section__nav-button pricing-section__nav-button--next"
              aria-label="Следующий тариф"
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
        <div className="pricing-section__footer">
          <Button
            variant="ghost"
            size="l"
            colorScheme="accent"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Нужен индивидуальный тариф? <span className="pricing-section__footer-break">Свяжитесь с нами</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
