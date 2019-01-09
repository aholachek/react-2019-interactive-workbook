import React, { Component } from "react"
import PropTypes from "prop-types"

class ErrorHandler extends Component {
  static propTypes = {
    logError: PropTypes.func,
    message: PropTypes.string
  }

  state = {}

  // TODO: add error handling

  render() {
    const { children, message } = this.props
    return children
  }
}

export default ErrorHandler
