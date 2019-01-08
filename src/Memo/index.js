import React, { useEffect, useState } from "react"
import styles from "./Grid.module.scss"
import GridSquare from "./GridSquare"

const range = (end, start = 0) => [...new Array(end).keys()].slice(start)

const gridCellCount = 495

const Grid = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightedIndex(
        highlightedIndex => (highlightedIndex + 1) % gridCellCount
      )
    }, 1)
    return () => clearInterval(intervalId)
  })
  return (
    <div className="widget-container">
      <div className={styles.grid}>
        {range(gridCellCount).map((_, index) => (
          <GridSquare highlighted={highlightedIndex === index} />
        ))}
      </div>
    </div>
  )
}

export default Grid
