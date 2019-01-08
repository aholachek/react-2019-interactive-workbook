import React from "react"
import TaskChecklist from "../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          First,{' '}
          <a href="https://reactjs.org/docs/react-api.html#reactmemo">
            read the docs for <code>React.memo</code> if you haven't already
          </a>
        </span>
        <span>
          Notice how slow the square is moving on the animated grid. This is
          because every time the board updates, React has to call the render
          function on every <code>GridSquare</code> function.
        </span>
        <span>
          Take a look at GridSquare and figure out the hack I've used to make
          re-rendering expensive.
        </span>
        <span>
          Finally, use <code>React.memo</code> to improve rendering speed.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
