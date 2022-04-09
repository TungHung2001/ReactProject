import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Main, Form, Button, Label, Img, Input } from "./Loginstyle"
import { useForm } from "react-hook-form"
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const registerOptions = {
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
      <Main>
        <Form onSubmit={handleSubmit(handleLogin)}>
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
            {...register("email", registerOptions.email)}
          />

          {errors?.email && errors.email.message}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            {...register("password", registerOptions.password)}
          />

          {errors?.password && errors.password.message}

          <Button>
            <span>Login</span>
          </Button>
        </Form>
      </Main>
    </>
  )
}

export default Login
