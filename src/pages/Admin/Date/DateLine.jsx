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
const H2 = styled.h2`
  color: #1e88e5;
  align-items: center;
  justify-content: center;
  display: flex;
`
export default function StickyHeadTable() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <H2>Deadline idea</H2>
      <Link1 to="/SetDate">
        <Button>SetDate</Button>
      </Link1>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{}}>Start Date</TableCell>
              <TableCell style={{}}>Start Time</TableCell>
              <TableCell style={{}}>End Date</TableCell>
              <TableCell style={{}}>End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>4/4/2022</TableCell>
              <TableCell>10:12</TableCell>
              <TableCell>5/6/2022</TableCell>
              <TableCell>10:12</TableCell>

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
        <H2>Deadline comment</H2>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{}}>Start Date</TableCell>
              <TableCell style={{}}>Start Time</TableCell>
              <TableCell style={{}}>End Date</TableCell>
              <TableCell style={{}}>End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>4/4/2022</TableCell>
              <TableCell>10:12</TableCell>
              <TableCell>5/6/2022</TableCell>
              <TableCell>10:12</TableCell>

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
