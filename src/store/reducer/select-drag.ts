import { SELECTDRAGLIST } from '../const/select-drag';

export default (state = {}, action: { type: string; payload: {} }) => {
  switch (action.type) {
    case SELECTDRAGLIST:
      state = action.payload;
      return {
        state,
      };
    default:
      return state;
  }
};
