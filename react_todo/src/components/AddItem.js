import React from 'react';

class AddItem extends React.Component {
    state = {
        plan: '',
        done: false,
        id: ''
    }

    onHandleChange = (e) => {
        this.setState({ plan: e.target.value });
    }

    onHandleAdd = () => {
        const newItem = this.state;
        newItem.id = +new Date();
        console.log("@@@NewitemId",newItem);
        this.props.createItem(newItem);
        this.setState({ plan:'',done:false,id:''});
    }

    render() {
        console.log("@@Rednder");
        const { plan } = this.state;
        return (
            <React.Fragment>
                <button onClick={this.onHandleAdd}>Add</button>
                <input value={plan} onChange={this.onHandleChange} />
            </React.Fragment>
        )
    }
}

export { AddItem }
