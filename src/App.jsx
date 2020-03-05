import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './views/BookList';
import BookContextProvider from './contexts/BookContext';
import AddBook from './views/AddBook';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BookContextProvider>

        <main className="app">
          <Navigation />

          <section className="view">

            <BookList />
            <AddBook />

          </section>
        </main>
      </BookContextProvider>
    </BrowserRouter>
  );
}

export default App;