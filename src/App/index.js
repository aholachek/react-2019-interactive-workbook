/* eslint import/no-webpack-loader-syntax: 0 */
import React, { useState, useEffect } from "react"
import useLocalStorageState from "./useLocalStorageState"
import { Router, Route, Link, NavLink, Redirect } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import About from "./About"
import TimerExample from "../6_UseEffect"
import TimerAnswer from "../6_UseEffect/answers"
import TimerDescription from "../6_UseEffect/ignore-me/Description"
import FormExample from "../5_Custom_Hook"
import FormAnswer from "../5_Custom_Hook/answers"
import FormDescription from "../5_Custom_Hook/ignore-me/Description"
import ErrorBoundaryExample from "../7_ErrorBoundary"
import ErrorBoundaryAnswer from "../7_ErrorBoundary/answers"
import ErrorBoundaryDescription from "../7_ErrorBoundary/ignore-me/Description"
import ContextExample from "../1_Context"
import ContextAnswer from "../1_Context/answers"
import ContextDescription from "../1_Context/ignore-me/Description"
import MemoExample from "../2_Memo"
import MemoDescription from "../2_Memo/ignore-me/Description"
import LazyExample from "../3_Lazy"
import LazyAnswer from "../3_Lazy/answers"
import LazyDescription from "../3_Lazy/ignore-me/Description"
import PortalExample from "../4_Portal"
import PortalAnswer from "../4_Portal/answers"
import PortalDescription from "../4_Portal/ignore-me/Description"
import TaskIndicator from "./SidebarTaskIndicator"
import TaskHOC from "./TaskHOC"
import "bulma/css/bulma.css"
import "./index.scss"

const routeConfig = [
  {
    route: "/context",
    title: "Context",
    component: ContextExample,
    answerComponent: ContextAnswer,
    description: ContextDescription,
    module: "src/Context/index.js"
  },
  {
    route: "/memo",
    title: "Memo",
    component: MemoExample,
    description: MemoDescription,
    module: "src/Memo/index.js"
  },
  {
    route: "/lazy",
    title: "Lazy",
    component: LazyExample,
    answerComponent: LazyAnswer,
    description: LazyDescription,
    module: "src/Lazy/index.js"
  },
  {
    route: "/portal",
    title: "Portal",
    component: PortalExample,
    answerComponent: PortalAnswer,
    description: PortalDescription,
    module: "src/Portal/index.js"
  },
  {
    route: "/CustomHook",
    title: "Custom Hook",
    component: FormExample,
    answerComponent: FormAnswer,
    description: FormDescription,
    module: "src/CustomHook/index.js"
  },
  {
    route: "/timer",
    title: "UseEffect Hook",
    component: TimerExample,
    answerComponent: TimerAnswer,
    description: TimerDescription,
    module: "src/UseEffect/index.js"
  },
  {
    route: "/error-boundary",
    title: "Error Boundary",
    component: ErrorBoundaryExample,
    answerComponent: ErrorBoundaryAnswer,
    description: ErrorBoundaryDescription,
    module: "src/ErrorBoundary/index.js"
  }
]

routeConfig.forEach(route => {
  route.component = TaskHOC(
    route.component,
    route.answerComponent,
    route.description
  )
})

const history = createBrowserHistory()

const unlisten = history.listen((location, action) => {
  window.scrollTo(0, 0)
})

function App() {
  const [finishedTasks, setFinishedTasks] = useLocalStorageState(
    "finishedTasks",
    []
  )

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
            <h2 className="title is-5">Task Menu</h2>
            {routeConfig.map(({ route, title }, i) => (
              <li key={route}>
                <NavLink
                  to={route}
                  exact={true}
                  activeClassName="active"
                  className="sidebarLink"
                >
                  <TaskIndicator finished={finishedTasks.includes(route)}>
                    {i + 1} {title}
                  </TaskIndicator>
                </NavLink>
              </li>
            ))}
          </ul>
          <main>
            <Route path="/" exact component={About} />
            {routeConfig.map(({ route, component: Component, title }, i) => (
              <Route
                key={route}
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
