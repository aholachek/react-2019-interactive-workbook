import React, { useState, lazy, Suspense } from "react"

const LazilyLoaded = lazy(() =>
  import("./lazily-loaded-component" /* webpackChunkName: "LazilyLoaded" */)
)

const LazyExample = () => {
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
          className="button mb-1"
        >
          click me to lazily load a component
        </button>
      </div>
      {showLazilyLoadedComponent && (
        <Suspense fallback={<div>"Loading..."</div>}>
          <LazilyLoaded />
        </Suspense>
      )}
    </div>
  )
}

export default LazyExample
