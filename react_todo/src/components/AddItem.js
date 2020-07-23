import React from 'react';
import axios from 'axios';
import { conf } from '../config/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Helper from '../helpers/index';

class AddItem extends React.Component {
    state = {
        plan: '',
        done: false,
        id: '',
        editMode: false,
        onClick: false,
    }

    onHandleChange = (e) => {
        this.setState({ plan: e.target.value });
    }

    //Notifications 
    notify = (plan) => {
       return toast(`${plan} Added succesfully`);
    }

    addByEnter = (e) => {
        if (e.key === 'Enter' && localStorage.getItem('token') === null) {
            window.location = `https://frontapptodo.herokuapp.com/`;
        } else if (e.key === 'Enter') {
            if (!this.state.plan.trim()) {
                return;
            }
            const plan = this.state.plan;
            const token = Helper.gethTokenFromLocalStorage();
            const isEmpty = Helper.isEmpty(token);
           return this.notify(plan),
                axios.post(`${conf.heroUrl}task/create`, { plan }, { headers: { authorization: JSON.stringify(token) } })
                    .then(res => {
                        this.props.createItem(res.data.result);
                        this.setState({ plan: '' });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
        }
    };

    checkAllFunc = () => {
        if (localStorage.getItem('token') === null) {
            window.location = 'https://frontapptodo.herokuapp.com/';
        } else {
            const token = Helper.gethTokenFromLocalStorage();
            const isEmpty = Helper.isEmpty(token);
            axios.put(`${conf.heroUrl}task/checkall`, { done: !this.state.done }, { headers: { authorization: JSON.stringify(token) } })
                .then(res => {
                    this.props.checkAll(res.data.result);
                    this.setState({ done: !this.state.done });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {
        const { plan } = this.state;
        const targetValue = this.props.item > 0 ? 'more_then_one' : 'lower_then_one';
        const changeOnClick = this.props.click ? 'more_then_one' : 'clicked';
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <ToastContainer
                        autoClose={2000}
                    />
                    <button className={`${targetValue} ${changeOnClick}`} onClick={this.checkAllFunc} title='Click for check and uncheck plans'>❱</button>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="What needs to be done?"
                        value={plan}
                        onChange={this.onHandleChange}
                        onKeyPress={this.addByEnter}
                    >
                    </input>
                </div>
            </div>
        )
    }
}

export { AddItem } 
