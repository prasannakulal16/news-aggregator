import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-24">
      {/* Main app content */}
      <div className="mx-auto xl:px-18 lg:px-14 sm:px-10 px-6">{children}</div>
    </div>
  )
}

export default Layout
