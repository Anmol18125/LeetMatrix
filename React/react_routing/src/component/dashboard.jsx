// Dashboard Component (Ensure it includes <Outlet>)
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navi=useNavigate();
function handleClick()
{
navi('/hme')
}
  return (
    <div>
      
      <h1>Dashboard</h1>
      {/* Placeholder for nested routes */}
      <button type="button" id='ubtn' onClick={handleClick}>Go To HomePage</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
