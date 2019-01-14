import React from "react"
import TaskChecklist from "../../App/TaskChecklist"
import example from "./example.png"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          I've reviewed{" "}
          <a
            href="https://reactjs.org/docs/code-splitting.html#reactlazy"
            target="_blank"
          >
            the docs for React.lazy.
          </a>
        </span>
        <span>
          I've updated <code>src/3_Lazy/index.js</code> to lazily load the
          component from
          <code>src/3_Lazy/LazilyLoaded.js</code>.
        </span>
        <span>
          The fallback text while the element is loading says "Loading..."
        </span>
        <span>
          When I check for the new bundle in the network dev tools, the
          lazily-loaded bundle is named <code>LazilyLoaded.chunk.js</code> and
          looks like this:
          <img src={example} alt="named, lazy-loaded bundle" />
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
