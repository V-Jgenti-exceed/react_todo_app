import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Itemslist } from '../src/containers/Itemslist';
import { AddItem } from '../src/components/AddItem';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    arrayItems: [],
    someClick: true,
  }

  // add plan
  createItem = (item) => {
    const array = [...this.state.arrayItems];
    this.setState({ arrayItems: [...array, item] });
  };

  //delete plan
  deleteItem = (id) => {
    axios.delete(`http://localhost:1996/task/${id}/delete`)
      .then(res => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          this.setState({ arrayItems: res.data.result });
        }
      })
      .catch(error => {
        console.log(error);
      })
  };

  //done undone
  updateObject = (id, val, par) => {
    console.log('par', id,val,par);
    axios.put(`http://localhost:1996/task/${id}/update`, { [par]: val })
      .then(res => {
        this.setState({ arrayItems: res.data.result });
      })
      .catch(error => {
        alert(error);
      })
  };

  controlInput = (id) => {
    const newArr = this.state.arrayItems.map(i => {
      if (i.id === id) {
        i.editMode = true;
      } else {
        i.editMode = false;
      }
      return i;
    })
    this.setState({ arrayItems: [...newArr] });
  };

  clearCompleted = () => {
    const mainArr = [...this.state.arrayItems];
    const filtredArr = mainArr.filter(item => !item.done);
    this.setState({ arrayItems: filtredArr });
  };

  checkAll = () => {
    const someClick = this.state.someClick;
    const mainArr = this.state.arrayItems;
    const newArr = mainArr.map(item => {
      item.done = someClick;
      return item;
    })
    this.setState({ arrayItems: newArr, someClick: !someClick });
  };

  componentDidMount() {
    axios.get('http://localhost:1996/task/get')
      .then(res => {
        this.setState({ arrayItems: res.data.result })
      })
      .catch(error => {
        console.log(error);
      })
  };

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
              click={this.state.someClick}
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
