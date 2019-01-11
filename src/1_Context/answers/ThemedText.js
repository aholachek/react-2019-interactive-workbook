import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProviderContainer"
import styles from "../ignore-me/styles.module.scss"

const ThemedText = () => {
  const theme = useContext(ThemeContext)
  const style =
    theme === "light"
      ? { color: "#000", backgroundColor: "#fff", border: "1px solid black" }
      : { color: "#fff", backgroundColor: "#000", border: "1px solid black" }
  return (
    <div className={styles.themedText} style={style}>
      this text is themed
    </div>
  )
}

export default ThemedText
