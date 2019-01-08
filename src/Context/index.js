import React, { useState } from "react"
import ThemedText from "./ThemedText--edit-this-file"
import ThemeProvider from "./ThemeProviderComponent--edit-this-file"

const IntermediateComponent = ({ children }) => <div>{children}</div>

const ContextExample = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div>
      <div>
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
