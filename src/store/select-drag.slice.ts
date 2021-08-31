import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const SELECT_DRAG_KEY = 'select-drag';

const { reducer: SelectReducer, actions } = createSlice({
  name: SELECT_DRAG_KEY,
  initialState: {},
  reducers: {
    selectDrag: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectDrag } = actions;

export default SelectReducer;
