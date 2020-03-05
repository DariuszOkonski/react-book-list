import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FormAdd = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')

    setTitle('');
    setAuthor('');
  }

  const handleClick = () => {
    console.log(history)
    console.log('send to /');
  }

  return (
    <form onSubmit={handleSubmit} id="form-add">
      <div>
        <input
          type="text"
          placeholder="add title..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="add author..."
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <section className="btn-container">
        <button type="button" onClick={handleClick} className="btn">Cancel</button>
        <button type="submit" className="btn">Add</button>
      </section>
    </form>
  );
}

export default FormAdd;