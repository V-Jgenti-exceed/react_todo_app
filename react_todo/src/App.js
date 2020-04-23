import React from 'react';
import ReactDOM from 'react-dom';
import { ItemsList } from '../src/containers/ItemsList';
import { AddItem } from '../src/components/AddItem';

class App extends React.Component {
  state = {
    arrayItems: []
  }

  createItem = (item) => {
    const array = [...this.state.arrayItems];
    this.setState({ arrayItems: [item, ...array] });
  }
  
  render() {
    return (
      <React.Fragment>
        <AddItem addNewItem={this.createItem} />
        <ItemsList />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
export default App;
