import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <Link to='/'>
            Inicio
        </Link>
        <Link to='/turmas'>
            Turma
        </Link>
        <Link to='/cadastro'>
            Cadastrar
        </Link>
        <Outlet/>
    </div>
  )
}

export default NavBar;