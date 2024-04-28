import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState({results: []})
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState ('')

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(query)
  }

  const searchCharacter = async () => {
    const result = await axios (`https://rickandmortyapi.com/api/character/?name=${query}`)

    setData(result.data)
  }

  useEffect(() => {
    searchCharacter()
  }, [search],)

  return (
    <>
      <h1>Rick and Morty</h1>

      <div className="results-wrapper">
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
          <button type="search-button"> Buscar </button>
        </form>
        <div>
          <ul className='grid-cards'>
            {data.results.map(item => (
              <li className='image-container' key={item.id}> 
                <img src={item.image} alt={item.name}/>
                <h2 className='name'>{item.name}</h2>
                <span className='description'>Estatus: {item.status}</span>
                <span className='description'>Especie: {item.species}</span>
                <span className='description'>Genero: {item.gender}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default App
