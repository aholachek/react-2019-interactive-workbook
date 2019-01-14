import React, { useState } from "react"
import Timer from "./timer"
import styles from "../ignore-me/styles.module.scss"

const TimerContainer = ({ setFinishedTasks }) => {
  const [timerType, setTimerType] = useState("seconds")

  return (
    <div>
      <div className={styles.type}>
        <span>Show:</span>
        {["seconds", "milliseconds"].map(type => (
          <label key={type}>
            <input
              type="radio"
              name="type1"
              id={type}
              checked={timerType === type}
              onChange={() => setTimerType(type)}
            />
            {type}
          </label>
        ))}
      </div>
      <Timer type={timerType} />
    </div>
  )
}
export default TimerContainer
