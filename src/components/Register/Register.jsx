import React, { useState } from "react"
import FormInput from "./FormInput"
import styled from "styled-components"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
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
const H1 = styled.h1`
  color: #1775ee;
  text-align: center;
`
const Pic = styled.div`
  background-color: white;
  border-radius: 10px;
`
const InputPic = styled.input`
  display: flex;

  width: 100%;
`
const Sec = styled.div`
  background-color: white;
  border-radius: 10px;
`

const LoginForm = () => {
  const [Role, setRole] = useState("")
  const [Username, setUsername] = useState("")
  const [Yourname, setYourname] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const addToList = (e) => {
    axios.post("http://localhost:3001/register", {
      Username: Username,
      Yourname: Yourname,
      Email: Email,
      Password: Password,
      Role: Role,
    })
    if (e) {
      alert("Submit form successfuly!!!")
    } else {
      alert("Submit failure!!!")
    }
  }

  const handleChange = (event) => {
    setRole(event.target.value)
  }
  const [values, setValues] = useState({
    Username: "",
    Yourname: "",
    Email: "",
    Password: "",
    ConfirmPassword: "", //add thuoc tinh o day
  })

  const inputs = [
    {
      id: 1,
      name: "Username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 2,
      name: "Yourname",
      type: "text",
      placeholder: "Your name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Yourname",

      required: true,
    },

    {
      id: 3,
      name: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "Password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 number and 1 letter is uppercase!",
      label: "Password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$",
      required: true,
    },
    {
      id: 5,
      name: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.Password,
      required: true,
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    if (e.target.name === "Username") setUsername(e.target.value)
    else if (e.target.name === "Yourname") setYourname(e.target.value)
    else if (e.target.name === "Email") setEmail(e.target.value)
    else if (e.target.name === "Password") setPassword(e.target.value)
  }

  return (
    <React.Fragment>
      <FormLog>
        <Form onSubmit={addToList}>
          <H1>Register</H1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

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
                  required
                >
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Staff">Staff</MenuItem>
                  <MenuItem value="QA">QA</MenuItem>
                  {/* Chon role */}
                </Select>
              </FormControl>
            </Box>
          </Sec>
          <Button>Submit</Button>
        </Form>
      </FormLog>
    </React.Fragment>
  )
}

export default LoginForm
