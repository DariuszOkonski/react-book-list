import React, { createContext, useReducer } from 'react';
import bookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { id: 1, author: 'Mario Puzo', title: 'Sicilian' },
    { id: 2, author: 'Stieg Larsen', title: 'Girl with the dragon tattoo' },
    { id: 3, author: 'Marion Puzo', title: 'The Goodfather' },
    { id: 4, author: 'Dan Brown', title: 'The DaVinci Code' },
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;