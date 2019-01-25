import React from "react"
import styles from "./index.module.scss"

const TaskIndicator = ({ finished, children }) => (
  <div className={`${styles.taskIndicator} ${finished ? styles.checked : ""}`}>
    <div
      className={`${styles.taskIndicatorCheck} ${
        finished ? styles.checked : ""
      }`}
    />
    {children}
  </div>
)

export default TaskIndicator
