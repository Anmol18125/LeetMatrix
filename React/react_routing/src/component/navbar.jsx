import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import HOME from './home';
import ABOUT from './about';
import DASHBOARD from './dashboard';
import CONTACTUS from './contactUS';
import './navBar.css'
const Navbar = () => {
  return (
    <div className='Container'>
      <ul>
        <li><NavLink  to='/' className={({isActive})=> isActive?'active-link':''}>HOME</NavLink></li> {/* Use Link instead of link */}
        <li><NavLink className={({isActive})=> isActive?'active-link':''} to='/about'>ABOUT</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'active-link':''} to='/dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'active-link':''} to='/contactUS'> CONTACTUS</NavLink></li>
        <li><NavLink to ='/formUsingReacthook'>FORM</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
