import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.tsx'
import { RouterProvider } from 'react-router-dom'
import appRoutes from './router/AppRoutes.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallbackUI } from './components/ErrorFallbackUI/index.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
      <RouterProvider router={appRoutes} />
    </ErrorBoundary>
  </Provider>
)
