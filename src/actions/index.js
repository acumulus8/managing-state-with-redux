//file will contain all of the action creators we will use in our app

//a single action creator, containing/returning an action
//exporting will allow us to make use of the action creator in our container
export function selectBook(book){
  //selectBook is an action creator, it needs to return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}