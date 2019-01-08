import React, { Suspense, lazy, useState } from "react"

const LazilyLoadedComponent = lazy(() =>
  import("./lazily-loaded-component" /* webpackChunkName: 'lazy-load-example' */)
)

const LazyExample = props => {
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
      {showLazilyLoadedComponent && (
        <Suspense fallback={<div>Loading, please wait</div>}>
          <LazilyLoadedComponent />
        </Suspense>
      )}
    </div>
  )
}

LazyExample.defaultProps = {}
LazyExample.propTypes = {}

export default LazyExample
