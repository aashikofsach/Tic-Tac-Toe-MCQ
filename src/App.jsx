import { useState } from 'react'
import './App.css'
import TicTacToe from './components/TicTacToe'



function App() {

  const [input , setInput] = useState("");

  const n = Number(input) || 0 ;




 

  return (
    <>
     <div className='n-value'>
    <input type="text" placeholder='Enter the value of N*N' onChange={(e) => setInput(e.target.value)} value={input}/>
     </div>

    {
         n>0 && <TicTacToe n={n} />
    }
    </>
  
   
   
  )
}

export default App
