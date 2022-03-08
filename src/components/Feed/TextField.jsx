import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

const textField = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Send</Button>
      </Stack>
    </>
  )
}

export default textField
