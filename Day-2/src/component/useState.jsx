import React from "react";
import { useState } from "react";

export const UseState = () => {
    const [state, setState]=useState(0);
  return(
    <>
    <h1>Result {state}</h1>
    <button onClick={()=>setState(state+1)}>increment</button>
    <button onClick={()=>setState(state-1)}>decrement</button>
    </>
  )
  
};
