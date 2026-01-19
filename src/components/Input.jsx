import './Input.css'

/**
 * Input component
 * 
 * @param {string} label - Input label
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} type - Input type
 * @param {boolean} required - Required field
 * @param {boolean} error - Error state
 * @param {string} errorMessage - Error message to display
 * @param {string} counter - Counter text (e.g., "10/25")
 * @param {object} props - Additional props
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  error = false,
  errorMessage = '',
  counter = '',
  className = '',
  ...props
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label className={`input-label ${error ? 'input-label--error' : ''}`}>
          {label} {required && <span className="input-required">*</span>}
        </label>
      )}
      <div className={`input-container ${error ? 'input-container--error' : ''}`}>
        <input
          type={type}
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      </div>
      {(error && errorMessage) || counter ? (
        <div className="input-hint-container">
          {error && errorMessage && (
            <span className="input-error-message">
              {errorMessage}
            </span>
          )}
          {counter && (
            <span className="input-counter">
              {counter}
            </span>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Input
