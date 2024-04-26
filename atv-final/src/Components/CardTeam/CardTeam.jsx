import React from 'react';

function CardTeam({ turma, categoria }) {
  return (
    <div>
      <h1>{turma}</h1>
      <h1>{categoria}</h1>
    </div>
  )
}

export default CardTeam;