import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import App from './App';
import { SignIn } from './RegAuth/SignIn';
import { SignUp } from './RegAuth/SignUp';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'


const routing = (
  <Router>
    <div>
      <Switch>
        <Route path="/main" component={App} />
        <Route path="/Login" component={SignIn} />
        <Route path="/Reg" component={SignUp} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render((
  routing
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
