import React from "react"
import styled from "styled-components"
import Feed from "../../components/Feed/Feed"

const Main = styled.div`
  display: flex;
  width: 100%;
`
const Left = styled.div`
  flex: 1;
  width: 100%;
`
const Right = styled.div`
  flex: 1;
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
