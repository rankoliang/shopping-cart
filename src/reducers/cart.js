const initialState = new Map();

const set = (state, item, quantity) => {
  if (quantity === 0) {
    return remove(state, item);
  } else {
    return new Map([...state, [item, quantity]]);
  }
};

const remove = (state, itemToRemove) => {
  return new Map([[...state].filter(([item]) => item !== itemToRemove)]);
};

const add = (state, item) => {
  return new Map([...state, [item, (state.get(item) || 0) + 1]]);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return set(state, action.item, action.quantity);
    case 'remove':
      return remove(state, action.item);
    case 'add':
      return add(state, action.item);
  }
};

export default { initialState, reducer };
