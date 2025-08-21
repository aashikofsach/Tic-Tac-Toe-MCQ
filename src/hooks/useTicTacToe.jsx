import React, { useState } from 'react'

const initialBoard = () => Array(9).fill(null);


function useTicTacToe() {

         const [board , setBoard] = useState(initialBoard());
         const [isNext , setIsNext] = useState(true)

         const WINNING_PATTERN = [];

         const handleClick = (index) =>{
            console.log("handle click")

            const newBoard = [...board];
            newBoard[index] = isNext? "X" : "O";
            setBoard(newBoard);
            setIsNext((prev)=>!prev)
         }

         const calculatingWinner = () =>
         {

         }

         const getStatusMessage = () =>
         {

         }

         const resetMessage = () => {
            console.log("reset message ")

         }

  return {board,handleClick,calculatingWinner,getStatusMessage,resetMessage }
}

export default useTicTacToe