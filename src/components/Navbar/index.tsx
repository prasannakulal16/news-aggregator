import React from 'react'
import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import { useNavigate } from 'react-router-dom'
import { categories, sources } from '../../config/constants'
import { useDispatch, useSelector } from 'react-redux'
import { ArticlesState } from '../../utils/types'
import { fetchArticles, setCategory, setSource } from '../../features/slice/ArticleSlice'
import CustomButton from '../CustomButton'

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { filters }: ArticlesState = useSelector((state: any) => state.articles)
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false)

  const showDrawer = () => {
    setIsDrawerVisible(true)
  }

  const closeDrawer = () => {
    setIsDrawerVisible(false)
  }
  const handleHomeClick = () => {
    navigate('/')
    setIsDrawerVisible(false)
  }

  const handlePersonalizedClick = () => {
    navigate('/personalized-news')
    setIsDrawerVisible(false)
  }

  const handleClearFilter = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(
      fetchArticles({
        q: filters.category
      })
    )
    dispatch(setCategory(categories[0]))
    dispatch(setSource(sources[0]))
    navigate('/')
  }

  return (
    <nav className="fixed top-0 w-full bg-black text-white py-4 flex items-center justify-between shadow-md mx-auto xl:px-18 lg:px-14 sm:px-10 px-6 z-50">
      {/* Left Side - Title */}
      <div className="text-2xl font-bold">NewsBridge</div>

      {/* Right Side - Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <Button
          type="link"
          className="text-white hover:text-gray-200 font-bold"
          onClick={handleClearFilter}
        >
          Home
        </Button>
        <Button
          type="link"
          className="text-white hover:text-gray-200 font-bold"
          onClick={() => navigate('/personalized-news')}
        >
          Personal Feed
        </Button>
      </div>

      {/* Mobile Menu - Hamburger Icon */}
      <div className="md:hidden">
        <MenuOutlined className="text-xl" onClick={showDrawer} />
      </div>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        title="NewsBridge"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        className="md:hidden"
        style={{ background: '#D3D3D3' }}
      >
        <div className="bg-gray-200 flex gap-4 flex-col">
          <CustomButton
            text="Home"
            type="link"
            block
            onClick={handleHomeClick}
            className="font-bold border-b-2 border-b-slate-500 text-sm rounded-none"
          />
          <CustomButton
            text="Personal Feed"
            type="link"
            block
            onClick={handlePersonalizedClick}
            className="font-bold border-b-2 border-b-slate-500 text-sm rounded-none"
          />
        </div>
      </Drawer>
    </nav>
  )
}

export default Navbar
