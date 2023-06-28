import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Layouts/Main';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"skills",
        element:<Skills></Skills>
      },
      {
        path:"projects",
        element:<Projects></Projects>
      },
      {
        path:"about",
        element:<About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div  className='max-w-screen-xl mx-auto font-serif '>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
