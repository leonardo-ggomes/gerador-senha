import { Fragment, useState } from 'react';
import './App.css';
import GeneratePassowrd from './components/GeneratePassword';
import ChooseSize from './components/ChooseSize';


function App() {

  const [isStart, setIsStart] = useState(true)
  const [number, setNumber] = useState(5) 

  const changeNumber = (e) => setNumber(e.target.value)

  return (
    <div className='container'>
      {
        isStart &&
        <>
          <ChooseSize initialValue={number} change={changeNumber} />
          <button className='btn-contained' onClick={() => setIsStart(false)} >Avançar</button>
        </>
      }

      {
         !isStart &&      
          <GeneratePassowrd length={number} />  
      }
     
    </div>
  ) 
}

export default App