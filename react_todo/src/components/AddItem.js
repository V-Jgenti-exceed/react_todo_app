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
        const targetValue = this.props.item > 0 ? 'more_then_one' : 'lower_then_one'
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <button className={targetValue} onClick={this.props.checkAll}>&#11015;</button>
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
