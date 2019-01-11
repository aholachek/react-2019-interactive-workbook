/** returns 'select'| 'text' | 'radio' | 'checkbox' */
export const getElementType = event => {
  const element = event.target
  let type
  const baseType = element.nodeName.toLowerCase()
  if (baseType === "input") {
    type = element.type.toLowerCase()
  }
  return type || baseType
}

/** returns an array of values from the checked checkboxes */
export const getCheckedCheckboxValues = event => {
  const checkboxElement = event.target
  const allCheckboxes = [
    ...checkboxElement
      .closest("form")
      .querySelectorAll(`[name="${checkboxElement.name}"]`)
  ]
  return allCheckboxes
    .filter(checkbox => checkbox.checked)
    .map(({ value }) => value)
}
