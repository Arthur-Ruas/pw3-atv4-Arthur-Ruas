import React from 'react';
import './select.css';

function Select({ text, name, options, handlerOnChange, value }) {
  return (
    <div className='select'>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handlerOnChange}>
        <option>Selecione...</option>
        {
          options.map((modulo) =>{
            return(
              <option value={modulo.cod_turma} key={modulo.cod_turma}>{modulo.sigla}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Select;