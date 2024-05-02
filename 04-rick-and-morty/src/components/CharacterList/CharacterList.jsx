import React from 'react'
import "./CharacterList.css"

function CharacterList({ data }) {
  return (
    <ul>
      {data.results.map(item => (
        <li key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2 className='nombre'>{item.name}</h2>
          <span className='info'>Status: {item.status}</span>
          <span className='info'>Species: {item.species}</span>
          <span className='info'>Gender: {item.gender}</span>
        </li>
      ))}
    </ul>
  );
}

export default CharacterList