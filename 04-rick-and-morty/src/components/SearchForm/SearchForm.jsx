import React, { useState } from 'react'
import "./SearchForm.css"

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <>
    <header className="titulo">
      <h1>RICK & MORTY</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="submit">Buscar</button>
    </form>
    </header>
    </>
  );
}

export default SearchForm;