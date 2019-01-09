import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          Open up the <code>src/6. UseEffect/</code>folder in Code Sandbox.
          The files inside will be the ones you edit to complete the task.
        </span>
        <span>
          Next,{" "}
          <a href="https://reactjs.org/docs/hooks-effect.html" target="_blank">
            read the docs for the <code>useEffect</code> hook.
          </a>
        </span>
        <span>
          Write a functional React component, <code>Timer</code>, that records
          and displays the seconds since it has been mounted.
        </span>
        <span>
          The <code>Timer</code> component should be able to receive a{" "}
          <code>type</code> prop that can switch between{" "}
          <code>milliseconds</code> and <code>seconds.</code>
        </span>
        <span>
          Clean up any timers or listeners that you add to the component when
          the component is unmounted.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
