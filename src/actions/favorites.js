export const addToFavorites = event => ({
  type: 'ADD_TO_FAVORITES',
  payload: event
});

export const removeFromFavorites = id => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: id
});