import React from "react"
import PropTypes from "prop-types"

const TimeSinceMounted = ({ type }) => {
  // TODO: start a counter as soon as the component is mounted
  // and show the user the time since mounted
  return null
}

TimeSinceMounted.propTypes = {
  type: PropTypes.oneOf(["milliseconds", "seconds"])
}

export default TimeSinceMounted
