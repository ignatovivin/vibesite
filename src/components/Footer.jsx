import React from 'react'
import './Footer.css'
import FunctionButton from './FunctionButton'
import Badge from './Badge'
import LogoFooter from '../assets/logo-footer.svg'

/**
 * Mail Icon SVG Component
 */
const MailIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.35 7.92483V16.4998C4.35 17.2454 4.95442 17.8498 5.7 17.8498H18.3C19.0456 17.8498 19.65 17.2454 19.65 16.4998V7.92483L12.4552 14.4951C12.1974 14.7305 11.8026 14.7305 11.5448 14.4951L4.35 7.92483ZM19.5918 6.1498H4.40823L12 13.0826L19.5918 6.1498ZM3 5.6998C3 5.20275 3.40294 4.7998 3.9 4.7998H20.1C20.5971 4.7998 21 5.20275 21 5.6998V16.4998C21 17.991 19.7912 19.1998 18.3 19.1998H5.7C4.20883 19.1998 3 17.991 3 16.4998V5.6998Z"
      fill="currentColor"
    />
  </svg>
)

/**
 * Phone Icon SVG Component
 */
const PhoneIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.7741 13.9455C21.7825 13.9381 21.7907 13.9304 21.7987 13.9224C22.0672 13.658 22.0672 13.2292 21.7987 12.9647L20.801 11.9819C15.9407 7.19385 8.05933 7.19539 3.1992 11.9832L2.20134 12.9662C1.93289 13.2307 1.93289 13.6595 2.20134 13.9239C2.20887 13.9313 2.21654 13.9386 2.22433 13.9456L2.22384 13.9461L4.47316 15.9532C4.68583 16.143 4.99579 16.1827 5.25063 16.0527L8.50606 14.3928C8.71167 14.288 8.8499 14.0882 8.87381 13.8613L9.27229 10.0807C11.0619 9.63425 12.9428 9.63438 14.7323 10.0812L15.1293 13.875C15.1531 14.1025 15.2918 14.3027 15.4981 14.4075L18.7369 16.0523C18.9909 16.1813 19.2995 16.1421 19.5118 15.9536L21.7747 13.9462L21.7741 13.9455ZM16.1627 10.5426L16.4587 13.3716L18.9447 14.6341L20.3151 13.4185L19.8289 12.9396C18.747 11.8738 17.4969 11.0748 16.1627 10.5426ZM4.17135 12.9409C5.25427 11.8741 6.5058 11.0744 7.84146 10.5419L7.54465 13.358L5.04245 14.6338L3.68366 13.4213L4.17135 12.9409Z"
      fill="currentColor"
    />
  </svg>
)

/**
 * Footer component
 */
function Footer() {
  const productLinks = [
    { label: 'Тарифы', href: '#pricing' },
    { label: 'Модули', href: '#modules' },
    { label: 'Как это работает', href: '#how-it-works' },
    { label: 'Вопросы и ответы', href: '#faq' }
  ]

  const marketsLinks = [
    { label: 'Образование', href: '#education' },
    { label: 'Авто-услуги', href: '#auto' },
    { label: 'Фитнес и спорт', href: '#fitness' },
    { label: 'Сфера красоты', href: '#beauty' }
  ]

  const handleLinkClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo-section">
            <div className="footer__logo">
              <img src={LogoFooter} alt="Logo" />
            </div>
            <div className="footer__description">
              <p className="footer__description-text">
                Модульная платформа для быстрого старта и роста вашего бизнеса
              </p>
              <Badge variant="primary" size="s" colorScheme="accent">
                Платежи, продажи и процессы для бизнеса
              </Badge>
            </div>
          </div>

          <div className="footer__links-section">
            <div className="footer__links-column">
              <h3 className="footer__column-title text-style-font-heading-h-5">Продукт</h3>
              <div className="footer__links-list">
                {productLinks.map((link) => (
                  <FunctionButton
                    key={link.label}
                    variant="secondary"
                    icon={null}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </FunctionButton>
                ))}
              </div>
            </div>

            <div className="footer__links-column">
              <h3 className="footer__column-title text-style-font-heading-h-5">Рынки</h3>
              <div className="footer__links-list">
                {marketsLinks.map((link) => (
                  <FunctionButton
                    key={link.label}
                    variant="secondary"
                    icon={null}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </FunctionButton>
                ))}
              </div>
            </div>

            <div className="footer__links-column footer__links-column--contacts">
              <h3 className="footer__column-title text-style-font-heading-h-5">Контакты</h3>
              <div className="footer__links-list">
                <FunctionButton
                  variant="secondary"
                  icon={MailIcon}
                  onClick={() => window.location.href = 'mailto:trubachev@a-3.ru'}
                >
                  trubachev@a-3.ru
                </FunctionButton>
                <FunctionButton
                  variant="secondary"
                  icon={PhoneIcon}
                  onClick={() => window.location.href = 'tel:+79313697055'}
                >
                  8 (931) 369-70-55
                </FunctionButton>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__divider"></div>
          <div className="footer__bottom-content">
            <div className="footer__bottom-links">
              <FunctionButton
                variant="secondary"
                icon={null}
                onClick={(e) => {
                  e.preventDefault()
                  window.open('/politika_obrabotki_i_zashiti_dannih.pdf', '_blank', 'noopener,noreferrer')
                }}
              >
                Политика конфиденциальности
              </FunctionButton>
              <FunctionButton
                variant="secondary"
                icon={null}
                onClick={(e) => {
                  e.preventDefault()
                  window.open('/oferta_2.pdf', '_blank', 'noopener,noreferrer')
                }}
              >
                Условия использования
              </FunctionButton>
            </div>
            <p className="footer__copyright">
              © 2025 ТАКТО (проект компании ООО «Платёжный сервис А3»). Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
