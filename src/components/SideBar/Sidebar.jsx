import React, { useState } from "react"
import styled from "styled-components"
import MenuSharpIcon from "@mui/icons-material/MenuSharp"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
import { Link } from "react-router-dom"
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp"
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SidebarNav = styled.div`
  background: #15171c;
  width: 250px;
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
  height: 80 px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const CloseIcon = styled.a`
  margin-top: 2rem;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80 px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
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
const SidebarLabel = styled.span`
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
const Login = styled.span`
  margin: 20px 0px 20px 0px; //trbl
  color: white;
  text-decoration: none;
`
const LoginLink = styled(Link)``
const UserIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  margin-left: 10px;
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
        <NavLogo>CMS</NavLogo>
        <NavRight>
          <LoginLink to="/Login">
            <Login>
              <AccountCircleSharpIcon fontSize="large" variant="contained" />
            </Login>
          </LoginLink>
          <UserIcon>Login</UserIcon>
        </NavRight>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SideBarWarp>
          <CloseIcon onClick={showSidebar}>
            <CloseSharpIcon
              color="primary"
              fontSize="large"
              variant="contained"
            />
          </CloseIcon>
          <SidebarLink to="/Home">
            <SidebarLabel>Home</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/Loginin">
            <SidebarLabel>Register</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/NewIdea">
            <SidebarLabel>NewIdea</SidebarLabel>
          </SidebarLink>
          <SidebarLink to="/NewCategory">
            <SidebarLabel>NewCategory</SidebarLabel>
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
