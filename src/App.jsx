import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookList from './views/BookList';
import BookContextProvider from './contexts/BookContext';
import AddBook from './views/AddBook';
import Empty from './components/Empty';
import RemoveBook from './views/RemoveBook';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BookContextProvider>

        <main className="app">
          <Navigation />

          <section className="view">
            <Switch>
              <Route exact path="/" component={BookList} />
              <Route exact path="/add" component={AddBook} />
              <Route exact path="/remove" component={RemoveBook} />
              <Route render={() => <Empty information="There is no such a route..." />} />
            </Switch>
          </section>

          {/* 
          <RemoveBook />
          <BookList /> */}



        </main>
      </BookContextProvider>
    </BrowserRouter>
  );
}

export default App;