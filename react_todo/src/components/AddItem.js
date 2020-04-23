import React from 'react';

class AddItem extends React.Component {
    state = {
        plan: '',
        done: false
    }

    onHandleChange = (e) => {
        this.setState({ plan: e.target.value });
    }

    onHandleAdd = () => {
        const newItem = this.state;
        this.props.addNewItem(newItem);
    }

    render() {
        const { plan } = this.state;
        return (
            <React.Fragment>
                <button onClick={this.onHandleAdd}>Add</button>
                <input value={plan} onChange={this.onHandleChange} />
            </React.Fragment>
        )
    }
}

export { AddItem }
