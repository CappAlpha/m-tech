import React from 'react';

import styles from './ErrorBoundary.module.scss';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.root}>Ошибка</div>;
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
