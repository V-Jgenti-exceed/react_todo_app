import React from 'react';
import axios from 'axios';

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

    addByEnter = (e) => {
        if (e.key === 'Enter') {
            if (!this.state.plan.trim()) {
                return;
            }
            const plan = this.state.plan;
            axios.post('https://georgiantodo.herokuapp.com/task/create', { plan })
                .then(response => {
                    this.props.createItem(response.data.result);
                    this.setState({ plan: '' });
                })
                .catch(error => {
                    console.log("error", error);
                })
        };
    };

    checkAllFunc = () => {
        axios.put('https://georgiantodo.herokuapp.com/task/checkall', { done: !this.state.done })
            .then(res => {
                console.log('res.data.result', res.data.result);
                this.props.checkAll(res.data.result);
                this.setState({ done: !this.state.done });
            })
            .catch(error => {
                console.log(error)
            });
    }



    render() {
        const { plan } = this.state;
        const targetValue = this.props.item > 0 ? 'more_then_one' : 'lower_then_one';
        const changeOnClick = this.props.click ? 'more_then_one' : 'clicked';
        return (
            <div className='main_input_container'>
                <button className={`${targetValue} ${changeOnClick}`} onClick={this.checkAllFunc} title='Click for check and uncheck plans'>❱</button>
                <input
                    className="main_input"
                    type="text"
                    placeholder="What needs to be done?"
                    value={plan}
                    onChange={this.onHandleChange}
                    onKeyPress={this.addByEnter}
                >
                </input>
            </div>
        )
    }
}

export { AddItem } 
