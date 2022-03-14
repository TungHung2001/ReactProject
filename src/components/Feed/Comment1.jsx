import React, { useState } from "react"
import { ComData } from "../../ComData"
import styled from "styled-components"
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Section = styled.section`
  padding: 30px 60px;
  width: 80%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
`
const H3 = styled.h3`
  padding: 10px;
`
const Com = styled.div`
  display: flex;
  padding: 20px 10px;
  overflow: auto;
`
const P = styled.p`
  padding: 10px;
`
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 30px 60px;
`
const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 10px;
`
const Button = styled.button`
  width: 200px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin: 10px;
`
const LoadM = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #22b3c9;
  font-size: 12px;
  font-weight: 10px;
  width: 80%;
  height: 20px;
`
const Comment1 = () => {
  const [noOfElement, setnoElement] = useState(3)
  const loadMore = () => {
    setnoElement(noOfElement + noOfElement)
  }

  const slice = ComData.cdata.slice(0, noOfElement)
  return (
    <>
      <Main>
        {" "}
        <InputContainer>
          <Input />
          <Button type="submit">send</Button>
        </InputContainer>
        <Section>
          <>
            {slice.map((item, index) => {
              return (
                <Com key={index}>
                  <Img src={item.img} />
                  <H3>{item.title}</H3>
                  <P>{item.desc}</P>
                </Com>
              )
            })}
            <LoadM onClick={() => loadMore()}>Load More</LoadM>
          </>
        </Section>
      </Main>
    </>
  )
}

export default Comment1