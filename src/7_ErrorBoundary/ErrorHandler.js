import React, { Component } from "react"
import PropTypes from "prop-types"

// TODO: add error handling

class ErrorHandler extends Component {
  static propTypes = {
    logError: PropTypes.func,
    message: PropTypes.string,
    children: PropTypes.node
  }
  staticDefaultProps = {
    logError: () => {}
  }
  render() {
    return this.props.children
  }
}

export default ErrorHandler
