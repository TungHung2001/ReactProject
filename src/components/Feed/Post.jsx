import React from "react"
import styled from "styled-components"

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded"
import { Users } from "../../TestPeopleData"

import { Link } from "react-router-dom"

import Like from "../Like/Like"
import Comment12 from "./Comment1"
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
const PostImg = styled.div`
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
const PText = styled.span`
  overflow: auto;
  display: flex;
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
  background-color: #0427ee;
  border: none;
`

const Post = ({ post }) => {
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
          <PostImg>{/* <PostPdf /> */}</PostImg>

          {/* {post.photo} */}
        </PostCenter>
        <PostBottom>
          <PBL>
            <IconLike>
              <Like />
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
  )
}

export default Post
