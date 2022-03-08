import React from "react"
import styled from "styled-components"
const Main = styled.div`
  background-color: white;
  border-radius: 10px;
`
const Input = styled.input`
  display: flex;

  width: 100%;
`
const ChoosePic = () => {
  return (
    <>
      <Main>
        <Input id="fileInput" type="file" />
      </Main>
    </>
  )
}

export default ChoosePic
