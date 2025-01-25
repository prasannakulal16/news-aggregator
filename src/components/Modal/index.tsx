import React from 'react'
import { Modal, Typography } from 'antd'

interface CustomModalProps {
  title: string
  isVisible: boolean
  onClose: () => void
  onConfirm?: () => void
  children: React.ReactNode
  confirmText?: string
  cancelText?: string
  className?: string // To allow additional Tailwind classes
}

const CustomModal: React.FC<CustomModalProps> = ({
  title,
  isVisible,
  onClose,
  onConfirm,
  children,
  confirmText = 'Apply Filter',
  cancelText = 'Cancel',
  className = ''
}) => {
  return (
    <Modal
      title={<Typography className="font-bold text-xl">{title}</Typography>}
      open={isVisible}
      onCancel={onClose}
      onOk={onConfirm}
      closeIcon={false}
      footer={[
        <button
          key="cancel"
          onClick={onClose}
          className={`bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 mr-4 ${className}`}
        >
          {cancelText}
        </button>,
        onConfirm && (
          <button
            key="confirm"
            onClick={onConfirm}
            className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`}
          >
            {confirmText}
          </button>
        )
      ]}
      className={`custom-modal ${className}`}
    >
      <div className="py-2">{children}</div>
    </Modal>
  )
}

export default CustomModal
