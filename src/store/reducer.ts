const initialState = {
  input: { title: '单行文本' },
  select: { title: '下拉框' },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Input':
      return {
        ...state.input,
        title: action.payload,
      };

    case 'Select':
      return {
        ...state.select,
        title: action.payload,
      };

    default:
      return state;
  }
};
