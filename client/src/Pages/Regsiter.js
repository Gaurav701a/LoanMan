import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'react-router-dom';

const Register = () => {
  const Navigate = useNavigate();
  const { addToast } = useToasts();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'borrower', // Default role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handledirect = () => {
    Navigate("/login");
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/user/register", formData);

      if (res.data.success) {
        addToast(res.data.message, { appearance: "success" });
        Navigate("/login");
      }

    } catch (error) {
      console.log(error);
      // You may want to display an error toast here
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Registration</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Choose Your Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option value="admin">Admin</option>
              <option value="borrower">Borrower</option>
              <option value="lender">Lender</option>
            </select>
          </div>
          <div className='flex flex-row justify-between'>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={handledirect}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
