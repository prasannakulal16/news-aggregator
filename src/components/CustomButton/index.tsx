import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import classNames from 'classnames'

interface CustomButtonProps extends ButtonProps {
  leftIcon?: React.ReactNode // Icon on the left
  rightIcon?: React.ReactNode // Icon on the right
  text?: string | React.ReactNode // Button text or icon
  tailwindClass?: string // Additional Tailwind classes
  onClick: any
}

const CustomButton: React.FC<CustomButtonProps> = ({
  leftIcon,
  rightIcon,
  onClick,
  text,
  tailwindClass,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={classNames(
        'flex items-center justify-center gap-2 px-4 py-2 rounded-lg',
        'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed',
        tailwindClass,
        className
      )}
      onClick={onClick}
    >
      {/* Left Icon */}
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {/* Text or Icon */}
      {text && <span className="flex items-center">{text}</span>}
      {/* Right Icon */}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </Button>
  )
}

export default CustomButton
