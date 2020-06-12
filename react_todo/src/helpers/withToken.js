import React from 'react';
import * as Helper from './index';
import { SignIn } from '../RegAuth/SignIn';

export const withToken = (Component) => {
    return class Valid extends React.Component {
        state = {
            validation: false
        }

        componentDidMount = () => {
            const token = Helper.getTokenFromLS();
            if (token) {
                this.setState({ validation: !false });
            } else {
                this.props.history.push('/login');
            }
        }
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
