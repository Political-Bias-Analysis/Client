import { configureStore } from '@reduxjs/toolkit'
import DataSlice from './slices/DataSlice'
import SelectionSlice from './slices/SelectionSlice'

export const store = configureStore({
  reducer: {
    DataInfo: DataSlice,
    Selection: SelectionSlice
  },
})