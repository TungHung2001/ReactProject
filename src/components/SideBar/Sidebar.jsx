import React, { useState } from "react"
import styled from "styled-components"
import MenuSharpIcon from "@mui/icons-material/MenuSharp"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
import { Link } from "react-router-dom"
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp"
import HomeIcon from "@mui/icons-material/Home"
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import CategoryIcon from "@mui/icons-material/Category"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"

const Nav = styled.div`
  background: #4267b2;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SidebarNav = styled.div`
  background: #4267b2;
  width: 170px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`

const SideBarWarp = styled.div`
  width: 100%;
`

const Button = styled.button`
  margin-left: 2rem;
  font-size: 2rem;
  height: 33px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const CloseIcon = styled.a`
  margin-top: 2rem;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`
const SidebarLabel = styled.label`
  margin-left: 16px;
`
const NavLeft = styled.div`
  flex: 1;
  display: flex;
`
const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: right;
  justify-content: flex-end;
  color: white;
  margin-right: 30px;
`
const NavLogo = styled.div`
  flex: 4;
  display: flex;
  align-items: right;
  justify-content: space-around;
  color: white;
`
const LoginIcon = styled.span`
  color: white; //trbl
  text-decoration: none;
`
const LoginLink = styled(Link)`
  display: flex;
  flex-direction: column;
`
const LoginF = styled.div`
  display: flex;
  margin: 10px 0px 10px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserName = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-size: 20px;
  margin-top: 10px;
`
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <React.Fragment>
      <Nav>
        <NavLeft>
          <Button onClick={showSidebar}>
            <MenuSharpIcon color="primary" fontSize="large" />
          </Button>
        </NavLeft>
        <NavLogo></NavLogo>
        <NavRight></NavRight>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SideBarWarp>
          <CloseIcon onClick={showSidebar}>
            <CloseSharpIcon fontSize="large" variant="contained" />
          </CloseIcon>

          <LoginF>
            <LoginLink to="/Login">
              <LoginIcon>
                <AccountCircleSharpIcon fontSize="large" variant="contained" />
              </LoginIcon>
            </LoginLink>
            <UserName>Name</UserName>
          </LoginF>

          <SidebarLink to="/Home">
            <HomeIcon />
            <SidebarLabel>Home</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/Loginin">
            <ModeEditOutlineIcon />
            <SidebarLabel>Register</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/NewIdea">
            <LightbulbIcon />
            <SidebarLabel>NewIdea</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/Category">
            <CategoryIcon />
            <SidebarLabel>Category</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/Manage">
            <ManageAccountsIcon />
            <SidebarLabel>Manage</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/Date">
            <AccessTimeFilledIcon />
            <SidebarLabel>Date</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/DashBoard">
            <DashboardCustomizeIcon />
            <SidebarLabel>DashBoard</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/test">
            <SidebarLabel>Test</SidebarLabel>
          </SidebarLink>
        </SideBarWarp>
      </SidebarNav>
    </React.Fragment>
  )
}

export default Sidebar
