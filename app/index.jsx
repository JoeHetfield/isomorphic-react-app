import React from 'react';
import PropTypes from 'prop-types';
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
import { addLocaleData, IntlProvider } from 'react-intl';
import { network } from 'utils';

// import SignIn from 'pages/signin/index';
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

const App = ({ messages }) =>
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <IntlProvider locale={'zh'} messages={messages}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            {/* <Route path='/signin' component={SignIn} /> */}
            <Route path='/' component={Main} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </IntlProvider>
  </MuiThemeProvider>;

App.propTypes = {
  messages: PropTypes.object.isRequired,
};

network.get('http://localhost:3000/zh.json')
  .then((messages) => {
    addLocaleData(window.ReactIntlLocaleData['zh']);
    hydrate(<App messages={messages} />, document.getElementById('app'));
  });
