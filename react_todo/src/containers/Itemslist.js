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
        let someArr = [];

        if (this.state.filterState === 'All') {
            someArr = this.props.items;
        } else if (this.state.filterState === 'Active') {
            someArr = this.props.items.filter(item => item.done === false)
        } else if (this.state.filterState === 'Done') {
            someArr = this.props.items.filter(item => item.done === true);
        }

        const delItem = this.props.deleteItem;
        const checkPlan = this.props.checkPlan;
        const changePlan = this.props.changePlan;
        const planDraw = someArr.map((object, index) => {
            return <Item key={index}
                plan={object.plan}
                dell={delItem}
                id={object.id}
                check={object.done}
                checkPlan={checkPlan}
                changePlan={changePlan}

            />;
        });
        return (
            <React.Fragment>
                {planDraw}
                <Filter changefilterState={this.changefilterState} />
            </React.Fragment>
        )
    }
}

export { Itemslist }
