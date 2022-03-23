import React from "react"
import "@toast-ui/editor/dist/toastui-editor.css"

import { Editor } from "@toast-ui/react-editor"
import styled from "styled-components"
const Main = styled.div`
  display: flex;
  width: 80%;
`

const Test = () => {
  return (
    <Main>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </Main>
  )
}

export default Test
