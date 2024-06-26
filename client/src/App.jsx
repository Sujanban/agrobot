import { Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Contact from './pages/Contact'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
