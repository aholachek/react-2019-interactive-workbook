import React from "react"
import { Link } from "react-router-dom"
import styles from "./About.module.scss"
import oldMan from "./oldman.jpg"

const About = () => {
  return (
    <div className={`${styles.about} card`}>
      <h1 className="title is-3">React 2019 Interactive Workbook</h1>
      <p>
        React Hooks? Context? Lazy? Memo? Who has time to learn about all of
        this stuff?
      </p>

      <img className={styles.img} src={oldMan} alt="old man yells at cloud" />

      <p>
        The workbook consists of a series of tasks that will get you quickly up
        to speed on the basics of some new(ish) React patterns.
      </p>
      <p>
        If you'd prefer to do the tasks locally rather than in Code Sandbox,{" "}
        <a
          href="https://github.com/aholachek/react-2019-interactive-workbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          you can clone the repo here.
        </a>{" "}
      </p>
      <p>
        <b>Note:</b>
        Doing the project locally instead of in CodeSandbox will result in a
        better experience, since tasks like the <code>lazy</code> and{" "}
        <code>ErrorBoundary</code> tasks, will exhibit more realistic browser
        behavior.
      </p>
      <p>
        To get started,{" "}
        <Link to="/context">just click on a task in the menu</Link> and follow
        the instructions. Each task should take between 5 and 25 minutes to
        complete. For most tasks, you'll see three cards:
      </p>
      <ol>
        <li>
          A set of instructions that you can complete by checking them off.
        </li>
        <li>
          A non-working, <code>Task</code> component that you must fix by
          editing the files in the relevant folder.
        </li>
        <li>
          An <code>Expected behavior</code> component that shows the component
          in its final, working state.
        </li>
      </ol>
      <p>
        If you get confused, search for the <code>TODO</code> comments in the
        code, or take a peek at the <code>answers</code> folder in each task.
      </p>
    </div>
  )
}

export default About
