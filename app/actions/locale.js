import { network } from 'utils';
import config from 'config';

const prefix = 'LOCALE';
const CHANGE = `${prefix}.CHANGE`;
const LOAD_MESSAGES_REQUEST = `${prefix}.LOAD_MESSAGES_REQUEST`;
const LOAD_MESSAGES_SUCCESS = `${prefix}.LOAD_MESSAGES_SUCCESS`;
const LOAD_MESSAGES_FAILURE = `${prefix}.LOAD_MESSAGES_FAILURE`;

const changeLocale = locale => ({
  type: CHANGE,
  payload: locale,
});

const loadMessageRequest = () => ({
  type: LOAD_MESSAGES_REQUEST,
});

const loadMessageSuccess = (locale, messages) => ({
  type: LOAD_MESSAGES_SUCCESS,
  payload: {
    locale,
    messages,
  },
});

const loadMessageFailure = error => ({
  type: LOAD_MESSAGES_FAILURE,
  payload: error,
});

const change = locale => (dispatch, getState) => {
  const { messages } = getState();

  if (locale === 'en' || messages[locale]) {
    return dispatch(changeLocale(locale));
  }

  dispatch(loadMessageRequest());

  return network.get(`${config.api}/${locale}.json`)
    .then((result) => {
      dispatch(loadMessageSuccess(locale, result));
      dispatch(changeLocale(locale));
    })
    .catch(error => dispatch(loadMessageFailure(error)));
};

export default {
  CHANGE,
  LOAD_MESSAGES_REQUEST,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  loadMessageSuccess,
  loadMessageFailure,
  changeLocale,
  change,
};
