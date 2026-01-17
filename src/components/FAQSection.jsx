import React, { useState } from 'react'
import './FAQSection.css'
import Badge from './Badge'
import Button from './Button'

/**
 * Arrow Icon SVG Component (for accordion)
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
 * Arrow Right Icon SVG Component (for button)
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
 * FAQSection component with accordion questions
 */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Как подключиться к ТАКТО?',
      answer: 'Заполните заявку на сайте, пройдите простую верификацию и получите доступ к личному кабинету. Вы сможете сами настроить все модули под ваш бизнес',
      hasButton: true,
      buttonText: 'Подключиться сейчас'
    },
    {
      question: 'Сколько стоит использование платформы?',
      answer: 'У нас два тарифа: Базовый (от 2,3% с оборота) и Расширенный (от 1,8% с оборота + оплата за дополнительные модули)',
      hasButton: true,
      buttonText: 'Посмотреть тарифы'
    },
    {
      question: 'Куда обращаться по всем вопросам?',
      answer: 'Наша служба поддержки работает в рабочие дни с 9:00 до 18:00. Звоните по телефону 8 (931) 369-70-55 или отправляйте письма на trubachev@a-3.ru',
      hasButton: true,
      buttonText: 'Связаться с поддержкой'
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section-wrapper">
      <div className="faq-section">
        <div className="faq-section__container">
          <div className="faq-section__header">
            <Badge variant="secondary" size="s" colorScheme="neutral">
              Поддержка
            </Badge>
            <div className="faq-section__header-content">
              <h2 className="faq-section__title text-style-font-heading-h-2">
                Вопросы и ответы
              </h2>
              <p className="faq-section__subtitle">
                Популярные вопросы от наших клиентов и ответы на них
              </p>
            </div>
          </div>
          <div className="faq-section__items">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
              >
                <div
                  className="faq-item__question"
                  onClick={() => toggleQuestion(index)}
                >
                  <h4 className="faq-item__question-text">{faq.question}</h4>
                  <div className="faq-item__icon">
                    <ArrowIcon isOpen={openIndex === index} />
                  </div>
                </div>
                <div className="faq-item__answer">
                  {faq.answer && (
                    <p className="faq-item__answer-text">{faq.answer}</p>
                  )}
                  {faq.hasButton && (
                    <div className="faq-item__button-wrapper">
                      <Button
                        variant="primary"
                        size="m"
                        colorScheme="accent"
                        onClick={(e) => {
                          e.preventDefault()
                          // Второй FAQ (индекс 1) - "Посмотреть тарифы" якорит на тарифы
                          // Первый (индекс 0) и третий (индекс 2) FAQ якорят на форму
                          let targetId = '#contact'
                          if (index === 1) {
                            targetId = '#pricing'
                          }
                          const element = document.querySelector(targetId)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                      >
                        <span className="faq-item__button-content">
                          {faq.buttonText}
                          <ArrowRightIcon />
                        </span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
