import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Itemslist } from '../src/containers/Itemslist';
import { AddItem } from '../src/components/AddItem';
import * as Helper from './helpers';
import { conf } from './config/index';

class App extends React.Component {
  state = {
    arrayItems: [],
    someClick: true,
    authorization: null,
    logOut: false,
  }

  componentDidMount() {
    const token = Helper.getTokenFromLS();
    if (token) {
      axios.get(`${conf.heroUrl}task/get`, { headers: { authorization: token } })
        .then(res => {
          this.setState({ arrayItems: res.data.result, authorization: token, logOut: false })
        })
        .catch(error => {
          console.log(error);
        })
    }
  };

  // add plan
  createItem = (item) => {
    const array = [...this.state.arrayItems];
    this.setState({ arrayItems: [...array, item] });
  };

  //delete plan
  deleteItem = (id) => {
    axios.delete(`${conf.heroUrl}task/delete/${id}`, { headers: { authorization: this.state.authorization } })
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
    axios.put(`${conf.heroUrl}task/${id}/update`, { [par]: val }, { authorization: this.state.authorization })
      .then(res => {
        this.setState({ arrayItems: res.data.result });
      })
      .catch(error => {
        alert(error);
      })
  };

  controlInput = (id, updateTitle) => {
    axios.put(`${conf.heroUrl}task/${id}/changeplan`, { plan: updateTitle }, { authorization: this.state.authorization })
      .then(res => {
        this.setState({ arrayItems: res.data.result });
      }).catch(error => {
        alert(error);
      });
  };

  //delete all checked tasks
  clearCompleted = (res) => {
    this.setState({ arrayItems: [...res] });
  };

  //checkAllTask
  checkAll = (res) => {
    this.setState({ arrayItems: [...res] });
  };

  auth = (token) => {
    this.setState({ authorization: token });
  }

  logOut = () => {
    localStorage.clear();
    this.setState({ logOut: true });
  };

  // RENDER
  render() {
    if (this.state.logOut) {
      window.location = 'https://mytodo1996.herokuapp.com/';
    };
    return (
      <div className="container">
        <div className='logout_butotn'>
          <Button
            onClick={this.logOut}
          >
            Log out :(
            </Button>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <h1 className='header_h1'>todos</h1>
            <AddItem
              createItem={this.createItem}
              checkAll={this.checkAll}
              item={this.state.arrayItems.length}
              click={this.state.someClick}
              mainArr={this.state.arrayItems}
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
