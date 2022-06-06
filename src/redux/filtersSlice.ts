import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filter: '5-day',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterSuccess(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterSuccess } = filtersSlice.actions;
export default filtersSlice.reducer;
