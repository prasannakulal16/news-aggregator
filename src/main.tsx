import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.tsx'
import { RouterProvider } from 'react-router-dom'
import appRoutes from './router/AppRoutes.tsx'
import ErrorBoundary from './components/ErrorBoundary/index.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div>Component failed to load.</div>}>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  </ErrorBoundary>
)
