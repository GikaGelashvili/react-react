import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './pages/customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definitions';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/Dictionary' element={<Dictionary/>}/>
          <Route
           path='/Definition/:search' 
           element={<Definition/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/404' element={<NotFound/>}/>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
