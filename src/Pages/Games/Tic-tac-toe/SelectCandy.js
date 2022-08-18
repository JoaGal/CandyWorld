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
      <div className='inline-block md:mr-20 md:ml-0 mr-16 ml-16'>
        <div className='sm:h-80 sm:w-64 md:mt-40 sm:mt-8 mt-28  rounded-xl bg-pink-800 border-8 border-pink-500'>
          <p className='text-5xl text-pink-500 mt-8' id='font'>Player 1</p>
          <img className='sm:mt-16 mt-14 mb-4 sm:mb-0 m-auto h-20' src={allCandys(`./candy-${candys1}.png`)} />
        </div>
        <button onClick={previousCandy1} className='mt-5 mr-5 w-20 h-20 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretLeftFill className=' text-pink-500 w-16 h-16' /></button>
        <button onClick={nextCandy1} className='mt-5 ml-5 w-20 h-20 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretRightFill className=' text-pink-500 w-16 h-16' /></button>
      </div>
      <div className='inline-block md:ml-20 md:mr-0  ml-16 mr-16'>
        <div className='sm:h-80 sm:w-64 mt-32 rounded-xl bg-pink-800 border-8 border-pink-500'>
          <p className='text-5xl text-pink-500 mt-8' id='font'>Player 2</p>
          <img className='sm:mt-16 mt-14 mb-4 sm:mb-0 m-auto h-20' src={allCandys(`./candy-${candys2}.png`)} />
        </div>
        <button onClick={previousCandy2} className='mt-5 mr-5 w-20 h-20 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretLeftFill className=' text-pink-500 w-16 h-16' /></button>
        <button onClick={nextCandy2} className='mt-5 ml-5 w-20 h-20 text-pink-500 border-8 border-pink-500 hover:bg-pink-900 rounded-xl bg-pink-800 transition ease-in delay-150 hover:scale-110 duration-300'><BsCaretRightFill className=' text-pink-500 w-16 h-16' /></button>
      </div>
      <Link to='/'>
      <button id='font' className='absolute bottom-0 left-0 m-5 sm:m-12 block w-40 h-24 text-3xl sm:text-4xl text-yellow-400 border-8 border-yellow-400 hover:bg-yellow-700 rounded-xl bg-yellow-600 transition ease-in delay-150 hover:scale-110 duration-300'>Back</button>
      </Link>
      <Link to='/candyselect/tic-tac-toe'>
      <button id='font' className='absolute bottom-0 right-0 m-5 sm:m-12 block w-40 h-24 text-3xl sm:text-4xl text-yellow-400 border-8 border-yellow-400 hover:bg-yellow-700 rounded-xl bg-yellow-600 transition ease-in delay-150 hover:scale-110 duration-300'>Start</button>
      </Link>
    </div>
  )
}
