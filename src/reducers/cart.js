const initialState = new Map();

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return new Map([...state, [action.item, action.quantity]]);
    case 'remove':
      return new Map([[...state].filter(([item]) => item !== action.item)]);
  }
};

export default { initialState, reducer };
