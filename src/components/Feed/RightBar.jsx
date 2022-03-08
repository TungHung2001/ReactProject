import React from "react"
import styled from "styled-components"
const Main = styled.div`
  flex: 2;
  width: 50%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
  position: relative;
  height: 500px;
`
const Contanier = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 5px 10px;
`
const H1 = styled.h2`
  text-align: center;
`
const Title = styled.span``
const Num = styled.span`
  margin-right: 10px;
`
const RightBar = () => {
  return (
    <Main>
      <H1>Top 5 Idea</H1>
      <Contanier>
        <Title>
          <Num>1</Num>
          The best batman
        </Title>
      </Contanier>
    </Main>
  )
}

export default RightBar
