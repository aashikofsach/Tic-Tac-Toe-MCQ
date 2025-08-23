import React, { useState } from 'react'

const initialBoard = (n) => Array(n*n).fill(null);


function useTicTacToe(n) {

         const [board , setBoard] = useState(initialBoard(n));
         const [isNext , setIsNext] = useState(true)

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
         const generatePatterns = (n)=>
         {
            let patterns = [] ;

            //rows
            for(let i=0 ; i<n ; i++)
            {
               let row = [];
               for(let j=0 ; j<n ; j++)
                  {
                     row.push(i*n + j)
                  } 
                  patterns.push(row)
            }

            return patterns
         }

         const WINNING_PATTERN = generatePatterns(n);

         

console.log(WINNING_PATTERN)

         const handleClick = (index) =>{
            console.log("handle click")
            let winner = calculatingWinner(board)
            console.log(winner)
            if(winner || board[index]) return ;

            const newBoard = [...board];
            newBoard[index] = isNext? "X" : "O";
            setBoard(newBoard);
            setIsNext((prev)=>!prev)
         }

         const calculatingWinner = (curentBoard) =>
         {
            for(let i=0 ; i<WINNING_PATTERN.length ; i++)
            {
               const [a,b,c] = WINNING_PATTERN[i];
               if(curentBoard[a] && curentBoard[a]=== curentBoard[b]&& curentBoard[a]===curentBoard[c])
               {
                  return curentBoard[a];
               }
            }
            console.log(curentBoard)
            return null ;
            

         }

         const getStatusMessage = () =>
         {
            const winner = calculatingWinner(board);
            console.log(winner)
            if(winner) return `Player ${winner} Wins !`
            if(!board.includes(null)) 
               return `Is's a draw !`
            return `player ${isNext ? "X": "O"}`

         }

         const resetMessage = () => {
            console.log("reset message ")
            setBoard(initialBoard(n))
            setIsNext(true)

         }

  return {board,handleClick,calculatingWinner,getStatusMessage,resetMessage }
}

export default useTicTacToe