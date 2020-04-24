import React from 'react';

class Item extends React.Component {
    
    render() {
        return (
            <div className='prosto'>
                <input type='checkbox' />
                <p className='txt'>{this.props.plan}</p>
                <button onClick={this.TestButton}>+</button>
            </div>
        )
    }
}

export { Item }
