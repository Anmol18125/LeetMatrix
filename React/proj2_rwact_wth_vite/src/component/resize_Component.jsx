import React, { useEffect, useState } from 'react'

function resize_Component() {
    const[windowsixe,setsize]=useState(window.innerWidth)
    useEffect(()=>{
        const handleResize=()=>setsize(window.innerWidth)
        console.log('event listerner adderd')
        window.addEventListener('resize',handleResize);  
        
        
        
        return()=>{
        console.log('event removed')
        window.removeEventListener('resize',handleResize)
        
    }
    },[])
  
  return (
    <div>
        
<h1>Window Width{windowsixe}px</h1>
      
    </div>
  )
}

export default resize_Component
