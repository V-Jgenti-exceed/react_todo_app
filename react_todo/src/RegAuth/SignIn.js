import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
    };

    emailFunc = (e) => {
        let emil = e.target.value;
        this.setState({ email: emil });
    };

    passwordFunc = (e) => {
        let pass = e.target.value;
        this.setState({ password: pass });
    };

    loginInFunc = () => {
        axios.post('http://localhost:4000/auth/login', {
            email: this.state.email,
            password: this.state.password,
        });
    };

    render() {
        return (
            <div className='signIn'>
                <h3>Enter in your account</h3>
                <TextField id="outlined-basic" label="Your @" variant="outlined" onChange={this.emailFunc} />
                <TextField id="outlined-basic" label="Your password" variant="outlined" onChange={this.passwordFunc} />
                <Button variant="outlined" color="primary" onClick={this.loginInFunc}>
                    Log in
                </Button>
            </div>
        )
    }
}

export { SignIn }
