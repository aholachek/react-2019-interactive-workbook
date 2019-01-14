/** returns 'select-one' | 'select-multiple' | 'text' | 'radio' | 'checkbox' etc */
export const getElementType = event => {
  return event.target.type
}

/** returns an array of values from the checked checkboxes */
export const getCheckedCheckboxValues = event => {
  const checkboxElement = event.target
  const allCheckboxes = [
    ...checkboxElement.form.querySelectorAll(`[name="${checkboxElement.name}"]`)
  ]
  return allCheckboxes
    .filter(checkbox => checkbox.checked)
    .map(({ value }) => value)
}
