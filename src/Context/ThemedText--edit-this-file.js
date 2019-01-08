import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProviderComponent--edit-this-file"

const ThemedText = () => {
  const theme = useContext(ThemeContext)
  const style =
    theme === "light"
      ? { color: "#000", backgroundColor: "#fff", border: "1px solid black" }
      : { color: "#fff", backgroundColor: "#000", border: "1px solid black" }
  return <div style={style}>ThemedText</div>
}

export default ThemedText
