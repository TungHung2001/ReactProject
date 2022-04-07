import React, { useEffect, useState } from "react"
import styled from "styled-components"

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded"

import { Link } from "react-router-dom"
import axios from "axios"

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
const MainCom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const SectionCom = styled.section`
  padding: 5px 5px;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  height: 250px;
`
const H3Com = styled.h3`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    font-size: 15px;
  }
`
const Com = styled.div`
  display: flex;
  padding: 10px; //trbl
  @media only screen and (max-width: 380px) {
  }
`
const PCom = styled.p`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    font-size: 13px;
  }
`
const ImgCom = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
    height: 15px;
    width: 15px;
  }
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 5px;
`
const InputCom = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  @media only screen and (max-width: 380px) {
    height: 20px;
  }
`
const ButtonCom = styled.button`
  width: 130px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin: 10px;
`
const ButtonMore = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  :hover {
    background-color: #1775ee;
  }
`
const Post = () => {
  // const [Like, setlike] = useState(1) // add like
  // const [Dislike, setdislike] = useState(1) // add dislike

  const [likeactive, setlikeactive] = useState(false)
  const [dislikeactive, setdislikeactive] = useState(false)
  const [Comment, setComment] = useState()

  const btnlike = (id) => {
    if (likeactive) {
      setlikeactive(false)
      axios.put("http://localhost:3001/likef", {
        id: id,
      })
    } else {
      setlikeactive(true)
      axios.put("http://localhost:3001/like", {
        id: id,
      })
      if (dislikeactive) {
        setdislikeactive(false)
        axios.put("http://localhost:3001/dislikef", {
          id: id,
        })
        axios.put("http://localhost:3001/like", {
          id: id,
        })
      }
    }
  }
  const btndislike = (id) => {
    if (dislikeactive) {
      setdislikeactive(false)
      axios.put("http://localhost:3001/dislikef", {
        id: id,
      })
    } else {
      setdislikeactive(true)
      axios.put("http://localhost:3001/dislike", {
        id: id,
      })
      if (likeactive) {
        setlikeactive(false)
        axios.put("http://localhost:3001/likef", {
          id: id,
        })
        axios.put("http://localhost:3001/dislike", {
          id: id,
        })
      }
    }
  }
  const sendCMT = (id) => {
    if (Comment != null) {
      axios.post("http://localhost:3001/comment", {
        id: id,
        Description: Comment,
      })
    }
  }
  const onChange = (e) => {
    setComment(e.target.value)
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
  const [CMTList, setCMTList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/idea").then((response) => {
      setIdeaList(response.data)
    })
  }, [])
  useEffect(() => {
    axios.get("http://localhost:3001/commentlist").then((response) => {
      setCMTList(response.data)
    })
  })
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
                  <ButtonMore>
                    <MoreVertRoundedIcon />
                  </ButtonMore>
                </PostTop>

                <PostCenter>
                  <Title>{val.Title}</Title>
                  {/* title */}
                  <PText>{val.Description}</PText>
                  {/* Description */}
                </PostCenter>

                <PostBottom>
                  <form>
                    <PBL>
                      <IconLike>
                        <MainLike>
                          <Blike>
                            <ButtonLike
                              className={[
                                likeactive ? "active-like " : null,
                              ].join("")}
                              onClick={() => btnlike(val._id)}
                            >
                              <ThumbUpOffAltSharpIcon />
                            </ButtonLike>{" "}
                            <PLike>{val.Like}</PLike>
                            <ButtonLike
                              className={[
                                dislikeactive ? "active-dislike " : null,
                              ].join("")}
                              onClick={() => btndislike(val._id)}
                            >
                              <ThumbDownSharpIcon />
                            </ButtonLike>{" "}
                            <PLike>{val.Dislike}</PLike>
                          </Blike>
                        </MainLike>
                      </IconLike>
                    </PBL>
                  </form>
                  <PBR>
                    <br />
                    {/* vao file Idea/ShowPdf */}
                    <PDF to="/ViewPdf" target="_blank">
                      <LinkLabel>View PDF</LinkLabel>
                    </PDF>
                  </PBR>
                </PostBottom>
                <MainCom>
                  {" "}
                  <form>
                    <InputContainer>
                      <InputCom onChange={onChange} />
                      <ButtonCom type="submit" onClick={() => sendCMT(val._id)}>
                        send
                      </ButtonCom>
                    </InputContainer>
                  </form>
                  <SectionCom>
                    {CMTList.map((value, key) => {
                      if (value.idea_id === val._id) {
                        return (
                          <>
                            <Com>
                              <ImgCom src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/249333559_4524520644302729_8542170375727490088_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=raFemxQOAwgAX94MIVK&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8wXIHUPVIlw8XA5qCLgf9thDEj-lyxs9nugspaWHxJxA&oe=6250D2EA" />
                              <H3Com>Not Justin Bieber</H3Com>
                              <br />
                              <PCom>{value.Description}</PCom>
                            </Com>
                          </>
                        )
                      }
                    })}
                  </SectionCom>
                </MainCom>
              </Wrapper>
            </Main>
          </>
        )
      })}
    </>
  )
}

export default Post
