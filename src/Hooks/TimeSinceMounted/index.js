import React, { useState } from "react"
import Timer from "./timer"

const TimerContainer = ({ setFinishedTasks }) => {
  const [timerType, setTimerType] = useState("seconds")

  return (
    <div>
      <div>
        Show:
        {["seconds", "milliseconds"].map(type => (
          <label htmlFor={type}>
            {type}
            <input
              type="radio"
              name="type"
              id={type}
              checked={timerType === "type"}
              onChange={() => setTimerType(type)}
            />
          </label>
        ))}
      </div>
      <Timer type={timerType} />
    </div>
  )
}
export default TimerContainer
