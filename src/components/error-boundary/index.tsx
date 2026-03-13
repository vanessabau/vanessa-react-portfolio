import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Render error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main id="main-content">
          <p>Something went wrong.</p>
          <a href="/">Return home</a>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
