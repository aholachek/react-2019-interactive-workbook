import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          I've reviewed{" "}
          <a href="https://reactjs.org/docs/portals.html" target="_blank">
            the docs for React portals.
          </a>
        </span>
        <span>
          I recognize that the modal component is nested inside other elements
          with <code>overflow: hidden</code> styles, which is why I have to use
          a portal to append it to a separate div at the bottom of the page and
          take it out of the default flow.
        </span>
        <span>
          I've checked out the file <code>public/index.html</code> to verify
          that the portal container, <code>{`<div id="modal" />`}</code>,
          exists.
        </span>
        <span>
          I've updated the component in <code>src/4_Portal/Modal.js</code> to
          render a portal inside the <code>#modal div</code>.
        </span>
        <span>
          I've confirmed that the Modal now covers the entire screen, just like
          in the <code>Expected behavior</code> component.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
