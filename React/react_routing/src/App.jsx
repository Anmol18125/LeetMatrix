import React from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import Home from './component/home';
import Dashboard from './component/dashboard';
import About from './component/about';
import Test from './component/test'
import Report from './component/report'
import Parameter from './component/parameter';
import Course from './component/course'
import Navbar from './component/navbar';
import Form from'./component/formUsingReacthook';
import ContactUS from './component/contactUS'; // Import the ContactUS component
import './App.css';
import Notfound from './component/notfound'

const router = createBrowserRouter([
  {
    path:'*',
    element:<Notfound />
  },
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
},
  {
    path: '/dashboard',
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: 'course',
        element: <Course />,
      },
      {
        path: 'report',
        element: <Report />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: '/about',
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: '/contactUS',
    element: (
      <div>
        <Navbar />
        <ContactUS />
      </div>
    ),
  },
  {
    path:'/:id',
    element:(
      <div>
        <Navbar/>
        <Parameter />
        
      </div>
    ),


  },
 {
  path:'/formUsingReacthook',
  element:(
    <div>
      <Navbar />
      <Form />
    </div>
  ),
 },
]);






function App() {
  
  return (
    
      <RouterProvider router={router} />  

      
  );
}

export default App;