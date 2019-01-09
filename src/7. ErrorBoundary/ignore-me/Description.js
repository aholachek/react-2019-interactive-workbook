import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
      <span>
          Open up the <code>src/7. Error Boundary/</code>folder in Code Sandbox. The files inside will be the ones you edit to complete the task.
        </span>
        <span>
          Next,{" "}
          <a href="https://reactjs.org/docs/error-boundaries.html" target="_blank">
            read the docs for error boundaries.
          </a>
        </span>
        <span>
          Click the button below. The page will then render{" "}
          <code>DangerousComponent</code>, which will throw an uncaught error
          and crash the page.
        </span>
        <span>
          Use an error boundary to prevent <code>DangerousComponent</code> from
          crashing the page. Instead, if it catches an error, it should print
          whatever message was passed in via the <code>message</code> prop.
        </span>
        <span>
          It should log the error with the function passed in to the{" "}
          <code>logError</code> prop.
        </span>
        <span>
          <b>Note:</b> Even on successful use of the <code>ErrorBoundary</code>,
          you will still see an error overlay. This is only visible in
          development. If you close it with the 'x' button on the upper right,
          you should see the rendered page with the provided{" "}
          <code>message</code> prop.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
