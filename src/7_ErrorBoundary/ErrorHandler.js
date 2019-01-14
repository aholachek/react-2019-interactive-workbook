import React, { Component } from "react"
import PropTypes from "prop-types"

// TODO: add error handling
// render the provided message if there is an error
// and make sure to call this.props.logError with the error as well
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
