import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Form from './Pages/Form/Form';
import Turmas from './Pages/Turmas/Turmas';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path='/turmas' element={<Turmas/>}/>
            <Route path='/form' element={<Form/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
