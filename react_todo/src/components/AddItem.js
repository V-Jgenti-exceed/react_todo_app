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
            axios.post('http://localhost:1996/task/create', { plan })
                .then(response => {
                    this.props.createItem(response.data.result);
                    this.setState({ plan: '' });
                })
                .catch(error => {
                    console.log("error", error);
                })
        };
    };

    render() {
        const { plan } = this.state;
        const targetValue = this.props.item > 0 ? 'more_then_one' : 'lower_then_one';
        const changeOnClick = this.props.click ? 'more_then_one' : 'clicked';
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <button className={`${targetValue} ${changeOnClick}`} onClick={this.props.checkAll} title='Click for check and uncheck plans'>❱</button>
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
