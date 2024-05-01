import React from 'react'

const Inhead = ({color,hexavalue,isdark}) => {
  return (
    <div>
      <section
        className='square'
        style={{backgroundColor:color,
                color:isdark? "#000" : "#fff"
            }}  
      >
        <p className='color'>{color?color:"Empty color"}</p>
        <p>{hexavalue? hexavalue:"#---"}</p>
      </section>
    </div>
  )
}

export default Inhead
