import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Message from '../../Components/Message/Message';
import CardTeam from '../../Components/CardTeam/CardTeam';

function Turmas() {

  const [turmaArray, setTurmaArray]  = useState([]);

  useEffect(() =>{
    fetch(
      'http://localhost:5000/team', 
      { 
        method: 'GET',
        headers: {
          'Content-Type':'application/json'
        }
      }
    ).then(
      (response) => response.json()
    ).then(
      (data) => {setTurmaArray(data)}
    ).catch(
      (error) => console.log(error)
    )
  }, []);

  const location = useLocation();
  let message = '';

  console.log('Location state: ' + location.state)

  if(location.state){
    message = location.state;
  }

  return (
    <section>
      {
        message && (
          <Message
            msg={message}
            type="success"/>
        )
      }
      {
        turmaArray.map((turma) => {
          return(
            <CardTeam
            turma={turma.nome__modulo}
            categoria={turma.category.category}/>
          );
        })
      }

    </section>
  )
}

export default Turmas;