import React from "react"
import styled from "styled-components"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import CommentIcon from "@mui/icons-material/Comment"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import SortIcon from "@mui/icons-material/Sort"

import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"
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
  color: #ff3d00;
  flex: 10;
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
  align-items: center;
  justify-content: center;
`
const Icon = styled.div`
  display: flex;

  padding: 10px;
`
const Icon1 = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
`
const ButtonIcon = styled.button`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  align-items: center;
  background-color: #f4f4f4;
  :hover {
    background-color: #29b6f6;
  }
`

const DateLine = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Main>
        <Icon>
          <ButtonIcon
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <SortIcon />
          </ButtonIcon>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>latest deadline</MenuItem>
            <MenuItem onClick={handleClose}>oldest deadline</MenuItem>
            <MenuItem onClick={handleClose}>Time</MenuItem>
          </Menu>
          <H1>
            <WatchLaterIcon />
            Dateline
          </H1>
          <Icon1 />
        </Icon>

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
