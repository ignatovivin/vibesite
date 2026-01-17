import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './HowItWorksSection.css'
import Badge from './Badge'
import iconLeadComes from '../assets/icon-lead-comes.svg'
import iconCreateLink from '../assets/icon-create-link.svg'
import iconPayment from '../assets/icon-payment.svg'
import iconBusinessGrowth from '../assets/icon-business-growth.svg'
import iconAnalytics from '../assets/icon-analytics.svg'
import iconProcessing from '../assets/icon-processing.svg'

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
 * HowItWorksSection component displaying the customer journey
 */
function HowItWorksSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const steps = [
    {
      title: 'Лид поступает',
      subtitle: 'Из любого канала: сайт, соцсети',
      icon: iconLeadComes
    },
    {
      title: 'Создание ссылки',
      subtitle: 'На оплату, с любыми параметрами',
      icon: iconCreateLink
    },
    {
      title: 'Оплата',
      subtitle: 'Оплачиваете удобным способом',
      icon: iconPayment
    },
    {
      title: 'Рост бизнеса',
      subtitle: 'Данные для масштабирования',
      icon: iconBusinessGrowth
    },
    {
      title: 'Аналитика',
      subtitle: 'Отчеты и данные для роста бизнеса',
      icon: iconAnalytics
    },
    {
      title: 'Обработка',
      subtitle: 'Автоматическая фискализация, чеки',
      icon: iconProcessing
    }
  ]


  return (
    <section id="how-it-works" className="how-it-works-section-wrapper">
      <div className="how-it-works-section">
        <div className="how-it-works-section__container">
          <div className="how-it-works-section__header">
            <Badge variant="secondary" size="s" colorScheme="neutral">
              Как это работает
            </Badge>
            <div className="how-it-works-section__header-content">
              <h2 className="how-it-works-section__title text-style-font-heading-h-2">
                От лида до оплаты без проблем
              </h2>
              <p className="how-it-works-section__subtitle">
                Закрываем весь путь клиента и автоматизируем рутину
              </p>
            </div>
          </div>
          <div className="how-it-works-section__main">
            <div className="how-it-works-section__steps-wrapper">
              {isMobile ? (
                <div className="how-it-works-section__steps-grid">
                  {steps.map((step, index) => (
                    <div key={index} className="how-it-works-step">
                      <div className="how-it-works-step__icon">
                        <img src={step.icon} alt={step.title} />
                      </div>
                      <div className="how-it-works-step__content">
                        <h3 className="how-it-works-step__title text-style-font-heading-h-3">{step.title}</h3>
                        <p className="how-it-works-step__subtitle text-style-font-body-m">{step.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    navigation={{
                      prevEl: '.how-it-works-section__nav-button--prev',
                      nextEl: '.how-it-works-section__nav-button--next',
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
                      1024: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                      },
                      1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                      },
                      1440: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                      },
                    }}
                    className="how-it-works-section__swiper"
                    watchOverflow={true}
                  >
                    {steps.map((step, index) => (
                      <SwiperSlide key={index}>
                        <div className="how-it-works-step">
                          <div className="how-it-works-step__icon">
                            <img src={step.icon} alt={step.title} />
                          </div>
                          <div className="how-it-works-step__content">
                            <h3 className="how-it-works-step__title text-style-font-heading-h-3">{step.title}</h3>
                            <p className="how-it-works-step__subtitle text-style-font-body-m">{step.subtitle}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="how-it-works-section__navigation">
                    <button
                      className="how-it-works-section__nav-button how-it-works-section__nav-button--prev"
                      aria-label="Предыдущий слайд"
                    >
                      <ArrowLeftIcon />
                    </button>
                    <button
                      className="how-it-works-section__nav-button how-it-works-section__nav-button--next"
                      aria-label="Следующий слайд"
                    >
                      <ArrowRightIcon />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
