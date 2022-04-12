import * as React from "react"
import { useState,useEffect } from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import TextField from "@mui/material/TextField"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import axios from "axios"
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
const H2 = styled.h2`
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #1775ee;
  font-size: 30px;
  padding: 10px;
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
  const [StartDeadline, setStartDeadline] = useState(new Date())
  const [EndDeadline, setEndDeadline] = useState(new Date())
  const [StartComment, setStartComment] = useState(new Date())
  const [EndComment, setEndComment] = useState(new Date())
  const { handleSubmit } = useForm()

  const onSubmit = (e) => {
    axios.post("http://localhost:3001/datetime", {
      StartDeadline: StartDeadline,
      EndDeadline: EndDeadline,
      StartComment: StartComment,
      EndComment: EndComment,
    })
    console.log(
      StartDeadline,
      " ",
      EndDeadline,
      " ",
      StartComment,
      " ",
      EndComment
    )
    e.preventDefault()
  }

  const changeStartDeadline = (datetime) => {
    setStartDeadline(datetime.target.value)
  }
  const changeEndDeadline = (datetime) => {
    setEndDeadline(datetime.target.value)
  }
  const changeStartComment = (datetime) => {
    setStartComment(datetime.target.value)
  }
  const changeEndComment = (datetime) => {
    setEndComment(datetime.target.value)
  }
  const [open, setOpen] = React.useState(false)

  const handleClick = (e) => {
    setOpen(true)
  }
  const [CatList, setCatList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/AllCategory").then((response) => {
      setCatList(response.data)
    })
  }, [])

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  return (
    <>
      <Main>
        <Form onSubmit={onSubmit}>
          <H1>Set Dealine idea and comment</H1>
          <H2>Deadline idea</H2>


          <TextField
            id="EndDeadline"
            name="EndDeadline"
            label="End Date"
            type="datetime-local"
            sx={{ width: "100%", backgroundColor: "white" }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={changeEndDeadline}
          />
          <H2>Deadline comment</H2>
          {/* <Label>Title</Label>
          <Input placeholder="title" type="text" /> */}

          <TextField
            id="EndComment"
            name="EndComment"
            label="End Date"
            type="datetime-local"
            sx={{ width: "100%", backgroundColor: "white" }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={changeEndComment}
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
