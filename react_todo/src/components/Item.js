import React from 'react';

class Item extends React.Component {
    state = {
        checkStatus: this.props.check,
        editMode: false,
    }

    deleteFromArr = () => {
        this.props.dell(this.props.id);
    }

    checkedItem = (e) => {
        this.setState({ checkStatus: e.target.checked });
        this.props.checkPlan(this.props.id, e.target.checked);
    }

    editPlan = (e) => {
        this.setState({ editMode: true })
    }
    dwadawd = () => {
        console.log('2222');
    }
    render() {
        let className = this.state.checkStatus ? 'txt' : '';
        let someStyle = this.state.editMode ? 'trumode' : 'folsemode';
        return (
            <div className='marking' onBlur={this.dwadawd}>
                <input
                    type='text'
                    className={someStyle}
                />
                <input
                    type='checkbox'
                    value={this.props.check}
                    onChange={e => this.checkedItem(e)}
                />
                <p
                    className={className}
                    onDoubleClick={this.editPlan}
                >
                    {this.props.plan}
                </p>
                <button
                    onClick={this.deleteFromArr}>-</button>
            </div>
        )
    }
}

export { Item }
