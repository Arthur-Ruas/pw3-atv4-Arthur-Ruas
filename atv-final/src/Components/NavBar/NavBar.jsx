import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <Link to='/'>
            <p>Home</p>
        </Link>
        <Link to='/turmas'>
            Turmas
        </Link>
        <Link to='/form'>
            Cadastro de Turma
        </Link>
        <Outlet/>
    </div>
  )
}

export default NavBar;