import { Locale } from 'actions';

const locale = (state = 'en', { type, payload }) => {
  switch (type) {
    case Locale.CHANGE:
      return payload;
    default:
      return state;
  }
};

export default locale;
