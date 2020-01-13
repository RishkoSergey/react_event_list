const initialState = {
  items: [],
  isReady: false,
  sortBy: 'all'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    case 'SET_SORT':
      return {
        ...state,
        sortBy: action.payload
      };
    default: 
      return state;
  } 
}