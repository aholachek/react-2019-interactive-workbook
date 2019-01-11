import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
      <span>
          Open up the <code>src/4_Portal/</code>folder. The files inside will be the ones you edit to complete the task.
        </span>
        <span>
          Next,{" "}
          <a href="https://reactjs.org/docs/portals.html" target="_blank">
            read the docs for React portals.
          </a>
        </span>
        <span>
          Toggle the "showModal" button to see that the modal is nested inside
          other elements with <code>overflow: hidden</code> styles.
        </span>
        <span>
          Update the Modal component to render a portal inside the{" "}
          <code>#modal</code> container.
        </span>
        <span>
          Toggle "showModal" and confirm that the modal takes up the whole
          screen.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
