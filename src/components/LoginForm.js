import React, { useState } from 'react';
import { Link } from "react-router-dom";
// function Login() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    // Verify that the provided email and password are not empty
//     if (!email || !password) {
//       setError("Please provide both email and password.");
//       return;
//     }
//     // Verify that the email is in the correct format
//     if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//       setError("Invalid email address.");
//       return;
//     }
//     try {
//       // check for username availability
//       const response = await checkUsername(username)
//       if (response.status === 'success' && !response.data.is_available) {
//         setError("Username already in use.");
//         return;
//       }
//       // Check the email and password against the server
//       const loginResponse = await checkCredentials(email, password);
//       if (loginResponse.status === 'success') {
//         // Start a session for the user
//         startSession(username);
//         setError("Welcome, "+username+"!");
//       } else {
//         setError("Invalid email or password.");
//       }
//     } catch (err) {
//       setError("Something went wrong, please try again later.");
//     }
//    };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Log in</button>
//       {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      
// <div>
// <Link className="Login" to="/main">
//           Donate
// </Link>
// </div>

//     </form>
//   );
// }

// export default Login;


class LoginForm extends React.Component {
    state = {
      email: '',
      password: '',
      error: '',
      isLoading: false,
    }
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      this.setState({ isLoading: true });
      try {
        const { data } = await fetch.post('/api/login', {
          email: this.state.email,
          password: this.state.password
        });
        // handle successful login, for example by storing the token in local storage
        localStorage.setItem('token', data.token);
      } catch (error) {
        this.setState({ error: error.response.data.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  
    render() {
      const { email, password, error, isLoading } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p>{error}</p>}
     <div>
        <Link className="Login" to="/main">
          Login
       </Link>
      </div>

        </form>
      );
    }
  }
  
  export default LoginForm;
