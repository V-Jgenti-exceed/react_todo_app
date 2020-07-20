import React from 'react';
import axios from 'axios';
import { Itemslist } from '../src/containers/Itemslist';
import { AddItem } from '../src/components/AddItem';
import * as Helper from './helpers';
import { conf } from './config/index';
import UserProfile from './components/UserProfile';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    arrayItems: [],
    someClick: true,
    authorization: null,
    profileState: false,
    logOut: false,
    downloadContent: {},
  }

  componentDidMount() {
    const token = Helper.getTokenFromLS();
    if (token) {
      axios.get(`${conf.heroUrl}task/get`, { headers: { authorization: token } })
        .then(res => {
          this.setState({ arrayItems: res.data.result, authorization: token, logOut: false })
        })
        .catch(error => {
          console.log('error', error);
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
    const token = Helper.getTokenFromLS();
    axios.delete(`${conf.heroUrl}task/delete/${id}`, { headers: { authorization: token } })
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
    axios.put(`${conf.heroUrl}task/${id}/update`, { [par]: val }, { headers: { authorization: token } })
      .then(res => {
        this.setState({ arrayItems: res.data.result });
      })
      .catch(error => {
        console.log(error);
      })
  };

  controlInput = (id, updateTitle) => {
    const token = Helper.getTokenFromLS();
    axios.put(`${conf.heroUrl}task/${id}/changeplan`, { plan: updateTitle }, { headers: { authorization: token } })
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
    this.props.history.push('/login')
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
          <label>
            <span role='img' aria-label='user' className="show-button" onClick={this.userProfileFunction}>&#128101;</span>
          </label>
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

const mapStateToProps = store => {
  return {
    profileState: store.propFileState
  }
}

export default connect(mapStateToProps)(withRouter(App));
