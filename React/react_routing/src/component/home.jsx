import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './home.css'

// import About from './about';
const home = () => {
  const navigate=useNavigate();
  function handleClickToAbout()
  {
    navigate('./about')
  }

  function handleClickToDashboard()
  {
    navigate('./dashboard')
  }
  function handleClickToContactUs(){
    navigate("./contactUS")
  }
  
  return (
    <div>
      home

      <button id='ubtn'  onClick={handleClickToAbout}>Move To about </button>

      <button id='ubtn'  onClick={handleClickToDashboard}>Move To Dashboard </button>
      <button id='ubtn'  onClick={handleClickToContactUs}>Move To Contact Us </button>
     

      
         </div>
  )
}

export default home
