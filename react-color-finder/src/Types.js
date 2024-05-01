import React from 'react'
import colorNames from 'colornames';

const Types = ({color,setcolor,sethexavalue,isdark,setisdark}) => {
  return (
    <form action="html" onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="">Type your Color : </label>
        <input type="text"
            autoFocus 
            required
            placeholder='Color'
            value={color}
            onChange={
                (e)=>{
                    setcolor(e.target.value)
                    sethexavalue(colorNames(e.target.value))
                }
            }
        />
        <button
            onClick={()=> setisdark(!isdark)}
        >Toggle your Color</button>
    </form>
  )


}

export default Types
