import React from "react"
import PropTypes from "prop-types"

const TimeSinceMounted = ({ type }) => {
  // TODO: start a counter as soon as the component is mounted
  return <div />
}

TimeSinceMounted.propTypes = {
  type: PropTypes.oneOf(["milliseconds", "seconds"])
}

export default TimeSinceMounted
