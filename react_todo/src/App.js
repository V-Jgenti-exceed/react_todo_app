import React from 'react';
import ReactDOM from 'react-dom';
import { Itemslist } from '../src/containers/Itemslist';
import { AddItem } from '../src/components/AddItem';

class App extends React.Component {
  state = {
    arrayItems: [],
  }

  createItem = (item) => {
    const array = [...this.state.arrayItems];
    this.setState({ arrayItems: [item, ...array] });
  }

  //delete plan
  deleteItem = (id) => {
    const stateArr = this.state.arrayItems;
    const dellArr = stateArr.filter((item) => {
      return item.id !== id;
    })
    this.setState({ arrayItems: dellArr });
  }

  //done undone
  checkPlan = (id, par) => {
    const mainArr = this.state.arrayItems;
    for (let i of mainArr) {
      if (i.id === id) {
        i.done = par;
      }
    }
    this.setState({ arrayItems: mainArr });
  }

  render() {
    return (
      <React.Fragment>
        <AddItem createItem={this.createItem} />
        <Itemslist items={this.state.arrayItems} deleteItem={this.deleteItem} checkPlan={this.checkPlan} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
