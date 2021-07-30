import { INPUT, SELECT } from '../const/drag-const';

interface payloadTypes {}

export const updateInput = (payload: payloadTypes) => {
  // input
  return {
    type: INPUT,
    payload,
  };
};

export const updateSelect = (payload: payloadTypes) => {
  //select
  return {
    type: SELECT,
    payload,
  };
};
