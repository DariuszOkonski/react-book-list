import { ADD_BOOK } from '../types/types';
import { v1 } from 'uuid'

const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { id: v1(), title: action.book.title, author: action.book.author }];
    default:
      return state;
  }
}

export default bookReducer;