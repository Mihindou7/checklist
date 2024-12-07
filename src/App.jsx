import React from "react"
import MainPage from "./Board";
import Affiche from "./EditPage";
import {  Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
       <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/details" element={<Affiche/>} />

        </Routes>
 
    </>
  )
}

export default App;


