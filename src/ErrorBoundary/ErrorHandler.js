import React, { Component } from "react"
import PropTypes from "prop-types"

class ErrorHandler extends Component {
  static propTypes = {
    logError: PropTypes.func,
    message: PropTypes.string
  }

  static defaultProps = {
    message: "Error detected, please try reloading the page"
  }

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    this.props.logError && this.props.logError(error, info)
  }

  render() {
    const { children, message } = this.props
    if (this.state.hasError) {
      return <div>{message}</div>
    }
    return <div>{children}</div>
  }
}

export default ErrorHandler
