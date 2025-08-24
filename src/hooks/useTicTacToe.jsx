import React, { useState } from 'react'

const initialBoard = (n) => Array(n * n).fill(null);


function useTicTacToe(n) {

   const [board, setBoard] = useState(initialBoard(n));
   const [isNext, setIsNext] = useState(true)

   // const WINNING_PATTERN = [
   //    [0,1,2],
   //    [3,4,5],
   //    [6,7,8],
   //    [0,3,6],
   //    [1,4,7],
   //    [2,5,8],
   //    [0,4,8],
   //    [2,4,6]
   // ];
   const generatePatterns = (n) => {
      let patterns = [];

      //rows
      for (let i = 0; i < n; i++) {
         let row = [];
         for (let j = 0; j < n; j++) {
            row.push(i * n + j)
         }
         patterns.push(row)
      }

      //cols
      for (let j = 0; j < n; j++) {
         let col = [];
         for (let i = 0; i < n; i++) {
            col.push(i * n + j)
         }
         patterns.push(col)
      }

      // Main diagonal
      let diag1 = [];
      for (let i = 0; i < n; i++) 
         diag1.push(i * n + i);

      // console.log(diag1)
      patterns.push(diag1);

      // cross diagonal

      let diag2 = [] ;
      for(let i=0 ; i<n ; i++)
      {
         diag2.push(i*n + (n-i-1))
      }
      patterns.push(diag2)

      return patterns
   }

   const WINNING_PATTERN = generatePatterns(n);



   console.log(WINNING_PATTERN)

   const handleClick = (index) => {
      console.log("handle click")
      let winner = calculatingWinner(board , WINNING_PATTERN)
      console.log(winner)
      if (winner || board[index]) return;

      const newBoard = [...board];
      newBoard[index] = isNext ? "X" : "O";
      setBoard(newBoard);
      setIsNext((prev) => !prev)
   }

   const calculatingWinner = (curentBoard, WINNING_PATTERN) => {
      // for (let i = 0; i < WINNING_PATTERN.length; i++) {
      //    const [a, b, c] = WINNING_PATTERN[i];
      //    if (curentBoard[a] && curentBoard[a] === curentBoard[b] && curentBoard[a] === curentBoard[c]) {
      //       return curentBoard[a];
      //    }
      // }
      // console.log(curentBoard)
      // return null;
      console.log("jai shree", WINNING_PATTERN)
      for( let pattern of WINNING_PATTERN)
      {
         let [first] = pattern;

         if(curentBoard[first] && pattern.every((idx)=> curentBoard[idx]=== curentBoard[first]))
            return curentBoard[first]
      }

      return null ;


   }

   const getStatusMessage = () => {
      const winner = calculatingWinner(board , WINNING_PATTERN);
      console.log(winner)
      if (winner) return `Player ${winner} Wins !`
      if (!board.includes(null))
         return `Is's a draw !`
      return `player ${isNext ? "X" : "O"}`

   }

   const resetMessage = () => {
      console.log("reset message ")
      setBoard(initialBoard(n))
      setIsNext(true)

   }

   return { board, handleClick, calculatingWinner, getStatusMessage, resetMessage }
}

export default useTicTacToe