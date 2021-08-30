import { createSlice } from '@reduxjs/toolkit';

export const COUNT_KEY = 'count';
const { reducer: CountReducer, actions } = createSlice({
  name: COUNT_KEY,
  initialState: 0,
  reducers: {
    add: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { add } = actions;
export default CountReducer;
