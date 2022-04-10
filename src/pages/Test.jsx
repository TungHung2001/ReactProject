import React from "react"
import { useState } from "react"
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import styled from "styled-components"
import { useForm } from "react-hook-form"
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

  const handleChange = (e) => {
    setRole(e.target.value)
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

  const handleClick = (e) => {
    // axios.post("http://localhost:3001/register", {
    //   Username: Username,
    //   Yourname: Yourname,
    //   Email: Email,
    //   Password: Password,
    //   Role: Role,
    // })
    setOpen(true)
  }

  const onSubmit = () => {
    axios.post("http://localhost:3001/register", {
      Username: Username,
      Yourname: Yourname,
      Email: Email,
      Password: Password,
      Role: Role,
    })
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  // const onSubmit = (data) => console.log(data)
  const [open, setOpen] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  const registerOptions = {
    name: { required: "Name is required" },
    email: {
      required: (
        <Alert variant="filled" severity="error">
          "Email is required"
        </Alert>
      ),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: (
          <Alert variant="filled" severity="error">
            invalid email address - @gmail.com
          </Alert>
        ),
      },
    },
    password: {
      required: (
        <Alert variant="filled" severity="error">
          "Password is required"
        </Alert>
      ),
      minLength: {
        value: 8,
        message: (
          <Alert variant="filled" severity="error">
            "Password must have at least 8 characters"
          </Alert>
        ),
      },
    },
  }
  return (
    <>
      <FormLog>
        <Form onSubmit={onSubmit}>
          <H1>Register</H1>
          <Label htmlFor="Username">Username</Label>
          <Input
            type="text"
            name="Username"
            // value={Username}
            onchange={Changeusername}
            // {...register("Username", { required: true })}
          />
          {/* {errors.Username && (
            <Alert variant="filled" severity="error">
              name is required.
            </Alert>
          )} */}
          <Label htmlFor="Yourname">YourName</Label>
          <Input
            type="text"
            name="Yourname"
            // value={Yourname}
            onChange={Changeyourname}
            // {...register("YourName", { required: true })}
          />
          {/* {errors.YourName && (
            <Alert variant="filled" severity="error">
              yourName is required.
            </Alert>
          )} */}
          <Label htmlFor="Email">Email</Label>
          <Input
            type="text"
            name="Email"
            // value={Email}
            onChange={ChangeEmail}
            // {...register("Email", registerOptions.email)}
          />
          {/* {errors?.Email && errors.email.message} */}
          <Label htmlFor="Password<">Password</Label>
          <Input
            type="password"
            name="Password"
            // value={Password}
            onChange={ChangePassword}
            // {...register("Password", registerOptions.password)}
          />
          {/* {errors?.Password && errors.password.message} */}
          {/* <Label htmlFor="ConfirmPassword">Confirm Password</Label>
          <Input type="password" name="ConfirmPassword" /> */}
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
                >
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Staff">Staff</MenuItem>
                  <MenuItem value="QA">QA</MenuItem>
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
