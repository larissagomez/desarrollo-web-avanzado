import React from 'react'
import './Pagination.css'

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className='botones'>
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>Anterior</button>
      <span className='pagina'>Página {page} de {totalPages}</span>
      <button disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>Siguiente</button>
    </div>
  );
}

export default Pagination
