import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import { HomePage } from '../pages/home'
import { PersonalizedNewsPage } from '../pages/personalized'

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace={true} />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/personalized-news',
        element: <PersonalizedNewsPage />
      }
      // {
      //   path: '*',
      //   element: <NotRouteFound />,
      // },
    ]
  }
])

export default appRoutes
