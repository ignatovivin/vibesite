import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactSection.css'
import Badge from './Badge'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Button from './Button'
import FunctionButton from './FunctionButton'
import Toast from './Toast'

// Конфигурация EmailJS
// Получите эти значения на https://www.emailjs.com/
const EMAILJS_PUBLIC_KEY = 'lPfnei1CGWb3VMNBf' // Замените на ваш Public Key
const EMAILJS_SERVICE_ID = 'service_l3xc9jw' // Замените на ваш Service ID
const EMAILJS_TEMPLATE_ID = 'template_h3rqkdw' // Замените на ваш Template ID

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
 * Arrow Right Icon SVG Component
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
 * ContactSection component with contact form
 */
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    turnover: '',
    task: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState('success')

  const industryOptions = [
    { value: 'education', label: 'Образование' },
    { value: 'auto', label: 'Авто-услуги' },
    { value: 'fitness', label: 'Фитнес и спорт' },
    { value: 'beauty', label: 'Сфера красоты' },
    { value: 'other', label: 'Другое' }
  ]

  const turnoverOptions = [
    { value: '0-100k', label: 'До 100 000 ₽' },
    { value: '100k-500k', label: '100 000 - 500 000 ₽' },
    { value: '500k-1m', label: '500 000 - 1 000 000 ₽' },
    { value: '1m-5m', label: '1 000 000 - 5 000 000 ₽' },
    { value: '5m+', label: 'Свыше 5 000 000 ₽' }
  ]

  // Функция форматирования телефона
  const formatPhoneNumber = (value) => {
    // Удаляем все нецифровые символы
    let digits = value.replace(/\D/g, '')
    
    // Если поле пустое, возвращаем пустую строку
    if (!digits) {
      return ''
    }
    
    // Если начинается с 8, заменяем на 7
    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1)
    }
    
    // Если не начинается с 7, добавляем 7
    if (!digits.startsWith('7')) {
      digits = '7' + digits
    }
    
    // Ограничиваем до 11 цифр (7 + 10 цифр номера)
    digits = digits.slice(0, 11)
    
    // Форматируем номер
    if (digits.length === 1) {
      return `+${digits}`
    }
    
    if (digits.length <= 4) {
      return `+${digits.slice(0, 1)} (${digits.slice(1)}`
    }
    
    if (digits.length <= 7) {
      return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`
    }
    
    if (digits.length <= 9) {
      return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
    }
    
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`
  }

  // Функция валидации
  const validateField = (name, value) => {
    let error = ''

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Введите ваше имя'
        } else if (value.trim().length < 2) {
          error = 'Имя должно содержать минимум 2 символа'
        }
        break
      case 'phone':
        if (!value.trim()) {
          error = 'Введите номер телефона'
        } else {
          // Проверка формата телефона (11 цифр: 7 + 10 цифр номера)
          const phoneDigits = value.replace(/\D/g, '')
          if (phoneDigits.length < 11) {
            error = 'Введите корректный номер телефона'
          } else if (!phoneDigits.startsWith('7')) {
            error = 'Номер должен начинаться с +7'
          }
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'Введите email адрес'
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) {
            error = 'Введите корректный email адрес'
          }
        }
        break
      case 'company':
        if (!value.trim()) {
          error = 'Введите название компании'
        }
        break
      case 'industry':
        if (!value) {
          error = 'Выберите сферу деятельности'
        }
        break
      case 'turnover':
        if (!value) {
          error = 'Выберите оборот в месяц'
        }
        break
      default:
        break
    }

    return error
  }

  // Валидация всех полей
  const validateForm = () => {
    const newErrors = {}
    
    Object.keys(formData).forEach((field) => {
      if (field === 'task') return // task не обязательное поле
      
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field) => (e) => {
    let value = e.target.value
    
    // Применяем форматирование для поля телефона
    if (field === 'phone') {
      value = formatPhoneNumber(value)
    }
    
    setFormData({
      ...formData,
      [field]: value
    })

    // Очищаем ошибку при изменении поля, если оно было тронуто
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors({
        ...errors,
        [field]: error || undefined
      })
    }
  }

  const handleFocus = (field) => (e) => {
    // При фокусе на поле телефона, если оно пустое, добавляем +7
    if (field === 'phone' && !formData.phone) {
      setFormData({
        ...formData,
        phone: '+7'
      })
    }
  }

  const handleBlur = (field) => () => {
    setTouched({
      ...touched,
      [field]: true
    })

    // Валидируем поле при потере фокуса
    const error = validateField(field, formData[field])
    setErrors({
      ...errors,
      [field]: error || undefined
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Помечаем все поля как тронутые
    const allTouched = {}
    Object.keys(formData).forEach((field) => {
      if (field !== 'task') {
        allTouched[field] = true
      }
    })
    setTouched(allTouched)

    // Валидируем форму
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Проверяем, что EmailJS настроен
      if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
          EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
          EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
        throw new Error('EmailJS не настроен. Пожалуйста, настройте константы в ContactSection.jsx')
      }

      // Получаем названия для industry и turnover
      const industryLabel = industryOptions.find(opt => opt.value === formData.industry)?.label || formData.industry
      const turnoverLabel = turnoverOptions.find(opt => opt.value === formData.turnover)?.label || formData.turnover

      // Подготавливаем данные для отправки
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        industry: industryLabel,
        turnover: turnoverLabel,
        task: formData.task || 'Не указано',
        to_email: 'trubachev@a-3.ru' // Email получателя
      }

      // Отправляем через EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // Успешная отправка
      setShowToast(false) // Сбрасываем перед новым показом
      setTimeout(() => {
        setToastMessage('Заявка успешно отправлена!')
        setToastType('success')
        setShowToast(true)
      }, 10)
      
      // Очищаем форму
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        industry: '',
        turnover: '',
        task: ''
      })
      setErrors({})
      setTouched({})

    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      setShowToast(false) // Сбрасываем перед новым показом
      setTimeout(() => {
        setToastMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.')
        setToastType('error')
        setShowToast(true)
      }, 10)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section-wrapper">
      <div className="contact-section">
        <div className="contact-section__container">
          <div className="contact-section__header">
            <Badge variant="secondary" size="s" colorScheme="neutral">
              Связаться с нами
            </Badge>
            <div className="contact-section__content">
              <h2 className="contact-section__title text-style-font-heading-h-2">
                Начните использовать ТАКТО
              </h2>
              <p className="contact-section__description">
                Оставьте заявку, и мы свяжемся с вами для уточнения запроса в течение 1-2 дней
              </p>
            </div>
          </div>

          <div className="contact-section__form-wrapper">
            <div className="contact-section__form-container">
              <div className="contact-section__contact-info">
                <div className="contact-section__contact-header">
                  <h3 className="contact-section__contact-title">Свяжитесь с нами</h3>
                </div>
                <div className="contact-section__contact-items">
                  <div className="contact-section__contact-item">
                    <div className="contact-section__contact-icon contact-section__contact-icon--email">
                      <MailIcon />
                    </div>
                    <div className="contact-section__contact-details">
                      <div className="contact-section__contact-label">Email</div>
                      <FunctionButton
                        variant="secondary"
                        icon={null}
                        onClick={() => window.location.href = 'mailto:trubachev@a-3.ru'}
                      >
                        trubachev@a-3.ru
                      </FunctionButton>
                    </div>
                  </div>
                  <div className="contact-section__contact-item">
                    <div className="contact-section__contact-icon contact-section__contact-icon--phone">
                      <PhoneIcon />
                    </div>
                    <div className="contact-section__contact-details">
                      <div className="contact-section__contact-label">Телефон</div>
                      <FunctionButton
                        variant="secondary"
                        icon={null}
                        onClick={() => window.location.href = 'tel:+79313697055'}
                      >
                        8 (931) 369-70-55
                      </FunctionButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-section__form">
                <div className="contact-section__form-header">
                  <h3 className="contact-section__form-title">Оставьте заявку</h3>
                  <p className="contact-section__form-subtitle">
                    Расскажите о своем бизнесе, и мы предложим оптимальное решение
                  </p>
                </div>

                <form 
                  className="contact-section__form-fields" 
                  onSubmit={handleSubmit} 
                  onReset={(e) => {
                    // Предотвращаем случайный сброс формы
                    e.preventDefault()
                  }}
                  noValidate
                >
                  <div className="contact-section__form-inputs">
                    <div className="contact-section__form-row">
                      <Input
                        label="Имя"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        onBlur={handleBlur('name')}
                        required
                        error={!!errors.name}
                        errorMessage={errors.name}
                      />
                      <Input
                        label="Телефон"
                        placeholder="+7 (999) 000-00-00"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange('phone')}
                        onFocus={handleFocus('phone')}
                        onBlur={handleBlur('phone')}
                        required
                        error={!!errors.phone}
                        errorMessage={errors.phone}
                      />
                    </div>
                    <div className="contact-section__form-row">
                      <Input
                        label="Email"
                        placeholder="email@example.com"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        onBlur={handleBlur('email')}
                        required
                        error={!!errors.email}
                        errorMessage={errors.email}
                      />
                      <Input
                        label="Компания"
                        placeholder="Ваша компания"
                        value={formData.company}
                        onChange={handleInputChange('company')}
                        onBlur={handleBlur('company')}
                        required
                        error={!!errors.company}
                        errorMessage={errors.company}
                      />
                    </div>
                    <Select
                      label="Сфера деятельности"
                      placeholder="Выберите сферу"
                      options={industryOptions}
                      value={formData.industry}
                      onChange={handleInputChange('industry')}
                      onBlur={handleBlur('industry')}
                      required
                      error={!!errors.industry}
                      errorMessage={errors.industry}
                    />
                    <Select
                      label="Ваш оборот в месяц"
                      placeholder="Выберите оборот"
                      options={turnoverOptions}
                      value={formData.turnover}
                      onChange={handleInputChange('turnover')}
                      onBlur={handleBlur('turnover')}
                      required
                      error={!!errors.turnover}
                      errorMessage={errors.turnover}
                    />
                    <TextArea
                      label="Расскажите о задаче"
                      placeholder="Какой ваш средний чек? Сколько платежей в месяц? Что хотите оптимизировать?"
                      value={formData.task}
                      onChange={handleInputChange('task')}
                      maxLength={500}
                    />
                  </div>

                  <div className="contact-section__form-actions">
                    <Button
                      variant="primary"
                      size="m"
                      colorScheme="neutral"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                        {!isSubmitting && <ArrowRightIcon />}
                      </span>
                    </Button>
                    <p className="contact-section__disclaimer">
                      Нажимая кнопку, вы соглашаетесь с{' '}
                      <a href="/politika_obrabotki_i_zashiti_dannih.pdf" className="contact-section__disclaimer-link" target="_blank" rel="noopener noreferrer">
                        обработкой персональных данных
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
        type={toastType}
      />
    </section>
  )
}

export default ContactSection
