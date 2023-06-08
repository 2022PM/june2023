import './App.css';
import { useState } from 'react';

function Button({value}){

  const[hit,sethit]=useState(value);
  function play()
  {
    sethit('X');
  }
  function douplay()
  {
    sethit('D');
  }

  return(
    <div>
      <button className='bg-blue-500 text-white  border border-green-900 p-2' onClick={play} onDoubleClick={douplay}>{hit}</button>
    </div>
  );
}


function App() {
  return (
    <div>
    <div className='flex'>
      <Button value='1'/>
      <Button value='2'/>
      <Button value='3'/>
    </div>
    <div className='flex'>
      <Button value='4'/>
      <Button value='5'/>
      <Button value='6'/>
    </div>
    <div className='flex'>
      <Button value='7'/>
      <Button value='8'/>
      <Button value='9'/>
    </div>
    </div>   
  );
}

export default App;
