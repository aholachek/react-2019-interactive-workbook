import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          Open up the <code>src/5_Custom Hook/</code>folder. The files inside
          will be the ones you edit to complete the task.
        </span>
        <span>
          Next,{" "}
          <a
            href="https://reactjs.org/docs/react-api.html#reactmemo"
            target="_blank"
          >
            read the docs for Custom Hooks
          </a>{" "}
          and <a href="https://reactjs.org/docs/forms.html">Forms in React</a>.
        </span>
        <span>
          We're going to try something a little fancy with this task. Write a
          custom hook, <code>useFormListener</code>, that listens to any{" "}
          <code>onChange</code> events bubbling up in a form and creates a JSON
          object of all form values. Check out{" "}
          <code>src/5. Custom Hook/index.js#13</code> to understand the expected
          API of your <code>useFormListener</code> hook.
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
