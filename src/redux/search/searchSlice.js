const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  searchQuery: '',
  searchType: 'title',
  searchResult: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    updateSearchType(state, action) {
      state.searchType = action.payload;
    },
    updateSearchResult(state, action) {
      state.searchResult = action.payload;
    },
    clearSearch() {
      return initialState;
    },
  },
});

export const {
  updateSearchQuery,
  updateSearchResult,
  updateSearchType,
  clearSearch,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
