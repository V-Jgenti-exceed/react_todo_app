import React from 'react';
import axios from 'axios';
import { conf } from '../config/index';
import * as Helper from '../helpers/index';

class Filter extends React.Component {
    state = {
        All: 'All',
        Active: 'Active',
        done: 'Done',
        Clear: 'Clear',
        someText: 'someText',
    }

    changeState = (e) => {
        let newState = this.state
        for (let property in newState) {
            if (property === e.target.value) {
                newState[property] = 'All';
            } else {
                newState[property] = '';
            }
        }
        this.setState(newState);
    }

    filter = (e) => {
        this.changeState(e);
        this.props.changefilterState(e.target.value);
    }

    clearCompleted = (e) => {
        this.changeState(e);
        const token = Helper.gethTokenFromLocalStorage();
        const isEmpty = Helper.isEmpty(token);
        axios.delete(`${conf.heroUrl}task/delete`, { data: { done: true } }, { headers: { authorization: JSON.stringify(token) } })
            .then(res => {
                this.props.clearCompleted(res.data.result);
            })
            .catch(error => {
                console.log('err', error);
            })
    }

    render() {
        const contVisibility = this.props.arrayLength ? 'bottom_container_more' : 'bottom_container';
        const textChange = this.props.count < 2 ? 'item left' : 'items left';
        return (
            <div className={contVisibility}>
                <div className='buttons_container'>
                    <p className='text_counter'>{`${textChange} ${this.props.count}`}</p>
                    <button type="button" className={`button_style ${this.state.All}`} onClick={this.filter} value='All'>All</button>
                    <button type="button" className={`button_style ${this.state.Active}`} onClick={this.filter} value='Active'>Active</button>
                    <button type="button" className={`button_style ${this.state.Done}`} onClick={this.filter} value='Done'>Done</button>
                    <button type='button' className={`button_style ${this.state.Clear}`} onClick={this.clearCompleted} value='Clear'>Clear completed</button>
                </div>
            </div>
        )
    }
}

export { Filter }
