import { useState } from 'react'


function App() {
  let [count ,setCount]=useState(0)

  function increaseNumber(){
    count+=2;
    setCount(count)
  }

  return (
    <>
    <p>counter={count}</p>
    <button onClick={increaseNumber}>counter: {count}</button>
      
    </>
  )
}

export default App
