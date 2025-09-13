import React, { useState } from 'react'

export const HideShowPass = () => {
    const [pass, setpass]=useState(false);
  return (
    <div>
        <input type={(pass)?"text":"password"}/>
        <button onClick={()=>setpass(!pass) }>{(pass)?"hide":"show "}</button>
    </div>
  )
}

