import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Style
import './index.css'

// Components
import App from './App.jsx'
// import RampexMERNTraining from './components/private.jsx'

import JQueryButton from './components/practice.tsx'

const route = createBrowserRouter([
  {path: "/portfolio/", element: <App/>},
  // {path: "/private", element: <RampexMERNTraining/>}
  {path: "/portfolio/test", element: <JQueryButton/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
