import React from 'react';
import { Item } from '../components/Item';

class Itemslist extends React.Component {

    render() {
        const planDraw = this.props.items.map(function (object, index) {
            return <Item key={index} plan={object.plan} />;
        })

        return (
            <React.Fragment>
                {planDraw}
            </React.Fragment>
        )
    }
}

export { Itemslist }

