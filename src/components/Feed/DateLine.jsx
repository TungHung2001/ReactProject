import React from "react"
import styled from "styled-components"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import CommentIcon from "@mui/icons-material/Comment"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
const Main = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  margin: 30px 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`
const H1 = styled.h1`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 10px 0px;

  color: #1e88e5;
`
const H2 = styled.h2`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 10px 0px;
  color: #1e88e5;
`
const Label = styled.h4`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;
  color: #29b6f6;
`
const Time = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 5px 0px;
`
const P = styled.div`
  display: flex;
  flex-direction: row;
`
const DateLine = () => {
  return (
    <>
      <Main>
        <H1>
          <WatchLaterIcon />
          Dateline
        </H1>
        <H2>
          <LightbulbIcon />
          Idea DeadLine
        </H2>
        <P>
          <Label>EndDate</Label>
          <Time>4/4/2022</Time>
          <Label>EndTime</Label>
          <Time>10:20</Time>
        </P>
        <H2>
          <CommentIcon />
          Comment DeadLine
        </H2>
        <P>
          <Label>EndDate</Label>
          <Time>4/4/2022</Time>
          <Label>EndTime</Label>
          <Time>10:20</Time>
        </P>
      </Main>
    </>
  )
}

export default DateLine
