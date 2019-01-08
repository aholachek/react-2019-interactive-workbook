import { useState } from "react"
import { getElementType, getCheckedCheckboxValues } from "./utilities"

const useFormListener = (defaultValues = {}) => {
  const [formState, setFormState] = useState(defaultValues)

  const onFormChange = event => {
    const elementType = getElementType(event.target)

    let value = event.target.value
    if (elementType === "checkbox") {
      value = getCheckedCheckboxValues(event.target)
    }

    const name = event.target.name

    setFormState({
      ...formState,
      [name]: value
    })
  }
  return [onFormChange, formState]
}

export default useFormListener
