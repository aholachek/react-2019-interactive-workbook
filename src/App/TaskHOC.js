import React from "react"

const TaskHOC = (Component, AnswerComponent, Description) => ({
  title,
  toggleFinishedTask
}) => {
  return (
    <div>
      <div>
        <h1 className="title is-3" style={{ marginBottom: "2rem" }}>
          {title}
        </h1>
      </div>
      <div className="card">
        <Description toggleFinishedTask={toggleFinishedTask} />
      </div>

      <h2 className="title is-5" style={{ marginTop: "2rem" }}>
        Task:
      </h2>

      <div className="card">
        <Component />
      </div>

      {AnswerComponent && (
        <div>
          <h2 className="title is-5" style={{ marginTop: "2rem" }}>
            Expected behavior:
          </h2>

          <div className="card">
            <AnswerComponent />
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskHOC
