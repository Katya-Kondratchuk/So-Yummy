const { createSlice } = require('@reduxjs/toolkit');

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    updateSearchQuery(_, action) {
      return action.payload;
    },
  },
});

export const { updateSearchQuery } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
