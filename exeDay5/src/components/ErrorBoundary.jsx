import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red", textAlign: "center", margin: "20px", padding: "20px", border: "1px solid red", borderRadius: "10px" }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap", textAlign: "left", margin: "10px auto", width: "80%", background: "#f8d7da", padding: "10px", borderRadius: "5px" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;