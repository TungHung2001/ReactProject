import React, { useState } from "react"
import styled from "styled-components"
import MenuSharpIcon from "@mui/icons-material/MenuSharp"
import CloseSharpIcon from "@mui/icons-material/CloseSharp"
// import { SidebarData } from "./components/sidebarData"

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
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
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <Nav>
        <Button onClick={showSidebar}>
          <MenuSharpIcon color="primary" fontSize="large" variant="contained" />
        </Button>
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
          <a href="..pages/LoginForm" to={"./LoginForm"}>
            Regiser
          </a>
          {/* <NavLink to={"./LoginForm"}>LoginForm</NavLink> */}
        </SideBarWarp>
      </SidebarNav>
    </>
  )
}

export default Sidebar
