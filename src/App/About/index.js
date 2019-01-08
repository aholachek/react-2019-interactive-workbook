import React from "react"
import { Link } from "react-router-dom"
import styles from "./About.module.scss"
import oldMan from "./oldman.jpg"

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className="title is-3">React 2019 Interactive Workbook</h1>
      <p>
        React Hooks? Context? Lazy? Memo? Who has time to learn about all of
        this stuff? *
      </p>

      <img className={styles.img} src={oldMan} alt="old man yells at cloud" />
      <p>
        Reading the docs is an imperfect solution since without practice, it's
        hard to say you truly understand what's going on.
      </p>
      <p>
        I've made a few practice tasks that should give you some concrete
        practice implementing these new(ish) patterns.
      </p>
      <p>
        To get started,{" "}
        <Link to="/hooks/timer">
          just click on a task in the sidebar to the left
        </Link>{" "}
        and follow the instructions! Each task should take between 5 and 25
        minutes to complete.
      </p>

      <p style={{ marginTop: "5rem" }}>
        * I have the time, I am just lazy.
      </p>
    </div>
  )
}

export default About
