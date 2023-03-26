import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './componant/loginpage';
import Menupage from './componant/menupage';
import Propospage from './componant/propospage';
import Contactpage from './componant/contactpage';
import Registration from './componant/RegistrationPage';
import Adminpage from './componant/adminpage';


  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },

    {
      path: "/loginpage",
      element: <LoginPage />,
    },

    {
      path: "/menupage",
      element: <Menupage />,
    },

    {
      path: "/propospage",
      element: <Propospage />,
    },

    {
      path: "/contactpage",
      element: <Contactpage />,
    },

    {
      path: "/registraionpage",
      element: <Registration />,
    },

    {
      path: "/adminpage",
      element: <Adminpage />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


