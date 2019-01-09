import { useState } from "react"
import { getElementType, getCheckedCheckboxValues } from "./utilities"

const useFormListener = (defaultValues = {}) => {
  // TODO: create a custom hook that will store form values
  const onFormChange = () => {}
  const formData = {}
  return [onFormChange, formData]
}

export default useFormListener
