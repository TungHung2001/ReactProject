import * as React from "react"

import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import TextField from "@mui/material/TextField"
import styled from "styled-components"
import { useForm } from "react-hook-form"
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  height: 80vh;
  background-size: cover;
`
const Label = styled.label`
  font-size: 15px;
  color: gray;
`
const Input = styled.input``
const H1 = styled.h1`
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #1775ee;
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #1775ee;
  margin-top: 15px;
  margin-bottom: 30px;
`
const Form = styled.form`
  border-radius: 10px;
  background-color: #f0f2f5;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
`
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
const SetDate = () => {
  const { handleSubmit } = useForm()

  const onSubmit = (e) => {
    console.log(e)
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
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H1>Set date</H1>
          <Label>Title</Label>
          <Input placeholder="title" type="text" />

          <TextField
            id="startdate"
            label="Start Date"
            type="datetime-local"
            defaultValue="2022-03-10T10:30"
            sx={{ width: 250, backgroundColor: "white" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            id="enddate"
            label="End Date"
            type="datetime-local"
            defaultValue="2022-03-10T12:00"
            sx={{ width: 250, backgroundColor: "white" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="outlined" onClick={handleClick}>
            Submit
          </Button>
        </Form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Submit success!!!
          </Alert>
        </Snackbar>
      </Main>
    </>
  )
}

export default SetDate
