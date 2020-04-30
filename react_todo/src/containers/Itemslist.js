import React from 'react';
import { Item } from '../components/Item';

class Itemslist extends React.Component {

    render() {
        const delItem = this.props.deleteItem;
        const checkPlan = this.props.checkPlan;
        const changePlan = this.props.changePlan;
        const planDraw = this.props.items.map((object, index) => {
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
            </React.Fragment>
        )
    }
}

export { Itemslist }
