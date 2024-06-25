import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Button } from "@/components/ui/button"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </>
  )
}

export default App
