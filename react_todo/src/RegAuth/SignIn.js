import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as Helper from '../helpers';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { heroUrl } from '../config/index';

class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
        redirect: false,
        emailValidationError: false,
        passwordValidationError: false,
    };

    emailFunc = (e) => {
        let email = e.target.value;
        if (email.length < 5) {
            this.setState({ emailValidationError: true, email: email });
        } else {
            this.setState({ emailValidationError: false, email: email });
        }
    };

    passwordFunc = (e) => {
        let pass = e.target.value;
        if (pass.length < 5) {
            this.setState({ passwordValidationError: true, password: pass });
        } else {
            this.setState({ passwordValidationError: false, password: pass });
        }
        this.setState({ password: pass });
    };

    validationFunc = () => {
        const { email, password } = this.state;
        if (!email) {
            this.setState({ emailValidationError: true });
        } else {
            this.setState({ emailValidationError: false });
        }
        if (!password) {
            this.setState({ passwordValidationError: true });
        } else {
            this.setState({ passwordValidationError: false });
        }
    };

    render() {
        const loginInFunc = () => {
            const { email, password } = this.state;
            if (!email && !password) {
                this.setState({ emailValidationError: true, passwordValidationError: true });
                return;
            }
            this.validationFunc();
            axios.post(`${heroUrl}auth/login`, {
                email: this.state.email,
                password: this.state.password,
            })
                .then(res => {
                    Helper.setTokenLS(res.data.token);
                    this.setState({ redirect: !false });
                    if (this.state.redirect) {
                        setTimeout(this.props.history.push('/'), 4000);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        };

        const registerFunc = () => {
            this.props.history.push('/register');
        }

        return (
            <div className='signIn'>
                <div className='signIn_element'>
                    <FormControl
                        error={this.state.emailValidationError}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={this.emailFunc} />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl
                        error={this.state.passwordValidationError}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={this.passwordFunc} type='password' />
                        <FormHelperText id="my-helper-text">Enter Password here></FormHelperText>
                    </FormControl>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={loginInFunc}
                    >
                        Log in
                 </Button>
                    <Button
                        onClick={registerFunc}
                    >
                        Register account
                 </Button>
                </div>
            </div>
        )
    }
}

export { SignIn }
