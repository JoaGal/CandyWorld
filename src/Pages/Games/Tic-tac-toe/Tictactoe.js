import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../App";
import './tictactoe.css'


const allCandys = require.context('../../../Images/Candys', true);
export const Tictactoe = () => {

  const [squares, setSquares] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [candy, setCandy] = useState('', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [turns, setTurns] = useState('X');
  const [winner, setWinner] = useState('');
  const { candys1, candys2, setCandys1, setCandys2 } = useContext(LoginContext);


  useEffect(() => {

    if (
      (squares[0] === squares[1] && squares[1] === squares[2]) ||
      (squares[3] === squares[4] && squares[4] === squares[5]) ||
      (squares[6] === squares[7] && squares[7] === squares[8]) ||
      (squares[0] === squares[3] && squares[3] === squares[6]) ||
      (squares[1] === squares[4] && squares[4] === squares[7]) ||
      (squares[2] === squares[5] && squares[5] === squares[8]) ||
      (squares[0] === squares[4] && squares[4] === squares[8]) ||
      (squares[2] === squares[4] && squares[4] === squares[6])) {
      if (turns === 'O') {
        setWinner(`${allCandys(`./candy-${candys1}.png`)}`)
      } else { setWinner(`${allCandys(`./candy-${candys2}.png`)}`) }
    }
  }, [squares]);

  const handelClick = ({ target }) => {
    if (!(target.id.includes('flex-container')) && !(target.id.includes('X') || target.id.includes('O') || target.id.includes('pick')) && winner === '') {
      setTurns(turns === 'X' ? 'O' : 'X')
    };
    let newArrSquares = [...squares];
    let newArrCandy = [...candy]
    if (turns === 'X' && !(target.id.includes('flex-container')) && winner === '') {
      newArrSquares[target.id] = 'X';
      newArrCandy[target.id] = `${allCandys(`./candy-${candys1}.png`)}`
    } else if (turns === 'O' && !(target.id.includes('flex-container')) && winner === '') {
      newArrSquares[target.id] = 'O';
      newArrCandy[target.id] = `${allCandys(`./candy-${candys2}.png`)}`

    }
    setSquares(newArrSquares);
    setCandy(newArrCandy);
  }
  const restart = () => {
    setCandys1(0);
    setCandys2(0);
  }

  return (
    <>
      <div id='back-selectCandy' className='text-center'>
        <div className='marker mt-40'>
          <h2 id='font' className='mb-10 w-30 pb-10 p-2 pt-10 h-20 text-pink-500 border-8 border-pink-500 rounded-xl bg-pink-800 grid content-center'>{turns === 'X' ? <img src={`${allCandys(`./candy-${candys1}.png`)}`} /> : <img src={`${allCandys(`./candy-${candys2}.png`)}`} />}</h2>
        </div>
        <div className='bg-cyan-900/75 rounded-xl border-2 shadow-md shadow-cyan-800/50 border-cyan-800' id='flex-container' onClick={handelClick}>
          <div className='squares' id={squares[0]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[0]} /></div>
          <div className='squares' id={squares[1]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[1]} /></div>
          <div className='squares' id={squares[2]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[2]} /></div>
          <div className='squares' id={squares[3]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[3]} /></div>
          <div className='squares' id={squares[4]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[4]} /></div>
          <div className='squares' id={squares[5]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[5]} /></div>
          <div className='squares' id={squares[6]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[6]} /></div>
          <div className='squares' id={squares[7]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[7]} /></div>
          <div className='squares' id={squares[8]}><img className='m-auto mt-5 rounded-md' id='pick' src={candy[8]} /></div>
        </div>
        {winner === '' ? null : (
          <>
          <div className=' w-full h-full absolute inset-0 bg-cyan-900/60'>
            <div className='inline-block mt-36 w-96 h-auto border-8 border-pink-500 rounded-xl bg-pink-800 text-pink-500'>
            <p className=' mt-44  text-5xl' id='font'>Winner</p>
            <img src={winner} className='m-auto sm:mt-4 mt-2 mb-44'/>
            </div>
            </div>
            </>
          )
        }
            <Link to='/candyselect'>
                <button onClick={restart} id='font' className='relative mt-10 inset-0 m-auto block w-40 h-24 text-3xl sm:text-4xl text-yellow-400 border-8 border-yellow-400 hover:bg-yellow-700 rounded-xl bg-yellow-600 transition ease-in delay-150 hover:scale-110 duration-300'>Restart</button>
            </Link>
      </div>
    </>
  )
}
