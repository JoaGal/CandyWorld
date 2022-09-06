import React from 'react'
import { Link } from 'react-router-dom'

export const SelectGame = () => {
  return (
    <div className='back text-center'>
      <h4 id='font' className='text-7xl pt-24 text-pink-700 sm:text-9xl'>Select Game</h4>
      <div>
        <Link to='/candyselect'>
          <button id='font' className='sm:w-96 w-64 text-center rounded-xl border-8 border-yellow-400 hover:bg-yellow-700 transition ease-in delay-150 hover:scale-110 duration-300 text-yellow-400 bg-yellow-600 focus:bg-yellow-700 placeholder:text-yellow-400 mt-28 sm:h-32 p-4 sm:p-0 sm:text-5xl text-2xl'>Candy Tic-Tac-Toe</button>
        </Link>
      </div>
      <div>
        <Link to='/'>
          <button id='font' className='sm:w-96 w-64 text-center  rounded-xl border-8 border-yellow-400 hover:bg-yellow-700 transition ease-in delay-150 hover:scale-110 duration-300 text-yellow-400 bg-yellow-600 focus:bg-yellow-700 placeholder:text-yellow-400 mt-10 sm:h-32 p-4 sm:p-0 sm:text-5xl text-2xl'>Coming Soon...</button>
        </Link>
      </div>
      <div>
        <Link to='/'>
          <button id='font' className='sm:w-96 w-64 text-center  rounded-xl border-8 border-yellow-400 hover:bg-yellow-700 transition ease-in delay-150 hover:scale-110 duration-300 text-yellow-400 bg-yellow-600 focus:bg-yellow-700 placeholder:text-yellow-400 mt-10 sm:h-32 p-4 sm:p-0 sm:text-5xl text-2xl'>Coming Soon...</button>
        </Link>
      </div>
    </div>
  )
}
