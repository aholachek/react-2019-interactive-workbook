import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          First,{" "}
          <a href="https://reactjs.org/docs/error-boundaries.html" target="_blank">
            read the docs for React.lazy.
          </a>
        </span>
        <span>
          Update <code>index.js</code> to lazily load the component called{" "}
          <code>LazilyLoaded</code>.
        </span>
        <span>
          The fallback text while the element is loading should read "Loading,
          please wait"
        </span>
        <span>
          Make sure the lazily-loaded bundle is named{" "}
          <code>lazy-load-example</code>
        </span>
        <span>
          Finally, check your network panel to confirm that a bundle named
          <code>lazy-load-example.js</code> is loaded when you press the button.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
