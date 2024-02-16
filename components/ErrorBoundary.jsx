'use client'
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info){
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: Something is wrong!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;