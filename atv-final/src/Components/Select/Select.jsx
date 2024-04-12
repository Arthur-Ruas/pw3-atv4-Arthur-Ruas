import React from 'react';
import './select.css';

function Select({ text, name, options, handlerOnChange, value }) {
  return (
    <div className='select'>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handlerOnChange}>
        <option>Selecione...</option>
        {
          options.map((module) =>{
            return(
              <option value={module.cod_turma} key={module.cod_turma}>{module.sigla}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Select;