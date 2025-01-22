// components/Navbar.tsx
import React from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'

const Navbar: React.FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false)

  const showDrawer = () => {
    setIsDrawerVisible(true)
  }

  const closeDrawer = () => {
    setIsDrawerVisible(false)
  }

  return (
    <nav className="bg-black text-white py-4 flex items-center justify-between shadow-md mx-auto xl:px-18 lg:px-14 sm:px-10 px-6">
      {/* Left Side - Title */}
      <div className="text-2xl font-bold">News AG</div>

      {/* Right Side - Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <Button type="link" className="text-white hover:text-gray-200">
          Home
        </Button>
        <Button type="link" className="text-white hover:text-gray-200">
          Personal Feed
        </Button>
      </div>

      {/* Mobile Menu - Hamburger Icon */}
      <div className="md:hidden">
        <MenuOutlined className="text-xl" onClick={showDrawer} />
      </div>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        className="md:hidden"
      >
        <Button type="link" block onClick={closeDrawer} className="font-bold">
          Home
        </Button>
        <Button type="link" block onClick={closeDrawer} className="font-bold">
          Personal Feed
        </Button>
      </Drawer>
    </nav>
  )
}

export default Navbar
