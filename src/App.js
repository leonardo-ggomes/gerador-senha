import { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css';


function App() {

  const [copied, setCopied] = useState(false)
  const [password, setPassword] = useState('Your Password')

  const generate = () => {
    setPassword(randomPassword())
    setCopied(false)
  }

  const copy =  () => {
    copyToClipboard(password)
    setCopied(true)
  } 

  return (
    <div className='container'>
       <h3>Password Generate</h3>
       <ButtonCopied status={copied} click={copy} />
       <ButtonGenerate click={generate} />
       <div>{password}</div>
    </div>
  );
}

function ButtonGenerate({click}){
  return  <button className='btn-contained' onClick={click}>Generate</button>
}

function ButtonCopied({status, click}){
  return (
    <button className='btn-outlined' onClick={click}>
      {status ? <>Copied <FontAwesomeIcon icon={faCheck}/></>  : <>Copy <FontAwesomeIcon icon={faCopy}/></>}
    </button>
  )
}

async function copyToClipboard(text){
 await window.navigator.clipboard.writeText(text)
}

function randomPassword(){

  let password = ''
  let alpha = '1234567890@abcdefghijklmnopqrsuvwxyz';
  let max = 8

  for (let index = 0; index < max; index++) {  
    password += alpha[Math.ceil(Math.random() * alpha.length)]
  } 

   return password
}

export default App;
