import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// Style
import './index.css'

// Components
import App from './App.jsx'
import Tasks from './private/Tasks/Tasks.jsx';

const route = createBrowserRouter([
  {path: "/portfolio/", element: <App/>},
  {path: "/portfolio/tasks", element: <Tasks/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
