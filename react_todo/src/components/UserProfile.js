import React from 'react';
import axios from 'axios';
import { conf } from '../config/index';
import * as Helper from '../helpers/index';
import { Button } from '@material-ui/core';
import { gethEmail } from '../actions/profileActions';
import { gethUsername } from '../actions/profileActions';
import { connect } from 'react-redux';

class UserProfile extends React.Component {

    componentDidMount() {
        const arr = ['googleToken', 'facebookToken', 'token'];
        let token = {};
        arr.forEach(e => {
            if (e != null && localStorage.getItem(`${e}`)) {
                token.identifyer = e;
                token.value = localStorage.getItem(`${e}`);

            }
        })

        if (token) {
            axios.get(`${conf.heroUrl}user/profile`, { headers: { authorization: JSON.stringify(token) } })
                .then(res => {
                    this.props.emaiLAction(res.data.user.email);
                    this.props.gethUsername(res.data.user.userName);
                })
        }
    }

    render() {
        const { email, userName } = this.props.profile;
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

const mapStateToProps = state => {
    return {
        profile: state.profileState,
    }
}

const mapDispatchToProps = dispatch => ({
    emaiLAction: email => dispatch(gethEmail(email)),
    gethUsername: userName => dispatch(gethUsername(userName)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(UserProfile);
