import { useState } from 'react';
import './App.css';
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register"; // Corrected import
import Login from './Pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'; // Corrected import
import PublicRoute from './Components/PublicRoute'; // Corrected import

function App() {
  // const [bankinfo,setbankinfo]=useState([]);

  // const roledata=bankinfo.role;

  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Homepage />
        </ProtectedRoute>
      } />

      <Route path='/register' element={ // Corrected path
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />

      <Route path='/login' element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
    </Routes>
  );
}

export default App;
