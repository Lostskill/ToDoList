import {React, useState} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/register';
import Main from './pages/main';
import Login from './pages/login';
import Navbar from './components/UI/Navbar/Navbar';
import LogOut from './components/Logout';
import { AuthContext } from './context/index';

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>  
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<LogOut/>} />
          <Route path='*' element={<Navigate to='/'/>}/>  
      </Routes> 
      </BrowserRouter>
  );
};
export default App;

