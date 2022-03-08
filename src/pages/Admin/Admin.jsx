import React from "react"

import Sidebar from "../../components/SideBar/Sidebar"
import { Routes, Route } from "react-router-dom"

import HomeAd from "./HomeAd"
import Register from "../../components/Register/Register"
import Login from "../Login/Login"
import NewIdea from "../../components/Idea/NewIdea"
import Category from "../../components/NewCategory/Category"
import Addpdf from "../../components/Idea/Addpdf"
//import ViewPdf from "../../components/Idea/ViewPdf"

const Admin = () => {
  return (
    <React.Fragment>
      <Sidebar />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<HomeAd />} />
        <Route path="/Loginin" element={<Register />} />
        <Route path="/NewIdea" element={<NewIdea />} />
        <Route path="/NewCategory" element={<Category />} />
        <Route path="/test" element={<Addpdf />} />
      </Routes>
    </React.Fragment>
  )
}

export default Admin
