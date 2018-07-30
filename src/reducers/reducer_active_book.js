//state argument is not the application state, only the state that this reducer is responsible for.
//setting the state to null is Es6 magic that allows us to handle a default setting where the reducer hasn't been acted upon yet and would throw an error since it has been given any state yet (remember, this reducer won't receive anything until the onClick event sends the selectBook action here with a payload. Until that happens, state needs to be null)
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}