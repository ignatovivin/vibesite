import React, { useEffect, useState } from 'react'
import './Header.css'
import FunctionButton from './FunctionButton'
import Button from './Button'
import Logo from '../assets/logo.svg'

/**
 * Header component with logo, navigation and CTA button
 */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    // Проверяем начальное состояние скролла
    handleScroll()

    // Используем requestAnimationFrame для оптимизации
    let ticking = false
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', optimizedScroll, { passive: true })
    return () => window.removeEventListener('scroll', optimizedScroll)
  }, [])

  // Закрываем мобильное меню при клике на ссылку
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { label: 'Как это работает', href: '#how-it-works' },
    { label: 'Продукты', href: '#products' },
    { label: 'Решения', href: '#solutions' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'Контакты', href: '#contact' }
  ]

  /**
   * Hamburger Menu Icon Component
   */
  const MenuIcon = ({ isOpen }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <>
          <path
            d="M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  )

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>

        <nav className={`header__navigation ${isMobileMenuOpen ? 'header__navigation--open' : ''}`}>
          <div className="header__nav-list">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="header__nav-link function-btn function-btn--secondary function-btn--left function-btn--default"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                <span className="function-btn__wrapper">
                  <span className="function-btn__label">{item.label}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="header__mobile-actions">
            <a
              href="#contact"
              className="header__mobile-cta-link btn btn--primary btn--m btn--neutral"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
            >
              <span className="btn__wrapper">
                <span className="btn__label">Оставить заявку</span>
              </span>
            </a>
          </div>
        </nav>

        <div className="header__actions">
          <a
            href="#contact"
            className="header__cta-link btn btn--primary btn--m btn--neutral"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
          >
            <span className="btn__wrapper">
              <span className="btn__label">Оставить заявку</span>
            </span>
          </a>
        </div>

        <button
          className="header__mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <MenuIcon isOpen={isMobileMenuOpen} />
        </button>
      </div>
    </header>
  )
}

export default Header
