// src/components/Layout.tsx
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-6">
      {/* Main app content */}
      <main className="mx-auto xl:px-18 lg:px-14 sm:px-10 px-6">{children}</main>
    </div>
  )
}

export default Layout
