import React from "react"
import DangerousComponent from "./DangerousComponent"
import ErrorHandler from "./ErrorHandler"

const logError = error => {
  console.warn(`${error}`)
}

const Page = () => (
  <ErrorHandler
    logError={logError}
    message="The dangerous component has imploded"
  >
    <DangerousComponent />
  </ErrorHandler>
)

export default Page
