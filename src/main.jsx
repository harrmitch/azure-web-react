import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import { Provider } from 'react-redux'

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />}/>
  </Route>
)

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
