import { getElementType, getCheckedCheckboxValues } from "./utilities"

const useFormListener = (defaultValues = {}) => {
  const formData = {}
  const onFormChange = event => {
    const name = event.target.name
    let value = event.target.value
    if (getElementType(event) === "checkbox") {
      value = getCheckedCheckboxValues(event)
    }
    formData[name] = value
  }
  return [onFormChange, formData]
}

export default useFormListener
