import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../CustomButton'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/') // Redirect to home page
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 mt-2">It seems you’ve taken a wrong turn.</p>
        <div className="flex justify-center w-full">
          <CustomButton
            text="Go Back to Home"
            type="primary"
            size="large"
            className="mt-6"
            onClick={handleGoBack}
          />
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
