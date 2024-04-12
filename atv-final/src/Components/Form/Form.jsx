import React, { useEffect, useState } from 'react';
import './form.css';

import Input from '../Input/Input';
import Select from '../Select/Select';

function Form() {

  const [team, setTeam] = useState([])
  const [modules, setmodules] = useState([]);
  useEffect(() =>{
    fetch(
      'http://localhost:5000/module',
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
        setmodules(data)
      }
    ).catch(
      (error) =>{
        console.log(error);
      }
    )
  }, []);

  function handlerChangeTeam(event){
    setTeam({...team, [event.target.name] : event.target.value});
    console.log(team)
  }

  function handlerChangeCategory(event){
    setTeam({...team, category: {
      id: event.target.value,
      category: event.target.options[event.target.selectedIndex].text
    }});
  }
  console.log(team)

  function createTeam(team){
    fetch('http://localhost:5000/team', 
      {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(team)
      }
    ).then(
      (response)=>response.json()

    ).then(
      (data)=>{
        console.log(data)
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }

  function submit(event){
    event.preventDefault()
    createTeam(team)
  }

  return (
    <div className='form'>
        <form onSubmit={submit}>
            <h1 className='form__title'>Cadastro de <span>Turma</span></h1>
            <div className='form__wrapper-input'>
                <Input type='text' name='nome__modulo' id='nome__modulo' text='Nome da turma' handlerOnChange={handlerChangeTeam}/>
                <Select name='categoria_id' text='Turma' options={modules} handlerOnChange={handlerChangeCategory}/>
            </div>
            <button className='form__button-submit' type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Form;
