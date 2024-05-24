import React, { useEffect, useState } from 'react';
import './cadastro.css';
import { useNavigate } from 'react-router-dom';

import Input from '../../Components/Form/Input/Input';
import Select from '../../Components/Form/Select/Select';

function Cadastro() {

  const navigate = useNavigate();

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
      (data) =>{
        setModulo(data)

      }
    ).catch(
      (error) =>{
        console.log(error);
      }
    )
  }, []);

  function handlerChangeTurma(event){
    setTurma({...turma, [event.target.name] : event.target.value});
    console.log(turma)
  }

  function handlerChangeModulo(event){
    setTurma({...turma, modulo: {
      id: event.target.value,
      modulo: event.target.options[event.target.selectedIndex].text
    }});
  }
  console.log(turma)

  function createTurma(turma){
    fetch('http://localhost:5000/turma', 
      {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(turma)
      }
    ).then(
      (response)=>response.json()

    ).then(
      (data)=>{
        console.log(data)
        navigate('/turmas', {state: 'Turma cadastrada com sucesso!'});
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }

  function submit(event){
    event.preventDefault()
    createTurma(turma)
  }

  return (
    <div className='form'>
        <form onSubmit={submit}>
            <h1 className='form__title'>Cadastro de <span>Turma</span></h1>
            <div className='form__wrapper-input'>
                <Input type='text' name='nome' id='nome' text='Nome da turma' handlerOnChange={handlerChangeTurma}/>
                <Select name='categoria_id' text='Módulo' options={modulo} handlerOnChange={handlerChangeModulo}/>
            </div>
            <button className='form__button-submit' type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Cadastro;
