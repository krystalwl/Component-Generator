export const updateInput = (payload) => {
  return {
    type: 'Input',
    payload,
  };
};

export const updateSelect = (payload) => {
  return {
    type: 'Select',
    payload,
  };
};
