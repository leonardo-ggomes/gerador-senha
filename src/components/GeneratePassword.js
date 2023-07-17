import { useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


export default function GeneratePassowrd({length}) {

  const [copied, setCopied] = useState(false)
  const [password, setPassword] = useState('Your Password')

  const generate = () => {
    setPassword(randomPassword(length))
    setCopied(false)
  }

  const copy =  () => {
    copyToClipboard(password)
    setCopied(true)
  } 

  return (
    <div>
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

function randomPassword(chosenSize = 5){

  let password = ''
  let alpha = '1234567890@abcdefghijklmnopqrsuvwxyz';
  let size = chosenSize

  for (let index = 0; index < size; index++) {  
    password += alpha[Math.floor(Math.random() * alpha.length)]
  } 

   return password
}