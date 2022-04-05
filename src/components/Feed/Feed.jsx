import React from "react"
import styled from "styled-components"
import Post from "./Post"
import { Posts } from "../../TestPeopleData"

const Main = styled.div`
  flex: 4;
  height: calc(100vh - 50px);
`
const Warrper = styled.div``
const Feed = () => {
  return (
    <>
      <Main>
        <Warrper>
          
            <Post />

        </Warrper>
      </Main>
    </>
  )
}

export default Feed
