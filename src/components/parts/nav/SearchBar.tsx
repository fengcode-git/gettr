import { styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import React from 'react'
import Paths from "@/libs/client/utils/Paths"

const Box = styled('div')({
  position: "relative",
  width: "600px"
})
const Form = styled('form')({
  width: "100%",
  border: "1px solid transparent",
  height: "42px",
  display: "flex",
  position: "relative",
  alignItems: "center",
  borderRadius: "42px",
  backgroundColor: "#eeeff3",
  padding: '0 40px 0 40px',
  "&:focus-within": {
    border: '1px solid #232255',
    backgroundColor: "white",
  }
})
const InputWrap = styled('input')({
  outlineStyle: 'none',
  borderStyle: 'none',
  flexGrow: '1',
  height: '35px',
  backgroundColor: "transparent",
  fontSize: '15px !important',
  "&:-internal-autofill-selected": {
    backgroundColor: "transparent",
  }
})
const SearchBar = () => {
  const [value, setValue] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.currentTarget.value)
  }
  const handleClear = () => {
    setValue('')
  }
  React.useEffect(() => {
    if (value) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [value])
  const clearIcon = (
    <Box onClick={handleClear} sx={{ cursor: "pointer", position: 'absolute', right: '10px', top: '8px', width: 'auto' }}>
      <HighlightOffIcon sx={{ fill: '#858384' }}></HighlightOffIcon>
    </Box>
  )
  return (
    <Box>
      <Form action={Paths.SEARCH_URL}>
        <SearchIcon sx={{ fontSize: 25, fill: '#6e7187', position: 'absolute', left: '10px', top: '8px' }}></SearchIcon>
        <InputWrap type="text" name="q" autoComplete="off" value={value} onChange={handleChange}></InputWrap>
        {open && clearIcon}
      </Form>
    </Box>
  )
}
export default SearchBar