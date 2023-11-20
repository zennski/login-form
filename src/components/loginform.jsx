import React, { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput'; // Import the new TextInput component

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'root' && password === 'root') {
      // Login successful
      alert('Login Successful');
    } else {
      // Login unsuccessful
      alert('Login Unsuccessful');
    }
  };

  // Check if both the username and password fields are filled
  const isLoginDisabled = !username || !password;

  return (
    <div data-testid="app-container" className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded-sm shadow-md w-[300px] h-[300px]">
        <h2 className="font-bold text-lg mb-2 text-black ">SIMPLE LOGIN FORM</h2>
        <TextInput
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          disabled={isLoginDisabled}
          className={`w-[100px] p-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm ${
            isLoginDisabled ? 'bg-gray-400 cursor-not-allowed' : ''
          }`}
          onClick={handleLogin}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Login;