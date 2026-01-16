import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './Toast.css'

/**
 * Checkmark Icon SVG Component for success state
 */
const CheckmarkIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Toast component for displaying notifications
 * @param {string} message - Message to display
 * @param {boolean} isVisible - Whether toast is visible
 * @param {function} onClose - Callback when toast closes
 * @param {number} duration - Duration in ms before auto-closing (default: 3000)
 * @param {string} type - Toast type: 'success' | 'error' (default: 'success')
 */
function Toast({ message, isVisible, onClose, duration = 3000, type = 'success' }) {
  const [shouldRender, setShouldRender] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Обработка появления Toast
  useEffect(() => {
    if (isVisible && message) {
      // Всегда сбрасываем состояние при новом показе
      setShouldRender(true)
      setIsAnimating(false)
      
      // Небольшая задержка для запуска анимации появления
      const showTimer = setTimeout(() => {
        setIsAnimating(true)
      }, 10)
      
      return () => clearTimeout(showTimer)
    } else if (!isVisible) {
      // Если скрываем, запускаем анимацию исчезновения
      setIsAnimating(false)
    }
  }, [isVisible, message])

  // Обработка исчезновения Toast
  useEffect(() => {
    if (!isVisible && shouldRender) {
      // Запускаем анимацию исчезновения
      setIsAnimating(false)
      // Удаляем из DOM после завершения анимации
      const hideTimer = setTimeout(() => {
        setShouldRender(false)
        if (onClose) onClose()
      }, 150) // Длительность FadeOut анимации
      
      return () => clearTimeout(hideTimer)
    }
  }, [isVisible, shouldRender, onClose])

  // Автоматическое закрытие через duration
  useEffect(() => {
    if (isVisible && isAnimating && duration > 0) {
      const autoCloseTimer = setTimeout(() => {
        setIsAnimating(false)
        const hideTimer = setTimeout(() => {
          setShouldRender(false)
          if (onClose) onClose()
        }, 150)
        return () => clearTimeout(hideTimer)
      }, duration)
      
      return () => clearTimeout(autoCloseTimer)
    }
  }, [isVisible, isAnimating, duration, onClose])

  if (!shouldRender || !message) return null

  return createPortal(
    <div className={`toast ${isAnimating ? 'toast--visible' : 'toast--hidden'}`}>
      <div className="toast__content">
        {type === 'success' && (
          <span className="toast__icon">
            <CheckmarkIcon />
          </span>
        )}
        <span className="toast__message">{message}</span>
      </div>
    </div>,
    document.body
  )
}

export default Toast
