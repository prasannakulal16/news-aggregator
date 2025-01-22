import './App.css'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import './index.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
