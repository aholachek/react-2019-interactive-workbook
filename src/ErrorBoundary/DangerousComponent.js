import React, { Component } from "react"
import PropTypes from "prop-types"

class DangerousComponent extends Component {
  componentDidMount() {
    throw new Error("Dangerous component imploded")
  }

  render() {
    return <div>I live dangerously</div>
  }
}

export default DangerousComponent
