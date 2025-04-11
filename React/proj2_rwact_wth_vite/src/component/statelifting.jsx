import React from 'react'
import './statelifing.css'
const statelifting = (props) => {
  return (
    <div style={props.style}>
        <input type="text"  onChange={(e)=>props.setname(e.target.value)}/>
       
      <p>this is from  :{props.tittle}:{props.name}</p>
      <p>this is from  :{props.tittle}:{props.name}</p>
    </div>
  )
}

export default statelifting
