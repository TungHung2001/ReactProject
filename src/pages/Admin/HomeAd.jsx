import React from "react"
import styled from "styled-components"
import Feed from "../../components/Feed/Feed"

const Main = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 3.5;
  display: flex;
  width: 100%;
`
const Right = styled.div`
  flex: 3.5;
  display: flex;
  width: 100%;
`
const HomeAd = () => {
  return (
    <>
      <Main>
        <Left />
        <Feed />
        <Right />
      </Main>
    </>
  )
}

export default HomeAd
