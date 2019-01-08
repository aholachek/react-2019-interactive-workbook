import React, { useState } from "react"
import DangerousComponent from "./DangerousComponent"
import ErrorHandler from "./ErrorHandler"

const logError = error => {
  console.warn(`${error}`)
}

const Page = () => {
  const [showError, setShowError] = useState(false)

  return (
    <div className="widget-container">
      {showError ? (
        <ErrorHandler
          logError={logError}
          message="The dangerous component has imploded"
        >
          <DangerousComponent />
        </ErrorHandler>
      ) : (
        <button className="button" onClick={() => setShowError(true)}>
          render component with uncaught error
        </button>
      )}{" "}
    </div>
  )
}

export default Page
