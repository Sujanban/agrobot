import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Weather from './pages/dashboard/Weather';
import Farmbot from './pages/dashboard/Farmbot';
import Diseasepredictor from './pages/dashboard/Diseasepredictor';
import Users from './pages/dashboard/Users';
import Testimonials from './pages/dashboard/Testimonials';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Routes */}
        {user ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/farmbot" element={<Farmbot />} />
            <Route path="/diseasepredictor" element={<Diseasepredictor />} />
            <Route path="/users" element={<Users />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
