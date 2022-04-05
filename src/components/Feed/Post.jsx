import React, { useEffect, useState } from "react"
import styled from "styled-components"

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded"

import { Link } from "react-router-dom"
import axios from "axios"

import Comment12 from "./Comment1"
import ThumbUpOffAltSharpIcon from "@mui/icons-material/ThumbUpOffAltSharp"
import ThumbDownSharpIcon from "@mui/icons-material/ThumbDownSharp"
import "./Like.css"
const Main = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
  overflow: auto;
  @media only screen and (max-width: 380px) {
    display: flex;
    width: 35%;
    overflow: none;
    margin: 10px 0;
  }
`
const Wrapper = styled.div`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    width: 90%;
    margin-left: 30px;
  }
`
const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Ava = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
  }
`

const PTL = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 380px) {
  }
`
const PTR = styled.div``
const PUserName = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
`
const PDate = styled.span`
  font-size: 12px;
`
const PText = styled.span`
  overflow: auto;
  display: flex;
  @media only screen and (max-width: 380px) {
    overflow: hidden;
  }
`
const PostCenter = styled.div`
  margin: 20px 0;
`
const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const PBL = styled.div`
  display: flex;
  align-items: center;
`
const PBR = styled.div``

const IconLike = styled.div`
  margin-right: 5px;
  margin-left: 5px;
`
const PDF = styled(Link)``
const LinkLabel = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  background-color: #1e88e5;
  border: none;
  border-radius: 10px;
  :hover {
    background-color: #1a237e;
  }
  @media only screen and (max-width: 380px) {
    width: 70px;
    height: 30px;
  }
`
const Title = styled.span`
  overflow: auto;
  display: flex;
  font-size: 18px;
`
const MainLike = styled.div`
  display: flex;
`
const ButtonLike = styled.button`
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
const PLike = styled.p`
  margin: 8px 5px 5px 0px; //tlbr
  font-size: 20px;
  display: flex;
`

const Blike = styled.div`
  display: flex;
  flex-direction: row;
`
const Post = () => {
  // const [Like, setlike] = useState(1) // add like
  // const [Dislike, setdislike] = useState(1) // add dislike

  const [likeactive, setlikeactive] = useState(false)
  const [dislikeactive, setdislikeactive] = useState(false)

  const btnlike = (id)=>{  
    if (likeactive) {
      setlikeactive(false)
      axios.put("http://localhost:3001/likef",{
      id:id
    })
    } else {
      setlikeactive(true)
      axios.put("http://localhost:3001/like",{
      id:id
    })
    if (dislikeactive) {
      setdislikeactive(false)
      axios.put("http://localhost:3001/dislikef",{
      id:id
      })
      axios.put("http://localhost:3001/like",{
      id:id
    })
    }
  }  
  }
  const btndislike = (id)=>{  
    if (dislikeactive) {
      setdislikeactive(false)
      axios.put("http://localhost:3001/dislikef",{
      id:id
    })
    } else {
      setdislikeactive(true)
      axios.put("http://localhost:3001/dislike",{
      id:id
    })
    if (likeactive) {
      setlikeactive(false)
      axios.put("http://localhost:3001/likef",{
      id:id
      })
      axios.put("http://localhost:3001/dislike",{
      id:id
    })
    }
  }  
  }


  // function dislikef() {
  //   if (dislikeactive) {
  //     setdislikeactive(false)
  //     setdislike(Dislike - 1)
  //   } else {
  //     setdislikeactive(true)
  //     setdislike(Like + 1)
  //     if (likeactive) {
  //       setlikeactive(false)
  //       setdislike(Dislike + 1)
  //       setlike(Like - 1)
  //     }
  //   }
  // }

  const [IdeaList, setIdeaList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/idea").then((response) => {
      setIdeaList(response.data)
    })
  }, [])

  return (
    <>
      {IdeaList.map((val, key) => {
        return (
          <>
            <Main key={key}>
              <Wrapper>
                <PostTop>
                  <PTL>
                    <Ava src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/86667283_2601274866758819_7090944401005871104_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=WRyTFpQqA1gAX_Lkgr7&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-k7uNvAMugeJaGIpBBF-Vh2NaGVteGvC2tfkOnfEsfJQ&oe=626E2006"></Ava>
                    <PUserName>Anonymous</PUserName>
                    <PDate></PDate>
                  </PTL>
                  <PTR></PTR>
                  <MoreVertRoundedIcon />
                </PostTop>

                <PostCenter>
                  <Title>{val.Title}</Title>
                  {/* title */}
                  <PText>{val.Description}</PText>
                  {/* Description */}
                </PostCenter>

                <PostBottom>
                  <PBL>
                    <IconLike>
                      <MainLike>
                        <Blike>
                          <ButtonLike
                            className={[
                              likeactive ? "active-like " : null,
                            ].join("")}
                            onClick={()=>btnlike(val._id)}
                          >
                            <ThumbUpOffAltSharpIcon />
                          </ButtonLike>{" "}
                          <PLike>{val.Like}</PLike>
                          <ButtonLike
                            className={[
                              dislikeactive ? "active-dislike " : null,
                            ].join("")}
                            onClick={()=>btndislike(val._id)}
                          >
                            <ThumbDownSharpIcon />
                          </ButtonLike>{" "}
                          <PLike>{val.Dislike}</PLike>
                        </Blike>
                      </MainLike>
                    </IconLike>
                  </PBL>
                  <PBR>
                    <br />
                    {/* vao file Idea/ShowPdf */}
                    <PDF to="/ViewPdf" target="_blank">
                      <LinkLabel>View PDF</LinkLabel>
                    </PDF>
                  </PBR>
                </PostBottom>
                <Comment12 />
              </Wrapper>
            </Main>
          </>
        )
      })}
    </>
  )
}

export default Post
