import React from "react"
import { Main, Left, Right, Title, Counter, Per, Icon } from "./WidgetStyle"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import ThumbDownAltSharpIcon from "@mui/icons-material/ThumbDownAltSharp"
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp"
import MapsHomeWorkSharpIcon from "@mui/icons-material/MapsHomeWorkSharp"
const Widget = ({ type }) => {
  let data
  switch (type) {
    case "ideas":
      data = {
        title: "Idea",
        counter: 1200000,
        per: 30,
        icon: (
          <LightbulbIcon
            style={{
              backgroundColor: "#cddc39",
              borderRadius: "5%",
            }}
          />
        ),
      }
      break
    case "like":
      data = {
        title: "Like",
        counter: 1000000,
        per: 30,
        icon: (
          <ThumbUpSharpIcon
            style={{
              backgroundColor: "#039be5",
              borderRadius: "5%",
            }}
          />
        ),
      }
      break
    case "dislike":
      data = {
        title: "DisLike",
        counter: 10000,
        per: 30,
        icon: (
          <ThumbDownAltSharpIcon
            style={{
              backgroundColor: "#c62828",
              borderRadius: "5%",
            }}
          />
        ),
      }
      break
    case "department":
      data = {
        title: "Department",
        counter: 2,
        per: 100,
        icon: (
          <MapsHomeWorkSharpIcon
            style={{
              backgroundColor: "#00bcd4",
              borderRadius: "5%",
            }}
          />
        ),
      }
      break
    default:
      break
  }
  return (
    <>
      <Main>
        <Left>
          <Title>{data.title}</Title>
          <Counter>{data.counter}</Counter>
        </Left>
        <Right>
          <Per>{data.per}%</Per>
          <Icon>{data.icon}</Icon>
        </Right>
      </Main>
    </>
  )
}

export default Widget
