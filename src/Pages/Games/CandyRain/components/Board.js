
import React, { useEffect, useRef, useState } from 'react'
import { UNIT, BOARD_SIZE_W, BOARD_SIZE_H, MONSTER, CANDYS, DIRECTIONS } from '../config/const'

const allCandys = require.context('../../../../Images', true);

export const Board = () => {

  const canvasRef = useRef();
  const mosnter = new Image(allCandys(`./Monster/eat-0.png`));
  const candys = new Image();



  useEffect(() => {
    document.addEventListener('keydown', movePlayer);

    return () => {
      window.removeEventListener('keydown', movePlayer);
    }
  }, [])

  const movePlayer = (e) => {
    //Left
    if (e.keyCode == '65' || e.keyCode == '37') {
      console.log('left')
    }
    //Rigth
    else if (e.keyCode == '68' || e.keyCode == '39') {

      console.log('rigth');
    }
  }


  const drawMonster = (ctx) => {
    mosnter.src = allCandys(`./Monster/eat-0.png`);
    ctx.drawImage(mosnter, MONSTER.position.x, MONSTER.position.y, MONSTER.width, MONSTER.height);
  }

  const drawCandys = (ctx) =>{
    candys.src = allCandys(`./Candys/candy-0.png`);
    ctx.drawImage( candys, CANDYS.position.x , CANDYS.position.y, CANDYS.width, CANDYS.height);
  }



  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');


    context.beginPath();

    for (let i = UNIT * 2; i <= BOARD_SIZE_W; i += UNIT * 2) {
      context.moveTo(i, 0);
      context.lineTo(i, BOARD_SIZE_H);
    }
    for (let i = UNIT * 2; i <= BOARD_SIZE_H; i += UNIT * 2) {
      context.moveTo(0, i);
      context.lineTo(BOARD_SIZE_W, i);
    }

    drawMonster(context);
    drawCandys(context);

    context.stroke();

    context.closePath();
  }, []);



  return (
    <div id='back-selectCandy'>
      <canvas
        ref={canvasRef}
        width={BOARD_SIZE_W}
        height={BOARD_SIZE_H}
        className='bg-cyan-900/75 border-2 shadow-md shadow-cyan-800/50 border-cyan-800 m-auto mt-20' />
    </div>

  )
}
