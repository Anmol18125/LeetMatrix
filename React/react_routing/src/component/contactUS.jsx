import React from 'react';
import { useNavigate } from 'react-router-dom';
// import home from './home'
const ContactUS = () => {
  const navigate=useNavigate();
  function handleClickk()
  {
    navigate('/')
  }
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the Contact Us page.</p>
      <button onClick={handleClickk}>Go to Home page</button>

    </div>
  );
};

export default ContactUS;
