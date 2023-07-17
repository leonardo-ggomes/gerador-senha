import '../App.css';


export default function ChooseSize({change, initialValue}) {

  return (
    <div>
       <h3>Choose your password length</h3>
       <LenghtPassword size={initialValue} setSize={change} />
    </div>
  );
}

function LenghtPassword({setSize, size}){
  return <input onChange={setSize} 
                type='number' 
                min={5}
                value={size}
                className='input-number'/>
}