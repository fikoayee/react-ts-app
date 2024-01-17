// src/components/Login.tsx
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<any[]>([]); // State to store fetched users

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error during user fetching', error);
    }
  };

  const handleLogin = () => {
    // Fetch users on login attempt
    fetchUsers();

    // Check if entered email and password match any user
    const matchedUser = users.find(user => user.email === email && user.address.zipcode === password);

    if (matchedUser) {
      // Successful login simulation (you can add further actions here)
      console.log('Login successful');
    } else {
      // Failed login simulation
      console.error('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
