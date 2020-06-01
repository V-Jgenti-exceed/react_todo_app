import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    userName: "",
    password: "",
    email: "",
  };

  usernameFunc = (e) => {
    let userName = e.target.value;
    this.setState({ userName: userName })
  };

  emailFunc = (e) => {
    let email = e.target.value;
    this.setState({ email: email })
  };

  passwordFunc = (e) => {
    let password = e.target.value;
    this.setState({ password: password });
  };

  completeReg = () => {
    axios.post('http://localhost:4000/user/reg', {
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email,
    })
  };

  render() {
    return (
      <div className='registration'>
        <h3>Registration</h3>
        <TextField
          id="standard-secondary"
          label="Enter username"
          color="secondary"
          onChange={this.usernameFunc}
        />
        <TextField
          id="standard-secondary"
          label="Enter your @"
          color="secondary"
          onChange={this.emailFunc}
        />
        <TextField
          id="standard-secondary"
          label="Enter password"
          color="secondary"
          onChange={this.passwordFunc}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.completeReg}
        >
          registration
        </Button>
      </div>
    )
  }
}

export { SignUp }