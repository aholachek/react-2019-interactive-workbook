import { useState, useEffect } from "react"

export default function useLocalStorageState(localStorageKey, initialState) {
  const storedValue = JSON.parse(localStorage.getItem(localStorageKey))
  const [data, setData] = useState(storedValue || initialState)

  useEffect(
    () => {
      localStorage.setItem(localStorageKey, JSON.stringify(data))
    },
    [data]
  )
  return [data, setData]
}
