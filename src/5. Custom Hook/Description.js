import React from "react"
import TaskChecklist from "../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          First,{" "}
          <a href="https://reactjs.org/docs/react-api.html#reactmemo" target="_blank">
            read the docs for Custom Hooks
          </a>{" "}
          and <a href="https://reactjs.org/docs/forms.html">Forms in React</a>.
        </span>
        <span>
          Write a custom hook, <code>useFormListener</code>, that listens to any{" "}
          <code>onChange</code> events bubbling up in a form and creates a JSON
          object of all form values. Check out <code>index.js</code> to
          understand the expected API of your <code>useFormListener</code> hook.
        </span>
        <span>
          Confirm that when you fill out the form and click submit, the JSON in
          the alert matches what you would expect.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
