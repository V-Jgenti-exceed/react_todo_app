import React from 'react';

class Item extends React.Component {
    deleteFromArr = () => {
        this.props.dell(this.props.id);
    }

    render() {
        return (
            <div className='prosto'>
                <input type='checkbox' />
                <p className='txt'>{this.props.plan}</p>
                <button onClick={this.deleteFromArr}>-</button>
            </div>
        )
    }
}

export { Item }
