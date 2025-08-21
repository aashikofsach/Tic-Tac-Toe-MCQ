import { useState } from 'react'
import './App.css'


const initialBoard = () => Array(9).fill(null);

function App() {

  const [board , setBoard] = useState(initialBoard());
  console.log(board)

  return (
    <div className='game'>
      <div className='status'>
        Player X turn
        <button className='reset'>Reset Game</button>
      </div>
      <div className='board'>
        {
          board.map((_, index)=> <button className='cell' key={index}>X</button>)
        }
      </div>

    </div>
   
  )
}

export default App
