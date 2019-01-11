import React from "react"
import PropTypes from "prop-types"

export const ThemeContext = React.createContext("light")

const ThemeProviderComponent = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

ThemeProviderComponent.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node
}

export default ThemeProviderComponent
