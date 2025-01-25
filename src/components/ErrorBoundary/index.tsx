import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode // Optional custom fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="error-boundary">
            <h2>Something went wrong.</h2>
            <p>{this.state.error?.message}</p>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
