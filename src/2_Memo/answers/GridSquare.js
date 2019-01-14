import React, { memo } from "react"
import styles from "../ignore-me/Grid.module.scss"

const fib = n => (n === 0 || n === 1 ? n : fib(n - 1) + fib(n - 2))

const GridSquare = memo(({ highlighted }) => {
  fib(29)
  return (
    <div
      className={`${styles.gridSquare} ${
        highlighted ? styles.gridSquareHighlighted : ""
      }`}
    />
  )
})

export default GridSquare
