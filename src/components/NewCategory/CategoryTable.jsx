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
const ButtonMain = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function StickyHeadTable() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Link1 to="/NewCategory">
        <Button>New Category</Button>
      </Link1>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{}}>Category</TableCell>
              <TableCell style={{}}>Slug</TableCell>
              {/* add o day */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell>Phone</TableCell>
              <TableCell>Phone</TableCell>
              {/* add o day */}
              <ButtonMain>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  sx={{ color: "white", backgroundColor: "#f44336" }}
                >
                  Delete
                </Button>

                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{ color: "white", backgroundColor: "#304ffe" }}
                >
                  Edit
                </Button>
              </ButtonMain>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
