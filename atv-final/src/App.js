import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar';
import Inicio from './Pages/Inicio/Inicio';
import Cadastro from './Pages/Cadastro/Cadastro';
import Turmas from './Pages/Turmas/Turmas';
import Editar from './Pages/Editar/Editar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route index element={<Inicio/>}/>
            <Route path='/turmas' element={<Turmas/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/editar/:id' element={<Editar/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
