import React from 'react';

class Item extends React.Component {
    state = {
        value: '',
        showDeleteButton: false,
        editMode: false,
        plan: this.props.plan,
    };

    deleteFromArr = () => {
        this.props.dell(this.props.id);
    };

    checkedItem = (e) => {
        this.props.updateObject(this.props.id, e.target.checked, 'done');
    };

    editPlan = () => {
        this.setState({ editMode: true, value: this.props.plan });
    };

    inputChange = (e) => {
        this.setState({ value: e.target.value });
    };

    changeState = (prop, value) => {
        this.props.updateObject(prop, value, 'plan');
    };

    saveByEnter = async (e) => {
        if (e.key === 'Enter') {
            this.props.controleInput(this.props.id, e.target.value);
            this.setState({ editMode: false });
        }
    };

    closeButtons = () => {
        this.setState({ showDeleteButton: !this.state.showDeleteButton });
    };

    render() {
        const doneUndone = this.props.check ? 'txt' : '';
        const hideClass = this.state.editMode ? 'folsemode' : '';
        const showHide = this.state.editMode ? 'trumode' : 'folsemode';
        const inputHide = this.props.check ? 'round_input_checked_label' : '';
        const closeButtonHover = this.state.showDeleteButton ? 'unHideButton' : 'closeButton';
        const round_label = this.props.check ? 'round_label_after' : 'closeButton';

        return (
            <li className="list-group-item todo_marking"
                onMouseEnter={this.closeButtons}
                onMouseLeave={this.closeButtons}
            >
                <div className="inline">
                    <div className="round">
                        <input type="checkbox" id={`${this.props.id}`}
                            onChange={this.checkedItem}
                            className={`round_input ${inputHide}`} />
                        <label className='round_label' htmlFor={`${this.props.id}`}></label>
                        <label className={round_label} htmlFor={`${this.props.id}`}></label>
                    </div>
                    <input
                        type='text'
                        className={showHide}
                        value={this.state.value}
                        onChange={this.inputChange}
                        onKeyDown={this.saveByEnter}
                    />
                    <p
                        className={`${doneUndone} ${hideClass}`}
                        onDoubleClick={this.editPlan}
                    >
                        {this.props.plan}
                    </p>
                    <button
                        onClick={this.deleteFromArr}
                        className={`${closeButtonHover} inlineButton`}
                    >X</button>
                </div>
            </li >
        )
    }
}

export { Item }
