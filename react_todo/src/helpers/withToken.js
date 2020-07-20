import React from 'react';
import * as Helper from './index';
import { SignIn } from '../RegAuth/SignIn';
import { conf } from '../config/index';
import axios from 'axios';

export const withToken = (Component) => {
    return class Valid extends React.Component {
        state = {
            validation: false,
            // authorization: null,
        }

        componentDidMount() {
            const token = Helper.getTokenFromLS();
            if (token) {
                axios.get(`${conf.localHost}task/get`, { headers: { authorization: token } })
                    .then(res => {
                        this.setState({ validation: true });
                    })
                    .catch(error => {
                        if (error.response.status === 403) {
                            alert('Your session is expired please relogin');
                            localStorage.clear()
                            this.props.history.push('/login')
                        }
                        console.log(error);
                    })
            } else {
                this.props.history.push('/login');
            }
        };

        render() {
            if (this.state.validation) {
                return (
                    <Component />
                )
            } else {
                return (
                    <SignIn />
                )
            }
        }

    }
}
