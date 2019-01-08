import React from "react"
import styles from "./Form.module.scss"
import useFormListener from "./useFormListener"

const defaultValues = {
  favoriteFood: "",
  favoriteFlavor: "sweet",
  favoriteMeals: [],
  dessert: ""
}

const HooksTest = () => {
  const [onFormChange, formData] = useFormListener(defaultValues)
  const onSubmit = event => {
    event.preventDefault()
    alert(JSON.stringify(formData, true, 2))
  }
  return (
    <div className="widget-container">
      <h1 className="subtitle is-4">Food Survey</h1>
      <form onSubmit={onSubmit} onChange={onFormChange} className={styles.form}>
        <fieldset>
          <label className="label" htmlFor="favorite-food">
            Favorite Food
          </label>
          <input
            type="text"
            name="favoriteFood"
            id="favorite"
            value={formData.favoriteFood}
            className="input"
          />
        </fieldset>

        <fieldset>
          <label className="label" htmlFor="flavor">
            My favorite type of flavor is
          </label>
          <select
            name="favoriteFlavor"
            value={formData.favoriteFlavor}
            id="flavor"
            className="select"
          >
            {["sweet", "sour", "bitter", "umami"].map(flavor => (
              <option value={flavor}>{flavor}</option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <legend> My favorite meal(s) of the day</legend>
          {["breakfast", "lunch", "dinner"].map(meal => {
            return (
              <label className="label" htmlFor={`meal-${meal}`}>
                <input
                  type="checkbox"
                  id={`meal-${meal}`}
                  name="favoriteMeals"
                  value={meal}
                  checked={formData.favoriteMeals.includes(meal)}
                />
                {meal}
              </label>
            )
          })}
        </fieldset>

        <fieldset>
          <legend> "I must have dessert"</legend>
          {["true", "false", "it depends"].map(answer => {
            return (
              <label className="label" htmlFor={`dessert-${answer}`}>
                <input
                  type="radio"
                  id={`dessert-${answer}`}
                  name="dessert"
                  value={answer}
                  checked={formData.dessert === answer}
                />
                {answer}
              </label>
            )
          })}
        </fieldset>
        <button type="submit" className="button">
          Submit Form
        </button>
      </form>
    </div>
  )
}

export default HooksTest
