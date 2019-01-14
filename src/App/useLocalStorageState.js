import { useState, useEffect } from "react"

export default function useSessionStorageState(
  sessionStorageKey,
  initialState
) {
  const storedValue = JSON.parse(sessionStorage.getItem(sessionStorageKey))
  const [data, setData] = useState(storedValue || initialState)

  useEffect(
    () => {
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(data))
    },
    [data]
  )
  return [data, setData]
}
