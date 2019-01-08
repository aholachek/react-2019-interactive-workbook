/* eslint import/no-webpack-loader-syntax: 0 */
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import About from "./About"
import TimerExample from "../Hooks/TimeSinceMounted"
import TimerDescription from "../Hooks/TimeSinceMounted/Description"
import FormExample from "../Hooks/Form"
import FormDescription from "../Hooks/Form/Description"
import ErrorBoundaryExample from "../ErrorBoundary"
import ErrorBoundaryDescription from "../ErrorBoundary/Description"
import ContextExample from "../Context"
import ContextDescription from "../Context/Description"
import MemoExample from "../Memo"
import MemoDescription from "../Memo/Description"
import LazyExample from "../Lazy"
import LazyDescription from "../Lazy/Description"
import PortalExample from "../Portal"
import PortalDescription from "../Portal/Description"
import TaskIndicator from "./SidebarTaskIndicator"
import TaskHOC from "./TaskHOC"

const routeConfig = [
  {
    route: "/hooks/timer",
    title: "UseEffect Hook",
    component: TimerExample,
    description: TimerDescription
  },
  {
    route: "/hooks/form",
    title: "Custom Hook",
    component: FormExample,
    description: FormDescription
  },
  {
    route: "/error-boundary",
    title: "Error Boundary",
    component: ErrorBoundaryExample,
    description: ErrorBoundaryDescription
  },
  {
    route: "/context",
    title: "Context",
    component: ContextExample,
    description: ContextDescription
  },
  {
    route: "/memo",
    title: "React.memo",
    component: MemoExample,
    description: MemoDescription
  },
  {
    route: "/lazy",
    title: "React.lazy",
    component: LazyExample,
    description: LazyDescription
  },
  {
    route: "/portal",
    title: "Portal",
    component: PortalExample,
    description: PortalDescription
  }
]

routeConfig.forEach(
  route => (route.component = TaskHOC(route.component, route.description))
)

function App() {
  const [finishedTasks, setFinishedTasks] = useState(["/portal"])
  const toggleFinishedTask = path => () => {
    setFinishedTasks(finishedTasks => {
      if (finishedTasks.includes(path))
        return finishedTasks.filter(task => task !== path)
      return finishedTasks.concat(path)
    })
  }
  return (
    <div>
      <Router>
        <div className="app-container">
          <ul className="sidebar">
            <Link className="sidebar-title" to="/">
              React <br /> Interactive Workbook
            </Link>
            {routeConfig.map(({ route, title }, i) => (
              <li>
                <NavLink
                  to={route}
                  exact={true}
                  activeClassName="active"
                  className="sidebarLink"
                >
                  <TaskIndicator finished={finishedTasks.includes(route)}>
                    {title}
                  </TaskIndicator>
                </NavLink>
              </li>
            ))}
          </ul>
          <main>
            <Route path="/" component={About} exact />
            {routeConfig.map(({ route, component: Component, title }) => (
              <Route
                render={props => (
                  <Component
                    {...props}
                    toggleFinishedTask={toggleFinishedTask(route)}
                    title={title}
                    isFinished={finishedTasks.includes(route)}
                  />
                )}
                path={route}
              />
            ))}
          </main>
        </div>
      </Router>
    </div>
  )
}

export default App
