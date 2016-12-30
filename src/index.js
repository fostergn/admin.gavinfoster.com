import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import firebase from './firebaseDB';
import { requireAuth, isLoggedIn } from './firebaseAuth';
import App from './components/App/App';
import ConversationList from './components/Conversation/ConversationContainer';
import ConversationSingle from './components/Conversation/ConversationSingle';
import Login from './components/Login/Login';
import Admin from './components/Admin/AdminContainer';
import NotFound from './components/NotFound/NotFound';
import { configureStore } from './store';

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} onEnter={isLoggedIn} />
        <Route path="admin" component={Admin} onEnter={requireAuth} >
          <IndexRedirect to="conversations" />
          <Route path="conversations" component={ConversationList} onEnter={requireAuth} />
          <Route path="conversations/:id" component={ConversationSingle} onEnter={requireAuth} />
        </Route>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  mountApp
);

export default store;
