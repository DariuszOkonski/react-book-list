import React from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <header className="app">
        <Navigation />

        <Header />
      </header>
    </BrowserRouter>
  );
}

export default App;