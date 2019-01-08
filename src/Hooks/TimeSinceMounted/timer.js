import React, { useEffect, useState } from "react"

const TimeSinceMounted = ({ type }) => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <div>
      Total {type} since mounting:
      {type === "milliseconds" ? seconds * 1000 : seconds}
    </div>
  )
}

export default TimeSinceMounted
