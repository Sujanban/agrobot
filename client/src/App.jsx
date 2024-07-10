import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/Dashboard'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />



        {/* protected routes */}
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
