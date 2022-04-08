import styled from "styled-components"
import { Link } from "react-router-dom"
export const Main = styled.div`
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
export const Wrapper = styled.div`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    width: 90%;
    margin-left: 30px;
  }
`
export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Ava = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
  }
`

export const PTL = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 380px) {
  }
`
export const PTR = styled.div``
export const PUserName = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
`
export const PDate = styled.span`
  font-size: 12px;
`
export const PText = styled.span`
  overflow: auto;
  display: flex;
  @media only screen and (max-width: 380px) {
    overflow: hidden;
  }
`
export const PostCenter = styled.div`
  margin: 20px 0;
`
export const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PBL = styled.div`
  display: flex;
  align-items: center;
`
export const PBR = styled.div``

export const IconLike = styled.div`
  margin-right: 5px;
  margin-left: 5px;
`
export const PDF = styled(Link)``
export const LinkLabel = styled.button`
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
export const Title = styled.span`
  overflow: auto;
  display: flex;
  font-size: 18px;
`
export const MainLike = styled.div`
  display: flex;
`
export const ButtonLike = styled.button`
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
export const PLike = styled.p`
  margin: 8px 5px 5px 0px; //tlbr
  font-size: 20px;
  display: flex;
`

export const Blike = styled.div`
  display: flex;
  flex-direction: row;
`
export const MainCom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
export const SectionCom = styled.section`
  padding: 5px 5px;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  height: 250px;
`
export const H3Com = styled.h3`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    font-size: 15px;
  }
`
export const Com = styled.div`
  display: flex;
  padding: 10px; //trbl
  @media only screen and (max-width: 380px) {
  }
`
export const PCom = styled.p`
  padding: 10px;
  @media only screen and (max-width: 380px) {
    font-size: 13px;
  }
`
export const ImgCom = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
    height: 15px;
    width: 15px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 5px;
`
export const InputCom = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  @media only screen and (max-width: 380px) {
    height: 20px;
  }
`
export const ButtonCom = styled.button`
  width: 130px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin: 10px;
`
export const ButtonMore = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  :hover {
    background-color: #1775ee;
  }
`
