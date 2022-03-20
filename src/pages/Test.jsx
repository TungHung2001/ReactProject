import { useState } from "react"

const Test = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [checked, setChecked] = useState(false)

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false)
  }

  const onCheckboxClick = () => {
    setChecked(!checked)
    return canBeSubmitted()
  }

  return (
    <div className="App">
      <input type="checkbox" onClick={onCheckboxClick} />
      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </div>
  )
}

export default Test
