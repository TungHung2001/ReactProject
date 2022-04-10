import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Main, Form, Button, Label, Img, Input } from "./Loginstyle"

import AuthService from "../../services/auth.service"
import Alert from "@mui/material/Alert"
const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/Home")
          window.location.reload()
        },
        (error) => {
          console.log(error)
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Main>
        <Form onSubmit={handleLogin}>
          <Img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button>
            <span>Login</span>
          </Button>
        </Form>
      </Main>
    </>
  )
}

export default Login
