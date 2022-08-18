import React from 'react'
import { Link } from 'react-router-dom'

export const SelectGame = () => {
  return (
    <div className='back text-center'>
      <h4 id='font' className='text-9xl mt-10 text-pink-700'>Select Game</h4>
      <div>
        <Link to='/candyselect'>
          <button id='font' className='w-96  text-center  rounded-xl border-8 border-yellow-400 hover:bg-yellow-700 transition ease-in delay-150 hover:scale-110 duration-300 text-yellow-400 bg-yellow-600 focus:bg-yellow-700 placeholder:text-yellow-400 mt-32 h-32 text-5xl'>Candy Tic-Tac-Toe</button>
        </Link>
      </div>
      <div>
          <button id='font' className='w-96  text-center  rounded-xl border-8 border-yellow-400 hover:bg-yellow-700 transition ease-in delay-150 hover:scale-110 duration-300 text-yellow-400 bg-yellow-600 focus:bg-yellow-700 placeholder:text-yellow-400 mt-20 h-32 text-5xl'>Candy Rain</button>
      </div>
      <div>
        <Link to=''>
          <button id='font' className='w-96  text-center  rounded-xl border-8 border-yellow-400 hover:bg-yellow-700 transition ease-in delay-150 hover:scale-110 duration-300 text-yellow-400 bg-yellow-600 focus:bg-yellow-700 placeholder:text-yellow-400 mt-20 h-32 text-5xl'>Coming Soon...</button>
        </Link>
      </div>
    </div>
  )
}
