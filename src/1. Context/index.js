import React, { useState } from "react"
import ThemedText from "./ThemedText"
import ThemeProvider from "./ThemeProviderComponent"
import styles from "./styles.module.scss"

const IntermediateComponent = ({ children }) => <div>{children}</div>

const ContextExample = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div className="widget-container">
      <div className={styles.theme}>
        {["light", "dark"].map(themeType => (
          <label>
            <input
              type="radio"
              name="themeType"
              checked={theme === themeType}
              onChange={() => setTheme(themeType)}
            />
            {themeType}
          </label>
        ))}
      </div>
      <ThemeProvider theme={theme}>
        <IntermediateComponent>
          <ThemedText />
        </IntermediateComponent>
      </ThemeProvider>
    </div>
  )
}

export default ContextExample
