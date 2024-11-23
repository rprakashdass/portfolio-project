import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Style
import './index.css'

// Components
import App from './App.jsx'
import Portfolio from './Pages/Portfolio/Portfolio.jsx';

const route = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/portfolio", element: <Portfolio/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
