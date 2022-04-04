import { useState,useEffect } from "react"
import * as React from "react"
import Checkbox from "@mui/material/Checkbox"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import { useForm } from "react-hook-form"
import { Worker } from "@react-pdf-viewer/core"
import { Viewer } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import styled from "styled-components"
import axios from "axios"

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  height: 70vh;
  background-size: cover;
`
const Form = styled.form`
  border-radius: 10px;
  background-color: #f0f2f5;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
`
const Input = styled.input``
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
const Pdf = styled.div`
  width: 100%;
  height: 700px;
  background-color: #e4e4e4;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const H2 = styled.h1`
  text-align: center;
  color: #1775ee;
`
const Label = styled.label`
  font-size: 15px;
  color: gray;
`
const Addpdf = () => {

  const [Title, setTitle] = useState()
  const [Description, setDescription] = useState()
  const [IdeaList, setIdeaList] = useState([]);
  const  handleSubmit  = (e) => {
    axios.post("http://localhost:3001/insert", {
      Title: Title,
      Description: Description
    });  
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/idea").then((response)=>{
      setIdeaList(response.data);
    });
  },[])

  const changetile = (e)=>{
    setTitle(e.target.value);
  }

  const changedes = (e)=>{
    setDescription(e.target.value);
  }
  const [isDisabled, setIsDisabled] = useState(true)
  const [checked, setChecked] = useState(false)

  const canBeSubmitted = () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false)
  }

  const onCheckboxClick = () => {
    setChecked(!checked)
    return canBeSubmitted()
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } }
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const [pdfFile, setPdfFile] = useState(null)
  const [pdfError, setPdfError] = useState("")

  const allowedFiles = ["application/pdf"]
  const handleFile = (e) => {
    let selectedFile = e.target.files[0]
    // console.log(selectedFile.type);
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onloadend = (e) => {
          setPdfError("")
          setPdfFile(e.target.result)
        }
      } else {
        setPdfError("Not a valid pdf: Please select only PDF")
        setPdfFile("")
      }
    } else {
      console.log("please select a PDF")
    }
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
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  return (
    <>
      <Main>
        {/* Upload PDF */}
        <Form onSubmit={handleSubmit}>
          <H2>New Idea</H2>
          <Label>Title</Label>
          <Input placeholder="Title" type="text" onChange={changetile} />
          <Label>Description</Label>
          <Input placeholder="Description" type="text" onChange={changedes}/>

          <Input type="file" className="form-control" onChange={handleFile} />

          {pdfError && <span className="text-danger">{pdfError}</span>}
          <div>
            <Checkbox
              {...label}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              onClick={onCheckboxClick}
            />
            <span>Agree to Term and Condition</span>
          </div>
          <Button
            type="submit"
            variant="outlined"
            onClick={handleClick}
            disabled={isDisabled}
          >
            Submit
          </Button>
        </Form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Submit success
          </Alert>
        </Snackbar>
        {/* View PDF */}
      </Main>
      <H2>View PDF</H2>
      <Pdf>
        {/* render this if we have a pdf file */}
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
            ></Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile && <>No file is selected yet</>}
      </Pdf>
        {IdeaList.map((val,key)=>{
          return(
            <>
            <h1>{val.Title}</h1>
            <h1>{val.Description}</h1>
            </>
          )
        })}
    </>
  )
}

export default Addpdf
