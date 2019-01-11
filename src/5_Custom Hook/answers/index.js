import React from "react"
import styles from "../ignore-me/Form.module.scss"
import useFormListener from "./useFormListener"

const defaultValues = {
  favoriteFood: "",
  favoriteFlavor: "sweet",
  favoriteMeals: []
}

const HooksTest = () => {
  const [onFormChange, formData] = useFormListener(defaultValues)
  const onSubmit = event => {
    event.preventDefault()
    alert(JSON.stringify(formData, true, 2))
  }
  return (
    <div>
      <form onSubmit={onSubmit} onChange={onFormChange} className={styles.form}>
        <fieldset>
          <label className="label">
            Favorite Food
            <input
              type="text"
              name="favoriteFood"
              id="favorite"
              value={formData.favoriteFood1}
              className="input"
            />
          </label>
        </fieldset>

        <fieldset>
          <label className="label">
            My favorite type of flavor is:
            <select
              name="favoriteFlavor"
              value={formData.favoriteFlavor1}
              id="flavor"
              className="select ml-1"
            >
              {["sweet", "sour", "bitter", "umami"].map(flavor => (
                <option value={flavor}>{flavor}</option>
              ))}
            </select>
          </label>
        </fieldset>

        <fieldset>
          <legend> My favorite meal(s) of the day</legend>
          {["breakfast", "lunch", "dinner"].map(meal => {
            return (
              <label className="label">
                <input
                  type="checkbox"
                  id={`meal-${meal}`}
                  name="favoriteMeals"
                  value={meal}
                  checked={
                    formData.favoriteMeals1 &&
                    formData.favoriteMeals1.includes(meal)
                  }
                />
                {meal}
              </label>
            )
          })}
        </fieldset>
        <button type="submit" className="button is-link">
          Submit Form
        </button>
      </form>
    </div>
  )
}

export default HooksTest
