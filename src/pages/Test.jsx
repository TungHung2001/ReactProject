import React from "react"
import { useState } from "react"
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import styled from "styled-components"
import { isEmail } from "validator"
import Snackbar from "@mui/material/Snackbar"
import axios from "axios"
const FormLog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient();
  background-size: cover;
  background-position: center;
`
const Form = styled.form`
  background-color: #f0f2f5;
  padding: 0px 60px;
  border-radius: 10px;
`
const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`
const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 300px; //280px
`
const Sec = styled.div`
  background-color: white;
  border-radius: 10px;
`
const H1 = styled.h1`
  color: #1775ee;
  text-align: center;
`
const Label = styled.label``
const Test = () => {
  const [Username, setUsername] = useState()
  const [Yourname, setYourname] = useState()
  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [Role, setRole] = useState("")
  // const required = (value) => {
  //   if (!value) {
  //     return (
  //       <Alert variant="filled" severity="error" role="alert">
  //         This field is required!
  //       </Alert>
  //     )
  //   }
  // }
  // const validEmail = (value) => {
  //   if (!isEmail(value)) {
  //     return (
  //       <Alert variant="filled" severity="error">
  //         valid email!!!
  //       </Alert>
  //     )
  //   }
  // }
  // const vusername = (value) => {
  //   if (value.length < 3 || value.length > 20) {
  //     return (
  //       <Alert variant="filled" severity="error">
  //         The username must be between 3 and 20 characters.
  //       </Alert>
  //     )
  //   }
  // }
  // const vpassword = (value) => {
  //   if (value.length < 6 || value.length > 40) {
  //     return (
  //       <Alert variant="filled" severity="error">
  //         The password must be between 6 and 40 characters.
  //       </Alert>
  //     )
  //   }
  // }

  const handleChange = (event) => {
    setRole(event.target.value)
  }

  const Changeusername = (e) => {
    setUsername(e.target.value)
  }
  const Changeyourname = (e) => {
    setYourname(e.target.value)
  }

  const ChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const ChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    axios.post("http://localhost:3001/register", {
      Username: Username,
      Yourname: Yourname,
      Email: Email,
      Password: Password,
      Role: Role,
    })
  }
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  return (
    <>
      <FormLog>
        <Form onSubmit={handleSubmit}>
          <H1>Register</H1>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            className="form-control"
            name="Username"
            value={Username}
            // validations={[required]}
            onchange={Changeusername}
          />
          <Label htmlFor="Username">YourName</Label>
          <Input
            type="text"
            className="form-control"
            name="Yourname"
            value={Yourname}
            // validations={[required]}
            onChange={Changeyourname}
          />
          <Label htmlFor="Email">Email</Label>
          <Input
            type="text"
            className="form-control"
            name="Email"
            value={Email}
            // validations={[required]}
            onChange={ChangeEmail}
          />
          <Label htmlFor="Password<">Password</Label>
          <Input
            type="password"
            className="form-control"
            name="Password<"
            value={Password}
            // validations={[required]}
            onChange={ChangePassword}
          />
          <Label htmlFor="ConfirmPassword">Confirm Password</Label>
          <Input
            type="password"
            className="form-control"
            name="ConfirmPassword"
            // validations={[required]}
          />
          <Sec>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="">Role</InputLabel>
                <Select
                  labelId=""
                  id=""
                  value={Role}
                  label="Role"
                  onChange={handleChange}
                  // validations={[required]}
                >
                  <MenuItem value={0}>Manager</MenuItem>
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Staff</MenuItem>
                  <MenuItem value={3}>Staff</MenuItem>
                  {/* Chon role */}
                </Select>
              </FormControl>
            </Box>
          </Sec>
          <Button onClick={handleClick}>Submit</Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Register Success!!!
            </Alert>
          </Snackbar>
        </Form>
      </FormLog>
    </>
  )
}

export default Test
