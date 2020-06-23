import React from 'react';
import axios from 'axios';
import { Itemslist } from '../src/containers/Itemslist';
import { AddItem } from '../src/components/AddItem';
import * as Helper from './helpers';
import { conf } from './config/index';
import { withRouter } from 'react-router';
import { UserProfile } from './components/UserProfile';

class App extends React.Component {
  state = {
    arrayItems: [],
    someClick: true,
    authorization: null,
    profileState: false,
    logOut: false,
  }

  componentDidMount() {
    const token = Helper.getTokenFromLS();
    if (token) {
      axios.get(`${conf.localHost}task/get`, { headers: { authorization: token } })
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
    axios.delete(`${conf.localHost}task/delete/${id}`, { headers: { authorization: this.state.authorization } })
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
    const token = Helper.getTokenFromLS();
    axios.put(`${conf.localHost}task/${id}/update`, { [par]: val }, { authorization: token })
      .then(res => {
        this.setState({ arrayItems: res.data.result });
      })
      .catch(error => {
        console.log(error);
      })
  };

  controlInput = (id, updateTitle) => {
    axios.put(`${conf.localHost}task/${id}/changeplan`, { plan: updateTitle }, { authorization: this.state.authorization })
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

  userProfileFunction = () => {
    const profile = this.state.profileState;
    if (profile === false) {
      this.setState({ profileState: true });
    } else {
      this.setState({ profileState: false });
    };
  }

  // RENDER
  render() {
    if (this.state.logOut) {
      window.location.reload()
    };
    const userProfile = this.state.profileState ? 'profile_main show' : 'profile_main';
    return (
      <>
        <div className='user_profile'>
          <button className="show-button" onClick={this.userProfileFunction}>&#128101;</button>
          <UserProfile
            showHide={userProfile}
            logout={this.logOut}
          />
        </div>
        <div className="container">

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
      </>

    )
  }
}

export default withRouter(App);
