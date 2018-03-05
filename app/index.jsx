import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import Main from 'pages';
import theme from './theme';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    routeMiddleware,
    thunkMiddleware,
    loggerMiddleware,
  ),
);

const App = () =>
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>;

hydrate(<App />, document.getElementById('app'));
