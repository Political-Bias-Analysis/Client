import React from 'react';
import { useDispatch } from 'react-redux';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import './DropDown.css'

import {
  setShowDisplayYear,
  setOfficeValue,
  setAllYearsOffice,
} from '../../store/slices/SelectionSlice'

const DropDown = ({
  items, 
  dropdownID,
  getDisplayValue 
}) => {
  
  const dispatch = useDispatch();
  const setOnChange = (e) => {
    if (dropdownID === 'Election') {
      dispatch(setOfficeValue(e.target.value));
    } else if (dropdownID === 'Year') {
      dispatch(setShowDisplayYear(e.target.value))
    } else if (dropdownID === 'Elections') {
      dispatch(setAllYearsOffice(e.target.value));
    }
  };

  return (
    <div className='dropdown'>
      <FormControl variant="outlined" fullwidth>
        <InputLabel id={dropdownID}>{dropdownID}</InputLabel>
        <Select
          labelId={dropdownID}
          id={dropdownID}
          value={getDisplayValue()}
          label={dropdownID}
          onChange={(e) => setOnChange(e)}
        >
          {items.map((value) => <MenuItem value={value}>{value}</MenuItem>)}
        </Select>
  </FormControl>
    </div>
  )
}

export default DropDown