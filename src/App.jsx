import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './views/BookList';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <main className="app">
        <Navigation />

        <section className="view">

          <BookList />


        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;