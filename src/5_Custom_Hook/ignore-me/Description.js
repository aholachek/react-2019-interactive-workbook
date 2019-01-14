import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          I've reviewed the docs{" "}
          <a
            href="https://reactjs.org/docs/react-api.html#reactmemo"
            target="_blank"
          >
            for Custom Hooks
          </a>{" "}
          and <a href="https://reactjs.org/docs/forms.html">Forms in React</a>.
        </span>
        <span>
          I've submitted the form in the <code>Expected behavior</code>{" "}
          component and I understand that my custom hook will be responsible for
          recording form values.
        </span>
        <span>
          I've checked out the code in
          <code>src/5_Custom_Hook/index.js</code> to understand the required API
          for my custom hook.
        </span>
        <span>
          I've written a custom hook in{" "}
          <code>src/5_Custom_Hook/useFormListener.js</code>, that listens to any{" "}
          <code>onChange</code> events bubbling up in a form and creates a JSON
          object of all form values.
        </span>
        <span>
          I've confirmed that when I fill out the form for the <code>Task</code>{" "}
          component and click submit, the JSON in the alert matches what I would
          expect.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
