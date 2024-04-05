import React, { useEffect, useState } from 'react';
import './form.css';

import Input from '../Input/Input';
import Select from '../Select/Select';

function Form() {

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

  return (
    <div className='form'>
        <form>
            <h1 className='form__title'>Cadastro de <span>Turma</span></h1>
            <div className='form__wrapper-input'>
                <Input type='text' name='nome__modulo' id='nome__modulo' text='Nome da turma'/>
                <Select name='categoria_id' text='Categoria' modules={modules}/>
            </div>
            <button className='form__button-submit' type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Form;