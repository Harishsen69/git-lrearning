import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple login logic (Dummy users)
    if (email === 'admin@example.com' && password === '123456') {
      localStorage.setItem('authToken', '123456token');
      localStorage.setItem('role', 'admin'); // ✅ Save role
      navigate('/dashboard');
    } 
    else if (email === 'staff@example.com' && password === '123456') {
      localStorage.setItem('authToken', '654321token');
      localStorage.setItem('role', 'staff'); // ✅ Save role
      navigate('/dashboard');
    } 
    else if (email === 'user@example.com' && password === '123456') {
      localStorage.setItem('authToken', '987654token');
      localStorage.setItem('role', 'user'); // ✅ Save role
      navigate('/dashboard');
    } 
    else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        /><br/><br/>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Home;
