import React, { createContext, useReducer, useEffect } from 'react';
import bookReducer from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    console.log(localData);

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;

// { id: 1, author: 'Mario Puzo', title: 'Sicilian' },
//     { id: 2, author: 'Stieg Larsen', title: 'Girl with the dragon tattoo' },
//     { id: 3, author: 'Marion Puzo', title: 'The Goodfather' },
//     { id: 4, author: 'Dan Brown', title: 'The DaVinci Code' },