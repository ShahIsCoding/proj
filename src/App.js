import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import {Home} from './Component/Home/Home';
import { Login } from './Component/Login/Login';
import { AuthProvidor } from './Component/context/authContext';

function App() {
  return (
    <AuthProvidor>
      <Routes>
        <Route path='/home' element={<Home />} /> 
        <Route index path='/login' element={<Login />} /> 
      </Routes>
    </AuthProvidor>
  );
}

export default App;
