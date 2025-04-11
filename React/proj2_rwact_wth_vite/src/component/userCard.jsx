import React from 'react';
import './userCard.css';
import userpic from '../assets/Anmol.jpg';

const UserCard = (props) => {

  return (
    <div className="user-container" style={props.style}>
      <p id="username">{props.name||'Anmol Ray'} </p>
      <img src={props.img || userpic} alt={props.name} id='user-img' />

      <p id="user-disc" >{props.discription||'discription'}</p>
    </div>
  );
};

export default UserCard;
