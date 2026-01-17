import React from 'react'
import './Button.css'

/**
 * Button component with multiple variants, sizes, and color schemes
 * 
 * @param {string} variant - Button variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} size - Button size: 'xl' | 'l' | 'm' | 's'
 * @param {string} colorScheme - Color scheme: 'accent' | 'accentyellow' | 'neutral'
 * @param {string} state - Button state: 'default' | 'hover' | 'focus' | 'disabled'
 * @param {string} children - Button label text
 * @param {function} onClick - Click handler
 * @param {boolean} disabled - Disabled state
 * @param {object} props - Additional props
 */
function Button({
  variant = 'primary',
  size = 'm',
  colorScheme = 'accent',
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const buttonState = disabled ? 'disabled' : 'default'
  
  const buttonClasses = [
    'btn',
    'text-style-font-body-s-strong',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--${colorScheme}`,
    `btn--${buttonState}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="btn__wrapper">
        <span className="btn__label">{children}</span>
      </span>
    </button>
  )
}

export default Button
