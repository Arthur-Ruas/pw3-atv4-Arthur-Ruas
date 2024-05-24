import React from 'react';
import './cardTurma.css';

import { Link } from 'react-router-dom';


function CardTurma({ id, turma, modulo, handlerRemove }) {

  function remove(event){
    event.preventDefault();
    handlerRemove(id)
  }

  return (
    <div>
      <h1>{turma}</h1>
      <h1>{modulo}</h1>
      <div className='card-book_actions'>
          <Link to={`/editar/${id}`}>Editar</Link>
          <button onClick={remove}>Excluir</button>
        </div>
    </div>
  )
}

export default CardTurma;