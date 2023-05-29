import React from 'react';
import './Styles/App.css';
import {Routes, Route, BrowserRouter,} from "react-router-dom";
//import { globleStyles } from './constants';
import { HomePage } from './Components/HomePage';
import Login  from './Pages/Login/Login';
import { NotFound } from './Components/NotFound';
import Register from './Pages/Register/Register';
//import Logo from "./images/logo.svg";
//import siteLogo from "../public/logo192.png"
//import { ThemeProvider } from '@emotion/react';
import { Navbar } from './Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return(

  <>
 <ToastContainer/>
  <BrowserRouter>
  <Navbar/>
 
  <Routes>
       <Route path='/home' element={<HomePage/>}></Route>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  </BrowserRouter>
  {/* <img src={Logo} alt='App Logo'/> */}
  {/* <img src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`} alt='App Logo'/> */}
  
 </>
  );}
export default App;
