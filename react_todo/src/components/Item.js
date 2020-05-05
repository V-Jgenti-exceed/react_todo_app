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
        this.props.updateObject(this.props.id, e.target.checked, 'done');
    }

    editPlan = () => {
        this.setState({ editMode: true, value: this.props.plan });
    }

    inputChange = (e) => {
        this.setState({ value: e.target.value });
    }

    changeState = (prop, value) => {
        this.setState({ editMode: false });
        this.props.updateObject(prop, value, 'plan');
    }

    onBlurHandler = () => {
        this.state.editMode && this.changeState(this.props.id, this.state.value);
    }

    saveByEnter = (e) => {
        if (e.key === 'Enter') {
            this.changeState(this.props.id, this.state.value);
        }
    }


    render() {
        let className = this.props.check ? 'txt' : '';
        let showHide = this.state.editMode ? 'trumode' : 'folsemode';
        let some = e => (e.target === 'marking') ? 'someee' : 'someeee';
        return (
            <div className='marking' onBlur={this.onBlurHandler} mouseover={some}>
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
                    onClick={this.deleteFromArr}
                    className='someeee'
                >X</button>
            </div>
        )
    }
}

export { Item }
