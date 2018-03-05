import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import booting from './bootstrap';
import locale from './locale';
import messages from './messages';

const rootReducer = combineReducers({
  router: routerReducer,
  booting,
  locale,
  messages,
});

export default rootReducer;
