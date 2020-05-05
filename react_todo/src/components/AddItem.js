import React from 'react';

class AddItem extends React.Component {
    state = {
        plan: '',
        done: false,
        id: '',
    }

    onHandleChange = (e) => {
        this.setState({ plan: e.target.value });
    }

    addByEnter = (e) => {
        if (e.key === 'Enter') {
            const newItem = this.state;
            newItem.id = +new Date();
            this.props.createItem(newItem);
            this.setState({ plan: '', done: false, id: '' });
        } 
    }

    render() {
        const { plan } = this.state;
        return (
            <React.Fragment>
                <input
                    value={plan}
                    onChange={this.onHandleChange}
                    onKeyPress={this.addByEnter}
                    placeholder='What needs to be done?'
                    className='Maininput'
                />
            </React.Fragment>
        )
    }
}

export { AddItem }
