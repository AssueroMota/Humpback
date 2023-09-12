import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Banner from './components/Banner/Banner.jsx';
import Description from './components/Description/Description.jsx';
import Movies from './components/Movies/Movies';
import Photos from './components/Photos/Photos';
import Possibilities from './components/Possibilities/Possibilities';
import Location from './components/Location/Location';
import Commission from './components/Commission/Commission';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


  

import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Banner',
    element: <Banner />
  },
  {
    path: '/Description',
    element: <Description />
  },
  {
    path: '/Movies ',
    element: <Movies />
  },
  {
    path: '/Photos',
    element: <Photos />
  },
  {
    path: '/Possibilities',
    element: <Possibilities />
  },
  {
    path: '/Location',
    element: <Location />
  },
  {
    path: '/Commission',
    element: <Commission />
  }, {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Footer',
    element: <Footer />
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
