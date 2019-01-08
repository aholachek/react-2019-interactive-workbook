import React, { Suspense, lazy, useState } from "react"
import PropTypes from "prop-types"

const LazilyLoadedComponent = lazy(() =>
  import("./lazily-loaded-component" /* webpackChunkName: 'lazy-load-example' */)
)

const LazyExample = props => {
  const [
    showLazilyLoadedComponent,
    setLazilyLoadedComponentVisibility
  ] = useState(false)

  return (
    <div>
      <div>
        <button
          onClick={() =>
            setLazilyLoadedComponentVisibility(visibility => !visibility)
          }
          className="button"
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
