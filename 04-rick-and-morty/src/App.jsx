import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState({results: []})

  const searchCharacter = async () => {
    const result = await axios ('https://rickandmortyapi.com/api/character')

    setData(result.data)
  }

  useEffect(() => {
    searchCharacter()
  }, [])

  return (
    <>
      <h1>Rick and Morty</h1>
      <div className='results'>
        <ul>
          {data.results.map(item => (
            <li key={item.id}> {item.name} </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
