import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { config } from '../'
import { heroUrl } from '../config/index';

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
    axios.post(`${heroUrl}user/reg`, {
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email,
    })
  };

  render() {
    return (
      <div className='registration'>
        <div className='registration_elements'>
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
            variant="outlined"
            color="primary"
            onClick={this.completeReg}
          >
            registration
        </Button>
          <Button
            href='/'
          >
            Already have account? sign in
          </Button>
        </div >
      </div>
    )
  }
}

export { SignUp }
