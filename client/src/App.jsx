import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Weather from './pages/dashboard/Weather'
import Farmbot from './pages/dashboard/Farmbot'
import Diseasepredictor from './pages/dashboard/Diseasepredictor'
import Users from './pages/dashboard/Users'


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
        <Route path="/weather" element={<Weather/>} />
        <Route path="/farmbot" element={<Farmbot/>} />
        <Route path="/diseasepredictor" element={<Diseasepredictor/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </>
  )
}

export default App
