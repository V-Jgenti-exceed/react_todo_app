import React from 'react';
import { Item } from '../components/Item';
import { Filter } from '../components/Filter';

class Itemslist extends React.Component {
    state = {
        filterState: 'All',
    }

    changefilterState = (button) => {
        this.setState({ filterState: button });
    }


    render() {
        let count = 0;
        const button = this.state.filterState;
        const planDraw = this.props.items.map((object, index) => {
            const item = <Item key={index}
                editMode={object.editMode}
                plan={object.plan}
                dell={this.props.deleteItem}
                id={object.id}
                check={object.done}
                updateObject={this.props.updateObject}
                controleInput={this.props.checkInput}
                filtredArr={this.props.clearArr}
            />;
            if (button === 'All') {
                count++;
                return item;
            } else if (button === 'Active' && !object.done) {
                count++;
                return item;
            } else if (button === 'Done' && object.done) {
                count++;
                return item;
            } else if (button === 'Clear' && !object.done) {
                count++;
                return item;
            }

        });

        return (

            <div className="row justify-content-center">
                <div className='bottom_menu'>
                    <ul className='list-group'>
                        {planDraw}
                    </ul>

                    <Filter
                        changefilterState={this.changefilterState}
                        count={count}
                        arrayLength={this.props.items.length}
                        clearCompleted={this.props.clearArr}
                    />
                </div>
            </div>

        )
    }
}

export { Itemslist }
