import React from 'react';
import { Item } from '../components/Item';

class Itemslist extends React.Component {

    render() {
        const delItem = this.props.deleteItem;
        const planDraw = this.props.items.map((object, index) => {
            return <Item key={index} plan={object.plan} dell={delItem} id={object.id} />;
        });

        return (
            <React.Fragment>
                {planDraw}
            </React.Fragment>
        )
    }
}

export { Itemslist }
