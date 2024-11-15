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
import Productdeatails from './componants/product-details/Productdeatails';
import Layout from './componants/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from './Store';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[{
path:"",
element :< App/>,

    }],
    errorElement: < Errorpage/>
  },
  {
    path: "/sign-up",
    element: <Signup />
  },
  {
    path: "/sign-in",
    element: <Signin />
  },
  {
path:"/Productdeatails/:Product_id",
element:<Productdeatails/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   
    <RouterProvider  router={router}/>
    </Provider>
);

