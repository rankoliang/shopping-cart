const initialState = new Map();

const set = (state, item, quantity) => {
  if (quantity <= 0) {
    return remove(state, item);
  } else {
    return new Map([...state, [item, quantity]]);
  }
};

const remove = (state, itemToRemove) => {
  return new Map([...state].filter(([item, _]) => item !== itemToRemove));
};

const increment = (state, item) => {
  const quantity = state.get(item) || 0;
  return set(state, item, quantity + 1);
};

const decrement = (state, item) => {
  const quantity = state.get(item);

  if (quantity) {
    return set(state, item, quantity - 1);
  } else {
    return state;
  }
};

const empty = () => {
  return initialState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return set(state, action.item, action.quantity);
    case 'remove':
      return remove(state, action.item);
    case 'increment':
      return increment(state, action.item);
    case 'decrement':
      return decrement(state, action.item);
    case 'empty':
      return empty();
  }
};

export default { initialState, reducer };
