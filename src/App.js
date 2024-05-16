import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { RouteApp } from './route';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import CarrinhoContextProvider, { CarrinhoContext } from './hooks/CarrinhoContext';


function App() {


  return (

    <>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </>
  );



}

export default App;
