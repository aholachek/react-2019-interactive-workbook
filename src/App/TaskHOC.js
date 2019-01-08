import React from "react"

const TaskHOC = (Component, Description) => ({
  title,
  toggleFinishedTask,
  isFinished
}) => {
  return (
    <div>
      <div>
        <h1 className="title is-3" style={{ marginBottom: "2rem" }}>
          {title}
        </h1>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Description toggleFinishedTask={toggleFinishedTask} />
      </div>

      <Component />
    </div>
  )
}

TaskHOC.defaultProps = {}
TaskHOC.propTypes = {}

export default TaskHOC
