import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessCode } from './Pages/AccessCode/AccessCode';
import { Home } from './Pages/Home/Home';
import { SelectCandy } from './Pages/Games/Tic-tac-toe/SelectCandy';
import { Tictactoe } from './Pages/Games/Tic-tac-toe/Tictactoe';
import { SelectGame } from './Pages/SelectGame/SelectGame';
import { CandyRain } from './Pages/Games/CandyRain/CandyRain';


export const LoginContext = createContext();
export const App = () => {

  const [login, setLogin] = useState(window.localStorage.getItem('isCode'));
  const [candys1, setCandys1] = useState(0);
  const [candys2, setCandys2] = useState(0);


  return (
    <>
      <BrowserRouter>
      <LoginContext.Provider value={{ setLogin, login, candys1, candys2, setCandys1, setCandys2}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accesscode' element={<AccessCode />} />
          <Route path='/gameselect' element={<SelectGame />} />
          <Route path='/candyselect' element={<SelectCandy />} />
          <Route path='/candyselect/tic-tac-toe' element={<Tictactoe />} />
          <Route path='/candyrain' element={<CandyRain />} />
        </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  )
}
