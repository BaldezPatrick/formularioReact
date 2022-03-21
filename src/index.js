import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Formulario from './Pages/Form/form';
import CheckOut from './Pages/Checkout/checkout';
import CompraSucesso from './Pages/Compra-Realizada/comprarealizada';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Formulario/>}></Route>
        <Route path="/Checkout" element={<CheckOut/>}></Route>
        <Route path="/Compra-Realizada" element={<CompraSucesso />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
