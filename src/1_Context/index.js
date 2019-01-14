import React, { useState } from "react"
import ThemedText from "./ThemedText"
import ThemeProvider from "./ThemeProviderContainer"
import styles from "./ignore-me/styles.module.scss"

const IntermediateComponent = ({ children }) => <div>{children}</div>

const ContextExample = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div>
      <div className={styles.theme}>
        {["light", "dark"].map(themeType => (
          <label key={themeType}>
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
