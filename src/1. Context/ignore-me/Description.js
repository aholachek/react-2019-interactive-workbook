import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          Open up the <code>src/1. Context/</code>folder in Code Sandbox. The files inside will be the ones you edit to complete the task.
        </span>
        <span>
          Next,{" "}
          <a href="https://reactjs.org/docs/context.html" target="_blank">
            read the docs for React.context.
          </a>
        </span>
        <span>
          Write a simple <code>Context Provider</code> that provides a single
          value&mdash;<code>theme</code>&mdash; anywhere in the tree.
        </span>
        <span>
          Edit the <code>ThemedText</code> component to ingest the context
          passed down and render the correct text style.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
