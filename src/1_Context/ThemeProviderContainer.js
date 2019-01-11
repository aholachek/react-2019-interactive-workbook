import React from "react"
import PropTypes from "prop-types"

// TODO: create and pass down ThemeContext
const ThemeProviderComponent = ({ theme, children }) => {
  return children
}

ThemeProviderComponent.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node
}

export default ThemeProviderComponent
