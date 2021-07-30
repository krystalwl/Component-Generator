import { SELECTDRAGLIST } from '../const/select-drag';

export const handleSelectItem = (payload: {}) => {
  return {
    type: SELECTDRAGLIST,
    payload,
  };
};
