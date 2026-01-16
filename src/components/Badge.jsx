import React from 'react'
import './Badge.css'

/**
 * Badge component for displaying status labels
 * 
 * @param {string} variant - Badge variant: 'primary' | 'secondary' | 'outline'
 * @param {string} size - Badge size: 's' | '2xs'
 * @param {string} colorScheme - Color scheme: 'accent' | 'warning' | 'error' | 'success' | 'neutral'
 * @param {string} children - Badge text content
 * @param {object} props - Additional props
 */
function Badge({
  variant = 'primary',
  size = 's',
  colorScheme = 'accent',
  children,
  className = '',
  ...props
}) {
  const badgeClasses = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    `badge--${colorScheme}`,
    className
  ].filter(Boolean).join(' ')

  // Check if children contains React elements (like icons)
  const childrenArray = React.Children.toArray(children)
  const hasReactElements = childrenArray.some(
    child => React.isValidElement(child)
  )

  // Process children: wrap text nodes in badge__text, keep React elements as is
  const processedChildren = hasReactElements
    ? childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return child
        }
        // Text node - wrap in badge__text
        return (
          <span key={index} className="badge__text">
            {child}
          </span>
        )
      })
    : <span className="badge__text">{children}</span>

  return (
    <span className={badgeClasses} {...props}>
      <span className="badge__wrapper">
        {processedChildren}
      </span>
    </span>
  )
}

export default Badge
