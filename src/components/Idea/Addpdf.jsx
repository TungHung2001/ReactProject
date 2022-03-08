import { useState } from "react"
// Import Worker
import { Worker } from "@react-pdf-viewer/core"
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core"
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css"
// default layout plugin
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import styled from "styled-components"
const Main = styled.div``
const Form = styled.form`
  border-radius: 10px;
  background-color: #404079;
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
  background-color: #f10a0a;
  margin-top: 15px;
  margin-bottom: 30px;
`
const Pdf = styled.div`
  width: 100%;
  height: 800px;
  background-color: #e4e4e4;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Addpdf = () => {
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
    <Main>
      {/* Upload PDF */}
      <Form>
        <label>
          <h5>Upload PDF</h5>
        </label>
        <br></br>

        <Input type="file" className="form-control" onChange={handleFile} />

        {/* we will display error message in case user select some file
        other than pdf */}
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </Form>

      {/* View PDF */}
      <h5>View PDF</h5>
      <div className="viewer">
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
      </div>
    </Main>
  )
}

export default Addpdf
