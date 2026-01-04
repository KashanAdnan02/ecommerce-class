import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import { Toaster } from "react-hot-toast"
import Product from './pages/Product'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Product />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
