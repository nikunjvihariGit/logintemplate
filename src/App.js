import Login from './pages/Login';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="*" element={<div>Page Not Found</div>} />

      <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
