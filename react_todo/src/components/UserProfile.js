import React from 'react';
import axios from 'axios';
import { conf } from '../config/index';
import * as Helper from '../helpers/index';
import { Button } from '@material-ui/core';

class UserProfile extends React.Component {
    state = {
        userName: '',
        email: '',
        date: null,
        authorization: null,
        newPassword: '',
    }

    componentDidMount() {
        const token = Helper.getTokenFromLS();
        if (token) {
            axios.get(`${conf.localHost}user/profile`, { headers: { authorization: token } })
                .then(res => {
                    this.setState({ userName: res.data.user.userName, email: res.data.user.email })
                })
        }
    }


      

    render() {
        const { userName, email } = this.state;
        return (
            <div className={this.props.showHide}>
                <div className='circle' title='user profile'></div>
                <div className='info'>
                    <p><span>USERNAME: </span>{userName}</p>
                    <p><span>EMAIL: </span>{email}</p>
                    <Button variant="outlined" onClick={this.props.logout}>Log out</Button>
                </div>   
            </div>
        )
    }

}

export { UserProfile };
