import React, { Children } from "react"
import useLocalStorageState from "../useLocalStorageState"
import styles from "./index.module.scss"

const Tasks = ({ children, toggleFinishedTask, localStorageKey }) => {
  const [completedTasks, setCompleted] = useLocalStorageState(
    localStorageKey,
    []
  )

  const listChildren = Children.toArray(children)
  const toggleTaskCompleted = index => {
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
        <li className={styles.taskContainer} key={i}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={() => toggleTaskCompleted(i)}
              className="is-sr-only"
              checked={completedTasks.includes(i)}
            />
            <span title="complete task" />
          </label>
          {task}
        </li>
      ))}
    </ul>
  )
}

export default Tasks
