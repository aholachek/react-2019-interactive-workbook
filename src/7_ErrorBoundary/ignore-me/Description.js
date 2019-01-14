import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist
        toggleFinishedTask={toggleFinishedTask}
        localStorageKey="error-boundary"
      >
        <span>
          I've reviewed{" "}
          <a
            href="https://reactjs.org/docs/error-boundaries.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            the docs for error boundaries.
          </a>
        </span>
        <span>
          I recognize that the <code>Task</code> component, when the button is
          clicked, will render <code>DangerousComponent</code>, which will throw
          an uncaught error and crash the page. (I'll have to reload the page)
        </span>
        <span>
          <p>
            I've clicked the button for the <code>Expected behavior</code>{" "}
            component and recognize how the error no longer crashes the page.
          </p>
          <p>
            <b>Note:</b> Even when the <code>ErrorBoundary</code> is successfuly
            implemented, you will still see an error overlay in development! If
            you close it with the 'x' button on the upper right, you should see
            the rendered page with the provided <code>message</code> prop, which
            is what users would see in production.
          </p>
        </span>
        <span>
          I've implemented an error boundary in{" "}
          <code>src/7_ErrorBoundary/ErrorHandler.js</code> to prevent{" "}
          <code>src/7_ErrorBoundary/DangerousComponent.js</code> from crashing
          the page. Instead, when <code>ErrorHandler</code> catches an error, it
          should print whatever message was passed in via the{" "}
          <code>message</code> prop.
        </span>
        <span>
          My implementation of the <code>ErrorHandler</code> calls the function
          passed in to the <code>logError</code> prop when there is an error.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
