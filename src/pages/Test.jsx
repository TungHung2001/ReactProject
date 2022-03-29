import React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import styled from "styled-components"
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
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      )
    }
  }
  const [Role, setRole] = React.useState("")

  const handleChange = (event) => {
    setRole(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
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
            name="username"
            validations={[required]}
          />
          <Label htmlFor="Username">YourName</Label>
          <Input
            type="text"
            className="form-control"
            name="Username"
            validations={[required]}
          />
          <Label htmlFor="Email">Email</Label>
          <Input
            type="text"
            className="form-control"
            name="Email"
            validations={[required]}
          />
          <Label htmlFor="Password<">Password</Label>
          <Input
            type="text"
            className="form-control"
            name="Password<"
            validations={[required]}
          />
          <Label htmlFor="ConfirmPassword">Confirm Password</Label>
          <Input
            type="text"
            className="form-control"
            name="ConfirmPassword"
            validations={[required]}
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
          <Button>Submit</Button>
        </Form>
      </FormLog>
    </>
  )
}

export default Test
