import React, { Component } from "react"
import PropTypes from "prop-types"

class ErrorHandler extends Component {
  static propTypes = {
    logError: PropTypes.func,
    message: PropTypes.string,
    children: PropTypes.node
  }

  staticDefaultProps = {
    logError: () => {}
  }

  state = {}

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error: true }
  }

  componentDidCatch(error) {
    this.props.logError(error)
  }

  render() {
    const { children, message } = this.props
    return this.state.error ? <div>{message}</div> : children
  }
}

export default ErrorHandler
