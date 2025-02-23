import React, { useState } from 'react';
import Input from './Input.jsx';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form default behavior
    try {
      const response = await axios.post('http://localhost:8000/signUp', formData);
      alert(response.data.message);
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed! Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Enter your name" onChange={handleInput} value={formData.name} />
        <Input type="email" name="email" placeholder="Enter your email" onChange={handleInput} value={formData.email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
