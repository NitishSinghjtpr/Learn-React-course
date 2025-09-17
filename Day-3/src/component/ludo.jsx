import React, { useState } from 'react'

export const Ludo = () => {
    let [count, setCount]=useState({red:0,blue:0,green:0,yellow:0});
    let updateGreen=()=>{
        count.green+=1;
        setCount({...count})
    }
    let updateRed=()=>{
        count.red+=1;
        setCount({...count})
    }
    let updateBlue=()=>{
        count.blue+=1;
        setCount({...count})
    }
    let updateYellow=()=>{
        count.yellow+=1;
        setCount({...count})
    }
  return (
    <>
    <div style={{backgroundColor:'gray'}} >
        <p>Color Count</p>
        <p>Greem moves = {count.green}</p>
        <button style={{backgroundColor:'green', color:'white'}} onClick={updateGreen}>+1</button>
        <p>Red moves = {count.red}</p>
        <button style={{backgroundColor:'red',color:'white'}} onClick={updateRed}>+1</button>
        <p>Blue moves ={count.blue}</p>
        <button style={{backgroundColor:'blue', color:'white'}} onClick={updateBlue}>+1</button>
        <p>Yellow moves ={count.yellow}</p>
        <button style={{backgroundColor:'yellow'}} onClick={updateYellow}>+1</button>
    </div>
    </>
  )
}
