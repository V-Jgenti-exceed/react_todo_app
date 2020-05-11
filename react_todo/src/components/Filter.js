import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Filter extends React.Component {
    state = {
        All: '',
        Active: '',
        Done: '',
    }

    filter = (e) => {
        let newState = {...this.state};
        for (let property in newState) {
            if (property === e.target.value) {
                newState[property] = 'button_active';
            } else {
                newState[property] = '';
            }
        }
        this.setState(newState);
        this.props.changefilterState(e.target.value);
    }

    render() {
        const contVisibility = this.props.arrayLength ? 'bottom_container_more' : 'bottom_container';

        return (
            <div className={contVisibility}>
                <p>count:{this.props.count}</p>
                <div className='buttons_container'>
                    <button type="button" className={`button_style ${this.state.All}`} onClick={this.filter} value='All'>All</button>
                    <button type="button" className={`button_style ${this.state.Active}`} onClick={this.filter} value='Active'>Active</button>
                    <button type="button" className={`button_style ${this.state.Done}`} onClick={this.filter} value='Done'>Done</button>
                </div>
                <button type='button' className='clear_completed' value='Clear_Comp'>Clear completed</button>
            </div>
        )
    }
}

export { Filter }
