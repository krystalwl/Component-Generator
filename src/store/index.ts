import { configureStore } from '@reduxjs/toolkit';
import action_bar_reducer, { ACTION_BAR_KEY } from './actionBar.slice';
import slice_stage, { SLICE_STAGE } from './stage.slice';
import CountReducer, { COUNT_KEY } from './count.slice';
import SelectReducer, { SELECT_DRAG_KEY } from './select-drag.slice';

export default configureStore({
  reducer: {
    [ACTION_BAR_KEY]: action_bar_reducer,
    [SLICE_STAGE]: slice_stage,
    [COUNT_KEY]: CountReducer,
    [SELECT_DRAG_KEY]: SelectReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
