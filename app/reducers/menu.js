import { combineReducers } from 'redux';
import { Menu } from 'actions';

function open(state = false, action) {
  switch (action.type) {
    case Menu.TOGGLE:
      return !state;
    default:
      return state;
  }
}

const menu = combineReducers({
  open,
});

export default menu;
