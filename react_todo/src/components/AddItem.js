import React from 'react';

class AddItem extends React.Component {
    state = {
        plan: '',
        done: false,
        id: '',
        editMode: false,
    }

    onHandleChange = (e) => {
        this.setState({ plan: e.target.value });
    }

    addByEnter = (e) => {
        if (e.key === 'Enter') {
            if (!this.state.plan.trim()) {
                return
            }
            const newItem = this.state;
            newItem.id = +new Date();
            this.props.createItem(newItem);
            this.setState({ plan: '', done: false, id: '' });
        }
    }

    render() {
        const { plan } = this.state;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <button onClick={this.props.checkAll}>&#11015;</button>
                    <input
                        value={plan}
                        onChange={this.onHandleChange}
                        onKeyPress={this.addByEnter}
                        placeholder='What needs to be done?'
                        className='Maininput'
                    />
                </div>
            </div>
        )
    }
}

export { AddItem }
