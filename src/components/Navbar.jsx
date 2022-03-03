import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
`
const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>1</Left>
        <Center>2</Center>
        <Right>3</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
