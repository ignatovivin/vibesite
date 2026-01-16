import React, { useRef, useState, useEffect } from 'react'
import './Select.css'

/**
 * ChevronDown Icon SVG Component
 */
const ChevronDownIcon = ({ className = '' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * Select component with custom dropdown
 * 
 * @param {string} label - Select label
 * @param {string} placeholder - Placeholder text
 * @param {array} options - Array of options {value, label}
 * @param {string} value - Selected value
 * @param {function} onChange - Change handler
 * @param {boolean} required - Required field
 * @param {boolean} error - Error state
 * @param {string} errorMessage - Error message to display
 * @param {string} counter - Counter text (e.g., "10/25")
 * @param {object} props - Additional props
 */
function Select({
  label,
  placeholder,
  options = [],
  value,
  onChange,
  required = false,
  error = false,
  errorMessage = '',
  counter = '',
  onBlur,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState('')
  const containerRef = useRef(null)
  const dropdownRef = useRef(null)

  // Определяем выбранный label
  useEffect(() => {
    if (value) {
      const selectedOption = options.find(opt => opt.value === value)
      setSelectedLabel(selectedOption ? selectedOption.label : '')
    } else {
      setSelectedLabel('')
    }
  }, [value, options])

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (optionValue) => {
    if (onChange) {
      const event = {
        target: { value: optionValue }
      }
      onChange(event)
    }
    setIsOpen(false)
  }

  const displayText = selectedLabel || placeholder || ''

  return (
    <div className={`select-wrapper ${className}`}>
      {label && (
        <label className={`select-label ${error ? 'select-label--error' : ''}`}>
          {label} {required && <span className="select-required">*</span>}
        </label>
      )}
      <div 
        className={`select-container ${error ? 'select-container--error' : ''}`} 
        ref={containerRef} 
        onClick={handleToggle}
        onBlur={(e) => {
          // Вызываем onBlur только если фокус не переходит на dropdown или другие элементы внутри контейнера
          const relatedTarget = e.relatedTarget
          if (
            onBlur && 
            relatedTarget && 
            !containerRef.current?.contains(relatedTarget) &&
            !dropdownRef.current?.contains(relatedTarget)
          ) {
            // Небольшая задержка, чтобы убедиться, что dropdown закрылся
            setTimeout(() => {
              if (!isOpen) {
                onBlur()
              }
            }, 100)
          }
        }}
        tabIndex={0}
      >
        <div
          className={`select-field-custom ${!selectedLabel && placeholder ? 'select-field-custom--placeholder' : ''}`}
        >
          {displayText}
        </div>
        <div className={`select-icon ${isOpen ? 'select-icon--open' : ''}`}>
          <ChevronDownIcon />
        </div>
        {isOpen && (
          <div className="select-dropdown" ref={dropdownRef}>
            <div className="select-dropdown__list">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`select-dropdown__item ${value === option.value ? 'select-dropdown__item--selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Скрытый select для формы */}
        <select
          className="select-field-hidden"
          value={value || ''}
          onChange={onChange}
          required={required}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {(error && errorMessage) || counter ? (
        <div className="select-hint-container">
          {error && errorMessage && (
            <span className="select-error-message">
              {errorMessage}
            </span>
          )}
          {counter && (
            <span className="select-counter">
              {counter}
            </span>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Select
