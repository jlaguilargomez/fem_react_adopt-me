import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // I will log this to Sentry, Azure Monitor, TrackJS...
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error{" "}
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
