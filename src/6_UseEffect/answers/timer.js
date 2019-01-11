import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const TimeSinceMounted = ({ type }) => {
  // TODO: start a counter as soon as the component is mounted
  const [secondsSinceMounted, setSecondsSinceMounted] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsSinceMounted(
        prevSecondsSinceMounted => prevSecondsSinceMounted + 1
      )
    }, 1000)

    return () => clearInterval(intervalId)
  })
  return (
    <div>
      {type === "milliseconds"
        ? secondsSinceMounted * 1000
        : secondsSinceMounted}{" "}
      {type} since this component mounted!
    </div>
  )
}

TimeSinceMounted.propTypes = {
  type: PropTypes.oneOf(["milliseconds", "seconds"])
}

export default TimeSinceMounted
