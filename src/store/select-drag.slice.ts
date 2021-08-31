import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const SELECT_DRAG_KEY = 'select-drag';

const { reducer: SelectReducer, actions } = createSlice({
  name: SELECT_DRAG_KEY,
  initialState: {},
  reducers: {
    selectDrag: (state, action) => {
      return action.payload;
    },
    modifyDrag: (state, action: { payload: { keys: string; value: any } }) => {
      // const {
      //   payload: { keys, value },
      // } = action;
      Object.assign(state, action.payload);
    },
  },
});

export const { selectDrag, modifyDrag } = actions;

export default SelectReducer;
