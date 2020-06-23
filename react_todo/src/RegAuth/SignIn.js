import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as Helper from '../helpers';
import { FormControlLabel, FormGroup, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { conf } from '../config/index';
import Switch from '@material-ui/core/Switch';

class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
        redirect: false,
        emailValidationError: false,
        passwordValidationError: false,
        isChecked: false,
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

    checkedFunc = (e) => {
        if (e.target.checked) {
            this.setState({ isChecked: true })
        } else {
            this.setState({ isChecked: false })
        }
    }

    render() {
        const changeBackground = this.state.isChecked ? "background_false" : "signIn";
        const loginInFunc = () => {
            const { email, password } = this.state;
            if (!email && !password) {
                this.setState({ emailValidationError: true, passwordValidationError: true });
                return;
            }
            this.validationFunc();
            axios.post(`${conf.localHost}auth/login`, {
                email: this.state.email,
                password: this.state.password,
            })
                .then(res => {
                    Helper.setTokenLS(res.data.token);
                    this.setState({ redirect: true });
                    if (this.state.redirect) {
                        this.props.history.push('/');
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
            <div className={`${changeBackground}`}>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch size="small" checked={this.state.isChecked} onChange={this.checkedFunc} />}
                        label="Switch Colors"
                    />
                </FormGroup>
                <div className='signIn_element'>
                    <FormControl
                        error={this.state.emailValidationError}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input aria-describedby="my-helper-text" onChange={this.emailFunc} />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl
                        error={this.state.passwordValidationError}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input aria-describedby="my-helper-text" onChange={this.passwordFunc} type='password' />
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
