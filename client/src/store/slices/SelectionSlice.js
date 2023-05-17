import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	displayYear: 2020,
	office: "President",
	allYearsOffice: "President",
}

export const SelectionSlice = createSlice({
	name: "Selection",
	initialState,
	reducers: {
		setShowDisplayYear: (state, action) => {
			state.displayYear = action.payload;
		},
		setOfficeValue: (state, action) => {
			state.office = action.payload;
		},
		setAllYearsOffice: (state, action) => {
			state.allYearsOffice = action.payload;
		}
	}
})

export const { 
  setCurrentTab,
  setShowDisplayYear,
  setOfficeValue,
  setAllYearsOffice,
} = SelectionSlice.actions

export default SelectionSlice.reducer