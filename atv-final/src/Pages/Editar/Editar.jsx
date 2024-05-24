import React, { useEffect, useState } from 'react';
import './editar.css';
import { useParams, useNavigate } from 'react-router-dom';

import Input from '../../Components/Form/Input/Input';
import Select from '../../Components/Form/Select/Select';

function Editar() {

  const navigate = useNavigate();
    
  const { id } = useParams();
  const [turma, setTurma] = useState([]);
  const [modulo, setModulo] = useState([]);

  useEffect(() =>{
    fetch(
      'http://localhost:5000/modulo',
      {
        method: 'GET',
        headers:{
          'Content-Type':'application/json'
        }
      }
    ).then(
      (response) => response.json()
    ).then(
      (data) => setModulo(data)
    ).catch(
      (error) => console.log(error)
    )
  }, []);

  useEffect(() =>{
    fetch(
      `http://localhost:5000/turma/${id}`,
      {
        method: 'GET',
        headers:{
          'Content-Type':'application/json'
        }
      }
    ).then(
      (response) => response.json()
    ).then(
      (data) => setTurma(data)
    ).catch(
      (error) => console.log(error)
    )
  }, []);

  function handlerChangeTurma(event){
    setTurma({...turma, [event.target.name] : event.target.value});
  }
  
  function handlerChangeModulo(event){
    setTurma({...turma, modulo: {
      id: event.target.value,
      modulo: event.target.options[event.target.selectedIndex].text
    }});
  }

  function editTurma(turma){
    fetch(`http://localhost:5000/turma/${turma.id}`, 
      {
        method: 'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(turma)
      }
    ).then(
        (response) => response.json()
    ).then(
      navigate('/turmas', {state: 'Livro editado com sucesso!'})
    ).catch(
        (error) => console.log(error)
    )
  }
  
  function submit(event){
    event.preventDefault();
    editTurma(turma);
  }

  return (
    <div className='editar-livro'>
        <div className='editar-livro__header'>
            <h1 className='editar-livro__title'>Edite seu <span>Livro</span></h1>
            <p>Mude os dados dos livros aqui mesmo!</p>
        </div>   
        <form className='editar-livro__form' onSubmit={submit}>
          <div className='form__wrapper-input'>
            <Input type='text' name='nome' id='nome' text='Nome da turma' value={turma.nome} handlerOnChange={handlerChangeTurma}/>
            <Select name='categoria_id' text='Módulo' options={modulo} handlerOnChange={handlerChangeModulo}/>
          </div> 
          <button className='editar-livro__button-submit' type='submit' value='Editar'>Alterar Livro</button>
        </form>
    </div>
  )
}

export default Editar;