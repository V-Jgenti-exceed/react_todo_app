import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
                <button type="button" className="btn btn-outline-dark" size='sm' onClick={this.filter} value='All'>All</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.filter} value='Active'>Active</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.filter} value='Done'>Light</button>
            </div>
        )
    }
}

export { Filter }
