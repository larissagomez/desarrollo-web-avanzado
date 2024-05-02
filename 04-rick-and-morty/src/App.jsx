import { useState, useEffect } from 'react'
import axios from 'axios'
import  SearchForm  from "./components/SearchForm/SearchForm"
import  CharacterList  from "./components/CharacterList/CharacterList"
import  Pagination  from "./components/Pagination/Pagination"
import './App.css'

function App() {
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const searchCharacter = async () => {
      try {
        const result = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching character data:', error);
      }
    };

    searchCharacter();
  }, [query, page]);

  const handleSearchSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const handlePageChange = newPage => {
    setPage(newPage);
  };

  return (
    <>
      <div className="results-wrapper">
        <SearchForm onSubmit={handleSearchSubmit} />
        <CharacterList data={data} />
        <Pagination page={page} totalPages={data.info ? data.info.pages : 1} onPageChange={handlePageChange} />
      </div>
    </>
  );
}

export default App;
