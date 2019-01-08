import React, { useState, Children } from "react"
import styles from "./index.module.scss"
import check from "../SidebarTaskIndicator/checkmark.svg"

const Tasks = ({ children, toggleFinishedTask }) => {
  const [completedTasks, setCompleted] = useState([])
  const listChildren = Children.toArray(children)
  const toggleTaskCompleted = index => {
    debugger
    if (completedTasks.includes(index)) {
      if (completedTasks.length === listChildren.length) toggleFinishedTask()
      return setCompleted(completedTasks.filter(t => t !== index))
    }
    if (completedTasks.length + 1 === listChildren.length) toggleFinishedTask()
    return setCompleted(completedTasks.concat(index))
  }
  return (
    <ul>
      {listChildren.map((task, i) => (
        <li className={styles.taskContainer}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => toggleTaskCompleted(i)}
              className="is-sr-only"
            />
            <span title="complete task">
              {completedTasks.includes(i) && (
                <img src={check} className={styles.checkmark} alt="finished" />
              )}
            </span>
          </label>
          {task}
        </li>
      ))}
    </ul>
  )
}

Tasks.defaultProps = {}
Tasks.propTypes = {}

export default Tasks
