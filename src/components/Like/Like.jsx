import React, { useState,useEffect } from "react"
import styled from "styled-components"
import "./Like.css"
import axios from "axios"

import ThumbUpOffAltSharpIcon from "@mui/icons-material/ThumbUpOffAltSharp"
import ThumbDownSharpIcon from "@mui/icons-material/ThumbDownSharp"

const Main = styled.div`
  display: flex;
`
const Button = styled.button`
  display: flex;
  margin: 5px;
  border: none;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  :hover {
    background-color: #9e9e9e;
  }
`
const P = styled.p`
  margin: 8px 5px 5px 0px; //tlbr
  font-size: 20px;
  display: flex;
`

const Blike = styled.div`
  display: flex;
  flex-direction: row;
`
const Like = () => {
  const [like, setlike] = useState() // add like
  const [dislike, setdislike] = useState() // add dislike

  const [likeactive, setlikeactive] = useState(false)
  const [dislikeactive, setdislikeactive] = useState(false)
  const [IdeaList, setIdeaList] = useState([]);
  const  handleSubmit  = (e) => {
    axios.post("http://localhost:3001/insert", {
      Like: like
    });  
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/idea").then((response)=>{
      setIdeaList(response.data);
      setlike(response.like)
    });
  },[])
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
  };

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
        <Blike>
          <Button
            className={[likeactive ? "active-like " : null].join("")}
            onClick={likef}
          >
            <ThumbUpOffAltSharpIcon />
          </Button>{" "}
          <P>{like}</P>
          <Button
            className={[dislikeactive ? "active-dislike " : null].join("")}
            onClick={dislikef}
          >
            <ThumbDownSharpIcon />
          </Button>{" "}
          <P>{dislike}</P>
        </Blike>
      </Main>
      </>
    )


  }

export default Like
