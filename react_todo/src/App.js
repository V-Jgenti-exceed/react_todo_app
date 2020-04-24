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

  render() {
    return (
      <React.Fragment>
        <AddItem createItem={this.createItem} />
        <Itemslist items={this.state.arrayItems} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
export default App;
