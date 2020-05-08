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
            // <div className="d-flex justify-content-center">
                <div className='bottom_container'>
                    <p>count:{this.props.lenghtOfArr}</p>
                    <div className='buttons_container'>
                        <button type="button" className='All' onClick={this.filter} value='All'>All</button>
                        <button type="button" className='Active' onClick={this.filter} value='Active'>Active</button>
                        <button type="button" className='Done' onClick={this.filter} value='Done'>Done</button>
                    </div>
                    <button type='button' className='clear_completed' value='Clear_Comp'>Clear completed</button>
                </div>
            // </div >
        )
    }
}

export { Filter }
