import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist
        toggleFinishedTask={toggleFinishedTask}
        localStorageKey="custom-hook"
      >
        <span>
          Review the docs{" "}
          <a
            href="https://reactjs.org/docs/react-api.html#reactmemo"
            target="_blank"
            rel="noopener noreferrer"
          >
            for Custom Hooks
          </a>{" "}
          and <a href="https://reactjs.org/docs/forms.html">Forms in React</a>.
        </span>
        <span>
          Submit the form in the <code>Expected behavior</code> component. Your
          custom hook will be responsible for recording form values.
        </span>
        <span>
          Take a look at the code in
          <code>src/5_Custom_Hook/index.js</code> to understand the required API
          for my custom hook.
        </span>
        <span>
          Write a custom hook in{" "}
          <code>src/5_Custom_Hook/useFormListener.js</code>, that listens to any{" "}
          <code>onChange</code> events bubbling up in a form and creates a JSON
          object of all form values.
        </span>
        <span>
          Confirm that when you fill out the form for the <code>Task</code>{" "}
          component and click submit, the JSON in the alert matches what you
          would expect.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
