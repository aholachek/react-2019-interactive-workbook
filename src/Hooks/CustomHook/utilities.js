/** returns 'select'| 'text' | 'radio' | 'checkbox' */
export const getElementType = element => {
  let type
  const baseType = element.nodeName.toLowerCase()
  if (baseType === "input") {
    type = element.type.toLowerCase()
  }
  return type || baseType
}

/** returns an array of values from the checked checkboxes */
export const getCheckedCheckboxValues = checkboxElement => {
  const allCheckboxes = [
    ...checkboxElement
      .closest("form")
      .querySelectorAll(`[name="${checkboxElement.name}"]`)
  ]
  return allCheckboxes
    .filter(checkbox => checkbox.checked)
    .map(({ value }) => value)
}
