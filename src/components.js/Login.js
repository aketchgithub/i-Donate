import React from 'react';
import axios from 'axios';

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
      const { data } = await axios.post('/api/login', {
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
      </form>
    );
  }
}

export default LoginForm;