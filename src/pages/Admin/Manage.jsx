import * as React from "react"
import { useState } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom"
import styled from "styled-components"
const Link1 = styled(Link)`
  padding: 20px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 15px;
  align-items: center;
  justify-content: center;
`

export default function StickyHeadTable() {
  // const [Id, SetId] = useState()
  // const [User, SetUser] = useState()
  // const [Role, SetRole] = useState()
  // const [Department, SetDepartment] = useState()
  // const [Username, SetUsername] = useState()
  // const [Password, SetPassword] = useState()
  // const [Name, SetName] = useState()
  // const [Email, SetEmail] = useState()
  // const ChangeId = (e) => {
  //   setId(e.target.value)
  // }
  // const ChangeUser = (e) => {
  //   setUser(e.target.value)
  // }
  // const ChangeRole = (e) => {
  //   setRole(e.target.value)
  // }
  // const ChangeDepartment = (e) => {
  //   setDepartment(e.target.value)
  // }
  // const ChangeUsername = (e) => {
  //   setUsername(e.target.value)
  // }
  // const ChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const ChangeName = (e) => {
  //   setName(e.target.value)
  // }
  // const ChangeEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Link1 to="/Register">
        <Button>Register</Button>
      </Link1>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{}}
                // onchange={ChangeId}
              >
                ID
              </TableCell>
              <TableCell
                style={{}}
                // onChange={ChangeUser}
              >
                User
              </TableCell>
              <TableCell
                style={{}}
                // onChange={ChangeRole}
              >
                Role
              </TableCell>
              <TableCell
                style={{}}
                // onChange={ChangeDepartment}
              >
                Department
              </TableCell>
              <TableCell
                style={{}}
                // onChange={ChangeUsername}
              >
                Username
              </TableCell>
              <TableCell
                style={{}}
                // onChange={ChangePassword}
              >
                Password
              </TableCell>
              <TableCell
                style={{}}
                // onChange={ChangeName}
              >
                Name
              </TableCell>
              <TableCell
                style={{}}
                //  onChange={ChangeEmail}
              >
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>12</TableCell>
              <TableCell>Lan</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>HN</TableCell>
              <TableCell>admin</TableCell>
              <TableCell>123456</TableCell>
              <TableCell>Lan</TableCell>
              <TableCell>Lan@gmail.com</TableCell>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                sx={{ color: "white", backgroundColor: "#f44336" }}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                sx={{ color: "white", backgroundColor: "#304ffe" }}
              >
                Edit
              </Button>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
