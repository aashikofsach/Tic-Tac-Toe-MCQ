import React, { useState } from 'react'
import useTicTacToe from '../hooks/useTicTacToe'

function TicTacToe() {

    const {board,handleClick, calculatingWinner,getStatusMessage,resetMessage } = useTicTacToe();

  console.log(board)
  return (
    <div className='game'>
      <div className='status'>
      {getStatusMessage()}
        <button className='reset' onClick={resetMessage}>Reset Game</button>
      </div>
      <div className='board'>
        {
          board.map((_, index)=> <button className='cell' key={index} onClick={() => handleClick(index)} disabled={board[index]!==null}>{board[index]}</button>)
        }
      </div>

    </div>
  )
}

export default TicTacToe