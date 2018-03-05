import { network, locale } from 'utils';
import config from 'config';
import { Locale } from 'actions';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import ja from 'react-intl/locale-data/ja';
import ko from 'react-intl/locale-data/ko';

const prefix = 'BOOTSTRAP';
const REQUEST = `${prefix}.REQUEST`;
const SUCCESS = `${prefix}.SUCCESS`;
const FAILURE = `${prefix}.FAILURE`;

const request = () => ({
  type: REQUEST,
});

const success = () => ({
  type: SUCCESS,
});

const failure = error => ({
  type: FAILURE,
  payload: error,
});

const start = () => (dispatch) => {
  dispatch(request());

  addLocaleData([...en, ...zh, ...ja, ...ko]);

  const userLocale = locale.getPreference();

  if (userLocale === 'en') {
    dispatch(Locale.changeLocale(userLocale));
    dispatch(success());
    return;
  }

  network.get(`${config.api}/${userLocale}.json`)
    .then((result) => {
      dispatch(Locale.loadMessageSuccess(userLocale, result));
      dispatch(Locale.changeLocale(userLocale));
      dispatch(success());
    })
    .catch((error) => {
      dispatch(Locale.loadMessageFailure(error));
      dispatch(failure(error));
    });
};

export default {
  REQUEST,
  SUCCESS,
  FAILURE,
  start,
};
