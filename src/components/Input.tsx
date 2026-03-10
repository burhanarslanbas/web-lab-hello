import type React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helpText?: string
}

export default function Input({
  label,
  type = 'text',
  error,
  helpText,
  id,
  ...props
}: InputProps) {
  const hasError = Boolean(error)
  const isDisabled = Boolean(props.disabled)

  const describedById = hasError
    ? `${id}-error`
    : helpText
    ? `${id}-help`
    : undefined

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 ${
          hasError
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500'
        } ${
          isDisabled
            ? 'bg-gray-100 cursor-not-allowed'
            : 'bg-white dark:bg-gray-800'
        }`}
        aria-describedby={describedById}
        {...props}
      />

      {hasError && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}

      {helpText && !hasError && (
        <p
          id={`${id}-help`}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {helpText}
        </p>
      )}
    </div>
  )
}

