import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home} from './Component/Home/Home';
import { Login } from './Component/Login/Login';
import { AuthProvidor } from './context/authContext';

function App() {
  return (
    <AuthProvidor>
      <Routes>
        <Route index path='/home' element={<Home />} /> 
        <Route  path='/login' element={<Login />} />
      </Routes>
    </AuthProvidor>
  );
}

export default App;
