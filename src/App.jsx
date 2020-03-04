import React from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './views/BookList';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <main className="app">
        <Navigation />
        <BookList />
      </main>
    </BrowserRouter>
  );
}

export default App;