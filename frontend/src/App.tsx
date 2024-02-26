import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import MusicStudio from './pages/MusicStudio';
import PreSignUp from './pages/PreSignUp';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="studio" element={<MusicStudio/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path='/signup' element={<PreSignUp/>}/>
        <Route path='/signup/user' element={<SignUp/>}/>
        <Route path='/signup/creator' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
