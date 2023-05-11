import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import './DropDown.css'

const DropDown = ({
  items, 
  dropdownID,
  setDisplayValue,
  getDisplayValue }
  ) => {
  return (
    <div className='dropdown'>
      <FormControl variant="outlined" fullwidth>
        <InputLabel id={dropdownID}>{dropdownID}</InputLabel>
        <Select
          labelId={dropdownID}
          id={dropdownID}
          value={getDisplayValue()}
          label={dropdownID}
          onChange={(e) => setDisplayValue(e.target.value)}
        >
          {items.map((value) => <MenuItem value={value}>{value}</MenuItem>)}
        </Select>
  </FormControl>
    </div>
  )
}

export default DropDown