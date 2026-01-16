import React from 'react'
import './FunctionButton.css'

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
 * FunctionButton component with icon support
 * 
 * @param {string} variant - Button variant: 'primary' | 'secondary'
 * @param {string} iconPosition - Icon position: 'left' | 'right'
 * @param {string} children - Button label text
 * @param {React.ReactNode} icon - Custom icon component (optional)
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Disabled state
 * @param {object} props - Additional props
 */
function FunctionButton({
  variant = 'primary',
  iconPosition = 'left',
  children,
  icon,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const buttonState = disabled ? 'disabled' : 'default'
  
  const buttonClasses = [
    'function-btn',
    `function-btn--${variant}`,
    `function-btn--${iconPosition}`,
    `function-btn--${buttonState}`,
    className
  ].filter(Boolean).join(' ')

  const IconComponent = icon === null ? null : (icon || ArrowRightIcon)
  const hasIcon = IconComponent !== null

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {hasIcon && iconPosition === 'left' && (
        <span className="function-btn__icon">
          <IconComponent />
        </span>
      )}
      <span className="function-btn__wrapper">
        <span className="function-btn__label">{children}</span>
      </span>
      {hasIcon && iconPosition === 'right' && (
        <span className="function-btn__icon">
          <IconComponent />
        </span>
      )}
    </button>
  )
}

export default FunctionButton
