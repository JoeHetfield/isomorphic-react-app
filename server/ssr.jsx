import React from 'react';
import accepts from 'accepts';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import { StaticRouter, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Main from 'pages';
import theme from 'theme';
import config from './config';
import { localeData, messages } from './i18n';

export default (req, res) => {
  // const history = createHistory();
  // const routeMiddleware = routerMiddleware(history);
  const loggerMiddleware = createLogger();

  const store = createStore(
    rootReducer,
    applyMiddleware(
      // routeMiddleware,
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Create a theme instance.
  const customTheme = createMuiTheme(theme);

  const generateClassName = createGenerateClassName();

  const locale = req.cookies.locale || accepts(req).language(config.supportedLanguages) || 'zh';

  // Render the component to a string.
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={customTheme} sheetsManager={new Map()}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Provider store={store}>
            <StaticRouter location={req.url}>
              <Switch>
                {/* <Route path='/signin' component={SignIn} /> */}
                <Route path='/' component={Main} />
              </Switch>
            </StaticRouter>
          </Provider>
        </IntlProvider>
      </MuiThemeProvider>
    </JssProvider>);

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString();

  res.render('index', {
    html,
    css,
    localeData: localeData[locale],
  });
};
