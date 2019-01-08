import React from "react"
import TaskChecklist from "../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          First,{" "}
          <a href="https://reactjs.org/docs/context.html">
            read the docs for React.context.
          </a>
        </span>
        <span>
          Write a simple <code>Context Provider</code> that provides a single
          value&mdash;<code>theme</code>&mdash; anywhere in the tree.
        </span>
        <span>
          Edit the ThemedText component to ingest the context passed down and
          render the correct text style.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
