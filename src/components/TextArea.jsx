import React from 'react'
import './TextArea.css'

/**
 * TextArea component
 * 
 * @param {string} label - TextArea label
 * @param {string} placeholder - Placeholder text
 * @param {string} value - TextArea value
 * @param {function} onChange - Change handler
 * @param {number} maxLength - Maximum length
 * @param {boolean} required - Required field
 * @param {object} props - Additional props
 */
function TextArea({
  label,
  placeholder,
  value,
  onChange,
  maxLength,
  required = false,
  className = '',
  ...props
}) {
  const currentLength = value ? value.length : 0
  const showCounter = maxLength !== undefined

  return (
    <div className={`textarea-wrapper ${className}`}>
      {label && (
        <label className="textarea-label">
          {label} {required && <span className="textarea-required">*</span>}
        </label>
      )}
      <div className="textarea-container">
        <textarea
          className="textarea-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          required={required}
          rows={4}
          {...props}
        />
      </div>
      {showCounter && (
        <div className="textarea-counter">
          {currentLength}/{maxLength}
        </div>
      )}
    </div>
  )
}

export default TextArea
