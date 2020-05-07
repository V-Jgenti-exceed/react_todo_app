import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Item extends React.Component {
    state = {
        editMode: false,
        value: '',
        showDeleteButton: false,
        forText: false,
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

    someFunc = () => {
        this.setState({ showDeleteButton: !this.state.showDeleteButton });
    }

    render() {
        const doneUndone = this.props.check ? 'txt' : '';
        const hideClass = this.state.editMode ? 'folsemode' : '';
        const showHide = this.state.editMode ? 'trumode' : 'folsemode';
        const inputHide = this.state.editMode ? 'input_class' : 'change_input';
        const closeButtonHover = this.state.showDeleteButton ? 'unHideButton' : 'closeButton';


        return (
            // <div className='todo_marking' >

            <li className="list-group-item todo_marking"
                onMouseEnter={this.someFunc}
                onMouseLeave={this.someFunc}
                onBlur={this.onBlurHandler}
            >
                <div className="inline">
                    <input
                        type='checkbox'
                        checked={this.props.check}
                        onChange={this.checkedItem}
                        className={inputHide}
                    />
                    <input
                        type='text'
                        className={showHide}
                        value={this.state.value}
                        onChange={this.inputChange}
                        onKeyDown={this.saveByEnter}

                    />
                    <p
                        className={`${doneUndone} ${hideClass} ${'test'} `}
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
