import React, { useState } from 'react'

const initialBoard = () => Array(9).fill(null);


function useTicTacToe() {

         const [board , setBoard] = useState(initialBoard());
         const [isNext , setIsNext] = useState(true)

         const WINNING_PATTERN = [];

         const handleClick = () =>{

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