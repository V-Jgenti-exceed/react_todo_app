import React from 'react';

class Item extends React.Component {
    deleteFromArr = () => {
        console.log("ID",this.props.id);
        this.props.dell(this.props.id);
    }

    render() {
        console.log("@@data",this.props);
        return (
            <div className='prosto'>
                <input type='checkbox' />
                <p className='txt'>{this.props.plan}</p>
                <button onClick={this.deleteFromArr}>+</button>
            </div>
        )
    }
}

export { Item }
