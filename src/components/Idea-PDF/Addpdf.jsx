import { useState } from "react"
import { useForm } from "react-hook-form"
import { Worker } from "@react-pdf-viewer/core"
import { Viewer } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import styled from "styled-components"
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
  const { handleSubmit } = useForm()

  const onSubmit = (e) => {
    console.log(e)
  }
  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  // pdf file onChange state
  const [pdfFile, setPdfFile] = useState(null)

  // pdf file error state
  const [pdfError, setPdfError] = useState("")

  // handle file onChange event
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

  return (
    <>
      <Main>
        {/* Upload PDF */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H2>New Idea</H2>
          <Label>Title</Label>
          <Input placeholder="Title" type="text" />
          <Label>Description</Label>
          <Input placeholder="Description" type="text" />

          <Input type="file" className="form-control" onChange={handleFile} />
          {/* add file pdf*/}

          {/* we will display error message in case user select some file
        other than pdf */}
          {pdfError && <span className="text-danger">{pdfError}</span>}
          <Button type="submit">Submit</Button>
        </Form>

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
    </>
  )
}

export default Addpdf
