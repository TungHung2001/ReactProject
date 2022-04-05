import React, { useState } from "react"
import { ComData } from "../../ComData"
import styled from "styled-components"
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const Section = styled.section`
  padding: 5px 5px;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  height: 250px;
`
const H3 = styled.h3`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    font-size: 16px;
  }
`
const Com = styled.div`
  display: flex;
  padding: 10px; //trbl
`
const P = styled.p`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    font-size: 15px;
  }
`
const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
    height: 32px;
    width: 32px;
  }
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 5px;
`
const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  @media only screen and (max-width: 380px) {
    height: 20px;
  }
`
const Button = styled.button`
  width: 130px;
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
  background-color: #eeeeee;
  font-size: 12px;
  font-weight: 10px;
  width: 100%;
  height: 20px;
  :hover {
    background-color: #9e9e9e;
  }
`
const Comment1 = () => {
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
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>{" "}
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>
            <Com>
              <Img />
              <H3>NOT LAn</H3>
              <P>EeEEEEEEEEEE</P>
            </Com>
          </>
        </Section>
      </Main>
    </>
  )
}

export default Comment1
