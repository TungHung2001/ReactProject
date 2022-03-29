import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
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
const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "user", label: "User", minWidth: 50 },
  { id: "role", label: "Role", minWidth: 50 },
  { id: "department", label: "Department", minWidth: 50 },
  { id: "username", label: "Username", minWidth: 50 },
  { id: "password", label: "Password", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 50 },
  { id: "email", label: "Email", minWidth: 50 },
]

function createData(
  id,
  user,
  role,
  department,
  username,
  password,
  name,
  email
) {
  return {
    id,
    user,
    role,
    department,
    username,
    password,
    name,
    email,
  }
}
const rows = [
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
  createData(
    1,
    "Lan",
    "Admin",
    "Hanoi",
    "admin",
    "123456",
    "Lan",
    "Lan@gmail.com"
  ),
]
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Link1 to="/Register">
        <Button>Register</Button>
      </Link1>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
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
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
