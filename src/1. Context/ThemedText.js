import React, { useContext } from "react"

const ThemedText = () => {
 // TODO: add theme from context
  const theme = undefined
  const style =
    theme === "light"
      ? { color: "#000", backgroundColor: "#fff", border: "1px solid black" }
      : { color: "#fff", backgroundColor: "#000", border: "1px solid black" }
  return <div style={style}>ThemedText</div>
}

export default ThemedText
