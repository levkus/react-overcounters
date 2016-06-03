// Action creator returns an Action (an object with type and payload)

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
