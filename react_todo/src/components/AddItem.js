import React from 'react'

class AddPlan extends React.Component {
    state = {
        plan: ''
    }
    onHandleChange = (e) => {
        this.setState({ plan: e.target.value })
    }
    render() {
        const { plan } = this.state;
        return (
            <input value={plan} onChange={this.onHandleChange} />
        )
    }
}

export { AddItem }