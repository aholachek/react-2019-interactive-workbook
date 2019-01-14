import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask} localStorageKey='use-effect'>
        <span>
          I've reviewed{" "}
          <a href="https://reactjs.org/docs/hooks-effect.html" target="_blank" rel="noopener noreferrer">
            the docs for the <code>useEffect</code> hook.
          </a>
        </span>
        <span>
          I've written a functional React component called <code>Timer</code> in{" "}
          <code>src/6_UseEffect/timer.js</code> that records and displays the
          seconds since it has been mounted.
        </span>
        <span>
          The <code>Timer</code> component can receive a <code>type</code> prop
          that switches the display between <code>milliseconds</code> and{" "}
          <code>seconds.</code>
        </span>
        <span>
          I've made sure to clean up any timers or listeners when the component
          is unmounted.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
