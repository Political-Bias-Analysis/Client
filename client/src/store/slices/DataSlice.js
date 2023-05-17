import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  graphGeoData: [],
  totalVote: [],
  voteRegisData: [],
  articleCount: [],
  allArticleCount: [],
  articleCountBySource: [],
  totalArticleCount: 0
}


export const DataSlice = createSlice({
  name: 'DataInfo',
  initialState,
  reducers: {
    setgraphGeoData: (state, action) =>{
      state.graphGeoData = action.payload;
    },
    setTotalVote: (state, action) => {
      state.totalVote = action.payload;
    },
    setVoteRegisData: (state, action) => {
      state.voteRegisData = action.payload;
    },
    setArticleCount: (state, action) => {
      state.articleCount = action.payload;
    },
    setAllArticleCount: (state, action) => {
      state.allArticleCount = action.payload;
    },
    setAllArticleCountBySource: (state, action) => {
      state.articleCountBySource = action.payload;
    },
    setTotalArticleCount: (state, action) => {
      state.totalArticleCount = action.payload;
    }
  },
})

export const { 
  setgraphGeoData,
  setTotalVote,
  setVoteRegisData,
  setArticleCount,
  setAllArticleCount,
  setAllArticleCountBySource,
  setTotalArticleCount
} = DataSlice.actions

export default DataSlice.reducer