import React from "react"

import Sidebar from "../../components/SideBar/Sidebar"
import { Routes, Route, Navigate } from "react-router-dom"

import HomeAd from "./HomeAd"
import Register from "../../components/Register/Register"
import Login from "../Login/Login"
import Category from "../../components/NewCategory/Category"
import CategoryTable from "../../components/NewCategory/CategoryTable"
import Addpdf from "../../components/Idea-PDF/Addpdf"
import ShowPdf from "../../components/Idea-PDF/ShowPdf"
import Manage from "./Manage"
import Test from "../Test"
import SetDate from "./Date/SetDate"
import DateLine from "./Date/DateLine"
//import ViewPdf from "../../components/Idea/ViewPdf"

const Admin = () => {
  return (
    <React.Fragment>
      <Sidebar />

      <Routes>
        <Route path="/" element={<HomeAd />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<HomeAd />} />
        <Route path="/Loginin" element={<Register />} />
        <Route path="/NewIdea" element={<Addpdf />} />
        <Route path="/NewCategory" element={<Category />} />
        <Route path="/Category" element={<CategoryTable />} />
        <Route path="/ViewPdf" element={<ShowPdf />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SetDate" element={<SetDate />} />
        <Route path="/Date" element={<DateLine />} />
        <Route path="/test" element={<Test />} />
        {/* <Navigate to={<ShowPdf />} /> */}
      </Routes>
    </React.Fragment>
  )
}

export default Admin
