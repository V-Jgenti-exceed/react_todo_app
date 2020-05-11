import React from 'react';
import ReactDOM from 'react-dom';
import { Itemslist } from '../src/containers/Itemslist';
import { AddItem } from '../src/components/AddItem';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    arrayItems: [],
    filterState: '',
  }

  //add plan
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
  updateObject = (id, val, par) => {
    const mainArr = this.state.arrayItems;
    for (let i of mainArr) {
      if (i.id === id) {
        i[par] = val;
        i.editMode = false;
      }
    }
    this.setState({ arrayItems: mainArr });
  }

  clearCompleted = () => {
    const mainArr = this.state.arrayItems;
    const filtredArr = mainArr.filter(item => !item.done);
    this.setState({ arrayItems: filtredArr });
  }

  controlInput = (id) => {
    const newArr = this.state.arrayItems.map(i => {
      if (i.id === id) {
        i.editMode = true;
      } else {
        i.editMode = false;
      }
      return i;
    })
    this.setState({arrayItems:[...newArr]})
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <h1 className='header_h1'>todos</h1>
            <AddItem
              createItem={this.createItem}
            />
            <Itemslist

              checkInput={this.controlInput}
              items={this.state.arrayItems}
              deleteItem={this.deleteItem}
              updateObject={this.updateObject}
              filterArray={this.filterArray}
              clearCompleted={this.clearCompleted}
            />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
