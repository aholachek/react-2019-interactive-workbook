import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          Open up the <code>src/7_Error Boundary/</code>folder. The files inside
          will be the ones you edit to complete the task.
        </span>
        <span>
          Next,{" "}
          <a
            href="https://reactjs.org/docs/error-boundaries.html"
            target="_blank"
          >
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
          <b>Note:</b> Even when you successfully implement the{" "}
          <code>ErrorBoundary</code>, you will still see an error overlay in
          development! If you close it with the 'x' button on the upper right,
          you should see the rendered page with the provided{" "}
          <code>message</code> prop, which is what users would see in
          production.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description