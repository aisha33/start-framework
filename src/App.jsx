import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Home from './components/Home/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Portofilio from './components/Portofilio/Portofilio'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portofilio", element: <Portofilio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
