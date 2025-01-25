import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import CustomButton from '../CustomButton'

export const ErrorFallbackUI: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-2xl font-bold text-red-500">Something went wrong</h1>
      <p className="mt-4 text-gray-700">
        <strong>Error:</strong> {error.message}
      </p>
      <CustomButton
        text="Try again"
        onClick={resetErrorBoundary}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      />
    </div>
  )
}
