import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import {  createBrowserRouter,  RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
      },
      {
        path: "/home",
        element: <App/>,
          },{
            path: "/Productos",
            element: <App/>,
              },
      {
        path: "about",
        element: (<div>About</div>),
      },]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* //   <App /> */}
  <RouterProvider router={router} />
  </React.StrictMode>
)