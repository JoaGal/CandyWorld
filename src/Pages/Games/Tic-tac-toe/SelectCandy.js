import React, { useContext, useState } from 'react'
import '../Game.css'
import { BsCaretLeftFill } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { LoginContext } from '../../../App';

const allCandys = require.context('../../../Images/Candys', true);

export const SelectCandy = () => {

  

  const {candys1, candys2, setCandys1, setCandys2} = useContext(LoginContext);

  const nextCandy1 = () => {
    setCandys1(candys1 + 1);
    if (candys1 === 17) {
      setCandys1(0);
    }
  }


  const previousCandy1 = () => {
    setCandys1(candys1 - 1);
    if (candys1 === 0) {
      setCandys1(17);
    }
  }

  const nextCandy2 = () => {
    setCandys2(candys2 + 1);
    if (candys2 === 17) {
      setCandys2(0);
    }
  }

  const previousCandy2 = () => {
    setCandys2(candys2 - 1);
    if (candys2 === 0) {
      setCandys2(17);
    }
  }
  return (
    <div className='text-center' id='back-selectCandy'>
      <div className='inline-block md:mr-20 sm:ml-2 md:mr-16 sm:mr-10 mr-16 ml-16'>
        <div className='sm:h-80 sm:w-64 w-48 sm:mt-32 mt-12 h-40  rounded-xl bg-pink-800 border-8 border-pink-500'>
          <p className='sm:text-5xl text-4xl text-pink-500 sm:mt-8 mt-4' id='font'>Player 1</p>
          <img className='sm:mt-10 mt-4 mb-4 sm:mb-0 m-auto sm:h-20' src={allCandys(`./candy-${candys1}.png`)} />
        </div>
        <button onClick={previousCandy1} className='mt-5 mr-5 sm:w-20 w-16 sm:h-20 h-16 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretLeftFill className=' text-pink-500 sm:w-16 w-10 sm:h-16 h-10 pl-2 sm:pl-0' /></button>
        <button onClick={nextCandy1} className='mt-5 ml-5 sm:w-20 w-16 sm:h-20 h-16 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretRightFill className=' text-pink-500 sm:w-16 w-10 sm:h-16 h-10 pl-2 sm:pl-0' /></button>
      </div>
      <div className='inline-block md:ml-20 sm:mr-2 md:ml-16 sm:ml-10 mr-16 ml-16'>
        <div className='sm:h-80 sm:w-64 w-48 sm:mt-32 mt-8 h-40 rounded-xl bg-pink-800 border-8 border-pink-500'>
          <p className='sm:text-5xl text-4xl text-pink-500 sm:mt-8 mt-4' id='font'>Player 2</p>
          <img className='sm:mt-10 mt-4 mb-4 sm:mb-0 m-auto sm:h-20' src={allCandys(`./candy-${candys2}.png`)} />
        </div>
        <button onClick={previousCandy2} className='mt-5 mr-5 sm:w-20 w-16 sm:h-20 h-16 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretLeftFill className='text-pink-500 sm:w-16 w-10 sm:h-16 h-10 pl-2 sm:pl-0' /></button>
        <button onClick={nextCandy2} className='mt-5 ml-5 sm:w-20 w-16 sm:h-20 h-16 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretRightFill className='text-pink-500 sm:w-16 w-10 sm:h-16 h-10 pl-2 sm:pl-0' /></button>
      </div>
      <Link to='/'>
      <button id='font' className='absolute bottom-0 left-0 m-5 sm:m-12 block sm:w-40 w-24 sm:h-24 text-3xl sm:text-4xl text-yellow-400 border-8 border-yellow-400 hover:bg-yellow-700 rounded-xl bg-yellow-600 transition ease-in delay-150 hover:scale-110 duration-300'>Back</button>
      </Link>
      <Link to='/candyselect/tic-tac-toe'>
      <button id='font' className='absolute bottom-0 right-0 m-5 sm:m-12 block sm:w-40 w-24 sm:h-24 text-3xl sm:text-4xl text-yellow-400 border-8 border-yellow-400 hover:bg-yellow-700 rounded-xl bg-yellow-600 transition ease-in delay-150 hover:scale-110 duration-300'>Start</button>
      </Link>
    </div>
  )
}
