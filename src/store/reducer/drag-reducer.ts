import { INPUT, SELECT } from '../const/drag-const';
import { InputConfig, SelectConfig } from '@/pages/home/menu_config/config';

const initialState = {
  input: InputConfig,
  select: SelectConfig,
};

export default (
  state = initialState,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state.input,
        title: action.payload,
      };

    case SELECT:
      return {
        ...state.select,
        title: action.payload,
      };
    default:
      return state;
  }
};
