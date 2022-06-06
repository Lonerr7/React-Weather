import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '5-day',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterSuccess(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterSuccess } = filtersSlice.actions;
export default filtersSlice.reducer;
