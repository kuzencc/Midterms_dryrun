import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Records from './pages/Records'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login','/register'];
  return (
    <>
    {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
    <Routes>
      <Route path='/login' element={<Login/>}>Login</Route>
      <Route path='/register' element={<Register/>}>Register</Route>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path='/dashboard' element={<Dashboard />}>Dashboard</Route>
      <Route path='/records' element={<Records />}>Records</Route>
    </Routes>
    </>
  )
}

export default App
