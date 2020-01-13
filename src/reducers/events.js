const initialState = {
  items: [],
  isReady: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    default: 
      return state;
  } 
}