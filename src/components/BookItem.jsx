import React from 'react';

const BookItem = () => {
  return (
    <li id="book-item">
      <section className="left">
        <p><strong>Author</strong></p>
        <p>Title</p>
      </section>

      <section className="right">
        <button className="btn">Delete</button>
        <button className="btn">Edit</button>
      </section>
    </li>
  );
}

export default BookItem;