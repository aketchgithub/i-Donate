import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verify that the provided email and password are not empty
    // if (!email || !password) {
    //   setError("Please provide both email and password.");
    //   return;
    // }
    // // Verify that the email is in the correct format
    // if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //   setError("Invalid email address.");
    //   return;
    // }
    // try {
    //   // check for username availability
    //   const response = await checkUsername(username)
    //   if (response.status === 'success' && !response.data.is_available) {
    //     setError("Username already in use.");
    //     return;
    //   }
    //   // Check the email and password against the server
    //   const loginResponse = await checkCredentials(email, password);
    //   if (loginResponse.status === 'success') {
    //     // Start a session for the user
    //     startSession(username);
    //     setError("Welcome, "+username+"!");
    //   } else {
    //     setError("Invalid email or password.");
    //   }
    // } catch (err) {
    //   setError("Something went wrong, please try again later.");
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Link className='login' to="/main">
        <button>Login</button>
      </Link>

    </form>
  );
}

export default Login;
