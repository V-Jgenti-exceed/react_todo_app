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
            const token = Helper.gethTokenFromLocalStorage();
            const isEmpty = Helper.isEmpty(token);
            if (token && !isEmpty) {
                axios.get(`${conf.heroUrl}task/get`, { headers: { authorization: JSON.stringify(token) } })
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
