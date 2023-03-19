const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  searchQuery: '',
  searchResult: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    updateSearchResult(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const { updateSearchQuery, updateSearchResult } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
