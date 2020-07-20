import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import App from './App';
import { SignIn } from './RegAuth/SignIn';
import { SignUp } from './RegAuth/SignUp';
import { withToken } from './helpers/withToken';
import { withLoader } from './helpers/withLoader';
import UserProfile from './components/UserProfile';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/register" component={SignUp} />
          <Route path="/" component={withToken(withLoader(App))} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
