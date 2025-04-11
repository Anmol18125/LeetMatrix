import React from 'react'
import { useNavigate } from 'react-router-dom'

const about = () => {
  const navi=useNavigate();
  function handleclick()
  {
    navi('/contactUS')
  }
  return (
    <div>
      about

      <button type="button" id='ubtn' onClick={handleclick}>Click For Contact US</button>
    </div>
  )
}

export default about
