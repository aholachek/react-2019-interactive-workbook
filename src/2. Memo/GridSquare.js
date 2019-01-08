import React from "react"
import styles from "./Grid.module.scss"

const fib = n => (n === 0 || n === 1 ? n : fib(n - 1) + fib(n - 2))

// TODO: memoize this component
const GridSquare = ({ highlighted }) => {
  fib(26)
  return (
    <div
      className={`${styles.gridSquare} ${
        highlighted ? styles.gridSquareHighlighted : ""
      }`}
    />
  )
}

export default GridSquare
