import React, { useState } from "react"
import DangerousComponent from "./DangerousComponent"
import ErrorHandler from "./ErrorHandler"

const logError = error => alert(error)

const Page = () => {
  const [showError, setShowError] = useState(false)

  return (
    <div>
      {showError ? (
        <ErrorHandler
          logError={logError}
          message="The dangerous component has imploded"
        >
          <DangerousComponent />
        </ErrorHandler>
      ) : (
        <button className="button  is-danger" onClick={() => setShowError(true)}>
          render a component with an uncaught error
        </button>
      )}{" "}
    </div>
  )
}

export default Page
