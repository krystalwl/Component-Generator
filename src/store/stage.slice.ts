import { createSlice } from '@reduxjs/toolkit';
import { InputConfig, SelectConfig } from '@/pages/home/menu_config/config';

export const SLICE_STAGE = 'sliceStage';

const { reducer: slice_stage, actions } = createSlice({
  name: SLICE_STAGE,
  initialState: { InputConfig, SelectConfig },

  reducers: {
    stageInput: (state, action: { type: string; payload: any }) => {
      return action.payload;
      //   return {
      //     ...state[type],
      //     title: action.payload,
      //   };
    },
  },
});

export const { stageInput } = actions;

export default slice_stage;
