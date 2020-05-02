import React from 'react';

class Filter extends React.Component {
    filter = (e) => {
        this.props.changefilterState(e.target.value);
    }

    filtredArr = () => {
        this.props.clearCompleted();
    }

    render() {
        return (
            <div className='bottom_menu'>
                <p>{this.props.lenghtOfArr}</p>
                <button onClick={this.filter} value='All'>All</button>
                <button onClick={this.filter} value='Active'>Active</button>
                <button onClick={this.filter} value='Done'>Done</button>
                <button onClick={this.filtredArr}>Clear completed</button>
            </div>
        )
    }
}

export { Filter }
