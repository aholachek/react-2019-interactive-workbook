import React from "react"
import styles from "./index.module.scss"
import check from "./checkmark.svg"

const TaskIndicator = ({ finished, children }) => (
  <div className={`${styles.taskIndicator} ${finished ? styles.checked : ""}`}>
    <div
      className={`${styles.taskIndicatorCheck} ${
        finished ? styles.checked : ""
      }`}
    />
    {finished && (
      <img src={check} className={styles.checkmark} alt="finished" />
    )}
    {children}
  </div>
)

export default TaskIndicator
