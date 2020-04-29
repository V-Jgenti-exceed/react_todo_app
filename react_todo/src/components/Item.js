import React from 'react';

class Item extends React.Component {
    state = {
        checkStatus: this.props.check,
    }

    deleteFromArr = () => {
        this.props.dell(this.props.id);
    }

    checkedItem = (e) => {
        this.setState({ checkStatus: e.target.checked });
        this.props.checkPlan(this.props.id, e.target.checked);
    }

    render() {
        let className = this.state.checkStatus ? 'txt' : '';
        return (
            <div className='marking'>
                <input type='checkbox' value={this.props.check} onChange={e => this.checkedItem(e)} />
                <p className={className}>{this.props.plan}</p>
                <button onClick={this.deleteFromArr}>-</button>
            </div>
        )
    }
}

export { Item }
