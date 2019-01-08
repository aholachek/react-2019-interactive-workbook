import React from "react"
import TaskChecklist from "../../App/TaskChecklist"

const Description = ({ toggleFinishedTask }) => {
  return (
    <div>
      <TaskChecklist toggleFinishedTask={toggleFinishedTask}>
        <span>
          Open up the <code>src/2. Memo/</code>folder in Code Sandbox. The files inside will be the ones you edit to complete the task.
        </span>
        <span>
          Next, <a
            href="https://reactjs.org/docs/react-api.html#reactmemo"
            target="_blank"
          >
            read the docs for <code>React.memo</code>.
          </a>
        </span>
        <span>
          Notice how slow the square is moving on the animated grid. This is
          because every time the board updates, React has to call the render
          function on every <code>GridSquare</code> function.
        </span>
        <span>
          Take a look at <a href={window.location} />GridSquare and figure out
          the hack I've used to make re-rendering expensive for demo purposes.
        </span>
        <span>
          Finally, figure out how to use <code>React.memo</code> to speed up the
          movement of the pink square.
        </span>
      </TaskChecklist>
    </div>
  )
}

export default Description
