/* eslint import/no-webpack-loader-syntax: 0 */
import React, { useState } from "react"
import { Router, Route, Link, NavLink } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import About from "./About"
import TimerExample from "../6. UseEffect"
import TimerDescription from "../6. UseEffect/ignore-me/Description"
import FormExample from "../5. Custom Hook"
import FormDescription from "../5. Custom Hook/ignore-me/Description"
import ErrorBoundaryExample from "../7. ErrorBoundary"
import ErrorBoundaryDescription from "../7. ErrorBoundary/ignore-me/Description"
import ContextExample from "../1. Context"
import ContextDescription from "../1. Context/ignore-me/Description"
import MemoExample from "../2. Memo"
import MemoDescription from "../2. Memo/ignore-me/Description"
import LazyExample from "../3. Lazy"
import LazyDescription from "../3. Lazy/ignore-me/Description"
import PortalExample from "../4. Portal"
import PortalDescription from "../4. Portal/ignore-me/Description"
import TaskIndicator from "./SidebarTaskIndicator"
import TaskHOC from "./TaskHOC"
import "bulma/css/bulma.css"
import "./index.scss"

const routeConfig = [
  {
    route: "/context",
    title: "Context",
    component: ContextExample,
    description: ContextDescription,
    module: "src/Context/index.js"
  },
  {
    route: "/memo",
    title: "React.memo",
    component: MemoExample,
    description: MemoDescription,
    module: "src/Memo/index.js"
  },
  {
    route: "/lazy",
    title: "React.lazy",
    component: LazyExample,
    description: LazyDescription,
    module: "src/Lazy/index.js"
  },
  {
    route: "/portal",
    title: "Portal",
    component: PortalExample,
    description: PortalDescription,
    module: "src/Portal/index.js"
  },
  {
    route: "/CustomHook",
    title: "Custom Hook",
    component: FormExample,
    description: FormDescription,
    module: "src/CustomHook/index.js"
  },
  {
    route: "/timer",
    title: "UseEffect Hook",
    component: TimerExample,
    description: TimerDescription,
    module: "src/UseEffect/index.js"
  },
  {
    route: "/error-boundary",
    title: "Error Boundary",
    component: ErrorBoundaryExample,
    description: ErrorBoundaryDescription,
    module: "src/ErrorBoundary/index.js"
  }
]

routeConfig.forEach(
  route => (route.component = TaskHOC(route.component, route.description))
)

const history = createBrowserHistory()

const unlisten = history.listen((location, action) => {
  window.scrollTo(0, 0)
})

function App() {
  const [finishedTasks, setFinishedTasks] = useState([])

  const toggleFinishedTask = path => () => {
    setFinishedTasks(finishedTasks => {
      if (finishedTasks.includes(path))
        return finishedTasks.filter(task => task !== path)
      return finishedTasks.concat(path)
    })
  }
  return (
    <Router history={history}>
      <div className="app-container">
        <nav>
          <Link className="nav-title" to="/">
            React 2019 Interactive Workbook
          </Link>
        </nav>
        <div className="flex-container">
          <ul className="sidebar">
            <h2 className="subtitle is-5 mb-1">Tasks</h2>
            {routeConfig.map(({ route, title }, i) => (
              <li>
                <NavLink
                  to={route}
                  exact={true}
                  activeClassName="active"
                  className="sidebarLink"
                >
                  <TaskIndicator finished={finishedTasks.includes(route)}>
                    {i + 1}. {title}
                  </TaskIndicator>
                </NavLink>
              </li>
            ))}
          </ul>
          <main>
            <Route path="/" component={About} exact />
            {routeConfig.map(({ route, component: Component, title }, i) => (
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
      </div>
    </Router>
  )
}

export default App
