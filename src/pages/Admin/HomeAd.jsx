import React from "react"
import styled from "styled-components"
import Feed from "../../components/Feed/Feed"
import RightBar from "../../components/Feed/RightBar"

const Main = styled.div`
  display: flex;
  width: 100%;
`
const Left = styled.div`
  flex: 1.5;
  width: 100%;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`
const HomeAd = () => {
  return (
    <>
      <Main>
        <Left />
        <Feed />
        <RightBar />
      </Main>
    </>
  )
}

export default HomeAd
