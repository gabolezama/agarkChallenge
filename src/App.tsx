import React, { ContextType } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EditAndCreate from './EditAndCreate';
import HomePage from './HomePage';

function App({context}: any): JSX.Element{
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<HomePage context={context}/>} />
            <Route path="/edit" element={<EditAndCreate context={context}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
