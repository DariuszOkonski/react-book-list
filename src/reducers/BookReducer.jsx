import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../types/types';
import { v1 } from 'uuid'

const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { id: v1(), title: action.book.title, author: action.book.author }];
    case DELETE_BOOK:
      return state.filter(book => book.id !== action.id);
    case EDIT_BOOK:
      return state.map(book => {
        if (book.id === action.book.id)
          return { id: book.id, title: action.book.title, author: action.book.author }
        else
          return book;
      });
    default:
      return state;
  }
}

export default bookReducer;