import React, { useContext, useRef, useState } from 'react';
import { LoginContext } from '../../App';
import './AccessCodeForm.css';


export const AccessCodeForm = () => {

  const logincontext = useContext(LoginContext);

  const [error, setError] = useState('');
  const code = useRef('');



  const handleSubmit = () => {

    if (code.current.value === 'candy') {

      setError('');

      logincontext.setLogin('true');

      window.localStorage.setItem('isCode', true);

    }
    else {
      setError('Incorrect Code');
    }
    console.log('Code:' + code.current.value);
  }

  return (
    <>
      <div className='text-center block back'>
        <h2 className='text-7xl pt-24 text-pink-700 sm:text-9xl' id='font'>Access Code</h2>
        <input placeholder='Put code' ref={code} id='font' className='w-96 sm:mr-12 sm:ml-12 text-center outline-0 pr-5 pl-5 rounded-xl border-8 border-yellow-400 hover:bg-yellow-700 transition ease-in delay-150 hover:scale-110 duration-300 text-yellow-400 bg-yellow-600 focus:bg-yellow-700 placeholder:text-yellow-400 mt-36 h-24 text-3xl sm:text-4xl' />
        <button onClick={handleSubmit} id='font' className='w-40 h-24 text-3xl mt-4 md:mt-0 sm:text-4xl text-yellow-400 border-8 border-yellow-400 hover:bg-yellow-700 rounded-xl bg-yellow-600 transition ease-in delay-150 hover:scale-110 duration-300'>Submit</button>

        {(error === 'Incorrect Code') ? (
          <div className='md:mt-24 mt-8'>
            <p id='font' className='sm:text-5xl p-3 text-3xl text-violet-700 rounded-xl border-8 border-violet-700 bg-violet-500 inline-block m-auto'>{error}</p>
          </div>
        ) : null
        }

      </div>
    </>
  )
}
