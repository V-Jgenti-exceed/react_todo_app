import React from 'react';
import Loaderfiles from '../importFiles/Loaderfiles';
import * as Helper from '../helpers/index';
import { conf } from '../config/index';
import axios from 'axios';

export const withLoader = (Component) => {
    return class Loader extends React.Component {
        state = {
            load: false,
            authorization: null,
        }

        UNSAFE_componentWillMount() {
            this.setState({ load: true });
        };

        componentDidMount() {
            const token = Helper.getTokenFromLS();
            if (token) {
                axios.get(`${conf.localHost}task/get`, { headers: { authorization: token } })
                    .then(res => {
                        this.setState({ load: false });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        };

        render() {
            if (this.state.load) {
                return (
                    <Loaderfiles />
                )
            } else {
                return (
                    <Component />
                )
            }
        }
    }
}
