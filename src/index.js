import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarPages from './components/NavbarPages.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from './components/SignIn';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 

    <BrowserRouter>
    <Navbar />
    <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/home" element={<App />}></Route>
            <Route path="/pages" element={<NavbarPages />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
          </Routes>
    </BrowserRouter>
    
);


