import React, { useState } from "react"

const LazyExample = () => {
  const [
    showLazilyLoadedComponent,
    setLazilyLoadedComponentVisibility
  ] = useState(false)

  return (
    <div className="widget-container">
      <div>
        <button
          onClick={() =>
            setLazilyLoadedComponentVisibility(visibility => !visibility)
          }
          className="button mb-1"
        >
          click me to lazily load a component
        </button>
      </div>
      {showLazilyLoadedComponent &&
        //TODO: add lazily loaded component
        null}
    </div>
  )
}

export default LazyExample
