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

  deleteItem = (id) => {
    console.log("@@ID",id);
    const forDelete = this.state.arrayItems;
    const ok = forDelete.filter((chtota) => {
      return chtota.id !== id;
    })
console.log("@@@Ok",ok)
    this.setState({ arrayItems: ok });
  }

  render() {
    return (
      <React.Fragment>
        <AddItem createItem={this.createItem} />
        <Itemslist items={this.state.arrayItems} deleteItem={this.deleteItem} />

      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
export default App;
