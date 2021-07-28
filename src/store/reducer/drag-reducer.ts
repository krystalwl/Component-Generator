import { INPUT, SELECT } from '../const/drag-const';

const initialState = {
  input: { title: '单行文本' },
  select: { title: '下拉框' },
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
