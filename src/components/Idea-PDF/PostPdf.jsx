import React from "react"
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

const Main = styled.div`
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  overflow-y: auto;
  margin-bottom: 10px;
`
const ShowPdf = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <>
      <Main>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
          <Viewer
            fileUrl="Pdf/test.pdf" //add pdf o day!!
            plugins={[defaultLayoutPluginInstance]}
            initialPage={2}
          ></Viewer>
        </Worker>
      </Main>
    </>
  )
}

export default ShowPdf
