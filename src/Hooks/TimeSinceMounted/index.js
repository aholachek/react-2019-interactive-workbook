import React, { useState } from "react"
import Timer from "./timer"
import launchEditorEndpoint from "react-dev-utils/launchEditorEndpoint"

const TimerContainer = ({ setFinishedTasks }) => {
  const [timerType, setTimerType] = useState("seconds")

  return (
    <div
      onClick={() => {
        fetch(
          'http://localhost:4000/__open-in-editor' +
            "?fileName=" +
            window.encodeURIComponent('src/Hooks/TimeSinceMounted/index.js') +
            "&lineNumber=" +
            window.encodeURIComponent(1) +
            "&colNumber=" +
            window.encodeURIComponent(1)
        )
      }}
    >
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
