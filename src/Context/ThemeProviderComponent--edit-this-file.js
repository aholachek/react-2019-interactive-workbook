import React, { createContext } from "react"

export const ThemeContext = createContext("light")

const ThemeProviderComponent = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)

export default ThemeProviderComponent
