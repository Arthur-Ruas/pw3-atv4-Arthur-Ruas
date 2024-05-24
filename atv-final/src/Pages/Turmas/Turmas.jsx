import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Messagem from '../../Components/Messagem/Messagem';
import CardTurma from '../../Components/CardTurma/CardTurma';

function Turmas() {

  const [turmaArray, setTurmaArray]  = useState([]);
  const [deleteMessagem, setDeleteMessagem] = useState('');

  useEffect(() =>{
    fetch(
      'http://localhost:5000/turma', 
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
  }, [turmaArray]);

  function removeTurma(id){
    fetch(`http://localhost:5000/turma/${id}`, 
      { 
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        },
      }
    ).then(
      (response) => response.json()
    ).then(
      () => {setDeleteMessagem('Livro excluído com sucesso!')}
    ).catch(
      (error) => console.log(error)
    )
  }

  const location = useLocation();
  let messagem = '';

  console.log('Location state: ' + location.state)

  if(location.state){
    messagem = location.state;
  }

  return (
    <section>
      {
        messagem && (
          <Messagem
            msg={messagem}
            type="success"/>
        )
      }
      {
        deleteMessagem && (
          <Messagem
            msg={deleteMessagem}
            type="success"/>
        )
      }
      {
        turmaArray.map((turma) => {
          return(
            <CardTurma
            id={turma.id}
            turma={turma.nome}
            modulo={turma.modulo.modulo}
            handlerRemove={removeTurma}/>
          );
        })
      }

    </section>
  )
}

export default Turmas;