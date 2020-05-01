import React from 'react';

class Item extends React.Component {
    state = {
        editMode: false,
        value: '',
    }

    deleteFromArr = () => {
        this.props.dell(this.props.id);
    }

    checkedItem = (e) => {
        this.props.checkPlan(this.props.id, e.target.checked);
    }

    editPlan = () => {
        this.setState({ editMode: true, value: this.props.plan });
    }

    inputChange = (e) => {
        this.setState({ value: e.target.value });
    }

    onBlurHandler = () => {
        if (this.state.editMode === true) {
            this.setState({ editMode: false });
            this.props.changePlan(this.props.id, this.state.value);
        }
    }

    saveByEnter = (e) => {
        if (e.key === 'Enter') {
            this.setState({ editMode: false });
            this.props.changePlan(this.props.id, this.state.value);
        }
    }

    render() {
        let className = this.props.check ? 'txt' : '';
        let showHide = this.state.editMode ? 'trumode' : 'folsemode';
        return (
            <div className='marking' onBlur={this.onBlurHandler}>
                <input
                    type='text'
                    className={showHide}
                    value={this.state.value}
                    onChange={this.inputChange}
                    onKeyDown={this.saveByEnter}
                />
                <input
                    type='checkbox'
                    checked={this.props.check}
                    onChange={this.checkedItem}
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
