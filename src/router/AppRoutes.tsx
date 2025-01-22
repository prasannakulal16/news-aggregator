import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import { HomePage } from '../pages/home'

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
      }
      // {
      //   path: '/personalized',
      //   element: <PersonalizedPage />,
      // },
      // {
      //   path: '*',
      //   element: <NotRouteFound />,
      // },
    ]
  }
])

export default appRoutes
