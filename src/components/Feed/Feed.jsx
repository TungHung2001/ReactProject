import React from "react"
import styled from "styled-components"
import Post from "./Post"
import { Posts } from "../../TestPeopleData"
const Main = styled.div`
  flex: 5, 5;
  height: calc(100vh - 50px);
`
const Warrper = styled.div``
const Feed = () => {
  return (
    <>
      <Main>
        <Warrper>
          {Posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </Warrper>
      </Main>
    </>
  )
}

export default Feed
