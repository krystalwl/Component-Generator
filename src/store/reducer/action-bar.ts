import { DELETEALL, SAVELIST } from '../const/action-bar';

const initialState = {
  list: [],
};
export default (state = initialState.list, action: any) => {
  switch (action.type) {
    case DELETEALL:
      state = [];
      return {
        state,
      };

    case SAVELIST:
      state = action.payload;
      return {
        list: state,
      };

    default:
      return state;
  }
};
