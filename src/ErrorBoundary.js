import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(1);
    // I will log this to Sentry, Azure Monitor, TrackJS...
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error{" "}
          <Link to="/">Click here to go back to the home page</Link>
          Or wait five seconds
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
