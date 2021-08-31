import { createSlice } from '@reduxjs/toolkit';

export const ACTION_BAR_KEY = 'actionBar';
const { reducer: action_bar_reducer, actions } = createSlice({
  name: ACTION_BAR_KEY,
  initialState: [],
  reducers: {
    deleteAll: () => {
      return [];
    },
    saveList: (state, action: { type: string; payload: [] }) => {
      return action.payload;
    },
    deleteOne: (state) => {
      state.pop();
    },
    copyOne: (state, action: { type: string; payload: {} }) => {
      state.push(action.payload);
    },
  },
});

export const { deleteAll, saveList, deleteOne, copyOne } = actions;
export default action_bar_reducer;
