import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

export default function BasicSelect() {
  const [Role, setRole] = React.useState("")

  const handleChange = (event) => {
    setRole(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="">Role</InputLabel>
        <Select
          labelId=""
          id=""
          value={Role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={0}>Manager</MenuItem>
          <MenuItem value={1}>Admin</MenuItem>
          <MenuItem value={2}>Staff</MenuItem>
          <MenuItem value={3}>Staff</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
