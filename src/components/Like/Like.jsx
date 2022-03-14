import React, { useState } from "react"
import styled from "styled-components"
import "./Like.css"

import ThumbUpOffAltSharpIcon from "@mui/icons-material/ThumbUpOffAltSharp"
import ThumbDownSharpIcon from "@mui/icons-material/ThumbDownSharp"
const Main = styled.div`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  width: 100px;
  height: 32px;

  margin: 5px;
  border: none;
  border-radius: 10px;
  :hover {
    background-color: #9e9e9e;
  }
`
const P = styled.p`
  margin: 5px;
  font-size: 20px;
`
const Num = styled.div`
  display: flex;
`
const Blike = styled.div``
const Like = () => {
  const [like, setlike] = useState(100) // add like
  const [dislike, setdislike] = useState(100) // add dislike

  const [likeactive, setlikeactive] = useState(false)
  const [dislikeactive, setdislikeactive] = useState(false)

  function likef() {
    if (likeactive) {
      setlikeactive(false)
      setlike(like - 1)
    } else {
      setlikeactive(true)
      setlike(like + 1)
      if (dislikeactive) {
        setdislikeactive(false)
        setlike(like + 1)
        setdislike(dislike - 1)
      }
    }
  }
  function dislikef() {
    if (dislikeactive) {
      setdislikeactive(false)
      setdislike(dislike - 1)
    } else {
      setdislikeactive(true)
      setdislike(like + 1)
      if (likeactive) {
        setlikeactive(false)
        setdislike(dislike + 1)
        setlike(like - 1)
      }
    }
  }
  return (
    <>
      <Main>
        <Num>
          <P>
            <ThumbUpOffAltSharpIcon className="ThumpUp" fontSize="small" />{" "}
            {like}
          </P>
          <P>
            <ThumbDownSharpIcon className="ThumpDown" fontSize="small" />{" "}
            {dislike}
          </P>
        </Num>
        <Blike>
          <Button
            className={[likeactive ? "active-like " : null].join("")}
            onClick={likef}
          >
            <ThumbUpOffAltSharpIcon />
          </Button>

          <Button
            className={[dislikeactive ? "active-dislike " : null].join("")}
            onClick={dislikef}
          >
            <ThumbDownSharpIcon />
          </Button>
        </Blike>
      </Main>
    </>
  )
}

export default Like
