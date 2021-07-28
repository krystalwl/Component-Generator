import { DELETEALL, SAVELIST } from '../const/action-bar';

type payloadTypes = [];
export const deleteAll = () => {
  // 删除全部
  return {
    type: DELETEALL,
  };
};

export const saveList = (payload: payloadTypes) => {
  // 实时存储画布中list
  return {
    type: SAVELIST,
    payload,
  };
};
