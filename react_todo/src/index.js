import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import App from './App';
import { SignIn } from './RegAuth/SignIn';
import { SignUp } from './RegAuth/SignUp';
import { withToken } from './helpers/withToken';
import { withLoader } from './helpers/withLoader';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/" component={withToken(App)} />
        <Route path="/" component={withLoader(App)} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render((
  routing
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
