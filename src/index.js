import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    Link,
    RouterProvider,
  } from "react-router-dom";
import App from './App';
import Signup from './componants/outh/Signup/Signup';
import Signin from './componants/outh/Signin/Signin';


import Errorpage from './componants/error/Errorpage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: < Errorpage/>
  },
  {
    path: "/sign-up",
    element: <Signup />
  },
  {
    path: "/sign-in",
    element: <Signin />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    // <App />
    <RouterProvider  router={router}/>
  
);

