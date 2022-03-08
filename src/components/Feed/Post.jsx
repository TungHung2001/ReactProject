import React, { useState } from "react"
import styled from "styled-components"
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp"
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp"
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded"
import { Users } from "../../TestPeopleData"
import Comment from "./Comment"
import TextField from "./TextField"

const Main = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`
const Wrapper = styled.div`
  padding: 10px;
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
`
const PostImg = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`
const PTL = styled.div`
  display: flex;
  align-items: center;
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
const PText = styled.span``
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
const LikeCounter = styled.span`
  font-size: 15px;
`
const Comment1 = styled.span`
  cursor: pointer;
  border-bottom: 1px dashed gray;
  font-size: 15px;
`

const IconLike = styled.div`
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
`
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like)
  const [isLike, setisLike] = useState(false)

  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1)
    setisLike(!isLike)
  }
  const [dislike, setDisLike] = useState(post.dislike)
  const [isdisLike, setisDisLike] = useState(false)

  const DislikeHandler = () => {
    setDisLike(isdisLike ? dislike - 1 : dislike + 1)
    setisDisLike(!isdisLike)
  }
  return (
    <Main>
      <Wrapper>
        <PostTop>
          <PTL>
            <Ava
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            ></Ava>
            <PUserName>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </PUserName>
            <PDate>{post.date}</PDate>
          </PTL>
          <PTR></PTR>
          <MoreVertRoundedIcon />
        </PostTop>
        <PostCenter>
          <PText>{post?.desc}</PText>
          <PostImg src={post.photo}></PostImg>
        </PostCenter>
        <PostBottom>
          <PBL>
            <IconLike>
              <ThumbUpSharpIcon onClick={likeHandler} fontSize="large" />
            </IconLike>
            <LikeCounter onClick={likeHandler}>{like} like</LikeCounter>
            <IconLike>
              <ThumbDownAltSharpIcon
                fontSize="large"
                onClick={DislikeHandler}
              ></ThumbDownAltSharpIcon>
            </IconLike>
            <LikeCounter onClick={DislikeHandler}>
              {dislike} Dislike
            </LikeCounter>
            {/* <LikeIcon
              src="Pic/like.png"
              onClick={likeHandler}
              alt=""
            ></LikeIcon> */}
          </PBL>
          <PBR>
            <Comment1>{post.comment} comments</Comment1>
          </PBR>
        </PostBottom>
        <TextField></TextField>
        <Comment></Comment>
      </Wrapper>
    </Main>
  )
}

export default Post
