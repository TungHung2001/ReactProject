import { useState } from "react"
import styled from "styled-components"
import "./forminput.css"
const Finput = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px; //280px
`
const Label = styled.label`
  font-size: 12px;
  color: gray;
`
const Span = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <>
      <Finput>
        <Label>{label}</Label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <Span>{errorMessage}</Span>
      </Finput>
    </>
  )
}

export default FormInput
