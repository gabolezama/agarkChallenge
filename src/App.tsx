import React, { ContextType } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EditAndCreate from './EditAndCreate';
import HomePage from './HomePage';

function App(): JSX.Element{
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/edit" element={<EditAndCreate/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
