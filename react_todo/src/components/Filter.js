import React from 'react';

class Filter extends React.Component {
    filter = (e) => {
        this.props.changefilterState(e.target.value);
    }
    render() {
        let lengthOfArr = this.props.lengthOfArr;
        return (
            <div className='bottom_menu'>
                <p>{lengthOfArr}</p>
                <button onClick={this.filter} value='All'>All</button>
                <button onClick={this.filter} value='Active'>Active</button>
                <button onClick={this.filter} value='Done'>Done</button>
            </div>
        )
    }
}

export { Filter }
