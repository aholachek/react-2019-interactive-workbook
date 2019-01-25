import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist
        toggleFinishedTask={toggleFinishedTask}
        localStorageKey="portal"
      >
        <span>
          Review{" "}
          <a
            href="https://reactjs.org/docs/portals.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            the docs for React portals.
          </a>
        </span>
        <span>
          Recognize that the modal component is nested inside other elements
          with <code>overflow: hidden</code> styles, which is why you have to
          use a portal to append it to a separate div at the bottom of the page
          and take it out of the default flow.
        </span>
        <span>
          Take a look at the file <code>public/index.html</code> to verify that
          the portal container, <code>{`<div id="modal" />`}</code>, exists.
        </span>
        <span>
          Update the component in <code>src/4_Portal/Modal.js</code> to render a
          portal inside the <code>#modal div</code>.
        </span>
        <span>
          Uncomment lines 12-24 in <code>src/4_Portal/index.js</code> in order
          to apply some helpful styles to the <code>body</code> when the modal
          is open.{" "}
        </span>
        <span>
          Confirm that the Modal now covers the entire screen, just like in the{" "}
          <code>Expected behavior</code> component.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
