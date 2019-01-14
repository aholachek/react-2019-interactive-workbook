import React from "react"
import { Link } from "react-router-dom"
import styles from "./About.module.scss"
import oldMan from "./oldman.jpg"

const About = () => {
  return (
    <div className={`${styles.about} card`}>
      <h1 className="title is-3">React 2019 Interactive Workbook</h1>
      <p>
        React Hooks? Context? Lazy? Memo? ErrorBoundaries?? Who has time to
        learn about all of this stuff?
      </p>

      <img className={styles.img} src={oldMan} alt="old man yells at cloud" />

      <p>(Ok, I have the time, I just fear change.)</p>

      <p>
        The workbook consists of a series of tasks that will get you quickly up
        to speed on the basics of some new(ish) React patterns.
      </p>
      <p>
        To get started,{" "}
        <Link to="/context">just click on a task in the menu</Link> and follow
        the instructions! Each task should take between 5 and 25 minutes to
        complete. For most tasks, you'll see three cards:
      </p>
      <ol>
        <li>A set of instructions</li>
        <li>
          A non-working component that you must fix by editing the files in the
          relevant folder
        </li>
        <li>An example of the component in its final, working state.</li>
      </ol>
      <p>
        If you get confused, search for the <code>TODO</code> comments in the
        code, or (if you must) take a peek at the <code>answers</code> folder in
        each task.
      </p>
    </div>
  )
}

export default About
