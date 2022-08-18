import './Home.css'
import { BsFillCaretRightFill } from "react-icons/bs";
import React from 'react'
import { Link } from "react-router-dom";


export const Home = () => {


  return (
    <div className='back text-center'>
      <div className='backtext'>
        <h1 className='text-7xl pt-24 text-pink-700 sm:text-9xl underline decoration-wavy   decoration-4 underline-offset-4 tracking-widest' id='Title'>Candy World</h1>
      </div>
      <Link to='/accesscode'>
        <button className='mt-36 h-52 w-52 sm:w-72 sm:h-72 rounded-full hover:bg-yellow-400 bg-pink-700 border-8 border-white transition ease-in delay-150  hover:scale-110 duration-300' id='play'><BsFillCaretRightFill className='m-auto text-white h-32 w-32  sm:w-48 sm:h-48' /></button>
      </Link>
    </div>
  )
}
