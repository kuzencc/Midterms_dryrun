import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Records from './pages/Records'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}>Home</Route>
      <Route path='/dashboard' element={<Dashboard />}>Dashboard</Route>
      <Route path='/records' element={<Records />}>Records</Route>
    </Routes>
    </>
  )
}

export default App
