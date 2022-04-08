import React, { useEffect, useState } from "react"
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded"
import axios from "axios"
import ThumbUpOffAltSharpIcon from "@mui/icons-material/ThumbUpOffAltSharp"
import ThumbDownSharpIcon from "@mui/icons-material/ThumbDownSharp"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import {
  Main,
  Wrapper,
  PostTop,
  Ava,
  PTL,
  PTR,
  PUserName,
  PDate,
  PText,
  PostCenter,
  PostBottom,
  PBL,
  PBR,
  IconLike,
  PDF,
  LinkLabel,
  Title,
  MainLike,
  ButtonLike,
  PLike,
  Blike,
  MainCom,
  SectionCom,
  H3Com,
  Com,
  PCom,
  ImgCom,
  InputContainer,
  InputCom,
  ButtonCom,
  ButtonMore,
} from "./PostStyle"
import "./Like.css"

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

  // dau 3 cham
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
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
                  <ButtonMore
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreVertRoundedIcon />
                  </ButtonMore>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <EditIcon />
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <DeleteIcon />
                      Delete
                    </MenuItem>
                  </Menu>
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
