import React, { useState } from "react"
import { ComData } from "../ComData"
import styled from "styled-components"
const Section = styled.section`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
`
const H3 = styled.h3`
  padding: 10px;
`
const Com = styled.div`
  display: flex;
  padding: 20px 10px;
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

function Test() {
  const [noOfElement, setnoElement] = useState(3)
  const loadMore = () => {
    setnoElement(noOfElement + noOfElement)
  }
  const slice = ComData.cdata.slice(0, noOfElement)
  return (
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
      <button onClick={() => loadMore()}>load</button>
    </>
  )
}

export default Test
