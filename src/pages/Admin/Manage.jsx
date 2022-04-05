import * as React from "react"
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
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Link1 to="/Register">
        <Button>Register</Button>
      </Link1>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{}}>ID</TableCell>
              <TableCell style={{}}>User</TableCell>
              <TableCell style={{}}>Role</TableCell>
              <TableCell style={{}}>Department</TableCell>
              <TableCell style={{}}>Username</TableCell>
              <TableCell style={{}}>Password</TableCell>
              <TableCell style={{}}>Name</TableCell>
              <TableCell style={{}}>Email</TableCell>
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
