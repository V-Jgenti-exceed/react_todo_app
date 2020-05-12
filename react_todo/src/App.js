import React from 'react';
import ReactDOM from 'react-dom';
import { Itemslist } from '../src/containers/Itemslist';
import { AddItem } from '../src/components/AddItem';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    arrayItems: [],
    someClick: true,
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

  controlInput = (id) => {
    const newArr = this.state.arrayItems.map(i => {
      if (i.id === id) {
        i.editMode = true;
      } else {
        i.editMode = false;
      }
      return i;
    })
    this.setState({ arrayItems: [...newArr] })
  }

  ifLength = () => {
    const mainArr = this.state.arrayItems;
    if (mainArr.length > 0) {
      this.setState({})
    }
  }

  clearCompleted = () => {
    const mainArr = [...this.state.arrayItems];
    const filtredArr = mainArr.filter(item => !item.done);
    this.setState({ arrayItems: filtredArr })
  }

  checkAll = () => {
    const someClick = this.state.someClick;
    const mainArr = this.state.arrayItems;
    const newArr = mainArr.map(item => {
      item.done = someClick;
      return item;
    })
    this.setState({ arrayItems: newArr, someClick: !someClick })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <h1 className='header_h1'>todos</h1>
            <AddItem
              createItem={this.createItem}
              checkAll={this.checkAll}
              item={this.state.arrayItems.length}
            />
            <Itemslist
              checkInput={this.controlInput}
              items={this.state.arrayItems}
              deleteItem={this.deleteItem}
              updateObject={this.updateObject}
              filterArray={this.filterArray}
              clearArr={this.clearCompleted}
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
